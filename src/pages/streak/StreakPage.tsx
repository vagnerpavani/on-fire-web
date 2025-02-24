import { useSearchParams } from "react-router";
import PageWrapper from "../../components/base/PageWrapper";
import HistorySection from "./components/section/HistorySection";
import StreakSection from "./components/section/StreakSection";
import { useEffect, useState } from "react";
import {
  makeBeehivApiHttpClient,
  makeMainApiHttpClient,
} from "../../services/http-client";
import { User, UserContext } from "../../context/UserContext";

type BeehivGetPostResponse = {
  title: string;
  publish_date: string;
};

type AddDailyReadBody = {
  email: string;
  postId: string;
  title: string;
  publishedAt: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmChannel?: string;
};

function StreakPage() {
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState<User>({ email: "" });
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const searchParamsObj = Object.fromEntries(searchParams);
    console.log(searchParamsObj);
    const incomingWebhook = {
      postId: searchParamsObj.id || "",
      email: searchParamsObj.email || "",
      utmSource: searchParamsObj.utm_source || undefined,
      utmMedium: searchParamsObj.utm_medium || undefined,
      utmCampaign: searchParamsObj.utm_campaign || undefined,
      utmChannel: searchParamsObj.utm_channel || undefined,
    };
    setUser({ email: incomingWebhook.email });

    const beehivClient = makeBeehivApiHttpClient();

    beehivClient
      .get(
        "/webhooks/case/publication/teste/post/post_00000000-0000-0000-0000-000000000000"
      )
      .then((res) => {
        const postInfo: BeehivGetPostResponse = res.data.data;
        const apiClient = makeMainApiHttpClient();

        const body: AddDailyReadBody = {
          email: incomingWebhook.email,
          postId: incomingWebhook.postId,
          title: postInfo.title,
          publishedAt: postInfo.publish_date,
          utmCampaign: incomingWebhook.utmCampaign,
          utmChannel: incomingWebhook.utmChannel,
          utmMedium: incomingWebhook.utmMedium,
          utmSource: incomingWebhook.utmSource,
        };

        apiClient
          .post("/streak", body)
          .then(() => {
            apiClient
              .get(`/user?email=${incomingWebhook.email}`)
              .then((res) => {
                const user = res.data;
                setUser({
                  email: user.email,
                  id: user.id,
                  recordStreak: user.recordStreak,
                });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PageWrapper>
      <UserContext.Provider value={[user, setUser]}>
        <div className="flex flex-col md:flex-row justify-around box-border pt-8">
          <StreakSection posts={posts} />
          <HistorySection posts={posts} setPost={setPosts} />
        </div>
      </UserContext.Provider>
    </PageWrapper>
  );
}

export default StreakPage;

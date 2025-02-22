import { useContext, useEffect } from "react";
import NewslettersDisplay from "../structure/NewslettersDisplay";
import { UserContext } from "../../../../context/UserContext";
import { makeMainApiHttpClient } from "../../../../services/http-client";

type Props = {
  setPost: React.Dispatch<React.SetStateAction<Post[]>>;
  posts: Post[];
};

function HistorySection({ posts, setPost }: Props) {
  const [user] = useContext(UserContext);
  useEffect(() => {
    if (!user || !user.id) return;

    const apiClient = makeMainApiHttpClient();

    apiClient.get(`/user/${user.id}/posts`).then((res) => {
      setPost(res.data);
    });
  }, [user]);
  return (
    <div className="flex flex-col items-center h-fit bg-brand-white">
      <div className="w-96">
        <h1 className="font-bold text-brand-yellow text-2xl">Seu histórico</h1>
      </div>

      <NewslettersDisplay posts={posts} />
    </div>
  );
}

export default HistorySection;

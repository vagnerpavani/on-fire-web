import { useContext, useEffect } from "react";
import DailyStreakDisplay from "../structure/DailyStreakDisplay";
import { UserContext } from "../../../../context/UserContext";
import { makeMainApiHttpClient } from "../../../../services/http-client";

type Props = {
  posts: Post[];
};

function StreakSection({ posts }: Props) {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    if (!user || !user.id || user.currentStreak || !setUser) return;

    const apiClient = makeMainApiHttpClient();
    apiClient.get(`/streak/${user.id}`).then((res) => {
      if (!res.data.currentStreak) return;
      setUser({
        email: user.email,
        id: user.id,
        currentStreak: res.data.currentStreak,
        recordStreak: user.recordStreak,
      });
    });
  }, [user]);

  return (
    <div className="min-h-144 flex flex-col justify-around items-center">
      <img className="w-48" alt="Logo da página." src="src/assets/logo.jpg" />

      <DailyStreakDisplay posts={posts} />

      <div className="flex flex-col items-center w-96 text-center">
        <p className="font-medium text-4xl text-brand-yellow mb-2">
          <span className="font-bold">{user?.currentStreak}</span> dias
          seguidos!
        </p>
        <p className="font-medium text-2xl">
          Bom streak! Continue assim para liberar novas conquistas
        </p>
      </div>
    </div>
  );
}

export default StreakSection;

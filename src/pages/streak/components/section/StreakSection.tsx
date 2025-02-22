import { useContext, useEffect } from "react";
import DailyStreakDisplay from "../structure/DailyStreakDisplay";
import { UserContext } from "../../../../context/UserContext";
import { makeMainApiHttpClient } from "../../../../services/http-client";

type Props = {
  posts: Post[];
};

function StreakSection({ posts }: Props) {
  const [user, setUser] = useContext(UserContext);

  const motivationalPhrases = [
    "Está começando! Continue assim para subir de nível!",
    "Bom streak! Continue assim para liberar novas conquistas",
    "Que orgulho, esse streak já pode se exibir para os amigos!",
    "Uau, que streak! Arrasou! Continue assim para continuar ON FIRE!",
  ];

  const getMotivationalPhrase = () => {
    if (!user || !user.currentStreak) return 0;
    if (user.currentStreak > 30) return 3;
    if (user.currentStreak > 14) return 2;
    if (user?.currentStreak > 3) return 1;
    return 0;
  };

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
          {motivationalPhrases[getMotivationalPhrase()]}
        </p>
      </div>
    </div>
  );
}

export default StreakSection;

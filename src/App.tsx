import ProfileSection from "./components/ProfileSection";
import pp from './assets/pp.png'
import HallOfFame from "./components/HallOfFame";


const winners = [
  { 'date': '2020-08-17', 'winner': 'Stephane_bouzaid', 'link': 'https://www.instagram.com/stephane_bouzaid/', 'goal': 100, 'prize': '100€', 'followerNumber': 88, 'followingSince': 1566834551 },
]
function App() {
  return (
    <main className="flex flex-col w-screen h-screen justify-center items-center bg-red-100">
      <ProfileSection
        profilePicUrl={pp}
        currentFollowers={146}
        goalFollowers={200}
        previousGoal={100}
      />
      <HallOfFame winners={winners} />
      <div className="mt-8 text-center">
        <a
          href="https://instagram.com/louis.not"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold text-amber-600 animate-bounce block mt-8 text-center"
        >
          🎁 Follow me to be part of the next giveaway! 🎉
        </a>
      </div>
    </main>
  );
}

export default App;

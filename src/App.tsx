import React from "react";
import ProfileSection from "./components/ProfileSection";
import pp from './assets/pp.png'

function App() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <ProfileSection
        profilePicUrl={pp}
        currentFollowers={137}
        goalFollowers={200}
      />
    </main>
  );
}

export default App;

import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";


function App() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setTimeout(() => {
      setIsClicked(prev => !prev);
    }, 1000);
    <p>Loading...</p>
  }
  return (
    <main className="h-screen flex my-8 gap-8">
      <Sidebar onClick={handleClick} />
      {/* <NewProject /> */}
      {isClicked ? <NewProject /> : <NoProjectSelected />}
    </main>
  );
}

export default App;

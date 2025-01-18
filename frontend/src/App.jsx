import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar";
import { UpdateFollower } from "react-mouse-follower";
import Service from "./Components/Service";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "white",
            zIndex: 2,
            followSpeed: 1.5,
          }}
        >
          <Navbar />
          <Hero />
        </UpdateFollower>
        <Service />
      </main>
    </>
  );
}

export default App;

import Background from "./assets/background/background";
import HomePage from "./pages/home/home.tsx";

function App() {

  console.log("Server is running");

  return(
    <>
      <Background />
      <HomePage />
    </>
  );
}

export default App;

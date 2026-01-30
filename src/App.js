import Background from "./assets/background/background";
import HomePage from "./pages/home/home.tsx";
import AuthPage from "./pages/auth/auth.tsx";

function App() {

  console.log("Server is running!");

  return(
    <>
      <Background />
      <AuthPage />
    </>
  );
}

export default App;

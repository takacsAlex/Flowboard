import Background from "./assets/background/background";
import Router from "./pages/router.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {

  console.log("Server is running!");

  return(
    <>
      <Background />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;

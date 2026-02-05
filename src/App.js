import Background from "./assets/background/background";
import Router from "./pages/router.jsx";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

function App() {

  console.log("Server is running!");
  console.log(process.env.COOKIES_EXPERATION_TIME)

  return(
    <>
      <Background />
      <CookiesProvider>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
      </CookiesProvider>
    </>
  );
}

export default App;

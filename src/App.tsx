import { CardContextProvider } from "./data/contexts/CardContext";
import Router from "./router";
import GlobalStyle from "./ui/styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <CardContextProvider>
        <Router />
      </CardContextProvider>
    </>
  );
}

export default App;

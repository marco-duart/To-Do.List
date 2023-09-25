import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import New from "./pages/new";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<New />} path="/new" />
    </Routes>
  </BrowserRouter>
);

export default Router;

import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "../SharedLayout";
const Home = lazy(() => import("../../pages/Home"));
const TweetsCardsList = lazy(() => import("../TweetsCardsList"));
const PageNotFound = lazy(() => "../PageNotFound/");

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<TweetsCardsList />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

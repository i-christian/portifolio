import { Route, Router } from "@solidjs/router";
import { Component, lazy } from "solid-js";

const Home: Component = lazy(() => import("./pages/Home"));
const WrongPage: Component = lazy(() => import("./pages/404"));


const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="*404" component={WrongPage} />
    </Router>
  );
};

export default App;

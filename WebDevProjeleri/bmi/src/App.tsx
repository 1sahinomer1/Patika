import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../src/config/Routes";
import { Suspense } from "react";
import Layout from "./components/Layout";

interface IRoute {
  path: string;
  exact: boolean;
  component: JSX.Element;
}

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<h3>Loading...</h3>}></Suspense>
        <Switch>
          {routes.map((route: IRoute, i: number) => {
            return (
              <Route key={i} path={route.path} exact={route.exact}>
                <Layout>{route.component}</Layout>
              </Route>
            );
          })}
          {/* <Route exact path="/" component={Layout}></Route>
          <Route path="/result" component={ResultScreen}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

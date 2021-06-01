import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { routers } from "./config/Router";
import { Suspense } from "react";

interface Route {
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
          {routers.map((router: Route) => {
            <Router
              path={router.path}
              exact={router.exact}
              component={router.component}
            ></Router>;
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

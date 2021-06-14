import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
import { routes } from "./config/Routes";
import ProductsProvider from "./context/ProductsProvider";
import "./Styles/App.scss";
function App() {
  return (
    <ProductsProvider>
      <Router>
        <Suspense fallback={<h3>Loading...</h3>} />
        <Switch>
          {routes.map((route, i) => {
            return (
              <Route key={i} path={route.path} exact={route.exact}>
                <Layout>{route.component}</Layout>
              </Route>
            );
          })}
        </Switch>
      </Router>
    </ProductsProvider>
  );
}

export default App;

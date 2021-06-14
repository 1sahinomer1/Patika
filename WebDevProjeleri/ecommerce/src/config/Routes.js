import Favorite from "../Components/Favorite";
import Home from "../Components/Home";
import Payment from "../Components/Payment";

export const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
    title: "Home",
  },
  {
    path: "/favorite",
    exact: false,
    component: <Favorite />,
  },
  {
    path: "/payment",
    exact: true,
    component: <Payment />,
  },
];

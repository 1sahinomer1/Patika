import BmiForm from "../components/BmiForm";
import ResultScreen from "../components/ResultScreen";

export const routes = [
  {
    path: "/",
    exact: true,
    component: <BmiForm />,
    title: "Home",
  },
  {
    path: "/result",
    exact: false,
    component: <ResultScreen />,
    title: "Result Screen",
  },
];

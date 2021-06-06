import Footer from "./Footer";
import ResultNav from "./ResultNav";
import { LayoutContainer } from "./Styles/Container.style";
const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <ResultNav></ResultNav>
      {children}
      <Footer></Footer>
    </LayoutContainer>
  );
};

export default Layout;

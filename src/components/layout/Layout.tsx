import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

type Props = {};

const Layout = ({}: Props) => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth);

  // const handleSize = () => {
  //   setIsMobile(window.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleSize);
  //   return () => {
  //     window.removeEventListener("resize", handleSize);
  //   };
  // }, [window.innerWidth]);

  return (
    <div className="transition-all ease-linear duration-200">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

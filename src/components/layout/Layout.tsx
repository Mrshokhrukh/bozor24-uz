import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

type Props = {};

const Layout = ({}: Props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth);

  const handleSize = () => {
    setIsMobile(window.innerWidth);
    
  };
  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [window.innerWidth]);

  return (
    <div className="transition-all ease-linear duration-200 pb-16">
      {isMobile < 768 ? <MobileMenu /> : <Header />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

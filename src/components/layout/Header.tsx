import HeadBottomCategories from "../ui/HeadBottomCategories";
import HeaderMain from "../ui/HeaderMain";
import HeaderTop from "../ui/HeaderTop";

type Props = {};

const Header = ({}: Props) => {
  return (
    <div>
      <HeaderTop />
      <HeaderMain />
      <HeadBottomCategories />
    </div>
  );
};

export default Header;

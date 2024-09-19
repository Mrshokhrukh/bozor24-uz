import { Outlet } from "react-router-dom";

type Props = {};

const AuthLayout = ({}: Props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;

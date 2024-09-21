import { Outlet } from "react-router-dom";

type Props = {
  allowedRoles: string[];
};

const RoleBasedRoute = ({ allowedRoles }: Props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RoleBasedRoute;

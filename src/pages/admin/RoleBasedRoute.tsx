import { Outlet } from "react-router-dom";

type Props = {
  allowedRoles: string[];
};

const RoleBasedRoute = ({}: Props) => {
  return (
    <div>
      {/* <Outlet /> */}
    </div>
  );
};

export default RoleBasedRoute;

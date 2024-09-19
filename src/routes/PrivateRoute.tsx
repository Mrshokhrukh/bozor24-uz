import { Navigate, Outlet } from "react-router-dom";

type Props = {};
let isAuthSuccess = true;
const PrivateRoute = ({}: Props) => {
  return isAuthSuccess ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;

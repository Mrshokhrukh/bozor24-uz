import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./components/features/auth/AuthLayout.tsx";
import Login from "./components/features/auth/Login.tsx";
import Register from "./components/features/auth/Register.tsx";
import Layout from "./components/layout/Layout.tsx";
import PrivateRoute from "./routes/PrivateRoute.tsx";
import UserLayout from "./components/features/profile/UserLayout.tsx";
import UserProfile from "./components/features/profile/UserProfile.tsx";
import RoleBasedRoute from "./pages/admin/RoleBasedRoute.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import AdminLayout from "./pages/admin/AdminLayout.tsx";
import NotFound from "./components/layout/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "user-profile/:userId",
            element: (
              <UserLayout>
                <UserProfile />
              </UserLayout>
            ),
          },
        ],
      },
      {
        element: <RoleBasedRoute allowedRoles={["admin"]} />,
        children: [
          {
            path: "admin-dashboard",
            element: (
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            ),
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

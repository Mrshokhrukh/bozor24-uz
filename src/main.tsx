import { StrictMode } from "react";
import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LazyLoadingSpin from "./components/ui/LazyLoadingSpin.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import "./styles/main.style.css";
const AuthLayout = lazy(() => import("./components/features/auth/AuthLayout.tsx"));
const Login = lazy(() => import("./components/features/auth/Login.tsx"));
const Register = lazy(() => import("./components/features/auth/Register.tsx"));
const Layout = lazy(() => import("./components/layout/Layout.tsx"));
const PrivateRoute = lazy(() => import("./routes/PrivateRoute.tsx"));
const UserLayout = lazy(() => import("./components/features/profile/UserLayout.tsx"));
const UserProfile = lazy(() => import("./components/features/profile/UserProfile.tsx"));
const RoleBasedRoute = lazy(() => import("./pages/adminPages/RoleBasedRoute.tsx"));
const AdminDashboard = lazy(() => import("./pages/adminPages/AdminDashboard.tsx"));
const AdminLayout = lazy(() => import("./pages/adminPages/AdminLayout.tsx"));
const NotFound = lazy(() => import("./components/layout/NotFound.tsx"));

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
        element: (
          <Suspense fallback={<LazyLoadingSpin />}>
            <App />
          </Suspense>
        ),
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
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
          <Suspense fallback={<LazyLoadingSpin />}>
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

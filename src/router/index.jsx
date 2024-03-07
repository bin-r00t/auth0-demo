/** router */
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout.jsx";
import UserProfile from "../pages/UserProfile.jsx";
import GlobalError from "../pages/layout/GlobalError.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <GlobalError />,
    children: [
      // put children,
      // asynchonous import, or
      // directly import
      // TODO: add router guardian
      {
        path: '/user',
        element: <UserProfile />
      }
    ],
  },
]);

export default router;

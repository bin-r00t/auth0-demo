/** router */
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout.jsx";
import GlobalError from "../pages/layout/GlobalError.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <GlobalError />,
    // children: [
      // put children,
      // asynchonous import, or
      // directly import
    // ],
  },
]);

export default router;

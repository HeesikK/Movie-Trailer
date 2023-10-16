import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homepage";
import Layout from "../components/layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <HomePage /> }],
  },
]);

export default router;

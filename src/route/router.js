import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homepage";
import Layout from "../components/layout/layout";
import DetailPage from "../pages/detailpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/movie/:id", element: <DetailPage /> },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homepage";
import Layout from "../components/layout/layout";
import DetailPage from "../pages/detailpage";
import SearchPage from "../pages/searchpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: `/movie`, element: <HomePage /> },
      { path: "/movie/:id", element: <DetailPage /> },
      { path: "/movie/search", element: <SearchPage /> },
    ],
  },
]);

export default router;

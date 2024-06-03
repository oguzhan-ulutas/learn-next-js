import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import MemoUse from "./components/hooks/MemoUse";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/memo-use", element: <MemoUse /> },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;

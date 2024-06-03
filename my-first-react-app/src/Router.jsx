import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import MemoUse from "./components/hooks/MemoUse";
import CallbackUse from "./components/hooks/CallbackUse";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/memo-use", element: <MemoUse /> },
    { path: "/callback-use", element: <CallbackUse /> },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;

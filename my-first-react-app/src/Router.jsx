import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import MemoUse from "./components/hooks/MemoUse";
import CallbackUse from "./components/hooks/CallbackUse";
import Memo from "./components/hooks/Memo";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/memo-use", element: <MemoUse /> },
    { path: "/callback-use", element: <CallbackUse /> },
    { path: "/memo", element: <Memo /> },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;

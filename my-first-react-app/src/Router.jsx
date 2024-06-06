import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import MemoUse from "./components/hooks/MemoUse";
import CallbackUse from "./components/hooks/CallbackUse";
import Memo from "./components/hooks/Memo";
import EffectUse from "./components/hooks/EffectUse";
import RefUse from "./components/hooks/RefUse";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/memo-use", element: <MemoUse /> },
    { path: "/callback-use", element: <CallbackUse /> },
    { path: "/memo", element: <Memo /> },
    { path: "/effect-use", element: <EffectUse /> },
    { path: "/ref-use", element: <RefUse /> },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;

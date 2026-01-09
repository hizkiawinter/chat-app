import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ChatPage from "./pages/ChatPage.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GOOGLE_CLIENT_ID =
  "1090350860554-p9r5u24p759sdju3sdcuk6fne3fcq1a1.apps.googleusercontent.com";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/feed",
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
);

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProviderWithNavigate } from "./auth/AuthProviderWithNavigate";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProviderWithNavigate>
      <App />
    </AuthProviderWithNavigate>
  </BrowserRouter>
);

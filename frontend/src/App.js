import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PrivateRoutes from "./routes/Private";
import PublicRoutes from "./routes/Public";

import MainLayout from "./layouts/Main/index";

import Dashboard from "./pages/Dashboard/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import ForgotPassword from "./pages/ForgotPassword/index";

// Redux
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          {/* Private Routes */}
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Route>

          {/* Public Routes */}
          <Route path="login" element={<PublicRoutes />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

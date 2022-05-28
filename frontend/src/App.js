import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/Main/index";
import AuthLayout from "./layouts/Auth/index";

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
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="login" element={<AuthLayout />}>
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

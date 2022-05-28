import { Outlet } from "react-router-dom";
import { ToggleDarkSide } from "../../components/ToggleDarkSide/index";

const AuthLayout = ({ children }) => {
  return (
    <>
      <nav className="container mx-auto px-5 h-10 grid items-center justify-end">
        <ToggleDarkSide />
      </nav>
      <main className="container mx-auto min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;

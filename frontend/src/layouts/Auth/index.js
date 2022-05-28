import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <>
      <main className="container mx-auto min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;

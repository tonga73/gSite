import { Outlet } from "react-router-dom";

import Header from "../Header/index";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;

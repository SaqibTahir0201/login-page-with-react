import { Outlet } from "react-router-dom";
import ThemeButton from "./ThemeButton";

function Layout() {
  return (
    <>
      <ThemeButton />
      <Outlet />
    </>
  );
}

export default Layout;
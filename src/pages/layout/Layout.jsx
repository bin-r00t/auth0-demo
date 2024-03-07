import { useEffect } from "react";
import BottomFooter from "../../components/BottomFooter";
import TopHeader from "../../components/TopHeader";
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";

function Layout() {
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
    } else {
    }
  }, [isAuthenticated]);

  return (
    <>
      <TopHeader />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <BottomFooter />
    </>
  );
}

export default Layout;

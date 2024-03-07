import { useEffect } from "react";
import BottomFooter from "../../components/BottomFooter";
import TopHeader from "../../components/TopHeader";
import { useAuth0 } from "@auth0/auth0-react";

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
      <main className="flex-1">main</main>
      <BottomFooter />{" "}
    </>
  );
}

export default Layout;

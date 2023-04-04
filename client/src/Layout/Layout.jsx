import React from "react";
import Navbar from "./Navbar/Navbar";
import Aside from "./Aside/Aside";
import Body from "./Body/Body";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../components/Loading/Loading";

const Layout = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [user, loading] = useAuthState(auth);

  const handleSidebarShow = () => {
    setShowSidebar(!showSidebar);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Navbar user={user} handleSidebarShow={handleSidebarShow} />
      <Aside showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Body />
    </div>
  );
};

export default Layout;

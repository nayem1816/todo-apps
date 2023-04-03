import React from "react";
import Navbar from "./Navbar/Navbar";
import Aside from "./Aside/Aside";
import Body from "./Body/Body";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../components/Loading/Loading";

const Layout = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  console.log(user);
  return (
    <div>
      <Navbar user={user} />
      <Aside />
      <Body />
    </div>
  );
};

export default Layout;

import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading/Loading";
import Protected from "./components/LoginRegistration/Protected";

// import Login from "./pages/Login";
// import Registration from "./pages/Registration";
// import Dashboard from "./pages/Dashboard";
// import AllTodo from "./pages/AllTodo";
// import RemainingTodo from "./pages/RemainingTodo";
// import CompletedTodo from "./pages/CompletedTodo";
// import DeletedTodo from "./pages/DeletedTodo";
// import SingleTodoDetails from "./pages/SingleTodoDetails";

const Login = React.lazy(() => import("./pages/Login"));
const Registration = React.lazy(() => import("./pages/Registration"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const AllTodo = React.lazy(() => import("./pages/AllTodo"));
const RemainingTodo = React.lazy(() => import("./pages/RemainingTodo"));
const CompletedTodo = React.lazy(() => import("./pages/CompletedTodo"));
const DeletedTodo = React.lazy(() => import("./pages/DeletedTodo"));
const SingleTodoDetails = React.lazy(() => import("./pages/SingleTodoDetails"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <Layout />
              </Protected>
            }>
            <Route
              path="/"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
            <Route
              path="/all-todo"
              element={
                <Protected>
                  <AllTodo />
                </Protected>
              }
            />
            <Route
              path="/remaining-todo"
              element={
                <Protected>
                  <RemainingTodo />
                </Protected>
              }
            />
            <Route
              path="/completed-todo"
              element={
                <Protected>
                  <CompletedTodo />
                </Protected>
              }
            />
            <Route
              path="/deleted-todo"
              element={
                <Protected>
                  <DeletedTodo />
                </Protected>
              }
            />
            <Route
              path="/todo-details/:id"
              element={
                <Protected>
                  <SingleTodoDetails />
                </Protected>
              }
            />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import AllTodo from "./pages/AllTodo";
import RemainingTodo from "./pages/RemainingTodo";
import CompletedTodo from "./pages/CompletedTodo";
import DeletedTodo from "./pages/DeletedTodo";
import Protected from "./components/LoginRegistration/Protected";

function App() {
  return (
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
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;

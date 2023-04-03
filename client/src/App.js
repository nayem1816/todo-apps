import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AllTodo from "./pages/AllTodo";
import RemainingTodo from "./pages/RemainingTodo";
import CompletedTodo from "./pages/CompletedTodo";
import DeletedTodo from "./pages/DeletedTodo";
import Registration from "./pages/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/all-todo" element={<AllTodo />} />
        <Route path="/remaining-todo" element={<RemainingTodo />} />
        <Route path="/completed-todo" element={<CompletedTodo />} />
        <Route path="/deleted-todo" element={<DeletedTodo />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;

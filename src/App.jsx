import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AdminArticleForm from "./pages/AdminArticleForm";
import SearchArticles from "./pages/SearchArticles";
import NewTicket from "./pages/NewTicket";
import TicketList from "./pages/TicketList";
import AIAssistant from "./pages/AIAssistant";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute roles={["admin", "employee", "agent"]}>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/articles/new"
        element={
          <PrivateRoute roles={["admin"]}>
            <AdminArticleForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/search"
        element={
          <PrivateRoute roles={["employee", "admin", "agent"]}>
            <SearchArticles />
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets/new"
        element={
          <PrivateRoute roles={["employee"]}>
            <NewTicket />
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets"
        element={
          <PrivateRoute roles={["employee", "agent", "admin"]}>
            <TicketList />
          </PrivateRoute>
        }
      />
      <Route
        path="/ai-assistant"
        element={
          <PrivateRoute roles={["employee", "agent", "admin"]}>
            <AIAssistant />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;

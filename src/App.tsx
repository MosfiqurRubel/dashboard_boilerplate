import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuthCheck } from "@/hooks/useAuthCheck";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import PublicRoute from "@/components/PublicRoute";
import ProtectedRoute from "@/components/ProtectedRoute";
import NotFound from "@/components/NotFound";
import RootLayout from "@/RootLayout";

function App() {
  const authChecked = useAuthCheck();

  console.log(authChecked, "password123");

  return !authChecked ? (
    <div className="flex-center min-h-screen">Checking authentication...</div>
  ) : (
    <Router>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<RootLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add other protected routes here */}
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;

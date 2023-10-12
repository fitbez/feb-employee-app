import "./App.css";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import AddEmployeePage from "./components/Pages/AddEmployeePage";
import EmployeeListPage from "./components/Pages/EmployeeListPage";
import LoginPage from "./components/Pages/LoginPage";
import RegisterPage from "./components/Pages/RegisterPage";
import { EmployeeProvider } from "./context";
import { ProtectedRoute } from "./ProtectedRoute";

const App = () => {
  return (
    <>
      <EmployeeProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/add-employee'
            element={
              <ProtectedRoute>
                <AddEmployeePage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/add-employee/:id'
            element={
              <ProtectedRoute>
                <AddEmployeePage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/employee-list'
            element={
              <ProtectedRoute>
                <EmployeeListPage />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </EmployeeProvider>
    </>
  );
};

export default App;

import "./App.css";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import AddEmployeePage from "./components/Pages/AddEmployeePage";
import EmployeeListPage from "./components/Pages/EmployeeListPage";
import LoginPage from "./components/Pages/LoginPage";
import { EmployeeProvider } from "./context";

const App = () => {
  return (
    <>
      <EmployeeProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/add-employee' element={<AddEmployeePage />} />
          <Route path='/employee-list' element={<EmployeeListPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </EmployeeProvider>
    </>
  );
};

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ShowCourse from "./pages/ShowCourse";
import CreateCourse from "./pages/CreateCourse";
import PurchasedCourses from "./pages/PurchasedCourses";
import FindCourse from "./pages/FindCourse";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<ShowCourse />} />
        <Route path="/new-course" element={<CreateCourse />} />
        <Route path="/courses/:id" element={<FindCourse />} />
        <Route path="/courses/purchased" element={<PurchasedCourses />} />
      </Routes>
    </Router>
  );
}

export default App;

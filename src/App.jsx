import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Main from "./containers/Main/Main";
import AddCourse from "./components/AddCourse/AddCourse";
import DeleteCourse from "./components/DeleteCourse/DeleteCourse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseInfo from './components/CourseInfo/CourseInfo';
import {useState, useEffect} from 'react';

function App() {

  const [courses, setCourses] = useState([]);
  const [nameSearch, setNameSearch] = useState("");

  const getCourses = () => {
    fetch("http://localhost:8080/courses/" + nameSearch)
      .then(res => res.json())
      .then(json => setCourses(json))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getCourses();
  },[nameSearch]);

  return (
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main coursesArr={courses} setNameSearch={setNameSearch} />} />
        <Route path="/courses/:courseId" element={<CourseInfo />} />
        <Route path="/course/add" element={<AddCourse />} />
        <Route path="/course/delete" element={<DeleteCourse />} />
      </Routes>
    </div>
    </Router>

  );
}

export default App;

import React from 'react';
import CoursesList from '../CoursesList/CoursesList';
import Search from "./../../components/Search/Search";
import "./Main.scss";

const Main = (props) => {

  const { coursesArr } = props;

  const handleChangeCourses = () => {
    
  }

  return (
    <div className="main">
      <h1 className="main__header">Find your next course!</h1>
      <Search searchFunction={handleChangeCourses}/>
      <h3 className="main__subheader">Course Results...</h3>
      <CoursesList coursesArr={coursesArr}/>
    </div>
  )
}

export default Main
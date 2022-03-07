import React from 'react';
import CoursesList from '../CoursesList/CoursesList';
import Search from "./../../components/Search/Search";

const Main = () => {
  return (
    <div className="main">
      <h1 className="main__header">Find your next course!</h1>
      <Search />
      <h3 className="main__subheader">Course Results...</h3>
      <CoursesList />
    </div>
  )
}

export default Main
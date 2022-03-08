import React, { useState, useEffect } from 'react';
import "./CourseInfo.scss";
import { useParams, Link } from "react-router-dom";
import Button from "./../Button/Button";

const CourseInfo = () => {

  const { courseId } = useParams();
  const [course, setCourse] = useState({});

  const getCourse = (courseId) => {
    fetch("http://localhost:8080/course/" + courseId)
    .then(res => res.json())
    .then(json => setCourse(json))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    getCourse(courseId);
  }, [courseId]);

  return (
    <div className="course-info-card">
      <h2 className="course-info-card__name">{course.name}</h2>
      <div className="course-info-card__info">
        <div className="course-info-card__split">
          <h3 className="course-info-card__header">Location:</h3> 
          <h4 className="course-info-card__content">{course.location}</h4>
        </div>
        <div className="course-info-card__split">
          <h3 className="course-info-card__header">Price:</h3> 
          <h4 className="course-info-card__content">{course.price}</h4>
        </div>
        <div className="course-info-card__split">
          <h3 className="course-info-card__header">Duration:</h3> 
          <h4 className="course-info-card__content">{course.duration}</h4>
        </div>
        <div className="course-info-card__split">
          <h3 className="course-info-card__header">Description:</h3> 
          <h4 className="course-info-card__content">{course.summary}</h4>
        </div>
      </div>
      
      <Link to="/">
        <Button buttonText="Back to Search" />
      </Link>

    </div>
  )
}

export default CourseInfo
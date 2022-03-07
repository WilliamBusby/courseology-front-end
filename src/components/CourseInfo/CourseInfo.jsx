import React from 'react';
import "./CourseInfo.scss";

const CourseInfo = (props) => {

  const { courseInfo } = props;

  return (
    <div className="course-info-card">
      <h2 className="course-info-card__name">{courseInfo.name}</h2>
      <div className="course-info-card-split">
        <h3 className="course-info-card__header">Location:</h3> 
        <h4 className="course-info-card__content">{courseInfo.location}</h4>
      </div>
      <div className="course-info-card-split">
        <h3 className="course-info-card__header">Price:</h3> 
        <h4 className="course-info-card__content">{courseInfo.price}</h4>
      </div>
      <div className="course-info-card-split">
        <h3 className="course-info-card__header">Duration:</h3> 
        <h4 className="course-info-card__content">{courseInfo.duration}</h4>
      </div>
      <div className="course-info-card-split">
        <h3 className="course-info-card__header">Description:</h3> 
        <h4 className="course-info-card__content">{courseInfo.description}</h4>
      </div>
    </div>
  )
}

export default CourseInfo
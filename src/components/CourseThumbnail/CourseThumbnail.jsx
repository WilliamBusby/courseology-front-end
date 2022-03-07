import React from 'react';
import "./CourseThumbnail.scss";

const CourseThumbnail = (props) => {

  const {course} = props;

  return (
    <div className="course-thumbnail">
      {course.name}
    </div>
  )
}

export default CourseThumbnail
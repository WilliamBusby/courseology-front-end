import React from 'react';
import "./CourseThumbnail.scss";
import {Link} from 'react-router-dom';

const CourseThumbnail = (props) => {

  const {course} = props;

  return (
      <Link to={"/courses/" + course.id} >
        <div className="course-thumbnail">
          <p className="course-thumbnail__name">{course.name}</p>
        </div>
      </Link>
  )
}

export default CourseThumbnail
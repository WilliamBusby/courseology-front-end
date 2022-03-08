import React, {useState, useEffect} from 'react';
import CourseThumbnail from '../../components/CourseThumbnail/CourseThumbnail';
import "./CoursesList.scss";

const CoursesList = (props) => {

  const { coursesArr } = props;

  const [showEmpty, setShowEmpty] = useState(false);

  const coursesComponents = coursesArr.map((course, index) => <CourseThumbnail course={course} key={index} />);

  useEffect(() => setShowEmpty(coursesArr.length === 0), [coursesArr]);

  const emptyListText = <p className="empty-text">There don't seem to be any matches for your search!</p>

  return (
    <div className="courses-list">
      {!showEmpty && coursesComponents}
      {showEmpty && emptyListText}
    </div>
  )
}

export default CoursesList
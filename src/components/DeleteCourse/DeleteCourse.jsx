import React, {useState} from 'react';
import Button from '../Button/Button';
import "./DeleteCourse.scss";

const DeleteCourse = (props) => {

  const {courseList} = props;

  const [course, setCourse] = useState(0);

  const coursesDropDown = courseList.map((course,index) => <option key={index} value={course.id}>{course.name}</option>);

  const handleDeleteCourse = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/course/' + course, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
    window.location.reload();
  }

  const changeDeleteCourse = (event) => {
    setCourse(event.target.value)
  }

  return (
    <div className="delete-course">
      <label htmlFor="delete-list" className="delete-course__label">Choose a course to delete.</label>
      <select name="delete-list" onChange={changeDeleteCourse}>
        {coursesDropDown}  
      </select>
      <label htmlFor="delete-reason" className="delete-course__label">Please give a reason.</label>
      <textarea name="delete-reason" cols="30" rows="10"></textarea>
      <Button buttonText="Delete Course" buttonFunction={handleDeleteCourse} />
    </div>
  )
}

export default DeleteCourse
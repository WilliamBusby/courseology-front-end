import React, {useState} from 'react';
import Button from "./../Button/Button";
import "./AddCourse.scss";

const AddCourse = () => {

  const [newCourse, setNewCourse] = useState({
    name: "",
    location: "",
    price: "",
    duration: "",
    summary: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/course', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCourse)
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
    e.target.reset();
    window.location.reload();
  }

  return (
    <div className="add-course">
      <h2 className="add-course__header">Add your course!</h2>
      <form onSubmit={handleSubmit}>
        <div className="add-course__form">
          <label htmlFor="name" className="add-course__label">Name: </label>
          <input type="text" className="add-course__input" name="name" onInput={(e) => setNewCourse({ ...newCourse, name: e.target.value })} required />
          <label htmlFor="location" className="add-course__label">Location: </label>
          <input type="text" className="add-course__input" name="location" onInput={(e) => setNewCourse({ ...newCourse, location: e.target.value })} required />
          <label htmlFor="price" className="add-course__label">Price: </label>
          <input type="text" className="add-course__input" name="price" onInput={(e) => setNewCourse({ ...newCourse, price: e.target.value })} required />
          <label htmlFor="duration" className="add-course__label">Duration: </label>
          <input type="text" className="add-course__input" name="duration" onInput={(e) => setNewCourse({ ...newCourse, duration: e.target.value })} required />
          <label htmlFor="summary" className="add-course__label">Summary: </label>
          <textarea className="add-course__summary" cols="30" rows="10" name="summary" onInput={(e) => setNewCourse({ ...newCourse, summary: e.target.value })} required />
        </div>
        <div className="add-course__buttons">
          <Button buttonText="Cancel" type="reset" />
          <Button buttonText="Save" type="submit" />  
        </div>
      </form>  

    </div>
  )
}

export default AddCourse
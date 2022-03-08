import React from 'react';
import Button from "./../Button/Button";
import "./AddCourse.scss";

const AddCourse = () => {

  const handleSubmit = () => {

  }

  return (
    <div className="add-course">
      <h2 className="add-course__header">Add your course!</h2>
      <form onSubmit={handleSubmit} className="add-course__form">
        <label htmlFor="name" className="add-course__label">Name: </label>
        <input type="text" className="add-course__input" name="name" />
        <label htmlFor="location" className="add-course__label">Location: </label>
        <input type="text" className="add-course__input" name="location" />
        <label htmlFor="price" className="add-course__label">Price: </label>
        <input type="text" className="add-course__input" name="price" />
        <label htmlFor="duration" className="add-course__label">Duration: </label>
        <input type="text" className="add-course__input" name="duration" />
        <label htmlFor="summary" className="add-course__label">Summary: </label>
        <textarea className="add-course__summary" cols="30" rows="10" name="summary" />
      </form>  
      <div className="add-course__buttons">
          <Button buttonText="Cancel" type="reset" />
          <Button buttonText="Save" type="submit" />  
      </div>
    </div>
  )
}

export default AddCourse
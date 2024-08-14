/* eslint-disable react/prop-types */
import { useState } from "react";

export default function CommentsForm({ addNewComment }) {
  const [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: "",
  });

  let [isValid, setIsValid] = useState(true);

  function handleInput(event) {
    //let fieldName = event.target.name;
    //let newValue = event.target.value;

    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }

  function formSubmit(e) {
    if (!formData.username) {
      e.preventDefault();
      setIsValid(false);
      return;
    }
    e.preventDefault();
    console.log(formData);
    addNewComment(formData);
    setFormData({ username: "", remark: "", rating: "" });
  }

  return (
    <div style={{ minWidth: "500px" }}>
      <form
        action=''
        onSubmit={formSubmit}>
        <h2>Give a Comment</h2>
        <div>
          <input
            type='text'
            name='username'
            id=''
            placeholder='Enter name ...'
            value={formData.username}
            onChange={handleInput}
          />
          {!isValid && <p style={{ color: "red" }}>Username Required </p>}
        </div>
        <br />
        <div>
          <textarea
            name='remark'
            id=''
            cols={20}
            rows={4}
            placeholder='Remark'
            value={formData.remark}
            onChange={handleInput}></textarea>
        </div>
        <div>
          <input
            type='number'
            placeholder='Rating'
            max={5}
            min={1}
            name='rating'
            value={formData.rating}
            onChange={handleInput}
          />
        </div>
        <br />
        <div>
          <button>Add Comments</button>
        </div>
      </form>
    </div>
  );
}

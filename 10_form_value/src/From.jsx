/* eslint-disable no-unused-vars */
import { useState } from "react";

//export function Form() {
//  let [fullName, setFullName] = useState("Shiba");
//  let [userName, setUserName] = useState("@shv");

//  let handleName = (event) => {
//    console.log(event.target.value);
//    setFullName(event.target.value);
//  };
//  let handleUsername = (event) => {
//    console.log(event.target.value);
//    setUserName(event.target.value);
//  };
//  return (
//    <form>
//      <label htmlFor='fullname'>Full Name </label>
//      <input
//        id='fullname'
//        type='text'
//        placeholder='Enter Your Name'
//        value={fullName}
//        onChange={handleName}
//      />
//      <label htmlFor='username'>User Name </label>
//      <input
//        id='username'
//        type='text'
//        placeholder='Enter Your Name'
//        value={userName}
//        onChange={handleUsername}
//      />
//      <button> Submit </button>
//    </form>
//  );
//}

export function Form() {
  let [formData, setFormdata] = useState({
    fullName: "",
    userId: "",
    password: "",
  });

  const handleForm = (event) => {
    //let fieldName = event.target.name;
    //let newValue = event.target.value;

    setFormdata((currData) => {
      //  currData[fieldName] = newValue;
      //  return { ...currData, [fieldName]: newValue };
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    return setFormdata({ fullName: "", userId: "", password: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='fullname'>Full Name </label>
      <input
        id='fullname'
        type='text'
        placeholder='Enter Your Name'
        value={formData.fullName}
        onChange={handleForm}
        name='fullName'
      />
      <label htmlFor='username'>User Name </label>
      <input
        id='username'
        type='text'
        placeholder='Enter Your Name'
        value={formData.userId}
        onChange={handleForm}
        name='userId'
      />
      <label htmlFor='userpass'>User Password </label>
      <input
        id='userpass'
        type='password'
        placeholder='Enter Password'
        value={formData.password}
        onChange={handleForm}
        name='password'
      />
      <button> Submit </button>
    </form>
  );
}

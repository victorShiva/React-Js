function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Form Submited");
}

export default function From() {
  return (
    <form
      action='/result'
      onSubmit={handleFormSubmit}>
      <input
        type='text'
        placeholder='Enter Somethings...'
      />
      {/*<button onClick={handleFormSubmit}>Submit</button>*/}
      <button>Submit</button>
    </form>
  );
}

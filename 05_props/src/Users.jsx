/* eslint-disable react/prop-types */
import "./Card.css";

//function User({ username, color }) {
//  let textColor = { color: color };
//  return (
//    <div className="card">
//      <h3>
//        Hello Mr.
//        <span style={textColor}> {username} </span>
//      </h3>
//    </div>
//  );
//}

function User({ username, color }) {
  return (
    <div className="card">
      <h3>
        Hello Mr.
        <span style={{ color: color }}> {username} </span>
      </h3>
    </div>
  );
}

function Users() {
  return (
    <>
      <User
        username="Shiva"
        color="red"
      />
      <User
        username="Raghav"
        color="blue"
      />
      <User
        username="Ritika"
        color="green"
      />
    </>
  );
}

export default Users;

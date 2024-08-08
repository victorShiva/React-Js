import { useState } from "react";
import "./App.css";
export default function LikeButton() {
  let [isLiked, setLiked] = useState(false);

  let toggleLike = () => {
    setLiked(!isLiked);
  };

  return (
    <div>
      <span onClick={toggleLike}>
        {/*{isLiked.toString()}*/}

        {isLiked ? (
          <i
            className='fa-solid fa-heart'
            style={{ color: "red" }}></i>
        ) : (
          <i className='fa-regular fa-heart'></i>
        )}
      </span>
    </div>
  );
}

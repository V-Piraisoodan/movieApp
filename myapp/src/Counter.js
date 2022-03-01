import { useState } from 'react';

export function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const incrementLike = () => setlike(like + 1);
  const incrementDislike = () => setdislike(dislike + 1);
  return (
    <div className="counter-container">
      {/* <button className="likes-dislikes" onClick={() => setlike(like + 1)}>👍 {like}</button> */}
      <button className="likes-dislikes" onClick={incrementLike}>👍 {like}</button>
      
      {/* <button className="likes-dislikes" onClick={() => setdislike(dislike + 1)}>👎 {dislike}</button> */}
      <button className="likes-dislikes" onClick={incrementDislike}>👎 {dislike}</button>
    </div>
  );
}

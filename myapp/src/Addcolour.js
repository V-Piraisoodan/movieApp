import { useState } from 'react';
import { Addcolorbox } from './Addcolorbox';

// EASY METHOD TO CHANGE BACKGROUND
// function ColourBox(){
//   const styles = {background : "red"};
//   return <div>
//     <input style={styles} onChange={(event)=>console.log(event.target.value)} placeholder="Enter a colour"/>
//   </div>
// }
export function Addcolour() {
  const [color, setColor] = useState("");
  const styles = { backgroundColor: color };
  // const colors = ["red","pink","violet"];
  const [colors, setColors] = useState(["red", "pink", "violet"]);
  //  Type the input -> onChange -> event.target.value -> Setcolor
  //   
  return <div>
    <input style={styles}
      onChange={(event) => setColor(event.target.value)} placeholder="Enter the colour" />
    {/* we want to print color value,so color ingu mention pannanum. */}
    <button onClick={() => setColors([...colors, color])}>Add color</button>
    {colors.map((clr, index) => { <Addcolorbox key={index} clr={clr} />; })}

    {/* <p>hi</p> */}
  </div>;
}

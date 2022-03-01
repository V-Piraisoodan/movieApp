// import logo from './logo.svg';
import './App.css';
// import { Movie } from './Movie';
import {Movielist} from './Movielist.js'
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {


  // const movie = [{
  //   moviename: "Avenger : Endgame",
  //   pic: "https://wallpaperaccess.com/full/1079145.jpg",
  //   rating: "★ 8.4",
  //   para: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
  // },
  // {
  //   moviename: "Interstellar",
  //   pic: "https://i.pinimg.com/originals/54/d0/f2/54d0f233e73132b24f91c1d59a5e345f.jpg",
  //   rating: "★ 8.6",
  //   para: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  // },
  // {
  //   moviename: "Justice league",
  //   pic: "https://i0.wp.com/www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2017/10/JL-Poster-Oct.jpg?ssl=1",
  //   rating: "★ 6.1",
  //   para: "Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy.",
  // },
  // {
  //   moviename: "Inception",
  //   pic: "https://www.joblo.com/wp-content/uploads/2010/06/inception-imax-poster1-1.jpg",
  //   rating: "★ 8.8",
  //   para: "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
  // },
  // {
  //   moviename: "Arjun Reddy",
  //   pic: "https://flxt.tmsimg.com/assets/p14472997_p_v10_aa.jpg",
  //   rating: "★ 8.1",
  //   para: "Arjun Reddy Deshmukh is a young surgeon with functioning alcoholism and a furious temper. He spirals into self-destruction when he learns that his girlfriend is marrying another man.",
  // },
  // {
  //   moviename: "Master",
  //   pic: "https://wallpaperaccess.com/full/2543924.jpg",
  //   rating: "★ 8.9",
  //   para: "JD, an alcoholic professor, is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
  // },
  // ];

  const [movie,setmovie] = useState([{
    moviename: "Avenger : Endgame",
    pic: "https://wallpaperaccess.com/full/1079145.jpg",
    rating: "8.4",
    para: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
  },
  {
    moviename: "Interstellar",
    pic: "https://i.pinimg.com/originals/54/d0/f2/54d0f233e73132b24f91c1d59a5e345f.jpg",
    rating: "8.6",
    para: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  },
  {
    moviename: "Justice league",
    pic: "https://i0.wp.com/www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2017/10/JL-Poster-Oct.jpg?ssl=1",
    rating: "6.1",
    para: "Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy.",
  },
  {
    moviename: "Inception",
    pic: "https://www.joblo.com/wp-content/uploads/2010/06/inception-imax-poster1-1.jpg",
    rating: "8.8",
    para: "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
  },
  {
    moviename: "Arjun Reddy",
    pic: "https://flxt.tmsimg.com/assets/p14472997_p_v10_aa.jpg",
    rating: "8.1",
    para: "Arjun Reddy Deshmukh is a young surgeon with functioning alcoholism and a furious temper. He spirals into self-destruction when he learns that his girlfriend is marrying another man.",
  },
  {
    moviename: "Master",
    pic: "https://wallpaperaccess.com/full/2543924.jpg",
    rating: "8.9",
    para: "JD, an alcoholic professor, is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
  },
  ])

  const [moviename, setMoviename] = useState("");
  const [pic, setPic] = useState("");
  const [para, setPara] = useState("");
  const [rating, setRating] = useState("");

  const resetMovieForm = ()=>{
      setMoviename("")
      setPic("")
      setPara("")
      setRating("")
  }
  // const Add_movie = ()=>{
  //   console.log(name,poster,summary,rating)                               // string output
  //   console.log({name:name,poster:poster,summary:summary,rating:rating}) // object output

  //   console.log("shorthand",{                                          // shorthand
  //     name,
  //     poster,
  //     summary,
  //     rating
  //   })}

  const Add_movie = ()=>{
    console.log({moviename:moviename,pic:pic,para:para,rating:rating})
    const newMovie = {                                          // shorthand
      moviename,
      pic,
      para,
      rating,
    }
    setmovie([ ...movie, newMovie ])
    resetMovieForm()
  };

  return (
    <div className="App">
      
      <input value={moviename} onChange={(event)=>setMoviename(event.target.value)} placeholder="Enter a movie name"/>
      <input value={pic} onChange={(event)=>setPic(event.target.value)} placeholder="Enter a poster URL"/>
      <input value={para} onChange={(event)=>setPara(event.target.value)} placeholder="Enter a movie summary"/>
      <input value={rating} onChange={(event)=>setRating(event.target.value)} placeholder="Enter a movie rating"/>

      {/* <button onClick={()=>{
          console.log(name,poster,summary,rating)                               // string output
          console.log({name:name,poster:poster,summary:summary,rating:rating}) // object output

          console.log("shorthand",{                                          // shorthand
            name,
            poster,
            summary,
            rating
          })}
      }> Add movie </button> */}

      {/* <button onClick={Add_movie}> Add movie </button> */}
      <Button variant="contained" onClick={Add_movie} > Add movie </Button>
      {/* movie list */}
      {/* <Movie /> */} 
      <Movielist movie={movie}/>


      {/* <Counter/> */}
      {/* <ColourBox/> */}
      {/* <Addcolour /> */}

    </div>
  );
}

export default App;

// EASY METHOD TO CHANGE BACKGROUND
// function ColourBox(){
//   const styles = {background : "red"};
//   return <div>
//     <input style={styles} onChange={(event)=>console.log(event.target.value)} placeholder="Enter a colour"/>
//   </div>
// }


function Addcolour() {
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
    {colors.map((clr,index) => {<Addcolorbox key={index} clr={clr} />})}

    {/* <p>hi</p> */}
  </div>
}

// console.log(event.target.value)

function Addcolorbox({ clr }) {
  const styles = {
    backgroundColor: clr,
    height: "50px",
    width: "200px",
    margin: "10px 0px",
  }
  return (
    <div style={styles}></div>
  )
}
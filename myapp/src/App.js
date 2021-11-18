import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  // const names = [
  //   {name:"V.Pirai",
  //    pic:"https://mymodernmet.com/wp/wp-content/uploads/2019/12/sinhue-boksberger-forest-photo.jpg",
  //   },
  //   {name:"V.Gokul",
  //    pic:"https://www.bhagwankiphotos.com/wp-content/uploads/2018/12/Mahakal-Ka-Trishul-Photo.jpg",
  //   },
  //  ];

   const movie = [{
     moviename:"Avenger : Endgame",
     pic:"https://www.wallpapertip.com/wmimgs/26-261926_avengers-endgame.png",
     rating:"★ 8.4",
     para:"Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
   },
   {
    moviename:"Interstellar",
    pic:"https://i.pinimg.com/originals/54/d0/f2/54d0f233e73132b24f91c1d59a5e345f.jpg",
    rating:"★ 8.6",
    para:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
   },
  {
    moviename:"Justice league",
    pic:"https://i0.wp.com/www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2017/10/JL-Poster-Oct.jpg?ssl=1",
    rating:"★ 6.1",
    para:"Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy.",
  },
  {
    moviename:"Inception",
    pic:"https://www.joblo.com/wp-content/uploads/2010/06/inception-imax-poster1-1.jpg",
    rating:"★ 8.8",
    para:"Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
  },
  {
    moviename:"Arjun Reddy",
    pic:"https://www.wallpapertip.com/wmimgs/31-318138_vijay-devarakonda-arjun-reddy-movie-first-look-ultra.jpg",
    rating:"★ 8.1",
    para:"Arjun Reddy Deshmukh is a young surgeon with functioning alcoholism and a furious temper. He spirals into self-destruction when he learns that his girlfriend is marrying another man.",
  },
  {
    moviename:"Master",
    pic:"https://wallpaperaccess.com/full/2543924.jpg",
    rating:"★ 8.9",
    para:"JD, an alcoholic professor, is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
  },
  ];

 return (
   <div className="App">
     {/* <Msg name="V.Piraisoodan"
          pic="https://mymodernmet.com/wp/wp-content/uploads/2019/12/sinhue-boksberger-forest-photo.jpg"/>

     <Msg name="V.Gokul"
          pic="https://www.bhagwankiphotos.com/wp-content/uploads/2018/12/Mahakal-Ka-Trishul-Photo.jpg"/> */}
     

     {/*normal output */}
     {/* {names.map((nm)=> <Names name={nm.name} pic={nm.pic}  /> )  } */}

     {/* same output in loop */}
    {/* {names.map((user)=>(
      <Names name={user.name} pic={user.pic} /> 
    ))} */}

    {/* destructuring method */}
    {/* {names.map(({name,pic})=>(
      <Names name={name} pic={pic} />
    ))} */}


    {/* movie list */}
    {/* <Movie /> */}

    <section className="movie-list">
    {movie.map(({moviename,pic,rating,para})=>(
      <Movie moviename={moviename} pic={pic} rating={rating} para={para} />
    ))}
    </section>

    {/* <Counter/> */}

   </div>
 );
}

export default App;


// function Movie(){
//   return <div className="movie-container">
//     <img className="movie-poster"
//      src="https://www.wallpapertip.com/wmimgs/26-261926_avengers-endgame.png"
//      alt="" />
//      <div className="movie-specs">
//      <h3 className="movie-name">Avenger : Endgame</h3>
//      <p className="movie-rating"> ★ 8.4</p> 
//      </div>
//      <p className="movie-summary">Nick Fury is compelled to launch the Avengers Initiative
//         when Loki poses a threat to planet Earth. His squad of 
//         superheroes put their minds together to accomplish the task.
//       </p>
//   </div>
// }

function Counter(){
  const [like , setlike] = useState(0);
  const [dislike , setdislike] = useState(0);
  return(
    <div className="counter-container">
      <button className="likes-dislikes" onClick={()=> setlike(like+1)}>👍🏼 {like}</button>
      <button className="likes-dislikes" onClick={()=> setdislike(dislike+1)}>👎 {dislike}</button>
    </div>
  );
}


function Movie({pic,moviename,rating,para}){
  return (
  <div className="movie-container">
     <img className="movie-poster"
      src={pic}
      alt={moviename}
     />
     <div className="movie-specs">
      <h3 className="movie-name">{moviename}</h3>
      <p className="movie-rating"> {rating}</p> 
     </div>
     <p className="movie-summary">{para}</p>

     {/* Nested component - one component is using with inside the another component*/}
     <Counter/>
  </div>
)}


// function Names({name,pic}){
//   // console.log(props);
//   return(
//     <div>
//      <img height="200" 
//       src={pic}
//       alt={name}/> 
//     <h1 className="name"> Hi,{name}
//     </h1>
//     </div>
//   );
// }

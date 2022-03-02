import { Counter } from './Counter.js';
import { useState } from 'react';
import Button from '@mui/material/Button';

export function Movie({ pic, moviename, rating, para }) {

  // hide para
  const [show , setShow] = useState(true);

  // conditional styling
  // const styles = {display : show ? "block" : "none"}

  return (
    <div className="movie-container">
      <img className="movie-poster"
        src={pic}
        alt={moviename} />
      <div className="movie-specs">
        <h3 className="movie-name">{moviename}</h3>
        <p className="movie-rating">⭐{rating}</p>
      </div>

      {/* hide the movie paragraph */}
      {/* <button onClick={()=>setShow(!show)} style={{marginBottom:"10px"}} > {show ? "Hide" : "Show"} description</button> */}
      <Button variant="outlined" onClick={()=>setShow(!show)} style={{marginBottom:"10px"}} >{show ? "Hide" : "Show"} description</Button>
       
       {/* conditional styling */}
      {/* <p style={styles} className="movie-summary">{para}</p> */}

       {/* conditional rendering */}
       {show ? <p className="movie-summary">{para}</p> : ""}

      {/* Nested component - one component is using with inside the another component*/}
      <Counter />
    </div>
  );
} 

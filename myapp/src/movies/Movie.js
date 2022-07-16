import { Counter } from '../Counter.js';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import {useHistory} from 'react-router-dom';

export function Movie({ pic, moviename, rating, para ,index,deleteButton,editButton}) {

  // hide para
  const [show , setShow] = useState(true);
  const history = useHistory();

  // conditional styling
  // const styles = {display : show ? "block" : "none"}

return (
    // <div className="movie-container">
  <Card className="movie-container">
      <img className="movie-poster"
        src={pic}
        alt={moviename} />
    {/* <CardContent>  vendum yendral use pannikkollalam  *************** */}
      <div className="movie-specs">
        <h3 className="movie-name">
          {moviename}
          <IconButton onClick={()=>setShow(!show)} color="primary" style={{marginBottom:"10px"}}>
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
          </IconButton>
          <IconButton  onClick={()=> history.push("/movies/" + index)} color="primary" style={{marginBottom:"10px"}}> {/*  interpolation method --> history.push(`/movies/$(index)`)  */}
            <InfoIcon/>
          </IconButton>
          </h3>
        <p className="movie-rating">⭐{rating}</p>
      </div>

      {/* hide the movie paragraph */}
      {/* <button onClick={()=>setShow(!show)} style={{marginBottom:"10px"}} > {show ? "Hide" : "Show"} description</button> */}

      {/* material ui */}
      {/* <Button variant="outlined" onClick={()=>setShow(!show)} style={{marginBottom:"10px"}} >{show ? "Hide" : "Show"} description</Button> */}

      {/* material ui   H3 KU ADD PANNANUM  */} 
      {/* <IconButton onClick={()=>setShow(!show)} style={{marginBottom:"10px"}}>
      {show ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
      </IconButton> */}

       
       {/* conditional styling */}
      {/* <p style={styles} className="movie-summary">{para}</p> */}

       {/* conditional rendering */}
       {show ? <p className="movie-summary">{para}</p> : ""}

      {/* Nested component - one component is using with inside the another component*/}
      <cardAction className="cardAction">
        <Counter />
        {deleteButton}
        {editButton}
      </cardAction>
    {/* </CardContent> */}
    {/* </div> */}
  </Card>
  );
} 

import './App.css';
import {Movielist} from './Movielist.js'
import Button from '@mui/material/Button';
import { useState } from 'react';
import {Switch,Link,Route,Redirect,useParams} from 'react-router-dom';
import { Addcolour } from './Addcolour';
import { initial_movielist } from './initial_movielist';
import TextField from '@mui/material/TextField';
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  const [movie,setmovie] = useState(initial_movielist)

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
 
      
        <ul className='navication'>
         <li><Link to='/' className='navication_list'>Home</Link></li>
         <li><Link to='/movies' className='navication_list'>Movies</Link></li>
         <li><Link to='/color-game' className='navication_list'>Color-Game</Link></li>
        </ul>
      

      <Switch>
        {/* home path */}
        <Route exact path='/'>
          <p>Welcome to the Movie App!!!!!</p>
        </Route>

        {/* film new path,it is redirected to the "/movies" path */}
        <Route path='/films'>
          <Redirect to="/movies"/>
        </Route> 

        {/* dynamic route */}
        <Route path='/movies/:id'>
          <MoviesDetails movies={movie}/>
        </Route> 

        {/*movies path  */}
        <Route path='/movies'>
          <div className='input_fields'> 
            <TextField id="outlined-basic" color="primary" size='small' label="Enter a movie name" variant="outlined" value={moviename} onChange={(event)=>setMoviename(event.target.value)} placeholder="Enter a movie name" />
            <TextField id="outlined-basic" color="primary" size='small' label="Enter a poster URL" variant="outlined" value={pic} onChange={(event)=>setPic(event.target.value)} placeholder="Enter a poster URL" />
            <TextField id="outlined-basic" color="primary" size='small' label="Enter a movie summary" variant="outlined" value={para} onChange={(event)=>setPara(event.target.value)} placeholder="Enter a movie summary" />
            <TextField id="outlined-basic" color="primary" size='small' label="Enter a movie rating" variant="outlined" value={rating} onChange={(event)=>setRating(event.target.value)} placeholder="Enter a movie rating" />

           {/* <input value={moviename} onChange={(event)=>setMoviename(event.target.value)} placeholder="Enter a movie name"/> */}
           {/* <input value={pic} onChange={(event)=>setPic(event.target.value)} placeholder="Enter a poster URL"/> */}
           {/* <input value={para} onChange={(event)=>setPara(event.target.value)} placeholder="Enter a movie summary"/> */}
           {/* <input value={rating} onChange={(event)=>setRating(event.target.value)} placeholder="Enter a movie rating"/> */}
          </div>
          <div className='button'>
           <Button className='button_' variant="contained" onClick={Add_movie} > Add movie </Button>
          </div> 

          <Movielist movie={movie}/>

        </Route>

        {/* color game path */}
        <Route path='/color-game'>
          <Addcolour />
        </Route>
        
        {/* 404 page path */}
        <Route path="**">
          <NotFound/>
        </Route> 
      </Switch>

      {/* <Counter/> */}
      {/* <ColourBox/> */}
      {/* <Addcolour /> */}

    </div>
  );
}

export default App;

//  const styles = {width :"100%",height : "500px",objectFit:"contain"}
function NotFound(){
  const styles = {width :"100%",height : "500px",objectFit:"contain"}
 return (
   <img
   style={styles}
   src='https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif'
   alt='Not Found'
   />
 )
 }

function MoviesDetails({movies}){
  const {id} = useParams();
  const movie = movies[id];
  // console.log(movie)
  return (
  <div>
    <iframe width="70%" 
      height="620" 
      src={movie.trailer}
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
    <div className='container'>
      <h1>Movie Details {id} </h1>

      <div className='movie-specs'> 
       <h3 className="movie-name">{movie.moviename}</h3>
       <p className="movie-rating">⭐{movie.rating}</p>
      </div>
      <p className="movie-summary">{movie.para}</p>

    </div>
  </div>
  );
}
 
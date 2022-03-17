import './App.css';
import {Movielist} from './movies/Movielist.js'
import Button from '@mui/material/Button';
import { useState } from 'react';
import {Switch,Link,Route,Redirect} from 'react-router-dom';
import { Addcolour } from './color/Addcolour';
import { initial_movielist } from './movies/initial_movielist';
import TextField from '@mui/material/TextField';
import { NotFound } from './NotFound';
import { MoviesDetails } from './movies/MoviesDetails';
import { useHistory } from 'react-router-dom';
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  const [movie,setmovie] = useState(initial_movielist)



  return (
    <div className="App">
 
      
        <ul className='navication'>
         <li><Link to='/' className='navication_list'>Home</Link></li>
         <li><Link to='/movies' className='navication_list'>Movies</Link></li>
         <li><Link to='/movies/add' className='navication_list'>Add Movies</Link></li>
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

        {/* add movies */}
        <Route path='/movies/add'>
          <AddMovie movie={movie} setmovie={setmovie}/>
        </Route>

        {/* dynamic route */}
        <Route path='/movies/:id'>
          <MoviesDetails movies={movie}/>
        </Route>  

        {/*movies path  */}
        <Route path='/movies'>
          

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

function AddMovie({movie,setmovie}){
  const [moviename, setMoviename] = useState("");
  const [pic, setPic] = useState("");
  const [para, setPara] = useState("");
  const [rating, setRating] = useState("");

  const history = useHistory();

  const resetMovieForm = ()=>{
      setMoviename("")
      setPic("")
      setPara("")
      setRating("")
  };

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
    history.push('/movies')
  };
  return(
  <div>
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

 </div>
  )
}
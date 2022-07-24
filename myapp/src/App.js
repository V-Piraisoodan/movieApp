import './App.css';
import {Movielist} from './movies/Movielist.js'
import { useState } from 'react';
import {Switch,Link,Route,Redirect} from 'react-router-dom';
import { Addcolour } from './color/Addcolour';
import { initial_movielist } from './movies/initial_movielist';
import { NotFound } from './NotFound';
import { MoviesDetails } from './movies/MoviesDetails';
import { AddMovie } from './movies/AddMovie';
import { EditMovie } from './movies/EditMovie';
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


function App() {

  const [movie,setmovie] = useState(initial_movielist)
  const history = useHistory();

  return (
    <div className="App">
 
      
        {/* <ul className='navication'>
         <li><Link to='/' className='navication_list'>Home</Link></li>
         <li><Link to='/movies' className='navication_list'>Movies</Link></li>
         <li><Link to='/movies/add' className='navication_list'>Add Movies</Link></li>
         <li><Link to='/color-game' className='navication_list'>Color-Game</Link></li>
        </ul> */}

      <AppBar position="static">
        <Toolbar>
          <Button onClick={()=>history.push('/')}
            size="large" color="inherit" aria-label="Home">
            Home
          </Button>

          <Button onClick={()=>history.push('/movies')}
            size="large" color="inherit" aria-label="Movies">
            Movies
          </Button>

          <Button onClick={()=>history.push('/movies/add')}
            size="large" color="inherit" aria-label="Add Movies">
            Add Movies
          </Button>

          <Button onClick={()=>history.push('/color-game')}
            size="large" color="inherit" aria-label="Color-Game">
            Color-Game
          </Button>
        </Toolbar>
      </AppBar>
      

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

        {/* edit movie */}
        <Route path='/movies/edit/:id'>
          <EditMovie movie={movie} setmovie={setmovie}/>
        </Route>  

        {/* dynamic route */}
        <Route path='/movies/:id'>
          <MoviesDetails movies={movie}/>
        </Route>  

        {/*movies path  */}
        <Route path='/movies'>
          <Movielist movie={movie} setmovie={setmovie}/>
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


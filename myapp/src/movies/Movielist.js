import { Movie } from './Movie';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

// COUNTER IMPORT  111111111
export function Movielist({ movie , setmovie}) {
  return (
    <section className="movie-list">
      {movie.map(({ moviename, pic, rating, para, trailer },index) => (
        <Movie 
          key={index} 
          moviename={moviename} 
          pic={pic} 
          rating={rating} 
          para={para} 
          trailer={trailer} 
          index={index}
          deleteButton = {
           <IconButton onClick={()=>{
              console.log(index)
              //create a copy of movie list & remove the element from it -- filter
              const removeMovieIndex = index;
              const remainingMovies = movie.filter((mv ,idx)=>  //we pass the 2 arguments(mv & idx) value and index(removeMoviesIndex)   
                idx !== removeMovieIndex
              );
              console.log(remainingMovies,movie,removeMovieIndex)
              setmovie(remainingMovies);
              } }color="error" aria-label="delete" >
             <DeleteIcon />
            </IconButton>}
          editButton = {
            <Fab size="small" color="secondary" aria-label="edit">
             <EditIcon />
            </Fab>
          }/>
      ))}
    </section>
  ); 
}


// without material ui button

// deleteButton = {<button onClick={()=>{
//   console.log(index)
//   //create a copy of movie list & remove the element from it -- filter
//   const removeMovieIndex = index;
//   const remainingMovies = movie.filter((mv ,idx)=>  //we pass the 2 arguments(mv & idx) value and index(removeMoviesIndex)   
//     idx !== removeMovieIndex
//   );
//   console.log(remainingMovies,movie,removeMovieIndex)
//   setmovie(remainingMovies);
// }}>delete</button>}
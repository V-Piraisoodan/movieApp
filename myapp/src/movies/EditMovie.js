import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export function EditMovie({ movie, setmovie }) {

  const {id} = useParams();
  const movies = movie[id];

  const [moviename, setMoviename] = useState(movies.moviename);
  const [pic, setPic] = useState(movies.pic);
  const [para, setPara] = useState(movies.para);
  const [rating, setRating] = useState(movies.rating);
  const [trailer,setTrailer] = useState(movies.trailer);

  const history = useHistory();

  // const resetMovieForm = () => {
  //   setMoviename("");
  //   setPic("");
  //   setPara("");
  //   setRating("");
  //   setTrailer("");
  // };

  const Edit_movie = () => {
    console.log({ moviename: moviename, pic: pic, para: para, rating: rating });
    const UpdatedMovie = {
      moviename,
      pic,
      para,
      rating,
      trailer,
    };
    // we need copy of movies and update the movie
    const copyofMovies = [...movie];  //get copy of movie 
    copyofMovies[id] = UpdatedMovie;  //get which movie selected and update the data
    setmovie(copyofMovies);  // update the original data
    // resetMovieForm();
    history.push('/movies');
  };
  return (
    <div>
      <div className='input_fields'>
        <TextField id="outlined-basic" color="primary" size='small' label="Enter a movie name" variant="outlined" value={moviename} onChange={(event) => setMoviename(event.target.value)} placeholder="Enter a movie name" />
        <TextField id="outlined-basic" color="primary" size='small' label="Enter a poster URL" variant="outlined" value={pic} onChange={(event) => setPic(event.target.value)} placeholder="Enter a poster URL" />
        <TextField id="outlined-basic" color="primary" size='small' label="Enter a movie summary" variant="outlined" value={para} onChange={(event) => setPara(event.target.value)} placeholder="Enter a movie summary" />
        <TextField id="outlined-basic" color="primary" size='small' label="Enter a movie rating" variant="outlined" value={rating} onChange={(event) => setRating(event.target.value)} placeholder="Enter a movie rating" />
        <TextField id="outlined-basic" color="primary" size='small' label="Enter a movie trailer" variant="outlined" value={trailer} onChange={(event) => setTrailer(event.target.value)} placeholder="Enter a movie trailer" />

        {/* <input value={moviename} onChange={(event)=>setMoviename(event.target.value)} placeholder="Enter a movie name"/> */}
        {/* <input value={pic} onChange={(event)=>setPic(event.target.value)} placeholder="Enter a poster URL"/> */}
        {/* <input value={para} onChange={(event)=>setPara(event.target.value)} placeholder="Enter a movie summary"/> */}
        {/* <input value={rating} onChange={(event)=>setRating(event.target.value)} placeholder="Enter a movie rating"/> */}
      </div>
      <div className='button'>
        <Button className='button_' variant="contained" color="success" onClick={Edit_movie}> Save </Button>
      </div>

    </div>
  );
}

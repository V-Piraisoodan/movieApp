import { Movie } from './Movie';

// COUNTER IMPORT  111111111
export function Movielist({ movie }) {
  return (
    <section className="movie-list">
      {movie.map(({ moviename, pic, rating, para, trailer },index) => (
        <Movie key={index} moviename={moviename} pic={pic} rating={rating} para={para} trailer={trailer} index={index}/>
      ))}
    </section>
  ); 
}
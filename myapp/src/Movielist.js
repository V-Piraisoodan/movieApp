import { Movie } from './Movie';

// COUNTER IMPORT  111111111
function Movielist({ movie }) {
  return (
    <section className="movie-list">
      {movie.map(({ moviename, pic, rating, para }) => (
        <Movie moviename={moviename} pic={pic} rating={rating} para={para} />
      ))}
    </section>
  );
}
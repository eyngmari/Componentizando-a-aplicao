import React from "react";
import { GenreResponseProps, MovieProps } from "../App";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  movies: Array<MovieProps>;
  selectedGenre: GenreResponseProps;
}

export function Content(props: ContentProps) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
      </header>


      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}

export const MemoizeContent = React.memo(Content)
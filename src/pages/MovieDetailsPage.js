import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import MovieCredits from "../components/movie/MovieCredits";
import MovieSimilar from "../components/movie/MovieSimilar";
import MovieVideos from "../components/movie/MovieVideos";
import { fetcher, tmdbAPI } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <div className="pb-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 opacity-70 bg-black"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${tmdbAPI.imageOriginal(backdrop_path)})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={tmdbAPI.imageOriginal(poster_path)}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center gap-x-5 mb-10">
          {genres.map((item) => (
            <span
              className="py-2 px-4 border border-primary text-primary rounded-lg"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center text-sm leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits />
      <MovieVideos />
      <MovieSimilar />
    </div>
  );
};

export default MovieDetailsPage;

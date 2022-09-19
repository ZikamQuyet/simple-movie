import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

const MovieCredits = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "credits"), fetcher);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={tmdbAPI.imageOriginal(item.profile_path)}
              className="w-full h-[350px] object-cover rounded-lg mb-3"
              alt=""
            />
            <h3 className="text-center text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCredits;

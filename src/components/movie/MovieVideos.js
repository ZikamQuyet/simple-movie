import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

const MovieVideos = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "videos"), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-10">Trailer</h2>
      <div className="flex flex-col gap-10">
        {results.slice(0, 2).map((item) => (
          <div key={item.id} className="w-full max-w-[1280px] mx-auto">
            <h3 className="mb-5 text-xl font-medium p-3 bg-secondary inline-block rounded-lg">
              {item.name}
            </h3>
            <div className="aspect-video">
              <iframe
                width="864"
                height="486"
                src={`https://www.youtube.com/embed/${item.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-fill"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieVideos;

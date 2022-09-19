import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button";

const BannerItem = ({ item }) => {
  const { title, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-black rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="content absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="grid grid-cols-2 grid-rows-2 max-w-[200px] lg:grid-cols-3 lg:grid-rows-1 gap-2 items-center gap-x-3 mb-8">
          <span className="col-span-1 row-span-1 py-2 px-4 border border-white rounded-md ">
            Adventure
          </span>
          <span className="col-span-1 row-span-1 py-2 px-4 border border-white rounded-md ">
            Adventure
          </span>
          <span className="col-span-1 row-span-1 py-2 px-4 border border-white rounded-md ">
            Adventure
          </span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch Now</Button>
      </div>
    </div>
  );
};

export default BannerItem;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/config";
import { deleteMovie } from "../store/movieSlice";
import { AiOutlineDelete } from "react-icons/ai";

const MovieTable: React.FC = () => {
  const { movies } = useSelector((state: RootState) => state.movie);
  const dispatch = useDispatch();
  
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedMovies = [...movies]
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.rating - b.rating;
      }
      return b.rating - a.rating;
    });

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className="p-4 mt-5ّ">
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name Movie</th>
            <th className="border px-4 py-2">Gener</th>
            <th 
              className="border px-4 py-2 cursor-pointer" 
              onClick={toggleSortOrder}
            >
              Rating {sortOrder === 'asc' ? '↑' : '↓'}
            </th>
            <th className="border px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {sortedMovies.map((movie) => (
            <tr key={movie.id}>
              <td className="border px-4 py-2 text-center">{movie.title}</td>
              <td className="border px-4 py-2 text-center">{movie.genre}</td>
              <td className="border px-4 py-2 text-center">{movie.rating}</td>
              <td className="border px-4 py-2 flex justify-center">
                <button
                  className="flex gap-x-2 items-center px-6 py-3 rounded-lg bg-red-500 text-white"
                  onClick={() => dispatch(deleteMovie(movie.id))}
                >
                  <AiOutlineDelete className="size-6" /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;

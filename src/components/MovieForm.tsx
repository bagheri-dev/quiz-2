import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/movieSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(3).max(100),
  genre: z.string().min(3).max(100),
  rating: z.number().min(1).max(10),
});

type FormFields = z.infer<typeof schema>;

const MovieForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      title: "",
      genre: "",
      rating: undefined,
    },
    resolver: zodResolver(schema),
  });

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState<number | undefined>(undefined);
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (title && genre && rating !== undefined) {
      dispatch(
        addMovie({ id: Date.now(), title, genre, rating: Number(rating) })
      );
      setTitle("");
      setGenre("");
      setRating(undefined);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit(handleAddMovie)}>
        <div className="flex gap-x-4 p-4">
          <div>
            <input
              {...register("title")}
              className="border p-2 m-2"
              type="text"
              placeholder="Name movie"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("genre")}
              className="border p-2 m-2"
              type="text"
              placeholder="genre movie"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
            {errors.genre && (
              <p className="text-red-500">{errors.genre.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("rating", { valueAsNumber: true })}
              className="border p-2 m-2"
              type="text"
              placeholder="Enter rating (0-10)"
              value={rating ?? ""}
              onChange={(e) =>
                setRating(e.target.value ? Number(e.target.value) : undefined)
              }
            />
            {errors.rating && (
              <p className="text-red-500">{errors.rating.message}</p>
            )}
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 m-2">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;

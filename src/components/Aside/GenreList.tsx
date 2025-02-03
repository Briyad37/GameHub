import useGenre from "../../hooks/useGenre";

export default function GenreList() {
  const { genres } = useGenre();

  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

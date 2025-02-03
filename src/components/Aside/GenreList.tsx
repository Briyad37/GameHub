import useGenre from "../../hooks/useGenre";

export default function GenreList() {
  const { data } = useGenre();

  return (
    <>
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </>
  );
}

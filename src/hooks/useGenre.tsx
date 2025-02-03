import UseData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenre = () => UseData<Genre>("genres");

export default useGenre;

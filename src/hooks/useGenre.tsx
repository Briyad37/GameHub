import UseData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => UseData<Genre>("genres");

export default useGenre;

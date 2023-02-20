import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./querys";
import { useLazyQuery } from "@apollo/client";
import { FILTER_CHARACTER_ID } from "./querys";
import { typeCharacterInfo } from "./types";

// este custom hook se crea con el objetivo de que los componentes no sepan de donde se obtiene la informacion
// Su uso es exclusivamente para obtener la informacion de la API
export const useCharacters = () => {
  // esta linea me devuele la informacion de todos los personajes
  const response = useQuery(GET_CHARACTERS);

  //  me permite obtener una funcion para filtrar personajes
  const [getCharacter] = useLazyQuery<{
    character: typeCharacterInfo;
  }>(FILTER_CHARACTER_ID);

  return {
    response,
    getCharacter,
  };
};

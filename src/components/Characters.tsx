import { typeCharacter, typeCharacterInfo } from "../Characters/types";

import { useCharacters } from "../Characters/useCharacters";

interface TypeProps {
  character: typeCharacter;
  handleCharacter: (value: typeCharacterInfo) => void;
}

function Characters({ character, handleCharacter }: TypeProps) {
  // el getCharacter se encarga de hacer la query justo cuando yo quiero
  // en result queda la respuesta de esa query
  const { getCharacter } = useCharacters();

  const showCharacter = async (id: number) => {
    const { data, error } = await getCharacter({
      variables: { idcharacter: id },
    });
    if (error)
      return (
        <h1 className="error">
          Hubo un error al momento de obtener la informacion
        </h1>
      );
    if (!data) return <h1>No hay Informacion</h1>;
    if (data) {
      handleCharacter(data.character);
    }
  };

  return (
    <div
      className="cardCharacter"
      onClick={() => {
        showCharacter(character.id);
      }}
    >
      <p>{character.name}</p>
      <img src={character.image} alt="imagen" />
    </div>
  );
}

export default Characters;

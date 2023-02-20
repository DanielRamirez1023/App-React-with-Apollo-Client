import React from "react";
import { typeCharacter, typeCharacterInfo } from "../Characters/types";
import Characters from "./Characters";
import { useCharacters } from "../Characters/useCharacters";

function ListCharacters() {
  const [content, setContent] = React.useState<"list" | "character">("list");
  const [character, setCharacter] = React.useState<typeCharacterInfo | null>(
    null
  );
  const {
    response: { data, loading, error },
  } = useCharacters();

  const handleCharacter = (character: typeCharacterInfo) => {
    setContent("character");
    setCharacter(character);
  };

  if (error)
    return (
      <>
        <h1 className="error">Error en la consulta de la API</h1>
        {console.error("error en la consulta de la api")}
      </>
    );

  if (content === "list") {
    return (
      <section className="sectionCharacters">
        <h1>personajes rick and morty</h1>
        <div className="listCharacters">
          {loading ? (
            <h1>cargando...</h1>
          ) : (
            data.characters.results.map((item: typeCharacter) => (
              <Characters
                key={item.id}
                character={item}
                handleCharacter={handleCharacter}
              />
            ))
          )}
        </div>
      </section>
    );
  } else if (content === "character") {
    return (
      <div className="cardCharacterInfo ">
        <div className="content-info">
          <img src={character?.image} alt="imagen" width={"40%"} />
          <div className="text">
            <p>
              <b>Nombre:</b> {character?.name}
            </p>
            <p>
              <b>Especie:</b> {character?.species}
            </p>
            <p>
              <b>Estatus: </b>
              {character?.status}
            </p>
            <p>
              <b>Genero: </b>
              {character?.gender}
            </p>
            <p>
              <b>Fecha Creacion: </b>

              {character?.created}
            </p>
          </div>
        </div>
        <button onClick={() => setContent("list")}>volver</button>
      </div>
    );
  } else {
    return <>No existe esta informacion</>;
  }
}

export default ListCharacters;

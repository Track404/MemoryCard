import { useEffect } from 'react';
import { useState } from 'react';
/* eslint-disable react/prop-types */

export default function Card({ url, name, onClick }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [url]);

  return (
    data && (
      <>
        <div id={data.id} className="Card" onClick={onClick}>
          <h2>{name}</h2>
          <img src={data.sprites.front_default} alt="PokemonImage" />

          <div>
            <h3>Abilities :</h3>
            <ul>
              {data.abilities.map((info) => {
                return <li key={crypto.randomUUID()}>{info.ability.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </>
    )
  );
}

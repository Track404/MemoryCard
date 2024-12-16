import { useEffect, useState } from 'react';
import Card from './Card';
export default function Game() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=12', { mode: 'cors' })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    data && (
      <div className="containerCard">
        {data.results.map((info) => {
          return (
            <Card key={crypto.randomUUID()} name={info.name} url={info.url} />
          );
        })}
      </div>
    )
  );
}

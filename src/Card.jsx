import { useEffect } from 'react';
import { useState } from 'react';
/* eslint-disable react/prop-types */

export default function Card({ url, name }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((json) => setData(json.sprites.front_default));
  }, [url]);
  return (
    data && (
      <>
        <div className="Card">
          <h2>{name}</h2>
          <img src={data} alt="PokemonImage" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quisquam dignissimos accusantium cumque sunt impedit quibusdam velit
            mollitia asperiores consequatur praesentium reprehenderit recusandae
            aperiam porro, ducimus dolores doloremque? Minima, ab!
          </p>
        </div>
      </>
    )
  );
}

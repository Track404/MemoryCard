import { useEffect, useState } from 'react';
import Card from './Card';
export default function Game() {
  const [topScore, setTopScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const [clickCardName, setClickCardName] = useState([]);

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=12', { mode: 'cors' })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  function cardClick(e) {
    let theId = e.currentTarget.id;
    if (clickCardName.includes(theId)) {
      setCurrentScore(0);
      setClickCardName([]);
    } else {
      setCurrentScore(currentScore + 1);
      setClickCardName([...clickCardName, theId]);
    }
  }
  return (
    data && (
      <>
        <div className="scoreBoard">
          <div>
            <h2>Top Score</h2>
            <p>{topScore}</p>
          </div>
          <div>
            <h2>Current Score</h2>
            <p>{currentScore}</p>
          </div>
        </div>
        <div className="containerCard">
          {data.results.map((info) => {
            return (
              <Card
                key={info.name}
                name={info.name}
                url={info.url}
                onClick={cardClick}
              />
            );
          })}
        </div>
      </>
    )
  );
}

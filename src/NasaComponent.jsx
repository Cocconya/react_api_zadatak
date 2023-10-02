import { useState, useEffect } from 'react';

function Nasa() {
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((response) => response.json())
      .then((data) => setNasaData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!nasaData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{nasaData.title}</h2>
      <img src={nasaData.url} alt={nasaData.title} />
      <p>{nasaData.explanation}</p>
    </div>
  );
}

export default Nasa;

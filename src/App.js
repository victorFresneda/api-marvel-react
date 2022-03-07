import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d96fdd52460971b5c013f46813f38e32&hash=682ec8bbf7d13a9575891c593edba62a`
      )
      .then((res) => {
        setPersonajes(res.data.data.results);
      })
      .catch();
  }, []);

  return (
    <div className="App bg-secondary ">
      <h1 className="text-dark">Marvel characters</h1>

      <div className="row row-cols-1 row-cols-md-4 g4 bg-dark p-5">
        {personajes.map((per) => (
          <div className="col  mt-2 p-3" key={per.id}>
            <div
              className="card bg-secondary border border-warning align-items-center text-warning rounded p-3"
              style={{ width: "18rem", height: "18rem" }}
            >
              <img
                src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                className="card-img-top border border-dark rounded-circle"
                style={{ width: "80%", height: "80%" }}
              />
              <div className="card-body">
                <p className="card-text">{per.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

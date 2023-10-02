import "./App.css";
import Rutas from "./routes/Rutas";

function App() {
  const players = [
    {
      id: 1,
      nombre: "Juan Pérez",
      club: "FC Barcelona",
      edad: 28,
    },
    {
      id: 2,
      nombre: "Luis Rodríguez",
      club: "Real Madrid",
      edad: 25,
    },
    {
      id: 3,
      nombre: "Martina González",
      club: "Paris Saint-Germain",
      edad: 23,
    },
    {
      id: 4,
      nombre: "Diego Silva",
      club: "Manchester United",
      edad: 30,
    },
    {
      id: 5,
      nombre: "Ana Torres",
      club: "Bayern Munich",
      edad: 27,
    },
  ];

  const devolverNombres = (players, campo) => {
    return players.map((item) => {
      let newItem = {};
      // eslint-disable-next-line array-callback-return
      campo.map((key) => {
        if (item[key]) {
          newItem = { ...newItem, [key]: item[key] };
          return newItem
        }
      });
      console.log(newItem);
      item = newItem;
      return item;
    });
  };
  console.log(devolverNombres(players, ["club", "nombre", "jova","id"]));

  return (
    <div className="App">
      <Rutas />
    </div>
  );
}

export default App;

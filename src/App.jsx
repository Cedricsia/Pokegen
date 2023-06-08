import "./style/App.css";
import Header from "./Components/Header";
import Logo from "./Components/Logo";
import AppRoute from "./routes/AppRoute";
import { useEffect, useState } from "react";

function App() {
  const [type, setType] = useState([]);
  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
      .then((response) => response.json())
      .then((data) => setType(data))
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);
  // console.log(type);

  return (
    <div>
      <Logo />
      <Header />
      <AppRoute type={type} />
    </div>
  );
}

export default App;

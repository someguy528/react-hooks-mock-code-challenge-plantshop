import React, {useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  function handleAddPlant(newPlant){
    const newPlants = [...plants, newPlant];
    setPlants(newPlants);
    console.log(newPlants)
  };

  const searchedPlants = plants.filter((plant) => {
    return search === "" || plant.name.toLowerCase().includes(search.toLowerCase())});


  useEffect(()=> {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => {
      setPlants(data)
    })
  }, [])

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearch={setSearch} />
      <PlantList plants={searchedPlants} />
    </main>
  );
}

export default PlantPage;

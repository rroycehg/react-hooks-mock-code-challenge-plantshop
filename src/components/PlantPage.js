import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage(props) {
  const [searchPlant, setSearchPlant] = useState("")

  function handleSearch(event) {
     setSearchPlant(event.target.value.toLowerCase())
  }

  const filteredPlants = () => {
    
    return props.plants.filter((plant) => plant.name.toLowerCase().includes(searchPlant))
  }
  
  return (
    <main>
      <NewPlantForm addToPlantList={props.addToPlantList}/>
      <Search  handleSearch={handleSearch} searchPlant={searchPlant} />
      <PlantList plants={filteredPlants()}  deleteFromPlantList={props.deleteFromPlantList} updatePlantList={props.updatePlantList}/>
    </main>
  );
}

export default PlantPage;

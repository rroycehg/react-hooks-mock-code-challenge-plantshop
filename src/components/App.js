import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  

const addToPlantList = (newPlant) => {
    let newPlantArray = [...plants, newPlant]
    // newPlantArray.shift(newPlant)
     setPlants(newPlantArray)
   }

 const deleteFromPlantList = (id) => {
   let newPlantArray = plants.filter((plant) => plant.id !== id)
   setPlants(newPlantArray)
 }
 
 const updatePlantList = (updatedPlant) => {
   let updatedPlantArray = plants.map((plant) => {
     if (plant.id === updatedPlant.id) {
       return updatedPlant
     } else {
       return plant
     }
   })
     setPlants(updatedPlantArray)
 }

   useEffect(() =>{
 fetch("http://localhost:6001/plants")
  .then(res => res.json())
  .then(plants => setPlants(plants))
}, [])



return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} 
                 addToPlantList={addToPlantList} 
                 deleteFromPlantList={deleteFromPlantList}
                 updatePlantList={updatePlantList} />
    </div>
  );
}

export default App;

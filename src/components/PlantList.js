import React from "react";
import PlantCard from "./PlantCard";

function PlantList(props) {
 const plantsArray = props.plants.map((plant) => (
                  <PlantCard key={plant.id} plant={plant} 
                             deleteFromPlantList={props.deleteFromPlantList}
                             updatePlantList={props.updatePlantList} /> ))

                           
  return (
    <ul className="cards">
     {plantsArray}
      </ul>
  );
}

export default PlantList;

import React, {useState} from "react";

function PlantCard({plant, deleteFromPlantList, updatePlantList}) {
   const { id, name, image, price } = plant
  
  const [favorite, setFavorite] = useState(false)
   const [isinStock, setIsinStock] = useState(false)
   const [updatedPrice, setUpdatedPrice] = useState(price)
  
  function handleFavorite() {
    return setFavorite(!favorite)
  }

  function handleStock() {
    return setIsinStock(!isinStock)
  }

  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE", 
  })
    deleteFromPlantList(id)
}


const handleUpdatedPlant = (e) => {
  e.preventDefault()
  fetch(`http://localhost:6001/plants/${id}`, {
    method: "PATCH", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      price: updatedPrice
    }),
})
    .then(res => res.json())
    .then(updatedPlant => updatePlantList(updatedPlant))
} 

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isinStock ? (
        <button onClick={handleStock}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleStock}>In Stock</button>
      )}
      {favorite ? <button onClick={handleFavorite}>⭐</button> : <button onClick={handleFavorite}>☆</button> }
      <button onClick={handleDelete}>🗑️</button>
      <form onSubmit={handleUpdatedPlant}>
        <input 
         type="number" 
         step="0.01" 
         placeholder="New Price" 
         value={updatedPrice} 
         onChange={(e) => setUpdatedPrice(parseFloat(e.target.value))} />
        <button type="submit"> Update Price</button>
      </form>
  
  </li>
  );
}

export default PlantCard;

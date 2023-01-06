import React, {useState} from "react";

function PlantCard({plant}) {
  const [isInStock, setInStock] = useState(true)
  const {id, name, image, price} = plant

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock === true ? (
        <button onClick={() => setInStock((isInStock) => !isInStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setInStock((isInStock) => !isInStock)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

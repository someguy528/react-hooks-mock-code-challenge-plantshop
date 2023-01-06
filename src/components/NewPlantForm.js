import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {

  const [plantForm, setPlantForm] = useState({
    name: "",
    image: "",
    price: 0
  });

  function handlePlantFormChange(event){
    const name = event.target.name;
    let value = event.target.value;
    if(name === "price"){
      value = parseFloat(value)
    }
    setPlantForm({
      ...plantForm,
      [name] : value
    })
    console.log(plantForm)
  };

  function handlePlantFormSubmit(event){
    event.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(plantForm)
    })
    .then(resp => resp.json())
    .then(()=>{
      onAddPlant(plantForm)
    })
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" value={plantForm.name} onChange={handlePlantFormChange} placeholder="Plant name" />
        <input type="text" name="image" value={plantForm.image} onChange={handlePlantFormChange} placeholder="Image URL" />
        <input type="number" name="price" value={plantForm.price} onChange={handlePlantFormChange} step="0.01" placeholder="Price" />
        <button type="submit" onClick={handlePlantFormSubmit} >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  //console.log(props);

  const [ nameInput, setNameInput ] = useState("")
  const [ imageInput, setImageInput ] = useState("")
  const [ caloriesInput, setCaloriesInput ] = useState(0)
  const [ servingsInput, setServingsInput ] = useState(0)

  const addFood = (event) => {
    event.preventDefault();
    console.log("try to add")
    //Guardo valores en var
    const newFoodForm = {
        name: nameInput,
        image: imageInput,
        calories: caloriesInput,
        servings: servingsInput
    }

    props.addFood(newFoodForm)

  };
  const handleChangeName = (event) => {
    setNameInput(event.target.value)
  }
  const handleChangeImage = (event) => {
    setImageInput(event.target.value)
  }
  const handleChangeCalories = (event) => {
    setCaloriesInput(event.target.value)
  }
  const handleChangeServings = (event) => {
    setServingsInput(event.target.value)
  }

  return (
    <div style={{ textAlign:"start", margin:"40px"}}>
    <form>
      <Divider >Add Food Entry</Divider>

      <label>Name</label>
      <Input value={nameInput} type="text" onChange={handleChangeName} />

      <label>Image</label>
      <Input value={imageInput} type="text" onChange={handleChangeImage} />

      <label>Calories</label>
      <Input value={caloriesInput} type="text" onChange={handleChangeCalories} />

      <label>Servings</label>
      <Input value={servingsInput} type="text" onChange={handleChangeServings} />

      <button type="submit" onClick={addFood}>Create</button>
    </form>
    </div>
  );
}

export default AddFoodForm;

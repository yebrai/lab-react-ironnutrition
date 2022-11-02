//Esta bien editar la lista a mostrar y la de "backup" para mostrar?
//Repasar flujo de recuperacion de vista con el filter
//No puedo añadir imagenes externas al src?

import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import LogoImg from './logo192.png'

import { Button } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodListToShow, setFoodListToShow] = useState(foods);
  //console.log(foodList)

  const [formIsShowing, setFormIsShowing] = useState(false);
  //Para renderizar o no el form

  const addFood = (newFood) => {
    console.log('añadiendo', newFood);
    const copy = [...foodList];
    copy.push(newFood);
    setFoodList(copy);
  };

  const filterFood = (filterQuery) => {
    console.log(filterQuery);
    const filteredfood = foodList.filter((eachFood) => {
      return eachFood.name.startsWith(filterQuery);
    });
    setFoodListToShow(filteredfood);
  };

  const removeFood = (foodToRemove) => {
    const filteredList = foodListToShow.filter((eachFood) => {
      return eachFood.name !== foodToRemove;
      //foodToRemove lo recibo directamente con el name del item
    });
    console.log('deleting', foodToRemove);
    setFoodList(filteredList);
    setFoodListToShow(filteredList);
  };

  const toggleForm = () => {
    setFormIsShowing(!formIsShowing)
   // console.log(formIsShowing)
  };

  return (
    <div className="App">
      {formIsShowing && <AddFoodForm addFood={addFood} />}
      <Button
        type="primary"
        ghost
        style={{ display: 'flex', margin: '40px' }}
        onClick={toggleForm}
      >
        Add new Food
      </Button>
      <div style={{ margin: '30px' }}>
        <h2 style={{ margin: '30px' }}>
          Searcher <hr />
        </h2>
        <h4 style={{ textAlign: 'start' }}>Search</h4>
        <Search filterFood={filterFood} />
      </div>
      <h2>
        Food List <hr />
      </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: '30px',
          justifyContent: 'center',
        }}
      >
        {foodListToShow.length !== undefined ?
         foodListToShow.map((eachFood, index) => {
          return (
            <FoodBox
              key={eachFood.name + index}
              eachFood={eachFood}
              removeFood={removeFood}
            />
          );
        })
        :
        <div>
        <p>Oops! There is no more content to show :(</p>
        <img src={LogoImg} alt="" />
        </div>
        }
      </div>
    </div>
  );
}

export default App;

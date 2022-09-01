import logo from './images/Swiggy.png';
import './App.css';
import Food from './Components/food'
 import ChineseNoodle from './images/ChineseNoodle.jpg';
import Chicken_Fried_rice from './images/Chicken_Fried_rice.webp';
import Lianos_pizza  from './images/Lianos_pizza.webp';
import MacDonalds  from '../src/images/MacDonalds.webp';
import BorderParotta  from '../src/images/Border Parotta.webp';
import KulfiIcecream  from '../src/images/Kulfi.webp';
import Rating from '../src/images/star.png';
import { useState } from 'react';
import Form from './Components/form';
import Foodlist from './FoodList';






function App() { 
 

   const foods = [
    // {
    //   id:'it1',
    //   name: "ChineseNoodle",
    //   category1: "Noodle" ,
    //   category2:"Vegetarian",
    //   price: 250,
    //   rating: Rating,
    //   img: ChineseNoodle

    // },
    // {
    //   id:'it2',
    //   name: "Chicken_Fried_rice",
    //   category1: "Friedrice",
    //   category2:"Non-Vegetarian",
    //   price: 200,
    //   rating: Rating,
    //   img: Chicken_Fried_rice

    // },
    // {
    //   id:'it3',
    //   name: "Lianos_pizza",
    //   category1: "Pizza",
    //   category2:"Veg",
    //   price: 500,
    //   rating: Rating,
    //   mg: Lianos_pizza

    // }
  ]
  const [items,setItem]=useState([...foods]);
  const addFoodHandler = (foodItem)=> {
    // console.log(event.target.value);
    setItem((previousState) => {
        return [ foodItem,  ...previousState]
      
    })
     console.log(foodItem)
   // setFoodItem({food:event.target.value});
  }
  return (
    
    <div className='App'>
      <div className='header'>
        <div className='Container'>
          <div className='header-Wrapper'>

            <h1 className='logo'> 
            <img src={logo} ></img>
              
              </h1>
            <nav>
              <a href='#'>Login</a>
              <button><a href='#' id='btn'>Sign Up</a></button>
            </nav>



        </div>
      </div>

      <div className='body'>
        <div className='Container'>
          <div className='Food-Wrappper'>

            
      {/* {
        foods.map((food)=>{
          return <Food key = {Math.random()}
          name={food.name}
          category1={food.category1}
          category2={food.category2}
          price={food.price}
          rating={food.rating}
          img={food.img}/>
          
          
          })} */}


        
     
    
  
          <Form onFoodHandler={addFoodHandler} ></Form>
          <Foodlist items={items}/>
          
      
        </div>
        </div>
      </div>
</div>

  </div>
  );}





export default App;

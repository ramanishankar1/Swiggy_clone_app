
import FoodItem from './FoodItem'
function Items(props){
  

         

    

    return(
        <>
            {/* <FoodItem name={props.items[0].name} category1={props.items[0].category1} category2={props.items[0].category2}price={props.items[0].price}/>
            <FoodItem name={props.items[1].name} category1={props.items[1].category1} category2={props.items[1].category2}price={props.items[1].price}/> */}
       {
        props.items.map((foodItem) => {
            return <FoodItem key={foodItem.id} name = {foodItem.name} category1={foodItem.category1}  category2={foodItem.category2} price={foodItem.price} img ={foodItem.img}/>
            
        })
    }
       
       </>
    )

  
   

}
export default Items;

import { useState } from 'react';
import './Food_item.css'
import Lianos_Pizza from './images/Lianos_pizza.webp';

 
//         return (
//             <div className="Container">
//                 <img src={Lianos_Pizza} alt={props.name}></img>
//                 <div className="item">{props.name} </div>
//                 <div className="item">{props.category1} </div>
//                 <div className="item">{props.category2} </div>
//                 <div className="item">{props.price} </div>
//                 <div className="item">{props.img} </div>
//                 <button className="applyOffer" onClick={applyOffer}>Apply offer</button>


//                 </div>
//    ) }
// }


function FoodItem(props) {

    const [price, setPrice] = useState(props.price)

    const applyOffer = () => {

        setPrice(props.price / 2);

    };

    return (
        <div className="Container">
            <img src={Lianos_Pizza} alt={props.name}></img>
            <div className="item">{props.name} </div>
            <div className="item">{props.category1} </div>
            <div className="item">{props.category2} </div>
            <div className="item">Rs:{price} </div>
            <div className='rating'>Rating:<span> </span>
                <span className='rateLevel'>
                    <div><img src={props.rating} className="rate" alt="star"></img></div>
                    <div><img src={props.rating} className="rate1" alt="star"></img></div>                            <div><img src={props.rating} className="rate2" alt="star"></img></div>
                    <div><img src={props.rating} className="rate3" alt="star"></img></div>
                    <div><img src={props.rating} className="rate4" alt="star"></img></div>
                </span>
                </div>
                <div className="item">{props.img} </div>
                <button className="applyOffer" onClick={applyOffer}>Apply offer</button>


            </div>

)}
            export default FoodItem;
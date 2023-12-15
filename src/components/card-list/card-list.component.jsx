import { Component } from "react";
import Card from '../card/card.component';
import './card-list-style.css';


class CardList extends Component {

    render() {

    console.log(this.props.monsters);

    const {monsters} = this.props;

        return (

            <div className='card-list'>

                {monsters.map((monster) => {

                    return (

                        <Card monster={monster}/>
                        
                    );

                })}

            </div>

        );
    }

    }

export default CardList;

//the map method is a method that allows you to iterate over
   // every single element from left to right inside of your array.
    // and gives you back new array 
        
    /* Inside of our code, our map function is always going to now just generate 
        a new h1, every time a new monster is added inside.
        Or it's at least going to do it for every single monster inside of our array.          
    
        */
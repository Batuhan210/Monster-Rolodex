import { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css';

class App extends Component {

    constructor() {     // runs first

        super();

      this.state = {

        monsters:[],                                  // empty array or empty list. 

      searchField: ''

          };

        }

      
// LIFECYCLE
        componentDidMount() {                                   // Mounting is the first time a component gets placed onto the DOM
                                                                          // so the first time react renders a component onto the page that it mounting.
          fetch('https://jsonplaceholder.typicode.com/users')                 // API request

          .then((response) => response.json())                         // So remember whatever got returned from response, JSON is going
                                                                      // to get passed to this users as the argument of our callback.
          .then((users)=> this.setState(() =>
          
          {

            return {monsters: users};

            }
          
          )

        );

      }

onSearchChange = (event) => {
  
// Lower case sensitive 
  const searchField = event.target.value.toLocaleLowerCase();

  this.setState(() => {           // render is runs again when set state is run.

    return {searchField};

    });

  };


    render() {                    // runs second

// OPTIMIZATION: 
      const {monsters, searchField} = this.state;

      const {onSearchChange} = this;

      const filteredMonsters = monsters.filter((monster) => {      

      return monster.name.toLocaleLowerCase().includes(searchField);
        
          
        });

  return ( 
    
  <div className='App'>

    <h1 className='app-title'>Monster Rolodex</h1>

  <SearchBox
  className='monsters-search-box'
  onChangeHandler={onSearchChange}
  placeholder='search monsters' />



  <CardList monsters={filteredMonsters} />

  </div>
    

  );

}

}

export default App;
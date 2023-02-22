import { useState, useEffect } from "react";
import './App.css';

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox placeholder="search monsters" className="search-box" onChangeHandler={onSearchChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users").then(response => {
//       return response.json()
//     }).then(users => {
//       this.setState(() => {
//         return { monsters: users }
//       })
//     })
//   }
  
//   /**
//    * We need to move that anonymous function here,
//    * because it doesn't get stored in memory, 
//    * causing React to redefine them every ttime the
//    * component re-renders.
//    */
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase()
//     this.setState({ searchField })
//   }

//   render() {
//     // This makes the code more human readable
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLowerCase().includes(searchField)
//     })

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox placeholder="search monsters" className="search-box" onChangeHandler={onSearchChange}/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;

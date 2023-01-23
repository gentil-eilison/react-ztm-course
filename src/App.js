import { Component } from "react";
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      return response.json()
    }).then(users => {
      this.setState(() => {
        return { monsters: users }
      },
      () => {
      }
      )
    })
  }
  
  /**
   * We need to move that anonymous function here,
   * because it doesn't get stored in memory, 
   * causing React to redefine them every ttime the
   * component re-renders.
   */
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState({ searchField })
  }

  render() {
    // This makes the code more human readable
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <input type="search" placeholder="search monsters" className="search-box" onChange={onSearchChange}/>
        {filteredMonsters.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;

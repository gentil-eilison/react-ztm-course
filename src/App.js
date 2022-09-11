import { Component } from "react";
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
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

  render() {
    return (
      <div className="App">
        <input type="search" placeholder="search monsters" className="search-box" onChange={(event) => {
          const searchString = event.target.value.toLowerCase()
          console.log(!!event.target.value)
          let filteredMonsters = []

          if (!searchString) {
            filteredMonsters = this.state.monsters
          } else {
            filteredMonsters = this.state.monsters.filter(monster => {
              return monster.name.toLowerCase().includes(searchString)
            })

          }

          this.setState({ monsters: filteredMonsters })
        }}/>
        {this.state.monsters.map(monster => {
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

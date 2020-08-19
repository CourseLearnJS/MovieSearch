import React from 'react';
import Search from './components/Search'
import Movies from './components/Movies'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      alert: ''
    }
  }
  
  setMovies = ({movies: value}) => {
    this.setState({movies:value})
  }

  setAlert = ({alert: value}) => {
    this.setState({alert:value})
  }
  render() {
   return(
    <div>
      <Search setMovies={this.setMovies} setAlert={this.setAlert}/>
      {this.state.alert !== "" && <div className="alert"><h3>{this.state.alert}</h3></div>}
      {this.state.movies !== [] && this.state.movies.map(movie => <Movies key={movie.id}  movie={movie}/>)}
    </div>
   )
  };
}

export default App;

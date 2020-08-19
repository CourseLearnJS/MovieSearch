import React from 'react'
import Axios from 'axios'
import '../App.css'

class Search extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        query: "",
      }
    }

    getMovie = async() => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=69679df007ab6960a7a04cf8ed727ec4&language=en-US&query=${this.state.query}&page=1&include_adult=true`;
      if( this.state.query !== ''){   
        const result = await Axios.get(url);
        if(!result.data.results[0]){
          return this.props.setAlert({alert: "No movies with this name!"})
        }
        this.props.setMovies({movies: result.data.results})
        this.props.setAlert('')
        this.state.query = ''

     } else {
      return this.props.setAlert({alert: "Search a movie please!"})
     }
    }

      handleChange = (event) => {
          this.setState({query: event.target.value})
      }

      handleSubmit = (event) => {
          event.preventDefault();
          this.getMovie();
      }
    render() {
        return(        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Movies Search</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSearch" 
            aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span> 
          </button>

          <div className="collapse navbar-collapse" id="navbarSearch">
              <form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={this.handleSubmit}> 
              <input className="form-control searchInput" type="text"
               placeholder="Search" value={this.state.query} onChange={this.handleChange} />
              <button className="btn btn-light my-2 my-sm-0 searchBtn" type="submit"><i className="fas fa-search"></i></button> 
              </form>
          </div>
        </nav>
        
    );
    }
}

export default Search;
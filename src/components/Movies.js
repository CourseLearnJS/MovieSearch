import React from 'react'
import Axios from 'axios'
import '../App.css'

class Movies extends React.Component {
   imgSrc = "https://image.tmdb.org/t/p/w185";
   videoUrl = `http://api.themoviedb.org/3/movie/${this.props.movie.id}/videos?api_key=69679df007ab6960a7a04cf8ed727ec4`
  
   getTrailer = async() => {
    const play = await Axios.get(this.videoUrl);
    
    if(play.data.results[0]){
        const trailerUrl = `https://www.youtube.com/watch?v=${play.data.results[0].key}`
        window.open(trailerUrl, '_blank')
    } else{
      window.open(`https://www.themoviedb.org/movie/${this.props.movie.id}`, '_blank')
    }

   }

   handleClick = () => {
       this.getTrailer();
   }

    render() {
        return(
        <div className="container">
          <div className="card">
              <img src={this.imgSrc + this.props.movie.poster_path} className="card-img-top" alt="..."  height="350"/>
              <div className="card-body">
                  <h5 className="card-title">{this.props.movie.title}</h5>
                  <p className="card-text">{this.props.movie.overview}</p>
                  <a type="button" onClick={this.handleClick} className="btn btn-success"><i class="fas fa-play" ></i> Play</a>
                  <a href={`https://www.themoviedb.org/movie/${this.props.movie.id}`}  target="_blank" className="btn btn-light">View</a>
              </div>
          </div>
        </div>
        )
    }
}

export default Movies;
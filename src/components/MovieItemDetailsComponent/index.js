import {Component} from 'react'
import HeaderComponent from '../HeaderComponent'

import MovieContext from '../../context/MovieContext'
import FooterComponent from '../FooterComponent'
// import LoadingElement from '../LoaderElement'
import MovieItemComponent from '../MovieItemComponent'

class MovieItemDetailsComponent extends Component {
  render() {
    return (
      <MovieContext.Consumer>
        {value => {
          const {username} = value
          console.log('username from movieItemDetails', {username})

          return (
            <>
              <div className="home-container">
                <HeaderComponent />
                <MovieItemComponent />
              </div>
              <FooterComponent />
            </>
          )
        }}
      </MovieContext.Consumer>
    )
  }
}
export default MovieItemDetailsComponent

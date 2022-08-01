import {Component} from 'react'
import HeaderComponent from '../HeaderComponent'

import MovieContext from '../../context/MovieContext'
import FooterComponent from '../FooterComponent'
// import LoadingElement from '../LoaderElement'
import PopularItemComponent from '../PopularItemComponent'

class PopularComponent extends Component {
  //   state = {searchInput: ''}

  render() {
    return (
      <MovieContext.Consumer>
        {value => {
          const {username} = value
          console.log('username from Home', {username})

          return (
            <>
              <div className="home-container" testid="popular">
                <HeaderComponent />
                <PopularItemComponent />
                <FooterComponent />
              </div>
            </>
          )
        }}
      </MovieContext.Consumer>
    )
  }
}
export default PopularComponent

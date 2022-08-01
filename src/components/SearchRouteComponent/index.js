import {Component} from 'react'
import Header from '../HeaderComponent'

import MovieContext from '../../context/MovieContext'
import Footer from '../FooterComponent'

import SearchElementComponent from '../SearchElementComponent'
import './index.css'

class SearchRouteComponent extends Component {
  //   state = {searchInput: ''}

  render() {
    return (
      <MovieContext.Consumer>
        {value => {
          const {username} = value
          console.log('username from Home', {username})

          return (
            <div className="search-main-container" testid="searchRoute">
              <Header />
              <div className="search-container">
                <SearchElementComponent />
              </div>
              <Footer />
            </div>
          )
        }}
      </MovieContext.Consumer>
    )
  }
}
export default SearchRouteComponent

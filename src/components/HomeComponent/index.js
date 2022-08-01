import {Component} from 'react'
import Cookies from 'js-cookie'
import HeaderComponent from '../HeaderComponent'
import TrendingComponent from '../TrendingComponent'

import './index.css'
import MovieContext from '../../context/MovieContext'
import FooterComponent from '../FooterComponent'
import LoaderElementComponent from '../LoaderElementComponent'
import OriginalsComponent from '../OriginalsComponent'
import TopRatedComponent from '../TopRatedComponent'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeComponent extends Component {
  state = {
    apiStatus: apiConstants.initial,
    allTrendingVideos: [],
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})

    const url = 'https://apis.ccbp.in/movies-app/originals'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()

      const updatedVideosList = data.results.map(each => ({
        id: each.id,
        backdropPath: each.backdrop_path,
        overview: each.overview,
        posterPath: each.poster_path,
        title: each.title,
      }))

      this.setState({
        apiStatus: apiConstants.success,
        allTrendingVideos: updatedVideosList,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  render() {
    const renderSuccessView = () => {
      const {allTrendingVideos} = this.state

      const homeHeaderItem =
        allTrendingVideos[Math.floor(Math.random() * allTrendingVideos.length)]

      const backgroundImage = homeHeaderItem.backdropPath
      const titleOfHeader = homeHeaderItem.title
      const overviewOfHeader = homeHeaderItem.overview

      return (
        <div
          className="spiderman-container"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <HeaderComponent />
          <div className="home-header-content">
            <h1 className="movie-details-name">{titleOfHeader}</h1>
            <p className="movie-details-description">{overviewOfHeader}</p>
            <button type="button" className="movies-details-play-button">
              Play
            </button>
          </div>
        </div>
      )
    }

    const renderMovieItem = () => {
      this.getAllVideos()
    }

    const renderLoader = () => <LoaderElementComponent />

    const renderFailureView = () => (
      <div className="failure-view-container">
        <img
          alt="failure view"
          src="https://res.cloudinary.com/dtjcxf7z5/image/upload/v1650297174/Mini%20Project%20Netflix%20Clone/Background-Complete_t8c6zl.png"
          className="failure-image"
        />
        <p className="search-content">Something went wrong. Please try again</p>

        <button
          type="button"
          className="try-again-button"
          onClick={renderMovieItem}
        >
          Try again
        </button>
      </div>
    )

    const getResult = () => {
      const {apiStatus} = this.state
      switch (apiStatus) {
        case apiConstants.success:
          return renderSuccessView()
        case apiConstants.failure:
          return renderFailureView()
        case apiConstants.inProgress:
          return renderLoader()
        default:
          return null
      }
    }

    return (
      <MovieContext.Consumer>
        {value => {
          const {username} = value
          console.log('username from Home', {username})

          return (
            <>
              <div className="home-container" testid="home">
                {getResult()}
                <TrendingComponent />
                <TopRatedComponent />
                <OriginalsComponent />
              </div>
              <FooterComponent />
            </>
          )
        }}
      </MovieContext.Consumer>
    )
  }
}
export default HomeComponent

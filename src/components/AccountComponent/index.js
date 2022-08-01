import MovieContext from '../../context/MovieContext'
import HeaderComponent from '../HeaderComponent'
import FooterComponent from '../FooterComponent'

import './index.css'

const AccountComponent = props => (
  <MovieContext.Consumer>
    {value => {
      const {username, password, triggerLogout} = value
      console.log(username)

      const onClickLogout = () => {
        triggerLogout(props)
      }

      const hiddenPassword = '*'.repeat(password.length)

      return (
        <>
          <div className="account-container" testid="account">
            <HeaderComponent />
            <div className="account-container-2">
              <h1>
                Account
                <hr />
              </h1>

              <div className="account-element">
                <p className="header-element">Member ship</p>
                <div>
                  <p>{username}@gmail.com</p>
                  <p>Password: {hiddenPassword} </p>
                </div>
              </div>
              <hr />

              <div className="account-element">
                <p className="header-element">Plan Details</p>
                <div>
                  <p>Premium</p>
                  <p className="ultra-hd">Ultra HD</p>
                </div>
              </div>
              <button
                type="button"
                className="logout-button"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </div>

            <FooterComponent />
          </div>
        </>
      )
    }}
  </MovieContext.Consumer>
)
export default AccountComponent

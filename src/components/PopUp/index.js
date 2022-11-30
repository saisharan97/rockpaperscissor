import Popup from 'reactjs-popup'
import './index.css'

import {RiCloseLine} from 'react-icons/ri'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Rules
        </button>
      }
    >
      {close => (
        <>
          <div className="rules-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="rules-img-prop"
              />
            </div>

            <div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </button>
            </div>
          </div>
        </>
      )}
    </Popup>
  </div>
)
export default ReactPopUp

import React, {Component} from 'react'
import './index.scss'

export default class AboveNavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg above-navbar">
          <div className="d-flex ml-auto">
            <div className="d-flex justify-content-center align-items-center">
              <a href="#" className="nav-bar-link above-nav-bar-link foco1">
                Devoluciones y pedidos
              </a>
            </div>

            <div className="divider divider-sub-navbar mx-2"> </div>

            <div className="d-flex justify-content-center align-items-center">
              <a href="#" className="nav-bar-link above-nav-bar-link foco1">
                Nosotros
              </a>
            </div>

            <div className="divider divider-sub-navbar mx-2"> </div>

            <div className="d-flex justify-content-center align-items-center">
              <a href="#" className="nav-bar-link above-nav-bar-link foco1">
                Ayuda
              </a>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

import React, {Component} from 'react'
import './index.scss'
import {FaShoppingBasket} from 'react-icons/fa'

const styles = {
  iconSize: 20,
}

export default class Navbar3 extends Component {
  render() {
    return (
      <>
        <nav className="wrapper">
          <div className="item d-none d-md-block">
            <a href="#">
              <FaShoppingBasket size={styles.iconSize} />
              Crea tu negocio
            </a>
          </div>
          <div className="divider"></div>
          <div className="item d-md-none">
            <a href="#">
              <FaShoppingBasket size={styles.iconSize} />
            </a>
          </div>

          <div className="item">
            <a href="#">Lo más vendido</a>
          </div>
          <div className="item">
            <a href="#">Tiendas</a>
          </div>
          <div className="item">
            <a href="#">Novedades</a>
          </div>
          <div className="item">
            <a href="#">Ofertas</a>
          </div>
          <div className="item">
            <a href="#">Comida</a>
          </div>
          <div className="item">
            <a href="#">Ropa</a>
          </div>
          <div className="item">
            <a href="#">Envios</a>
          </div>
          <div className="item">
            <a href="#">Servicios</a>
          </div>
          <div className="item">
            <a href="#">categorias</a>
          </div>
        </nav>
      </>
    )
  }
}

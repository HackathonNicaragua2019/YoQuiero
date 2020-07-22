import React, {Component} from 'react'

import {FiCamera, FiPhone, FiMail, FiTag, FiList, FiTruck} from 'react-icons/fi'

import NavBar from '../../components/Navbar'
import NavBar3 from '../../components/Navbar3'
import ProductsSellerProfile from '../../components/ProductsSellerProfile'
import BottomNavBar from '../../components/BottomNavBar'

import './index.scss'
import './overwrite.scss'
import '../../scss/modules/_store-profile-responsive.scss'

export default class StoreProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coverPicture: null,
      profilePicture: null,
    }

    this.handleUploadImage = this.handleUploadImage.bind(this)
  }

  async handleUploadImage(e) {
    e.persist()

    const formData = new FormData()
    formData.append('file', e.target.files[0])
    formData.append('upload_preset', 'yo_quiero')
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/djcuow5ib/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    )

    const imageUrl = await res.json()
    await this.setState({...this.state, [e.target.name]: imageUrl.secure_url})

    // insercion a la base de datos del url
  }

  render() {
    return (
      <>
        {/*<NavBar />*/}
        {/*<NavBar3 />*/}

        <div className="container position-relative">
          <div className="card-business-preview">
            <div className="card-header">
              {this.state.coverPicture ? (
                <div className="banner-bussines d-flex justify-content-center">
                  <img
                    src={this.state.coverPicture}
                    className="banner-bussines-image"
                    alt="#"
                  />
                  <label
                    htmlFor="cover-picture"
                    className="upload-picture-icon"
                  >
                    <FiCamera />
                  </label>
                  <input
                    type="file"
                    name="coverPicture"
                    id="cover-picture"
                    style={{display: 'none'}}
                    onChange={this.handleUploadImage}
                  />
                </div>
              ) : (
                <div className="banner-bussines-default">
                  <label
                    htmlFor="cover-picture-default"
                    className="upload-picture-icon mb-0"
                  >
                    <FiCamera />
                  </label>
                  <input
                    type="file"
                    name="coverPicture"
                    id="cover-picture-default"
                    style={{display: 'none'}}
                    onChange={this.handleUploadImage}
                  />
                </div>
              )}

              <div className="business-name-container">
                <div className="thumbnail">
                  {this.state.profilePicture && (
                    <img
                      className="img-thumbnail"
                      src={this.state.profilePicture}
                      alt=""
                    />
                  )}
                  <label
                    htmlFor="profile-picture"
                    className="upload-picture-icon mb-0"
                  >
                    <FiCamera />
                  </label>
                  <input
                    type="file"
                    name="profilePicture"
                    id="profile-picture"
                    style={{display: 'none'}}
                    onChange={this.handleUploadImage}
                  />
                </div>

                <div className="business-name-text">
                  <p className="m-0 font-weight-bold"> Nombre de tu negocio </p>
                  <p className="m-0 font-weight-light">
                    <FiTag /> Categoría{' '}
                  </p>
                </div>
              </div>

              <nav className="navbar-business navbar navbar-expand-lg p-0">
                <ul className="navbar-nav navbar-nav-1">
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Productos
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/404">
                      Inventario
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/404">
                      Clientes
                    </a>
                  </li>

                  <li className="nav-item active">
                    <a className="nav-link" href="/404">
                      Publicidad
                    </a>
                  </li>

                  <li className="nav-item active">
                    <a className="nav-link" href="/404">
                      Estadisticas
                    </a>
                  </li>

                  <li className="nav-item active">
                    <a className="nav-link" href="/404">
                      Personalizar
                    </a>
                  </li>

                  <li className="nav-item active">
                    <a className="nav-link" href="/404">
                      Envios
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav navbar-nav-2">
                  <li className="nav-item active">
                    <a className="nav-link" href="/404">
                      <FiList className="services-icon" />
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/404">
                      <FiTruck className="services-icon" />
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/404">
                      <FiPhone className="services-icon" />
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/404">
                      <FiMail className="services-icon" />
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="float-services py-1">
                <a href="/404">
                  <FiPhone className="services-icon" />
                </a>
                <a href="/404">
                  <FiMail className="services-icon" />
                </a>
              </div>
            </div>
          </div>
          <ProductsSellerProfile />

          <BottomNavBar />
        </div>
        {/*  container */}
      </>
    )
  }
}

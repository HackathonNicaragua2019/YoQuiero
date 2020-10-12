import React, {Component} from 'react'
export default class RecoveryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <br></br>
        <br></br>
        <div className="container bg-light">
          <br></br>
          <div className="row justify-content-center align-item-center">
            <div className="col-md-4 bg-white">
              <form>
                <div class="form-group">
                  <br></br>
                  <h5>Solicitar un restablecimiento de contraseña</h5>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Nombre de usuario"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="E-mail:"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    Nunca compartiremos su correo electrónico con nadie más.
                  </small>
                </div>
                <div className="row justify-content-center align-item-center">
                  <button type="submit" class="btn  btn-warning btn-sm">
                    Restablecer contraseña
                  </button>
                </div>
                <br></br>
              </form>
            </div>
          </div>

          <br></br>
          <div className="row justify-content-center align-item-center">
            <div className="col-2">
              <a href="">Centro de ayuda</a>
            </div>
            <div className="col-2">
              <a href="">Acerca de Magudali</a>
            </div>
            <div className="col-2">
              <a href="">Politica de privacidad</a>
            </div>
          </div>
          <div className="row justify-content-center align-item-center">
            <div className="col-8">
              <hr></hr>
            </div>
          </div>

          <br></br>
          <br></br>
        </div>
      </>
    )
  }
}

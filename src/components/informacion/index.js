<<<<<<< HEAD
import React, { Component } from "react";
import "./index.css";
import { GiCutDiamond } from "react-icons/gi";
import { GoCreditCard } from "react-icons/go";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaTruckLoading } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { FcAndroidOs } from "react-icons/fc";
const icons = {
  fontSize: 100,
};
=======
import React, {Component} from 'react'
import './index.scss'
import {GiCutDiamond} from 'react-icons/gi'
import {GoCreditCard} from 'react-icons/go'
import {FaHeadphonesAlt} from 'react-icons/fa'
import {FaTruckLoading} from 'react-icons/fa'
import {MdSecurity} from 'react-icons/md'
import {FcAndroidOs} from 'react-icons/fc'

const icons = {
  fontSize: 100,
}
>>>>>>> a8436422df78e67e19815304a90b33439949f59f

export default class Informacion extends Component {
  render() {
    return (
      <>
<<<<<<< HEAD
        <div className="col-11 container tam-text icon-color">
          <div className="row color-fila">
            <div className="col-2 text-center">
              <span>
=======
        <div className="col-11 container tam-text">
          <div className="row color-fila">
            <div className="col-2 text-center">
              <span className="information-icon">
>>>>>>> a8436422df78e67e19815304a90b33439949f59f
                <GiCutDiamond size={icons.fontSize} />
              </span>
              <br></br>
              <a href="#" className="linki">
                Calidad y bajos precios
              </a>
            </div>
            <div className="divider divider-sub-navbar"> </div>

            <div className="col-2 text-center">
<<<<<<< HEAD
              <span>
=======
              <span className="information-icon">
>>>>>>> a8436422df78e67e19815304a90b33439949f59f
                <GoCreditCard size={icons.fontSize} />
              </span>
              <br></br>
              <a href="#" className="linki">
                Pagos seguros
              </a>
            </div>
            <div className="divider divider-sub-navbar"> </div>
            <div className="col-2 text-center">
<<<<<<< HEAD
              <span>
=======
              <span className="information-icon">
>>>>>>> a8436422df78e67e19815304a90b33439949f59f
                <FaHeadphonesAlt size={icons.fontSize} />
              </span>
              <br></br>
              <a href="#" className="linki">
                Atención al cliente 24 las 24 horas
              </a>
            </div>
            <div className="divider divider-sub-navbar"> </div>
            <div className="col-2 text-center">
<<<<<<< HEAD
              <span>
=======
              <span className="information-icon">
>>>>>>> a8436422df78e67e19815304a90b33439949f59f
                <FaTruckLoading size={icons.fontSize} />
              </span>
              <br></br>
              <a href="#" className="linki">
                Envios a todos los departamentos
              </a>
            </div>
            <div className="divider divider-sub-navbar"> </div>
            <div className="col-2 text-center">
<<<<<<< HEAD
              <span>
=======
              <span className="information-icon">
>>>>>>> a8436422df78e67e19815304a90b33439949f59f
                <MdSecurity size={icons.fontSize} />
              </span>
              <br></br>
              <a href="#" className="linki">
                compra con seguridad y confianza
              </a>
            </div>
            <div className="divider divider-sub-navbar text"> </div>
            <div className="col-1 text-center">
<<<<<<< HEAD
              <span>
                <FcAndroidOs size={icons.fontSize} />
              </span>
              <br></br>
              <a href="#" className="linki">
=======
              <span className="information-icon">
                <FcAndroidOs size={icons.fontSize} />
              </span>
              <a href="#" className="">
>>>>>>> a8436422df78e67e19815304a90b33439949f59f
                App Android
              </a>
            </div>
            <div className="divider divider-sub-navbar"> </div>
          </div>
        </div>
      </>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> a8436422df78e67e19815304a90b33439949f59f
  }
}

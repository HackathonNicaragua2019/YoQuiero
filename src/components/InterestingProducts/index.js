import React, { Component } from "react";
import Product from "../Product";
import ProductImage from "../../assets/images/product2.jpg";
import './index.scss'

export default class InterestingProducts extends Component {
  render() {
    return (
      <>
        <div className="interesting-products">
          <div className="lead"> También te pueden interesar </div>
          <div className="row py-4 d-flex justify-content-around">
            {[1, 2, 3, 4, 5].map((index, value) => (
              <div key={value} className="col-xl-2">
                <Product image={ProductImage} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

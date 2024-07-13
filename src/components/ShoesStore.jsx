import React, { Component } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import Modal from "./Modal";

class ShoesStore extends Component {
  state = {
    products: [],
    productDetail: null,
  };

  componentDidMount() {
    axios.get("/data.json").then((res) => {
      this.setState({ products: res.data });
    });
  }

  setStateModal = (product) => {
    this.setState({ productDetail: product });
  };

  closeModal = () => {
    this.setState({ productDetail: null });
  };

  render() {
    return (
      <div className="flex justify-center">
        <div className="container mx-auto text-center p-6">
          <h1 className="text-3xl font-bold mb-6">Shoes Shop</h1>
          <ProductList
            productsData={this.state.products}
            setStateModal={this.setStateModal}
          />
          {this.state.productDetail && (
            <Modal
              content={this.state.productDetail}
              closeModal={this.closeModal}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ShoesStore;

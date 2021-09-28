import React, { Component } from 'react';
import StockServices from '../../services/StockServices';
import ProductServices from '../../services/ProductServices';

export default class addProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleProduct: '',
      descriptionProduct: '',
      priceProduct: '',
      barcode: '',
      weightProduct: '',

      stocks: [],
      idStock: '',
    };
    this.cancel = this.cancel.bind(this);
    this.selectStore = this.selectStore.bind(this);
    this.saveProduct = this.saveProduct.bind(this);

    this.changeTitleProductHandler = this.changeTitleProductHandler.bind(this);
    this.changeDescriptionProductHandler =
      this.changeDescriptionProductHandler.bind(this);
    this.changePriceProductHandler = this.changePriceProductHandler.bind(this);
    this.changeBarcodeProductHandler =
      this.changeBarcodeProductHandler.bind(this);
    this.changeWeightProuctHandler = this.changeWeightProuctHandler.bind(this);
  }

  componentDidMount() {
    StockServices.getAllStocks().then((response) => {
      this.setState({ stocks: response.data });
      console.log('stocks', this.state.stocks);
    });
    // const SelectStocks = [
    //   { idStock: -1, nameStock: 'Please Select Stock' },
    //   ...this.state.stocks,
    // ];
    // this.setState({ stocks: this.SelectStocks });
    // console.log('selected Stocks',this.SelectStocks)
  }

  //*********** HANDLERS      *************//

  changeTitleProductHandler = (event) => {
    this.setState({ titleProduct: event.target.value });
  };
  changeDescriptionProductHandler = (event) => {
    this.setState({ descriptionProduct: event.target.value });
  };
  changePriceProductHandler = (event) => {
    this.setState({ priceProduct: event.target.value });
  };
  changeBarcodeProductHandler = (event) => {
    this.setState({ barcode: event.target.value });
  };
  changeWeightProuctHandler = (event) => {
    this.setState({ weightProduct: event.target.value });
  };
  //****************************************//

  cancel() {
    this.props.history.push('/all-products');
  }

  selectStore = (event) => {
    this.setState({ idStock: event.target.value });
    // alert(this.state.idStock);
  };

  saveProduct = (e) => {
    e.preventDefault();
    let Product = {
      titleProduct: this.state.titleProduct,
      descriptionProduct: this.state.descriptionProduct,
      priceProduct: this.state.priceProduct,
      barcode: this.state.barcode,
      weightProduct: this.state.weightProduct,
    };

    ProductServices.addProduct(Product, this.state.idStock).then((response) => {
      this.props.history.push('/all-products');
      console.log('ProductToAdd', Product);
    });

    // console.log();
  };

  render() {
    let stock = this.state.stocks.map((item, idStock) => {
      return (
        <option key={idStock} value={item.idStock}>
          {item.nameStock}
        </option>
      );
    }, this);
    return (
      <div>
        <h1>ADD PRODUCT FORM</h1>

        <form>
          <div className="form_group">
            <label> Product Title</label>
            <input
              name="titleProduct"
              className="form-control"
              value={this.state.titleProduct}
              onChange={this.changeTitleProductHandler}
            />

            <label> Product Description</label>
            <input
              name="descriptionProduct"
              className="form-control"
              value={this.state.descriptionProduct}
              onChange={this.changeDescriptionProductHandler}
            />

            <label> Product Price</label>

            <input
              name="priceProduct"
              className="form-control"
              value={this.state.priceProduct}
              onChange={this.changePriceProductHandler}
            />
            <label> Product Barcode</label>

            <input
              name="barcodeProduct"
              className="form-control"
              value={this.state.barcode}
              onChange={this.changeBarcodeProductHandler}
            />
            <label> Product Weight</label>

            <input
              name="weightProduct"
              className="form-control"
              value={this.state.weightProduct}
              onChange={this.changeWeightProuctHandler}
            />
          </div>
          <label>Choose A Store</label>
          <select className="from-select" onChange={this.selectStore}>
            <option disabled selected="true">
              ---Select a Store ---
            </option>
            {stock}
          </select>

          <div>
            <button className="btn btn-success" onClick={this.saveProduct}>
              SAVE PRODUCT
            </button>
          </div>
          <br />
          <button className="btn btn-danger" onClick={this.cancel}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

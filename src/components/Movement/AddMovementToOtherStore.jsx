import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import MovementServices from '../../services/MovementServices';
import StockServices from '../../services/StockServices';

export default class AddMovementToOtherStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderDate: '',
      newarticle: {
        id: uuidv4(),
        titleProduct: '',
        desciptionProduct: '',
        priceProduct: '',
        quantityProduct: '',
        barcode: '',
      },
      movProducts: [
        {
          id: uuidv4(),
          titleProduct: '',
          desciptionProduct: '',
          priceProduct: '',
          quantityProduct: '',
          barcode: '',
        },
      ],
      idStock: '',
      stocks: [],
      idStock1: '',
    };

    this.selectStoreSender = this.selectStoreSender.bind(this);
    this.selectSotreReciever = this.selectSotreReciever.bind(this);
    this.changeOrderDateHandler = this.changeOrderDateHandler.bind(this);
    this.changeMovTypeHandler = this.changeMovTypeHandler.bind(this);
    this.saveMovement = this.saveMovement.bind(this);
    this.cancel = this.cancel?.bind(this);
    this.handleChages = this.handleChages.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.handledelete = this.handledelete.bind(this);
    //Price +Quantity +Title+Barcode
    this.handleChangeTP = this.handleChangeTP?.bind(this);
    this.handleChangePP = this.handleChangePP?.bind(this);
    this.handleChangeQP = this.handleChangeQP?.bind(this);
    this.handleChangeBP = this.handleChangeBP?.bind(this);
  }

  componentDidMount() {
    StockServices.getAllStocks().then((response) => {
      this.setState({ stocks: response.data });
      console.log('stocks', this.state.stocks);
    });
  }

  changeMovTypeHandler = (event) => {
    this.setState({ movType: event.target.value });
  };
  changeOrderDateHandler = (event) => {
    this.setState({ orderDate: event.target.value });
  };

  selectStoreSender = (event) => {
    this.setState({ idStock: event.target.value });
  };
  selectSotreReciever = (event) => {
    this.setState({ idStock1: event.target.value });
  };

  saveMovement = (m) => {
    m.preventDefault();
    let movement = {
      movProducts: this.state.movProducts,
    };
    MovementServices.ToOtherStore(
      movement,
      this.state.idStock,
      this.state.idStock1
    ).then((res) => {
      this.props.history.push('/all-Movements');
      alert('movement done succeffuly');
    });
  };

  addProduct(e) {
    e.preventDefault();

    this.setState({
      movProducts: [
        ...this.state.movProducts,
        {
          id: uuidv4(),
          titleProduct: '',
          desciptionProduct: '',
          priceProduct: '',
          quantityProduct: '',
          barcode: '',
        },
      ],
    });
  }

  handleChages(id, event) {
    const newInputFields = this.state.movProducts.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    this.setState({ movProducts: newInputFields });
  }

  handledelete(e, id) {
    e.preventDefault();
    let moveProducts = this.state.movProducts;
    moveProducts.splice(
      moveProducts.findIndex((value) => value.id === id),
      1
    );
    this.setState({ movProducts: moveProducts });
  }

  cancel() {
    this.props.history.push('/all-Movements');
  }

  //Quantity + price + product
  handleChangeTP = (e) => {
    let tp = this.state.movProducts;
    tp[0].titleProduct = e.target.value;
    this.setState({ titleProduct: tp });
  };
  handleChangePP = (e) => {
    this.setState({ priceProduct: e.target.value });
  };

  chandleChangeQP = (e) => {
    this.setState({ quantityProduct: e.target.value });
  };

  handleChangeBP = (e) => {
    this.setState({ barcode: e.target.value });
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
        <h1>ADD MOVEMENT Internal Production</h1>
        <Container>
          <form action="">
            <div className="form_group">
              <div className="box"></div>
            </div>

            <label> Products</label>

            {this.state.movProducts.map((prod, index) => {
              return (
                <div key={index}>
                  <input
                    value={prod.titleProduct}
                    placeholder="titleProduct"
                    name="titleProduct"
                    onChange={(event) => this.handleChages(prod.id, event)}
                  />
                  <input
                    value={prod.priceProduct}
                    placeholder="priceProduct"
                    name="priceProduct"
                    onChange={(event) => this.handleChages(prod.id, event)}
                  />
                  <input
                    value={prod.quantityProduct}
                    placeholder="quantityProduct"
                    name="quantityProduct"
                    onChange={(event) => this.handleChages(prod.id, event)}
                  />
                  <input
                    value={prod.barcode}
                    placeholder="BarcodeProduct"
                    name="barcode"
                    onChange={(event) => this.handleChages(prod.id, event)}
                  />

                  <button onClick={(e) => this.handledelete(e, prod.id)}>
                    Remove Product
                  </button>
                </div>
              );
            })}
            <div>
              <button className="btn btn-warning" onClick={this.addProduct}>
                Add Product
              </button>
            </div>

            <div>
              <label>Choose A Store</label>
              <select className="from-select" onChange={this.selectStoreSender}>
                <option disabled selected="true">
                  ---Select a Sender Store ---
                </option>
                {stock}
              </select>
            </div>

            <div>
              <label>Choose A Store</label>
              <select
                className="from-select"
                onChange={this.selectSotreReciever}
              >
                <option disabled selected="true">
                  ---Select a Reciever Store ---
                </option>
                {stock}
              </select>
            </div>

            <div>
              <button className="btn btn-success" onClick={this.saveMovement}>
                Save
              </button>

              <button className="btn btn-danger" onClick={this.cancel}>
                Cancel
              </button>
            </div>
          </form>
        </Container>
      </div>
    );
  }
}

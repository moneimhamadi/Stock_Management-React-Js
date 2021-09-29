import React, { Component } from 'react';
import StockServices from '../../services/StockServices';

class AddStockComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameStock: '',
    };
    this.changeNameStockHandler = this.changeNameStockHandler.bind(this);
    this.saveStock = this.saveStock.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  changeNameStockHandler = (event) => {
    this.setState({ nameStock: event.target.value });
  };

  saveStock = (s) => {
    s.preventDefault();
    let stock = { nameStock: this.state.nameStock };
    console.log('Stock =>', +JSON.stringify(stock));

    StockServices.addStock(stock).then((res) => {
      this.props.history.push('/all-stocks');
      alert('Stock Added Successfully');
      console.log('StockInPut', res);
    });
  };

  cancel() {
    this.props.history.push('/all-stocks');
  }

  render() {
    return (
      <div className="field">
        <h1>ADD STOCK FORM</h1>

        <form action="">
          <div className="form_group">
            <label> Stock Name</label>
            <input
              name="Stock Name"
              className="form-control"
              value={this.state.nameStock}
              onChange={this.changeNameStockHandler}
            />
          </div>
          <button className="btn btn-success" onClick={this.saveStock}>
            Save
          </button>
          <button
            className="btn btn-danger"
            onClick={this.cancel}
            style={{ marginLeft: '10px' }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default AddStockComponent;

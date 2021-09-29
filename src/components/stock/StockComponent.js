import React from 'react';
import StockServices from '../../services/StockServices';

class StockComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      stockProducts: [],
    };
    this.addStock = this.addStock.bind(this);
    this.updateStock = this.updateStock.bind(this);
    this.deleteStock = this.deleteStock.bind(this);
    this.viewStock = this.viewStock.bind(this);
  }

  componentDidMount() {
    StockServices.getAllStocks().then((response) => {
      this.setState({ stocks: response.data });
      console.log('stocks', this.state.stocks);
    });
  }

  addStock() {
    this.props.history.push('/add-stock');
  }

  updateStock(idStock) {
    this.props.history.push(`/update-stock/${idStock}`);
  }

  deleteStock(idOfStock) {
    StockServices.deleteStockById(idOfStock).then((res) => {
      this.setState({
        stocks: this.state.stocks.filter(
          (stock) => stock.idStock !== idOfStock
        ),
      });
    });
  }

  viewStock(idOfTheStock) {
    this.props.history.push(`/view-stock/${idOfTheStock}`);
  }

  render() {
    return (
      <div>
        <h1 className="text-center"> LIST OF STOCKS</h1>

        <div className="row">
          <button className="btn btn-primary" onClick={this.addStock}>
            Add A New Stock
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>idStock</th>
              <th>nameStock</th>
              <th>StockType</th>
              <th>MaxStock</th>
              <th>MinStock</th>
              <th>ListProducts</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stocks.map((stock) => (
              <tr key={stock.idStock}>
                <td>{stock.idStock}</td>
                <td>{stock.nameStock}</td>
                <td>{stock.stockType}</td>
                <td>{stock.maxStock}</td>
                <td>{stock.minStock}</td>
                <table className="table table-success table-striped">
                  <thead>
                    <th>Id Product</th>
                    <th>Title Product</th>
                    <th>Quantity Product</th>
                    <th>Barcode Product</th>
                  </thead>

                  {stock.stockProducts?.map((item) => {
                    return (
                      <tr key={item.idProduct}>
                        <td>{item.idProduct}</td>
                        <td>{item.titleProduct}</td>
                        <td>{item.quantityProduct}</td>
                        <td>{item.barcode}</td>
                      </tr>
                    );
                  })}
                </table>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deleteStock(stock.idStock)}
                  >
                    Delete
                  </button>
                  {/* <button className="btn btn-info"   onClick={()=>this.updateStock(stock.idStock)} >Update</button> */}
                  <button
                    className="btn btn-success"
                    onClick={() => this.viewStock(stock.idStock)}
                  >
                    Show Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default StockComponent;

import React, { Component } from 'react';
import ProductServices from '../../services/ProductServices';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.addProduct = this.addProduct.bind(this);
  }

  componentDidMount() {
    ProductServices.getAllProducts().then((response) => {
      this.setState({ products: response.data });
      console.log('stocks', this.state.products);
    });
  }

  addProduct() {
    this.props.history.push('/add-products');
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="text-center"> LIST OF PRODUCTS</h1>

          <div className="row">
            <button className="btn btn-primary" onClick={this.addProduct}>
              Add A New Product
            </button>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>idProduct</th>
                <th>titleProduct</th>
                <th>descriptionProduct</th>
                <th>priceProduct</th>
                <th>barcodeProduct</th>
                <th>ProductWeight</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product) => (
                <tr key={product.idProduct}>
                  <td>{product.idProduct}</td>
                  <td>{product.titleProduct}</td>
                  <td>{product.descriptionProduct}</td>
                  <td>{product.priceProduct}</td>
                  <td>{product.barcode}</td>
                  <td>{product.weightProduct}</td>
                  {/* <td>
                    <img
                      src={
                        'http:localhost:8090/utss/tn/Imgarticles/' +
                        product.idProduct
                      }
                      width="100"
                      height="150"
                      alt="..."
                    />
                  </td> */}

                  <td>
                    {/* <button className="btn btn-danger" onClick={()=>this.deleteStock(stock.idStock)} >Delete</button>
                                    <button className="btn btn-info"   onClick={()=>this.updateStock(stock.idStock)} >Update</button>
                                    <button className="btn btn-success"onClick={()=>this.viewStock(stock.idStock)} >Show Details</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

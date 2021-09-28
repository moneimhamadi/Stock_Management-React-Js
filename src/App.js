import logo from './logo.svg';
import './App.css';
import StockComponent from './components/stock/StockComponent';
import AddStockComponent from './components/stock/AddStockComponent';
import UpdateStocComponent from './components/stock/UpdateStocComponent';
import ViewStockComponent from './components/stock/ViewStockComponent';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import ListMovement from './components/Movement/ListMovement';
import AddMovement from './components/Movement/AddMovement';
import ProductList from './components/Product/ProductList';
import addProduct from './components/Product/addProduct';

function App() {
  return (
    <>
      <img src="../Images/UTSSlogo.jpg" width="200px" height="100px" />
      <div className="App">
        <Router>
          <Switch>
            <Route path="/all-Movements" exact component={ListMovement}></Route>
            <Route path="/all-stocks" exact component={StockComponent}></Route>
            <Route
              path="/add-stock"
              exact
              component={AddStockComponent}
            ></Route>
            <Route
              path="/update-stock/:id"
              component={UpdateStocComponent}
            ></Route>
            <Route
              path="/view-stock/:id"
              component={ViewStockComponent}
            ></Route>
            <Route path="/add-movement" component={AddMovement}></Route>
            <Route path="/all-products" component={ProductList}></Route>
            <Route path="/add-products" component={addProduct}></Route>
          </Switch>
        </Router>
        <footer>&copy; Copyright 2021 All Rights Reserved</footer>
      </div>
    </>
  );
}

export default App;

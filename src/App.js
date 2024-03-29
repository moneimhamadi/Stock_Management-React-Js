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
import SubCategory from './components/SubCategory/SubCategory';
import AddSubcategory from './components/SubCategory/AddSubcategory';
import AddMovementSupplyReception from './components/Movement/AddMovementSupplyReception';
import AddMovementDestruction from './components/Movement/AddMovementDestruction';
import AddMovementInteriorProduction from './components/Movement/AddMovementIneriorProduction';
import AddMovementToOtherStore from './components/Movement/AddMovementToOtherStore';
import Sidebar from './components/sidebar/Sidebar';
import Nav from './components/sidebar/Nav';
function App() {
  return (
    <>
    
      <div>
        <img src="../Images/UTSSlogo.jpg" width="200px" height="100px" />
      </div>

      <div className="App">
        <Router>
          <Nav />
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
            <Route path="/all-subcategories" component={SubCategory}></Route>
            <Route path="/add-subcategory" component={AddSubcategory}></Route>
            <Route
              path="/AddSupplyReception"
              component={AddMovementSupplyReception}
            ></Route>
            <Route
              path="/AddDestruction"
              component={AddMovementDestruction}
            ></Route>
            <Route
              path="/AddInternalProduction"
              component={AddMovementInteriorProduction}
            ></Route>
            <Route
              path="/AddToOtherStore"
              component={AddMovementToOtherStore}
            ></Route>
            <Route path="/"></Route>
          </Switch>
        </Router>
        <footer>
          UTSS Stock Management APP &copy; Copyright 2021 All Rights Reserved
        </footer>
      </div>
      
    </>
  );
}

export default App;

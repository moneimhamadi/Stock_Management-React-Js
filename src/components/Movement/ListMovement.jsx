import React, { Component } from 'react';
import MovementServices from '../../services/MovementServices';

class ListMovement extends Component {
    constructor(props){
        super(props)
        this.state={
           movements:[] ,
           movProducts: []
           
        }
        this.addMovement= (this.addMovement)?.bind(this);
      
    }
   
   componentDidMount(){
       MovementServices.getAllMovement().then((response)=>{
           this.setState({ movements: response.data })
           console.log("Movements",this.state.movements)
           
          
       });
   }
   addMovement(){
       this.props.history.push('/add-movement')
   }
   
//    addStock(){
//       this.props.history.push('/add-stock');
//    }
   
//    updateStock(idStock){
//    this.props.history.push(`/update-stock/${idStock}`);
//    }
   
   
//    deleteStock(idOfStock){
//    StockServices.deleteStockById(idOfStock).then(res =>{
//        this.setState({stocks :this.state.stocks.filter(stock => stock.idStock !==idOfStock)})
//    });
//    }
   
   
//    viewStock(idOfTheStock){
//    this.props.history.push(`/view-stock/${idOfTheStock}`)
//    }
   
    render(){
        return (
   
           <div>
   
                 <h1 className="text-center"  >LIST OF MOVEMENTS</h1>      
   
   <div className="row">
       <button className="btn btn-primary" onClick={this.addMovement} >Add A New Movement</button>
   </div>
           <table className="table table-striped"  >
   
           
               <thead>
                   <tr>
                       <th>IdMovement</th>
                       <th>Order Date</th>
                       <th>Movement Type</th>
                       <th>Movement Products</th>
                       <th>Actions</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       this.state.movements.map(
                           movement =>
                           <tr  key={movement.idMovement}>
   
                                   <td>{movement.idMovement}</td>
                                   <td>{movement.orderDate}</td>
                                   <td>{movement.movType}</td>
                                   <div className="list"> 
                                   
                                   {(movement.movProducts)?.map((item) =>{
                                       
                                       
                                      return  <tr key = {item.idProduct}>
                                                <td>{item.idProduct}</td>
                                                <td>{item.titleProduct}</td>
                                                <td>{item.quantityProduct}</td>
                                              </tr>
 
                                   })}
                                   </div>                               
                                  <td>
                                    <button className="btn btn-danger"> Archive</button>
                                    
                                    
                                </td> 
                           </tr>
                           
                       )
                   }
   
               </tbody>
               </table>
           </div>
   
        )
    }
   
       
   }

export default ListMovement;

 
// return <tr key = {item.idProduct}>
// <td>{item.idProduct}</td>
// <td>{item.titleProduct}</td>
// </tr>
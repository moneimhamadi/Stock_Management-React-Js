import React, { Component } from 'react';
import StockServices from '../../services/StockServices';

class UpdateStocComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            id:this.props.match.params.id,
            nameStock:'',
        }
        this.changeNameStockHandler=this.changeNameStockHandler.bind(this);
        this.updateStock=this.updateStock.bind(this);
    }
    componentDidMount(){
        StockServices.getStockById(this.state.id).then((res)=>{
        let stock=res.data;
        this.setState({nameStock:stock.nameStock})
        })
    }

    changeNameStockHandler=(event) =>{
        this.setState({nameStock:event.target.value});
    }
    
    updateStock=(s) =>{
        s.preventDefault();
        let stock={nameStock:this.state.nameStock};
        console.log('StockToUpdate =>',+JSON.stringify(this.stock));
        StockServices.updateStocK(this.state.id,stock).then
        (res =>{
            this.props.history.push('/all-stocks');
            alert('Stock Updateted Successfully');

        });

    }





    cancel(){
        this.props.history.push('/all-stocks')
    }

    render() {
        return (
            <div>
                <h1>Stock FROM</h1>


                <form action="">
                    <div className="form_group">
                        <label > Stock Name</label>
                            <input  name="Stock Name" className="form-control"
                            value={this.state.nameStock} onChange={this.changeNameStockHandler} />

                    </div>
                    <button className="btn btn-success" onClick={this.updateStock}>Update</button>
                    <button className="btn btn-danger" onClick={this.changeNameStockHandler.bind(this)} 
                    style={{marginLeft: "10px"}}> Cancel </button>
                </form>
            </div>
        );
    }
}




export default UpdateStocComponent;
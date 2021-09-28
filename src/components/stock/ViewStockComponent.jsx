import React, { Component } from 'react';
import StockServices from '../../services/StockServices';
class ViewStockComponent extends Component {
constructor(props){
    super(props)


    this.state={
        id:this.props.match.params.id,
        stock:{}
    }
}

componentDidMount(){
    StockServices.getStockById(this.state.id).then(res =>{
        this.setState({stock : res.data})
    })
}

    render() {
        return ( 
            
            <>
            <div>

                <div className="card col-md6 offser-md-3">
                    <h1 className="text-center"></h1>
                    <div className="card-body">
                        <div className="row">
                            <h2><label> Name of Stock</label></h2>
                            <div>{this.state.stock.nameStock}</div>
                        </div>
                    </div>
                </div>
            </div></>
        );
    }
}

export default ViewStockComponent;
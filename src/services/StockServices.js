import axios from 'axios';
const Stock_Rest_Api = 'http://localhost:8090/utss/tn/AllStocks';
const Add_Stock_Rest_Api = 'http://localhost:8090/utss/tn/addStock';
const Get_One_Stock_By_Id = 'http://localhost:8090/utss/tn/OneStock';
const Update_Stock = 'http://localhost:8090/utss/tn/updateStock';
const Delete_Stock = 'http://localhost:8090/utss/tn/deleteStock';

class stockServices {
  getAllStocks() {
    return axios.get(Stock_Rest_Api);
  }

  addStock(stock) {
    return axios.post(Add_Stock_Rest_Api, stock);
  }

  getStockById(stockId) {
    return axios.get(Get_One_Stock_By_Id + '/' + stockId);
  }

  updateStocK(stock, StockId) {
    return axios.put(Update_Stock + '/' + stock, StockId);
  }

  deleteStockById(stockId) {
    return axios.delete(Delete_Stock + '/' + stockId);
  }
}

export default new stockServices();

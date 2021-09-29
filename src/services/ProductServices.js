import axios from 'axios';
const Product_Rest_Api = 'http://localhost:8090/utss/tn/AllProducts';
const Add_Product_Rest_Api = 'http://localhost:8090/utss/tn/addProduct';
const Get_One_Product_By_Id = 'http://localhost:8090/utss/tn/OneProduct';
const Update_Product_Api = 'http://localhost:8090/utss/tn/updateProduct';
const Delete_Product_Api = 'http://localhost:8090/utss/tn/deleteProduct ';
const SubCategory_Rest_Api = 'http://localhost:8090/utss/tn/AllSubCategorys ';

class ProductServices {
  getAllProducts() {
    return axios.get(Product_Rest_Api);
  }

  

  addProduct(Product, idStock, idSubCategory) {
    return axios.post(
      Add_Product_Rest_Api + '/' + idStock + '/' + idSubCategory,
      Product
    );
  }

  getProductById(productId) {
    return axios.get(Get_One_Product_By_Id + '/' + productId);
  }

  updateProduct(product, idStock) {
    return axios.put(Update_Product_Api + '/' + product, idStock);
  }

  deleteProductkById(productId) {
    return axios.delete(Delete_Product_Api + '/' + productId);
  }

  getAllSubCategories() {
    return axios.get(SubCategory_Rest_Api);
  }
}

export default new ProductServices();

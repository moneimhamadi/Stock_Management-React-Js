import axios from 'axios';

const SubCategory_Rest_Api = 'http://localhost:8090/utss/tn/AllSubCategorys ';
const Add_SubCategory_Rest_Api = 'http://localhost:8090/utss/tn/addSubCategory';
const Get_One_SubCategory_By_Id =
  'http://localhost:8090/utss/tn/OneSubCategory';

const Delete_SubCategory_Api =
  'http://localhost:8090/utss/tn/deleteSubCategory/ ';

class SubcategoryServices {
  getAllSubCategories() {
    return axios.get(SubCategory_Rest_Api);
  }
  addSubcategory(Subcategory) {
    return axios.post(Add_SubCategory_Rest_Api, Subcategory);
  }

  getSubCategoryById(idSubCategory) {
    return axios.get(Get_One_SubCategory_By_Id + '/' + idSubCategory);
  }

  deleteSubCategoryById(idSubCategory) {
    return axios.delete(Delete_SubCategory_Api + idSubCategory);
  }
}

export default new SubcategoryServices();

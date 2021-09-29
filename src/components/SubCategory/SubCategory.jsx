import React from 'react';
import ProductServices from '../../services/ProductServices';
import SubcategoryServices from '../../services/SubcategoryServices';

class SubCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategories: [],
      subCategoryProducts: [],
    };
    this.addSubCategory = this.addSubCategory.bind(this);
    this.deleteSubcategory = this.deleteSubcategory.bind(this);
  }

  componentDidMount() {
    SubcategoryServices.getAllSubCategories().then((response) => {
      this.setState({ subcategories: response.data });
      console.log('subcategories', this.state.subcategories);
    });
  }

  addSubCategory() {
    this.props.history.push('/add-subcategory');
  }

  deleteSubcategory(idOfSubcategory) {
    SubcategoryServices.deleteSubCategoryById(idOfSubcategory).then((res) => {
      this.setState({
        subcategories: this.state.subcategories.filter(
          (subcategory) => subcategory.idSubCategory !== idOfSubcategory
        ),
      });
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center"> LIST OF SUBCATEGORIES</h1>

        <div className="row">
          <button className="btn btn-primary" onClick={this.addSubCategory}>
            Add A New SUBCATEGORY
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>idSubCategory</th>
              <th>nameSubCAtegory</th>
              <th>ListProducts</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.subcategories.map((subcategory) => (
              <tr key={subcategory.idSubCategory}>
                <td>{subcategory.idSubCategory}</td>
                <td>{subcategory.nameSubCategory}</td>
                <ul className="list">
                  {subcategory.products?.map((item) => {
                    return (
                      <li key={item.idProduct}>
                        <td>{item.idProduct}</td>
                        <td>{item.titleProduct}</td>
                        <td>{item.quantityProduct}</td>
                      </li>
                    );
                  })}
                </ul>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      this.deleteSubcategory(subcategory.idSubCategory)
                    }
                  >
                    Delete
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
export default SubCategory;

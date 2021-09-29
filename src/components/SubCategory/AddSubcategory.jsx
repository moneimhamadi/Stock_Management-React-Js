import React, { Component } from 'react';
import SubcategoryServices from '../../services/SubcategoryServices';

class AddSubcategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameSubCategory: '',
    };
    this.changeNameSubCategory = this.changeNameSubCategory.bind(this);
    this.saveSubCategory = this.saveSubCategory.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  changeNameSubCategory = (event) => {
    this.setState({ nameSubCategory: event.target.value });
  };

  saveSubCategory = (s) => {
    s.preventDefault();
    let subcategory = { nameSubCategory: this.state.nameSubCategory };
    console.log('Subcategory =>', +JSON.stringify(subcategory));

    SubcategoryServices.addSubcategory(subcategory).then((res) => {
      this.props.history.push('/all-subcategories');
      alert('SubCategory Added Successfully');
      console.log('SubCategoryInPut', res);
    });
  };

  cancel() {
    this.props.history.push('/all-subcategories');
  }

  render() {
    return (
      <div>
        <h1>ADD STOCK FORM</h1>

        <form action="">
          <div className="form_group">
            <label> Subcatyegory Name</label>
            <input
              name="Subcatyegory Name"
              className="form-control"
              value={this.state.nameSubCategory}
              onChange={this.changeNameSubCategory}
            />
          </div>
          <button className="btn btn-success" onClick={this.saveSubCategory}>
            Save
          </button>
          <button
            className="btn btn-danger"
            onClick={this.cancel}
            style={{ marginLeft: '10px' }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default AddSubcategory;

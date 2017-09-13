/*jshint esversion: 6 */
import React, { Component } from 'react';
import { FieldArray, reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import InputArray from './InputArray';

class CmsDrinkForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label
          htmlFor="name"
          className="tiny-100 label">
          Name
        </label>
        <Field
          name="name"
          className="tiny-100"
          component="input"
          type="text"
          placeholder="Name"
        />
        <label
          htmlFor="price"
          className="tiny-100 label">
          Price
        </label>
        <Field
          name="price"
          className="tiny-100"
          component="input"
          type="text"
          placeholder="Price"
        />
        <label
          htmlFor="description"
          className="tiny-100 label">description
        </label>
        <FieldArray
          name="description"
          component={InputArray}
        />
        <button
          type="submit"
          value="Submit"
          className="tiny-100 submit"
          disabled={!this.props.valid || this.props.submitting}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M14 3h2.997v5h-2.997v-5zm9 1v20h-22v-24h17.997l4.003 4zm-17 5h12v-7h-12v7zm14 4h-16v9h16v-9z"/>
          </svg>
        </button>
      </form>
    );
  }
}

CmsDrinkForm = reduxForm({
  form: 'cmsUpdateForm',
})(CmsDrinkForm)

export default connect(
  state => ({
    initialValues: state.currentItem.data
  }),
)(CmsDrinkForm);

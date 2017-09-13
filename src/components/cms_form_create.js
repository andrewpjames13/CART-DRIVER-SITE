/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['name', 'description'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

const afterSubmit = (result, dispatch) => {
  dispatch(reset('cmsFormCreate'));
}

class CmsFormCreate extends Component {
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
          className="tiny-100 label">Description
        </label>
        <Field
          name="description"
          className="tiny-100"
          component="input"
          type="text"
          placeholder="Description"
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

export default reduxForm({
  form: 'cmsFormCreate',
  onSubmitSuccess: afterSubmit,
  validate,
})(CmsFormCreate)

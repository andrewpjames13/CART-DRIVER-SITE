import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
// import Input from '../Input/Input';
// import styles from './InputArray.scss';

class InputArray extends Component {
  render() {
    return (
      <ul className="tiny-100">
        {this.props.fields.map((field, index) => (
          <li
            key={index}
          >
            <div className="tiny-80">
              <Field
                name={`${field}`}
                component="input"
                className="tiny-100"
                placeholder={this.props.placeholder}
                label={index === 0 ? this.props.label : null}
              />
            </div>
            <div className="tiny-20">
              { index === 0 ? null :
              <button
                type="button"
                onClick={() => this.props.fields.remove(index)}
              >
                Remove
              </button>
              }
            </div>
          </li>),
        )}
        <li>
          <button
            type="button"
            onClick={() => this.props.fields.push()}
          >
            Add another
          </button>
        </li>
      </ul>
    );
  }
}

export default InputArray;

InputArray.propTypes = {
  /** Rendered Fields */
  fields: PropTypes.shape({
    push: PropTypes.func,
    remove: PropTypes.func,
    map: PropTypes.func,
  }),
  /** Label for all the fields */
  label: PropTypes.string,
  /** placeholder text for the fields */
  placeholder: PropTypes.string,
};

InputArray.defaultProps = {
  fields: {},
  label: '',
  placeholder: '',
};

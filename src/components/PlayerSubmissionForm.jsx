import { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const buildDEfaultValue = (fields) => {
  const data = {};
  for (const field of fields) {
    if (field.key) {
      const key = field.key;
      data[key] = '';
    }
  }
  return data;
};

const PlayerSubmissionForm = ({ index, sendSubmission, fields }) => {
  const [formFields, setFormFields] = useState(buildDEfaultValue(fields));

  const handleInput = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormFields(formFields => ({...formFields, [fieldName]: fieldValue}));
  };

  const handleSubmit = e => {
    e.preventDefault(); //not running POST which is default
    sendSubmission(formFields);
    setFormFields(buildDEfaultValue(fields));
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={handleSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          {
            fields.map((field) => {
              if (field.key) {
                return (
                  <input
                    key={field.key}
                    placeholder={field.placeholder}
                    type="text"
                    name={field.key}
                    value={formFields[field.key]}
                    onChange={handleInput}
                    className={formFields[field.key] ? '' : 'PlayerSubmissionForm__input--invalid'}
                  />);
              } else {
                return field;
              }
            })
          }
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
};

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
};

export default PlayerSubmissionForm;

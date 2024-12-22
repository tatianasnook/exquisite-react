import { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const kFormFieldsDefault= {
  adj1: '',
  noun1: '',
  adv: '',
  verb: '',
  adj2: '',
  noun2: '',
};

const PlayerSubmissionForm = ({ index, sendSubmission, fields }) => {
  const [formFields, setFormFields] = useState(kFormFieldsDefault);

  const handleInput = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormFields(formFields => ({...formFields, [fieldName]: fieldValue}));
  };

  const handleSubmit = e => {
    e.preventDefault(); //not running POST which is default
    sendSubmission(formFields);
    setFormFields(kFormFieldsDefault);
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={handleSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input
            placeholder="adjective"
            type="text"
            name="adj1"
            value={formFields.adj1}
            onChange={handleInput}
            className={formFields.adj1 ? '' : 'PlayerSubmissionForm__input--invalid'}
          />

          <input
            placeholder="noun"
            type="text"
            name="noun1"
            value={formFields.noun1}
            onChange={handleInput}
            className={formFields.noun1 ? '' : 'PlayerSubmissionForm__input--invalid'}
          />

          <input
            placeholder="adverb"
            type="text"
            name="adv"
            value={formFields.adv}
            onChange={handleInput}
            className={formFields.adv ? '' : 'PlayerSubmissionForm__input--invalid'}
          />

          <input
            placeholder="verb"
            type="text"
            name="verb"
            value={formFields.verb}
            onChange={handleInput}
            className={formFields.verb ? '' : 'PlayerSubmissionForm__input--invalid'}
          />

          <input
            placeholder="adjective"
            type="text"
            name="adj2"
            value={formFields.adj2}
            onChange={handleInput}
            className={formFields.adj2 ? '' : 'PlayerSubmissionForm__input--invalid'}
          />

          <input
            placeholder="noun"
            type="text"
            name="noun2"
            value={formFields.noun2}
            onChange={handleInput}
            className={formFields.noun2 ? '' : 'PlayerSubmissionForm__input--invalid'}
          />
          .
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

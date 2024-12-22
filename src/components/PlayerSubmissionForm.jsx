import { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({ index, sendSubmission, fields }) => {
  const [adj1, setAdj1] = useState('');

  const handleAdj1 = (event) => {
    // const newValue = event.target.value;
    // setAdj1(newValue);
    setAdj1(adj1 => event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault(); //not running POST which is default
    sendSubmission(adj1);
    setAdj1('');
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={handleSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

          <input
            placeholder="adjective"
            type="text"
            name="adj1"
            value={adj1}
            onChange={handleAdj1}
            className={adj1 ? '' : 'PlayerSubmissionForm__input--invalid'}
          />

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

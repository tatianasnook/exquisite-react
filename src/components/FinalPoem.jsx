import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = ({ isSubmitted, submissions, revealPoem }) => {
  return (
    <div className="FinalPoem">
      {
        isSubmitted ?
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {submissions.map(((line, i) => {
          return <p key={i}>{line}</p>;
        }))}
      </section>
      :
      <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem"
          className="FinalPoem__reveal-btn"
          onClick={() => revealPoem()}
        />
      </div>
      }
    </div>
  );
};

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;

import { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);

  const handleSubmission = (formData) => {
    setLines(lines => [...lines, formData]);
  };

  const handleRevealPoem = () => {
    setDone(true);
  };

  // const mostRecentSubmission = lines[lines.length - 1];
  const mostRecentSubmission = lines.at(-1) || '';


  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>
        Each player should take turns filling out and submitting the
        form below. Each turn should be done individually
        and <em>in secret!</em> Take inspiration from the revealed recent
        submission. When all players are finished, click the final button
        on the bottom to reveal the entire poem.
      </p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        {exampleFormat}
      </p>
      
      {
        lines.length > 0 && !done &&
        <RecentSubmission submission={mostRecentSubmission} />
      }
      {
        !done &&
      <PlayerSubmissionForm index={lines.length + 1} sendSubmission={handleSubmission}/>
      }
      
      <FinalPoem isSubmitted={done} submissions={lines} revealPoem={handleRevealPoem}/>

    </div>
  );
};


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;

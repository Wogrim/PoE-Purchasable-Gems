import { useState } from 'react';
import './App.css';
import GemCreateForm from './components/GemCreateForm';

import classes from './data/classes.json';
import progressionsObject from './data/progressions.json';

const progressions = Object.entries(progressionsObject)
  .map((p) => ({ ...(p[1]), id: p[0] }))
  .sort((a, b) => a.expected_level - b.expected_level)

console.log(progressions);

function App() {
  const [allActiveGems, setAllActiveGems] = useState({});
  const [allSupportGems, setAllSupportGems] = useState({});

  return (
    <div className="App">
      <div>
        <GemCreateForm type="Active" classes={classes} progressions={progressions} />
      </div>
      <div>
        <GemCreateForm type="Support" classes={classes} progressions={progressions} />
      </div>
    </div>
  );
}

export default App;

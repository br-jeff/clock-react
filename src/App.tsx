import React, { useState, useEffect } from 'react';
import { useAge } from './hooks';

enum timePassedEnum  {
  DEFAULT = 'Just now',
  FEW_SECONDS = 'A few seconds ago'
}

function checkTime(time: number, setTheTimeThatPassed: React.Dispatch<React.SetStateAction<string>>) {
  if(time > 10 && time < 60) {
    setTheTimeThatPassed(timePassedEnum.FEW_SECONDS)
  } else if (time > 60) {
    setTheTimeThatPassed(`${Math.floor(time / 60)} minute(s) ago`)
  }
}


function App() {
  const [time, startTime ] = useAge()
  const [theTimeThatPassed, setTheTimeThatPassed] = useState<string>(timePassedEnum.DEFAULT)

  useEffect(() => checkTime(time, setTheTimeThatPassed),[ time ])

  return (
    <div className="App">
      <p>
        Last Updated: {theTimeThatPassed}
      </p>
      <button onClick={() => startTime()} > Start Time  </button>
    </div>
  );
}

export default App;

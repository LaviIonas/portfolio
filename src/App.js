import './App.css';
import React, {Component, PropTypes} from 'react';

import { wheel } from './wheel.js';

class MyApp extends Component {
  constructor(){
    super();
    this.state = {};
  }
}

function App() {
  return (
    <div className="App">
      <script src="https://unpkg.com/konva@8/konva.min.js"></script>
      <header className="wheel">

      </header>
        <body>
          <script>
            wheel()
          </script>
        </body>
    </div>
  );
}

export default App;

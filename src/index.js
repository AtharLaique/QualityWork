import React from 'react';
import ReactDOM from 'react-dom';
import Rout from './Route/Route';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Rout/>, document.getElementById('root'));
serviceWorker.unregister();

import {render} from 'react-dom';

import App from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';

import './index.css';

render(<App/>, document.getElementById('root'));
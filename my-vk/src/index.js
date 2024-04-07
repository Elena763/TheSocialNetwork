//import React from 'react';
import {rerenderEntireTree} from './render.js';
import './index.css';
//import reportWebVitals from './reportWebVitals';
import state from "./redux/state.js";


rerenderEntireTree(state);

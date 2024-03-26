import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts =[
  {id: 1, message: "Hello world!", likesCount: '15'},
  {id: 2, message: "Hi, how are you", likesCount: '25'},
  {id: 3, message: "It's my first post", likesCount: '35'},
];

const dialogs = [
  {id: 1, name: "Katya"},
  {id: 2, name: "Ivan"},
  {id: 3, name: "Alexandr"},
  {id: 4, name: "Tatiana"},
  {id: 5, name: "Marina"},
  {id: 6, name: "Evgeniy"},
];

const messages =[
  {id: 1, message: "Hi"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "It`s fine"},
  {id: 4, message: "Amazing"},
  {id: 5, message: "Goodbye"},
  {id: 6, message: "See you later"},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

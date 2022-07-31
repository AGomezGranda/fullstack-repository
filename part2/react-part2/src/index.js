import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const note = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true,
    date: '2019-05-01'
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    important: false,
    date: '2019-05-02'
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true,
    date: '2019-05-03'
  },
  {
    id: 4,
    content: 'GET is the most important method of HTTP protocol',
    important: true,
    date: '2019-05-04'
  }

]

ReactDOM.createRoot(document.getElementById('root')).render( <App notes={note} />);

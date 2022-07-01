import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
  
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      err => console.log(err)
    )
      return <div>Latitide: </div>
}
ReactDOM.createRoot(document.querySelector('#root')).render(App()) 
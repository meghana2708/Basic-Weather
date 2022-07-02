import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';

// const App = () => {
  
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => console.log(position),
//       err => console.log(err)
//     )
//       return <div>Latitide: </div>
// }
class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {lat : null };
    window.navigator.geolocation.getCurrentPosition(
      (position) => 
      {
        //called setState
        this.setState({lat:position.coords.latitude}
          //we didnt update
          //To update do not use this.state.lat = position.coords.latitude

          )
      },
      err => console.log(err)
);  
  }
  render(){
    
    return <div>Latitude: {this.state.lat}</div>
  }
}
const root =
ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />);
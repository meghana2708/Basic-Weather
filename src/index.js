import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';
// const App = () => {
  
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => console.log(position),
//       err => console.log(err)
//     )
//       return <div>Latitide: </div>
// }
class App extends React.Component{
  
    state = {lat : null,errorMessage : '' };
    
    componentDidMount(){
      window.navigator.geolocation.getCurrentPosition(
        position => 
          this.setState({lat:position.coords.latitude}),
      
        err => this.setState({errorMessage: err.message})
      )
    };
     
  renderContent(){
      if(this.state.lat && !this.state.errorMessage){
        return (<SeasonDisplay lat = {this.state.lat}/>);
      }
      if (!this.state.lat && this.state.errorMessage){
        return   <div>Error : {this.state.errorMessage}</div>
      } 
      return <Spinner message = "Please accept to access your location"/>
  } 
 
  
  render(){
    return(
      <div className = "border red">
        {this.renderContent()}
      </div>
    );
   
        
   
     
  }
}
const root =
ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />);
import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      locationData: {},
      // showDetail : false
      
    };
  }
  handleChange = (e) => {
    this.setState({ cityName: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.cityName}&format=json`;

    
    const response = await axios.get(url);
   
    console.log(response.data[0]);
    this.setState({ locationData: response.data[0] });
 
  };

  render() {
    return (
      <div>

<Form onSubmit={this.handleSubmit}>

<Form.Label>City name</Form.Label>
<Form.Control type="text" value={this.state.value}
              onChange={this.handleChange}  />
               <Form.Control type="submit"  />
  </Form>
  
  

  
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            name of city:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="explorer" />
        </form> */}
        <h1>location data :</h1>
        <p>City Name :{this.state.cityName}</p>
        <p>lat :{this.state.locationData.lat}</p>
        <p>lon :{this.state.locationData.lon}</p>
        
        <img src = {`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.state.locationData.lon},${this.state.locationData.lat}&zoom=$20`} alt=""/>
      </div>
    );
  }
}

export default App;

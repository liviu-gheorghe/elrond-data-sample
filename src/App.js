import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      usd_price: {},
      total_value: "N/A"
    }
}

  componentDidMount() {
    this.refreshPrices();

    setInterval(() => {
      console.log("Updating prices");
      this.refreshPrices();
    
    }, 5000);
      
  }


  refreshPrices() {

    fetch("https://api.elrond.com/mex-pairs/ITHEUM-df6f26/WEGLD-bd4d79")
    .then(res => res.json())
    .then(res => {
      let state = this.state;
      state.usd_price = {
        ...state.usd_price, 
        ITHEUM : res.basePrice.toFixed(16)
      }
      this.setState(state);
    })
    .catch((err) => {
      console.error(err);
    }) 
  }

  render() {
    console.log(this.state);
    return (

      <>


      <div id="main_wrapper">

      {/* <img src="assets/img/itheum.jpeg" id="itheum_logo"  alt= ""/> */}
      
      
      <p style={{"fontSize": "40px"}}>ITHEUM</p>
    
      {
        this.state.usd_price ? (
          <div id="current_ith_price">{this.state.usd_price.ITHEUM} USD</div>  
        ) : 
        (<div id="current_ith_price">"N/A"</div>)
      }

      {/* <div className="current_ith_price_title">
          Current Itheum Price (USD)
        </div> */}

        <p style={{"fontSize": "8px"}}>Updates every 5 seconds</p>
      </div>
  </>
    );

  }
}

export default App;






import React, { Component } from 'react';
import TopSpot from './topspot';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    }
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
        <div className="container">
          <h1 className="text-center">San Diego Top Spots</h1>
          <p>A list of the top 30 places to see in San Diego, California</p>

          {
            this.state.topspots.map(topspot => (
              <TopSpot
                key={topspot.id}
                name={topspot.name}
                description={topspot.description}
                location={topspot.location} />
            ))
          }

        </div>


      </div>
    );
  }
}

export default App;

import React from 'react';
import Wrapper from '../styled-components/Wrapper.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper.Global>
        <Wrapper.Navbar id="Navbar"></Wrapper.Navbar>
        <Wrapper.Body>
          <Wrapper.FirstColumn>
            <Wrapper.Graph id="Graph"></Wrapper.Graph>
            <Wrapper.About id="About"></Wrapper.About>
            <Wrapper.News id="News"></Wrapper.News>
            <Wrapper.Ratings id="Ratings"></Wrapper.Ratings>
            <Wrapper.Earnings id="Earnings"></Wrapper.Earnings>
            <div id="modal-root"></div>
          </Wrapper.FirstColumn>
          <Wrapper.SecondColumn id="secondColumn">
            <Wrapper.TradeStock id="TradeStock"></Wrapper.TradeStock>
          </Wrapper.SecondColumn>
        </Wrapper.Body>
      </Wrapper.Global>
    )
  }
}

export default App;
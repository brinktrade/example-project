import React, {Component} from 'react';
import ContentContainer from './components/ContentContainer';
import Services from './services/Services';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.services = props.services || new Services();
    this.state = {orders: []};
    this.brinkAppService = this.services.brinkAppService
  }

  componentDidMount() {
    this.services.start(this.setState.bind(this));
  }

  componentWillUnmount() {
    this.services.stop();
  }
  
  render() {
    return (
      <div>
        <ContentContainer orders={this.state.orders} brinkAppService={this.brinkAppService} />
      </div>
    );
  }
}


export default App;

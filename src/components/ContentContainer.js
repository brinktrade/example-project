import React, {Component} from 'react';
import OrderList from './OrderList'
import {
  Container,
  Divider,
  Header,
  Image,
  Button
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class ContentContainer extends Component {
  render() {
    console.log(this.props.orders)
    return (
      <div>
        <Container text style={{ marginTop: '2em' }}>
          <Button>Create Order</Button>
          <Divider />
          <OrderList orders={this.props.orders} />
        </Container>
      </div>
    );
  }
}

export default ContentContainer;
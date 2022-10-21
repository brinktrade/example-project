import React, {Component} from 'react';
import { List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class OrderListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List.Item>
        <List.Content>
          <List.Header as='a'>BRINK ORDER</List.Header>
          <List.Description as='a'>${this.props.order.created}</List.Description>
        </List.Content>
      </List.Item>
    );
  }
}


export default OrderListItem
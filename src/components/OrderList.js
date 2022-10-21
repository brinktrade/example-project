import React from 'react';
import OrderListItem from './OrderListItem'
import { List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const EventList = ((props) => {
  let orders = [];
  if (props.orders) {
    orders = props.orders.map((order) => {
      return <OrderListItem order={order} />
    })
  }

  return (
    <List>
      {orders}
    </List>
  );
})

export default EventList;
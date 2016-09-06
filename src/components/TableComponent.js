import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Table, Segment, Accordion, Icon } from 'stardust'

const data = _.times(5, n => ({
  country: faker.address.city(),
  revenue: faker.random.number(),
  orders: faker.random.number(),
  items: faker.random.number(),
  margins: faker.random.number()
}))

export default class TableComponent extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  handleSelectRow(item, index) {
    this.setState({
      selectedItem: JSON.stringify(item, null, 2),
      selectedIndex: index,
    })
  }

  render() {
    const { selectedItem, selectedIndex } = this.state
    return (
      <div>
        <Table className='selectable' data={data} onSelectRow={this.handleSelectRow}>
          <Table.Column dataKey='country' />
          <Table.Column dataKey='revenue' />
          <Table.Column dataKey='orders' />
          <Table.Column dataKey='items' />
          <Table.Column dataKey='margins' />
        </Table>
        <Segment className='secondary'>
          <pre>Index: {selectedIndex}{'\n'}Item: {selectedItem}</pre>
        </Segment>
      </div>
    )
  }
}

// 'use strict';
// dependencies
const React = require('react');
const PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
const _ = require('lodash-node');
const WidthProvider = require('react-grid-layout').WidthProvider;
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);
const axios = require('axios');
import { Link, Button, Colors, Container, Divider, Header } from 'stardust';

const originalLayouts = getFromLS('layouts') || {};

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
  
var GridLayout = React.createClass({

  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      className: 'layout',
      cols: {
        lg: 12, 
        md: 10, 
        sm: 6, 
        xs: 4, 
        xxs: 2
      },
      rowHeight: 30,

      // This turns off compaction so you can place items wherever.
      verticalCompact: false
    };
  },

  getInitialState() {
    return {
      layouts: JSON.parse(JSON.stringify(originalLayouts))
    };
  },

  resetLayout() {
    this.setState({layouts: {}});
  },

  onLayoutChange(layout, layouts) {
    saveToLS('layouts', layouts);
    this.setState({layouts});

    // this.props.onLayoutChange(layout, layouts);
  },

  render() {

    let dataGrid = {w: 2, h: 3, x: 0, y: 0};

    axios.get('http://52.24.133.167:3000/v1/grids/')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    return (
      <Container>
      <Header.H1>
      Items
      </Header.H1>
        <Button onClick={this.resetLayout} className='negative'> Reset Layout </Button>
        <ResponsiveReactGridLayout ref='rrgl' {...this.props} layouts={this.state.layouts} onLayoutChange={this.onLayoutChange}>

        <Container key='1' data-grid={dataGrid}>
          <span className="text"> 1 </span>
        </Container>

        </ResponsiveReactGridLayout>
      </Container>
    );

  }
});

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
    } catch(e) {

    /*Ignore*/
    }
  }

  console.log(JSON.stringify(ls));

  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem('rgl-8', JSON.stringify({
      [key]: value
    }));
  }
}

// module.exports = ResponsiveLocalStorageLayout;
export default GridLayout

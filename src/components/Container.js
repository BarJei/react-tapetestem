// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Divider, Container } from 'stardust';
var Sidebar = require('react-sidebar').default;

// own files
import MaterialTitlePanel from './SidebarTitle';
import SidebarContent from './SidebarContent';
import GridLayout from './GridLayout';
import GaugeComponent from './GaugeComponent';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8
  },
  content: {
    padding: '16px'
  }
};

const App = React.createClass({
  getInitialState() {
    return {
      docked: false, 
      open: false
    };
  },

  componentWillMount() {
    const mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, docked: mql.matches});
  },

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  },

  onSetOpen(open) {
    this.setState({open: open});
  },

  mediaQueryChanged() {
    this.setState({docked: this.state.mql.matches});
  },

  toggleOpen(ev) {
    this.setState({open: !this.state.open});

    if (ev) {
      ev.preventDefault();
    }
  },

  render() {
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span>
        {!this.state.docked &&
         <a onClick={this.toggleOpen} href='#' style={styles.contentHeaderMenuLink}>=</a>}
         <span> Dashboard </span>
      </span>);

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen
    };

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <Container style={styles.content}>
          <GaugeComponent />
          </Container>
        </MaterialTitlePanel>
      </Sidebar>
    );
  },
});

export default App
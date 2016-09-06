import React from 'react';
import MaterialTitlePanel from './SidebarTitle';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    // backgroundColor: '#3d5160',
    // color: 'white'
  }
};

const SidebarContent = (props) => {
  const style = props.style ? [...styles.sidebar, ...props.style] : styles.sidebar;

  const links = [];

 for(let i = 1; i <= 10; i++) {
  links.push(<a href='#' key={i} style={styles.sidebarLink}>Placeholder Hyperlink</a>);
 }
  
  return (
    <MaterialTitlePanel title='My Dashboard' style={style}>
      <div style={styles.content}>
        <a href='index.html' style={styles.sidebarLink}> Revenue </a>
        <a href='#' style={styles.sidebarLink}> Graphs </a>
        <div style={styles.divider} />
        <a href='#' style={styles.sidebarLink}>Placeholder Hyperlink</a>
        <a href='#' style={styles.sidebarLink}>Hi</a>
        </div>
    </MaterialTitlePanel>
  );

};

SidebarContent.propTypes = {
  style: React.PropTypes.object,
};

export default SidebarContent;

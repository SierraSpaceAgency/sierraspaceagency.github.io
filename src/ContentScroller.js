import React from 'react';
import PropTypes from 'prop-types';
import './ContentScroller.css';

/**
** A component for the scroll-to-next-page-footer
** Requires a title and a callback for when clicked
**/

const ContentScroller = (props) => (
  <footer className = "ContentScrollerFooter">
    <div className = "ContentScroller" onClick = {() => props.onClick(props.title)}>
      <p className = "ContentScrollerTitle">{props.title}</p>
      <img className = "ContentScrollerImage" src = "arrow-1.png" alt = "Scroll down"/>
    </div>
  </footer>
)

ContentScroller.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ContentScroller;

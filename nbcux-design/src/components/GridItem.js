import React, { Component } from 'react';

class GridItem extends Component {
  render() {
    return (
    	<div className="grid__item">
    		<div className="grid__item--bg" style={{backgroundImage: `url(${this.props.filepath})`}} onClick={this.props.onClick}></div>
	      <h1>{this.props.title}</h1>
    	</div>
		)
  }

  /* render() {
  	var offset = this.props.itemIndex % 2 === 0 ? 'left' : 'right';
    return (
    	<div className={`grid__item`} onClick={this.props.onClick}>
	      <img src={this.props.filepath} alt={this.props.title}/>
	      <h1>{this.props.title}</h1>
    	</div>
		)
  }*/
}

export default GridItem;

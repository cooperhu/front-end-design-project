import React, { Component } from 'react';

class Modal extends Component {
	constructor(props) {
    super(props);

    this.state = {
    	isExpanded: false,
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.expandImage = this.expandImage.bind(this);
  }
  componentWillMount() {
  	this.setState({ isExpanded: false });
  }

	componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
    
  } 

  componentWillUnMount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
    this.setState({ isExpanded: false });
  }

  expandImage() {
  	let expandState = this.state.isExpanded ? false : true;
  	this.setState({ isExpanded: expandState });
  	if (expandState) {
  		document.getElementById("headerTitle").classList.add('black');
  		document.body.style.background = "#f990bf";
  	} else { 
  		document.getElementById("headerTitle").classList.remove('black');
  		document.body.style.background = "#ffffff";
  	}
  }
 
  handleKeyDown(e) {
  	if (e.keyCode === 27)
      this.props.closeModal();
    if (e.keyCode === 37)
      this.props.prevSlide();
    if (e.keyCode === 39)
      this.props.nextSlide();
  }

  render() {
  	const { currentState } = this.props;
  	const expandClass = this.state.isExpanded ? 'expanded' : '';

  	if (!currentState) {
      return null;
    }

    return (
			<div>
	  		<div className={`modal__overlay ${expandClass}`}></div>
	  		<div className="modal__toggle--prev mobile" onClick={this.props.prevSlide}> prev </div>
	  		<div className="modal__toggle--next mobile" onClick={this.props.nextSlide}> next </div>
	  		<span className={`modal__btn--close ${expandClass}`} onClick={this.props.closeModal}>Close</span>
	  		
	  		<div className={`modal ${expandClass}`}>
	  			<div className="modal__toggle--prev" onClick={this.props.prevSlide}><div>prev</div></div>
	  			<div className="modal__body">
	  				<div className="modal__body--image">
	  					<img src={this.props.filepath} alt={this.props.title} onClick={this.expandImage}/>
	  					<span className="modal__btn--expand" onClick={this.expandImage}>Click image to enlarge</span>
	      		</div>
	      		<div className="modal__body--content">
		      		<h1>{this.props.title}</h1>
		      		<p>{this.props.description}</p>
		      	</div>
	      	</div>
	  			<div className="modal__toggle--next" onClick={this.props.nextSlide}><div>next</div></div>
	      </div>
      </div>
    );
  }
}

export default Modal;

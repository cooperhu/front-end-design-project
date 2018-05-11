import React, { Component } from 'react';
import Modal from '../components/Modal';
import GridItem from '../components/GridItem';
import GalleryItems from '../GalleryItems';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      isOpen: false,
    }

    this.closeModal = this.closeModal.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  openModal(i) {
    this.setState({
      currentIndex: i,
      isOpen: true
    });
    document.body.classList.add('no-scroll');
  }

  closeModal(i) {
    this.setState({ isOpen: false });
    document.body.classList.remove('no-scroll');
    document.body.style.background = "#ffffff";
  }

  nextSlide() {
    let nextIndex = this.state.currentIndex >= GalleryItems.imgObjects.length - 1 ? 0 : this.state.currentIndex + 1;
    this.setState({currentIndex: nextIndex});
  }

  prevSlide() {
    let prevIndex = this.state.currentIndex <= 0 ? GalleryItems.imgObjects.length - 1 : this.state.currentIndex - 1; 
    this.setState({currentIndex: prevIndex});
  }

  render() {
    return (
      <div className="grid">
        <div className="grid__container clearfix">
          {GalleryItems.imgObjects.map((image, i) => 
            <GridItem filepath={image.path} 
                      title={image.title} 
                      onClick={(e) => this.openModal(i)}
                      itemIndex={i} 
                      key={`grid-item_${i}`}/>
   
          )}
        </div>

        <Modal filepath={GalleryItems.imgObjects[this.state.currentIndex].path} 
               title={GalleryItems.imgObjects[this.state.currentIndex].title} 
               description={GalleryItems.imgObjects[this.state.currentIndex].description} 
               currentState={this.state.isOpen} 
               closeModal={this.closeModal}
               nextSlide={this.nextSlide}
               prevSlide={this.prevSlide}
               componentMount={this.state.mounted}/>
      </div>
    );
  }
}

export default Grid;
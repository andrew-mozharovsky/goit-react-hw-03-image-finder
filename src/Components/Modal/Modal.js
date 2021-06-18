import React, { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDownEsc);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDownEsc);
  }
  handleKeyDownEsc = (e) => {
    const { closeModal } = this.props;
    if (e.code === "Escape") {
      closeModal();
    }
  };
  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    const { largeImage, alt } = this.props;
    return (
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img src={largeImage} alt={alt} />
        </div>
      </div>
    );
  }
}
export default Modal;

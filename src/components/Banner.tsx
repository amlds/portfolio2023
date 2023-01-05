import React from "react";

interface Props {
  message: string;
}

class Banner extends React.Component<Props> {
  render() {
    return (
      <div className="banner">
        <div className="banner__content">
          <p>{this.props.message}</p>
          <div className="rectangle"></div>
          <p>{this.props.message}</p>
          <div className="rectangle"></div>
          <p>{this.props.message}</p>
          <div className="rectangle"></div>
          <p>{this.props.message}</p>
          <div className="rectangle"></div>
          <p>{this.props.message}</p>
          <div className="rectangle"></div>
          <p>{this.props.message}</p>
          <div className="rectangle"></div>
          <p>{this.props.message}</p>
          <div className="rectangle"></div>
          <p>{this.props.message}</p>
          <div className="rectangle"></div>
          <p>{this.props.message}</p>
          <div className="rectangle"></div>
          <p>{this.props.message}</p>
          <div className="rectangle"></div>
          <p>{this.props.message}</p>
          <div className="rectangle"></div>
          <p>{this.props.message}</p>
          <div className="rectangle"></div>
        </div>
      </div>
    );
  }
}

export default Banner;

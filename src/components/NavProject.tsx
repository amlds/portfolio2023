import React from "react";

import HoverLink from "./HoverLink";

interface Props {
  project: {
    title: string;
    description: string;
    tags: string[];
  };
}

class NavProject extends React.Component<Props> {
  render() {
    return (
      <div className="navProject">
        <div className="navProject__content">
          <p>{this.props.project.description}</p>
          <HoverLink infos={
            {
              name: this.props.project.title,
              font: ["6rem", "Cabinet-Black"]
            }
          }/>
          <div className="navProject__tags">
            {
              this.props.project.tags.map((tag, index) => {
                return <p key={index} className="tag md-1">{tag}</p>;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default NavProject;

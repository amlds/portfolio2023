import React from "react";

interface Props {
  project: {
    title: string;
    description: string;
    tags: string[];
    link: string;
  };
}

class ProjectContent extends React.Component<Props> {
  render() {
    return (
      <section className="projectContent">
        <div className="projectContent__content">
          <h1>{this.props.project.title}</h1>
          <p>{this.props.project.description}</p>
          <div className="projectContent__tags">
            {this.props.project.tags.map((tag, index) => {
              return <p key={index}>{tag}</p>;
            })}
          </div>
          <div className="projectContent__links">
            <a href={this.props.project.link} target="_blank">
              <p>Visiter le site</p>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectContent;

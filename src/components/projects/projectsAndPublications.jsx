import React from "react";
import Projects from "./projects";
import Publications from "./publications";
import "./projects.css";

export default class ProjectsAndPublications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublicationsClicked: false,
    };
  }

  onClick = (event) => {
    this.setState({ isPublicationsClicked: !this.state.isPublicationsClicked });
  };

  render() {
    return (
      <div>
        <div>
          <center>
            <br />
            <h1 className="projectsandpublications">Projects and Publications</h1>

            {this.state.isPublicationsClicked ? <Publications onClick={this.onClick.bind(this)} /> : <Projects onClick={this.onClick.bind(this)} />}
          </center>
        </div>
      </div>
    );
  }
}

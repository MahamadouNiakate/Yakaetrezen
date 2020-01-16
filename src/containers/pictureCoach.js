import React from "react";

class pictureCoach extends React.Component {
  render() {
    return (
      <div>
        <img class="Portrait" src={this.props.url} alt="laToffe" />
      </div>
    );
  }
}

export default pictureCoach;

import React from "react";

class Letter extends React.Component {
  render() {
    return (
      <div>
        <img class="coverLetter" src={this.props.url} alt=" l'enveloppe" />
      </div>
    );
  }
}

export default Letter;

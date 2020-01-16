import React from "react";

class LogoContact extends React.Component {
  render() {
    return (
      <div>
        <img class="Logos_contact" src={this.props.url} alt="les logos" />
      </div>
    );
  }
}

export default LogoContact;

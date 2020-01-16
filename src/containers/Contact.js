import React from "react";
import letter1 from "../image/contact.jpg";
import Letter from "../containers/Letter";
import enveloppe from "../image/mail.jpg";
import Text from "../containers/Text";
import LogoContact from "../containers/LogoContact";
import linkedin from "../image/linkedin.png";

class Contact extends React.Component {
  render() {
    return (
      <div class="T_Logo">
        <Letter url={letter1} />
        <div class="Logos">
          <div class="mail">
            <a href="mailto:mahamadouniakate120@gmail.com">
              <LogoContact url={enveloppe} />
            </a>
            <div class="texte1">
              <Text label="mahamadouniakate120@gmail.com" />
            </div>
          </div>
          <div class="linkedinMaha">
            <a href="https://www.linkedin.com/in/mahamadou-niakate-8bb85424/">
              <LogoContact url={linkedin} />
            </a>
            <div class="texte1">
              <Text label="Mahamadou Niakaté" />
            </div>
          </div>
          <div class="linkedinMaha">
            <a href="https://www.linkedin.com/in/yassir-laifaoui-11607514a/">
              <LogoContact url={linkedin} />
            </a>
            <div class="texte1">
              <Text label="Yassir Laifaoui" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

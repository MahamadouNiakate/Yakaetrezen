import React from "react";
import mountain from "../image/beach.jpg";

class Coach extends React.Component {
  render() {
    return (
      <div>
        <img class="photo_montagne" src={mountain} alt="montagne" />
        <div class="ecole_hypnose">
          <h3>L'institut Français des thérapies alternatives</h3>
          <p class="texte_formation">
            C'est l'école que j'ai faite à Paris. Elle est vraiment génial. Les
            enseignants sont top. La plupart des personnes y sont en
            reconversion professionnels et j'ai beaucoup appris car la pratique
            est au coeur de la formation.
          </p>
          <a href="https://www.ifta.fr/">Aller sur le site de l'école</a>
        </div>
      </div>
    );
  }
}

export default Coach;

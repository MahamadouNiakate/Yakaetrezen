import React from "react";
import moi from "../image/moi.jpg";
import lui from "../image/yassir.jpg";

class Qui extends React.Component {
  render() {
    return (
      <div class="sommesNous">
        <div class="mahamadou">
          <img class="moi" src={moi} alt="maha" />
          <div class="NomEtTexte">
            <h2 class="moiQui">MAHAMADOU NIAKATÉ - hypnothérapeute</h2>
            <p>
              Co-fondateur et Président de l'association. J'ai suivi une
              formation d'hypnothérapeute à l'école européenne d'hypnose. Je
              trouve que c'est une belle discipline pour aider les patients à
              résoudre la majorité de leurs problème simplement en s'adressant à
              leurs inconscient. Je suis ingénieur statisticien et web
              développeur. Mes différentes activité mon permis de m'intéresser
              petit à petit à l'univers du développement personnel à travers
              cette association. Je souhaite partager avec vous les connaissance
              que j'ai acquise dans le domaine du développement personnel.
            </p>
          </div>
        </div>
        <div class="yassir">
          <img class="lui" src={lui} alt="yass" />
          <div class="NomEtTexteYassir">
            <h2>YASSIR LAIFAOUI - naturopathe</h2>
            <p>
              Co-fondateur et vice-Président de l'association. Je suis
              actuellement une formation de naturopathe depuis plus de 4 ans. Je
              suis actuellement entrain de terminer ma dernière année. Je suis
              naturopathe freelance. Je suis technicien des eaux à la ville de
              Paris. Je m'intéresse domaine liée au développement personnel. Je
              serai ravi de partager mes connaissances avec vous et de vous
              mener sur la voie de la guérison.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Qui;

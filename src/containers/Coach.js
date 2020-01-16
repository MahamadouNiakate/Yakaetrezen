import React from "react";
import laro from "../image/laroche.jpeg";
import franck from "../image/franck.jpeg";
import francois from "../image/francois.jpeg";
import oussama from "../image/oussama.jpeg";
import tolle from "../image/tolle.jpeg";

class Coach extends React.Component {
  render() {
    return (
      <div class="mentor">
        <p class="description_Mentor">
          Je vous mets une liste nominative de personnes que j'ai suivi en
          particulier sur Youtube où dont j'ai lu les bouquins. Il y a toutes
          les personnes que vous pouvez suivre sur youtube où dont vous pouvez
          lire les livres. Il y a en fait de nombreux coachs et mentors. Cela
          peut même être une personnes de votre entourage à qui vous attribuer
          des qualités que souhaiterez avoir (famille, amis, professeurs et
          autres)
        </p>
        <div class="coach_noms">
          <div class="robbins">
            <img
              class="robbins_Image"
              src="https://static.wixstatic.com/media/c0a04a_98df7ffb094040b78ac388649831251f.jpg/v1/fill/w_629,h_354,al_c,lg_1,q_80/c0a04a_98df7ffb094040b78ac388649831251f.webp"
              alt="robbins"
            />
            <div class="robbins_Texte">
              <h3>Anthony Robbins</h3>
              <p>
                Une référence international comme coach. C'est une référence en
                PNL (Programmation Neuro-linguistique )
              </p>
            </div>
          </div>
          <div class="laroche">
            <img class="laroche_Image" src={laro} alt="laroche" />
            <div class="laroche_Texte">
              <h3>Davide Laroche</h3>
              <p>
                Un jeune coach dynamique qui à des grandes qualités humaines et
                dont je vous recommande de suivre la chaîne Youtube.
              </p>
            </div>
          </div>
          <div class="nicolas">
            <img class="nicolas_Image" src={franck} alt="nicolas" />
            <div class="nicolas_Texte">
              <h3>Franck Nicolas</h3>
              <p>
                Un coach canadiens qui nous fait du bien quand on l'écoute avec
                son accès québécois lol
              </p>
            </div>
          </div>
          <div class="lefrancois">
            <img class="lefrancois_Image" src={francois} alt="nicolas" />
            <div class="lefrancois_Texte">
              <h3>David Lefrançois</h3>
              <p class="texte_coach">
                Un psychologue de formation qui est passionné par le cerveau et
                qui a beaucoup voyagé à travers le monde. Il cherche a augmenter
                notre rapport au bonheur. C'est un ancien sportif de haut
                niveau.
              </p>
            </div>
          </div>
          <div class="amar">
            <img class="amar_Image" src={oussama} alt="nicolas" />
            <div class="amar_Texte">
              <h3>Oussama Amar-The family</h3>
              <p class="texte_coach">
                Un spécialiste de l'entrepreneuriat. C'est un des cofondateurs
                de the family que je vous recommande vivement de suivre si vous
                souhaitez créer votre propre entreprise. C'est une structure qui
                peut vous accompagner dans vos projets.
              </p>
            </div>
          </div>
          <div class="tolle">
            <img class="tolle_Image" src={tolle} alt="nicolas" />
            <div class="tolle_Texte">
              <h3>Eckhart Tolle</h3>
              <p class="texte_coach">
                Un maître dans le milieu du développement personnel qui a su
                changer de vie. Je vous recommande de le suivre vivement à
                travers ses différentes productions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Coach;

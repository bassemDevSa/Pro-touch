

import { useState } from "react";
import "./bord.css";

export default function Bord() {
  const [ageMin, setAgeMin] = useState(18);
  const [ageMax, setAgeMax] = useState(65);


  return (
    <div className=" table-bord">
      <div className=" flex nav-top">

       <h1>Solde</h1>
      </div>
      <div className=" flex content">
        <div className="  left-section">
          <nav className="  nav-bar">
          <ul>
            <li><a href="">Reglage</a></li>
            <li><a href="">Sponsoring</a></li>
            <li><a href="">Editeurd'image</a></li>
            <li><a href="">Solde</a></li>
            <li><a href="">Solde</a></li>
          </ul>
           </nav>
        </div>




        <div className=" right-section">
        <div className="  objectif">
            <h1>Objectif</h1>
            <p>Quels résultats attendez-vous de cette publicité ?</p>
            <form>
              <label htmlFor="Auto">
                Automatique
                <input className='input-radio' type="radio" name="Objectif" id="Auto" value="option1" />
              </label>
              <label htmlFor="Message">
                Message
                <input className='input-radio' type="radio" name="Objectif" id="Message" value="option2" />
              </label>
              <label htmlFor="intera">
                interactions
                <input className='input-radio' type="radio" name="Objectif" id="intera" value="option3" />
              </label>
              <label htmlFor="intera">
                <div>
                  Trafic <span>(Pour Site Web)</span>
                </div>
                <input className='input-radio' type="radio" name="Objectif" id="intera" value="option3" />
              </label>
            </form>

          </div>
          <div className=" audience">
            <h1>Audience</h1>
            <form>
              <div className="age flex ">
                <label htmlFor="ageMin">Âge minimum :
                  <input className="input-text" type="number" id="ageMin" name="ageMin" min="18" max="65"
                    value={ageMin}
                    onChange={(e) => setAgeMin(parseInt(e.target.value))}
                  /></label>


                <label htmlFor="ageMax">Âge maximum :
                  <input className="input-text" type="number" id="ageMax" name="ageMax" min="18" max="65"
                    value={ageMax}
                    onChange={(e) => setAgeMax(parseInt(e.target.value))}

                  /></label>
              </div>

              <div className=" flex region-domaine">
                <label htmlFor="region">Région :
                <select className="input-select" id="region" name="region">
                  <option value="Tunis">Tunis</option>
                  <option value="Ariana">Ariana</option>
                  <option value="Ben Arous">Ben Arous</option>

                </select>
                </label>

                <label htmlFor="domaine">Domaine d'activité :
                <select className="input-select"  id="domaine" name="domaine" >
                <option value="Technologie">Technologie et Informatique</option>
                  <option value="Voyages ">Voyages et Tourisme</option>
                  <option value="Mode">Mode et Beauté</option>

                </select>
                </label>
              </div>

              <label htmlFor="commentaire">Commentaire :</label>
              <textarea className="input-textarea" id="commentaire" name="commentaire"></textarea>

              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>


      </div>


    </div>
  )
}

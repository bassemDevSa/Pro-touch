
import {useNavigate } from "react-router-dom";
import devAnimation from "../../../public/animation/div.json";
import Lottie from "lottie-react";
import { useRef } from "react";

import "./hero.css";




export default function Hero() {
  const navigate = useNavigate();
  const lottieRef = useRef();
  
  

  return (
    <section className='flex hero'>

      <div className=' left-section'>
        <div className="parent-avatar flex">
          <img src="./lg2.jpg" alt="" className="avatar" />
          <div className="icon-verified" />
        </div>
        <h1 className="titel">Gestionnaire de publicités</h1>
        <p className="sub-titel">Créez et gérez vos publicités sur ordinateur et sur mobile.</p>
        <div className="flex login ">
          
          <button onClick={()=>navigate('bord')} className="button-login">Démarrer</button>

        </div>


      </div>
      <div className=" right-section animation">
        
      <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>

    </section>



  )
}

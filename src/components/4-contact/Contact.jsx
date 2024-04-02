import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json"
import contactAnimation from "../../../public/animation/contact.json"


export default function Contact() {
  const [state, handleSubmit] = useForm("moqgkpgk");
 

  return (
    <section className='contact-us'>
      <h1 className='titel'>
        <span className='icon-envelope'></span>
        Contactez-Nous
      </h1>
      <p className='sub-titel'>Nous sommes toujours ravis d'entendre parler de nos clients, partenaires et visiteurs. Que ce soit pour poser une question, partager une idée ou discuter d'une opportunité de collaboration, n'hésitez pas à nous contacter. Notre équipe dévouée est là pour vous aider et répondre à toutes vos demandes</p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}  >
          <div className='flex' >
            <label htmlFor="email">Adresse Email :</label>
            <input autoComplete='off' required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className='flex' style={{ marginTop: "24px" }}>
            <label htmlFor="message">Votre Message:</label>
            <textarea required name="message" id="message" ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className='submit'>
          {state.submitting ? "Envoyé ..." : "Envoyez"}
          </button>
          

          {
            state.succeeded && (<p className='flex'
            
              style={{ fontSize: "15px", marginTop: "1.7rem" }}
            
            >
             <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Merci pour votre Message !</p>)

          }



        </form>
        <div className=" animation">
        <Lottie
            className="contact-animation"
            style={{ height: 320}}
            animationData={contactAnimation}
          />
        </div>
      </div>






    </section>


  )
}

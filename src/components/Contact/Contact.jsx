import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'; 
import Socials from '../Socials/Socials';

export default function Contact() {
  const [state, handleSubmit] = useForm("mkgqnrpg"); 

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Me <span className='primary-color'>contacter</span></h2>

      <div className="contact-container">
        {/* Bloc texte */}
        <div className="contact-text">
          <h3>Travaillons <span className='primary-color'>ensemble</span></h3>
          <p>
            Vous avez un projet en tête ? Une question ? N'hésitez pas à me
            contacter, je serais ravi d'échanger avec vous.
          </p>
          <Socials align="left" />
        </div>

        {/* Bloc formulaire */}
        <div className="contact-form">
          {state.succeeded ? (
            <p className="contact-success">
              Merci, votre message a été envoyé !
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Nom et prénom *"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Adresse email *"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="sujet" className="form-label">
                </label>
                <input
                  id="sujet"
                  type="sujet"
                  name="sujet"
                  className="form-control"
                  placeholder="Sujet *"
                  required
                />
                <ValidationError 
                  prefix="Sujet" 
                  field="sujet"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="form-control"
                  placeholder="Message *"
                  required
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>
              <p>* Tous les champs sont obligatoires</p>
              <button type="submit" className="btn btn-Contact btn-primary btn-primary:hover" disabled={state.submitting}>
                Envoyer
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// src/Pages/Contact.jsx
import ContactInfo from "../components/ContactPage/ContactInfo/ContactInfo";
import ContactForm from "../components/ContactPage/ContactForm/ContactForm";
import styles from "./Contact.module.css";

export default function ContactPage() {
  return (
    <>
      <h1 className="heading">
        Contact Us - <span>ReviveFitness</span>
      </h1>
      <p className="reg-texts">
        Feel free to use the form or drop us an email. Phone calls work too.
      </p>
      <main id="How-to-contact" className={styles.mainContent}>
        <ContactInfo />
        <ContactForm />
      </main>
    </>
  );
}

// src/Pages/Contact.jsx
import ContactInfo from "../components/ContactInfo/ContactInfo";
import ContactForm from "../components/ContactForm/ContactForm";
import styles from "./Contact.module.css";
import EmptySpace from "../components/Navbar/EmptySpace";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function ContactPage() {
  return (

    <>
      <EmptySpace/>
      <Navbar/>
      <h1 className="heading">
        Contact Us
      </h1>
      <p className="reg-texts">
        Feel free to use the form or drop us an email. Phone calls work too.
      </p>
      <main id="How-to-contact" className={styles.mainContent}>
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

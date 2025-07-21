// src/components/ContactPage/ContactForm/ContactForm.jsx
import { useState } from "react";
import styles from './ContactForm.module.css'; // Import the module CSS

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [message, setMessage] = useState(""); // State for custom message

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend.
    console.log("Form submitted:", form);
    setMessage("Thank you for contacting us! We'll get back to you soon."); // Set custom message
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" }); // Clear form
    
    // Optionally, clear the message after a few seconds
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <section className={styles.contactBox}> {/* Apply module class */}
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}> {/* Apply module class */}
          <div className={styles.inputGroup}> {/* Apply module class */}
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.inputGroup}> {/* Apply module class */}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}> {/* Apply module class */}
          <label htmlFor="phone">Phone (optional)</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="xxx-xxx-xxxx"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}> {/* Apply module class */}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Type your message ..."
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className={styles.submitBtn}> {/* Apply module class */}
          Submit
        </button>
      </form>
      {message && <p style={{ marginTop: '1em', color: 'var(--sub-main-color-2)', textAlign: 'center' }}>{message}</p>} {/* Custom message display */}
    </section>
  );
}
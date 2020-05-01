import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function MyForm() {
  const [status, setStatus] = useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/mjvokwej"
      method="POST"
      className={styles.form}
    >
      <div className={styles.email}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className={styles.message}>
        <label htmlFor="message">Message:</label><br />
        <textarea name="message" id="message" />
      </div>

      {status === "SUCCESS" ? <p>Thanks!</p> : <button className={styles.submit}>Submit</button>}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
  );
}
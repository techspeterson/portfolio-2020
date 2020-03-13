import React from "react";
import styles from "./Contact.module.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mjvokwej"
        method="POST"
        className={styles.form}
      >
        <div className={styles.email}>
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className={styles.message}>
          <label for="message">Message:</label><br />
          <textarea name="message" id="message" />
        </div>

        {status === "SUCCESS" ? <p>Thanks!</p> : <button className={styles.submit}>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
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
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
import React, { useEffect } from "react";

const ContactUS = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
      <h1>Contact Us</h1>
      <h1>
        {" "}
        Don't Give your Information, Contact us is under construction until this
        line is here.
      </h1>
      <form action="[insert form handler URL]" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <br />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <br />

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <br />
        <br />

        <input type="submit" value="Send" />
      </form>

      <p>Alternatively, you can contact us at:</p>

      <p>Email: [adhikarishishir50@gmail.com]</p>

      <p>Phone: [9806680725]</p>

      <p>Address: [Nepal,pokhara]</p>
    </>
  );
};
export default ContactUS;

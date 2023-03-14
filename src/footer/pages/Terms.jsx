import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms and Condition";
  }, []);
  return (
    <>
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to our news website. By using our website, you agree to the
        following terms and conditions:
      </p>

      <h2>Ownership of Content</h2>
      <p>
        All content published on our website, including articles, images,
        videos, and any other multimedia elements, are owned by us,from
        different source
      </p>

      <h2>Intellectual Property Rights</h2>
      <p>
        We respect the intellectual property rights of others and expect our
        users to do the same. You may not upload any copyrighted material to our
        website without permission.
      </p>

      <h2>Accuracy of Information</h2>
      <p>
        We strive to provide accurate and up-to-date information to our readers,
        but cannot guarantee the accuracy of all content on our website.
        Therefore, users should not rely solely on the information provided on
        our website and should conduct their own research.
      </p>

      <h2>User Conduct</h2>
      <p>
        You agree to not use our website for any illegal or unauthorized
        purpose, harass or harm others, upload any viruses or malware, or
        attempt to gain unauthorized access to our website or its servers.
      </p>

      <h2>Comments and User-Generated Content</h2>
      <p>
        We may allow users to post comments or submit user-generated content.
        However, we reserve the right to moderate, edit, or remove any content
        that violates the terms and conditions, is offensive or defamatory, or
        otherwise inappropriate.
      </p>

      <h2>Privacy Policy</h2>
      <p>
        Please refer to our <Link to="/about">Privacy Policy</Link> for
        information on how we collect, store, and use user data.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        We limit our liability for any damages caused by the use of our website
        or reliance on its content. This includes limiting liability for any
        direct, indirect, incidental, or consequential damages.
      </p>

      <h2>Changes to Terms and Conditions</h2>
      <p>
        We reserve the right to change the terms and conditions at any time
        without notice. Users should check the terms and conditions periodically
        for any updates or changes.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms and conditions are governed by the laws of [insert governing
        law].
      </p>

      <h2>Contact Information</h2>
      <p>
        If you have any questions or concerns about our terms and conditions,
        please contact us at [insert contact information].
      </p>
    </>
  );
};

export default Terms;

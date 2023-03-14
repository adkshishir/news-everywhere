import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy";
  });
  return (
    <div className="p-10 xl:w-9/12 w-[97%] mx-auto border-solid  border-4  rounded-xl  bg-white">
      <h1 className=" font-extrabold text-2xl font-[itim] text-blue-900">
        Privacy Policy
      </h1>
      <p className="text-blue-800 font[Poppins] text-md mb-3">
        We respect the privacy of our website users and are committed to
        protecting their personal information. This privacy policy explains how
        we collect, store, and use user data.
      </p>

      <h2 className=" font-extrabold text-xl font-[itim] text-blue-900">
        What Information Do We Collect?
      </h2>
      <p className="text-blue-800 font[Poppins] text-md mb-3">
        We may collect personal information such as your name, email address,
        and IP address when you register or subscribe to our website, or when
        you contact us through our website. We may also collect non-personal
        information such as your browser type, device type, and operating
        system.
      </p>

      <h2 className=" font-extrabold text-xl font-[itim] text-blue-900">
        How Do We Use Your Information?
      </h2>
      <p className="text-blue-800 font[Poppins] text-md mb-3">
        We use your personal information to provide and improve our services, to
        communicate with you, and to send you marketing and promotional
        materials if you have opted in to receive them. We may also use
        non-personal information for analytical purposes and to improve the
        performance and usability of our website.
      </p>

      <h2 className=" font-extrabold text-xl font-[itim] text-blue-900">
        How Do We Protect Your Information?
      </h2>
      <p className="text-blue-800 font[Poppins] text-md mb-3">
        We implement a variety of security measures to protect your personal
        information, including encryption and secure socket layer (SSL)
        technology. However, we cannot guarantee the security of your
        information as no method of transmission over the internet is 100%
        secure.
      </p>

      <h2 className=" font-extrabold text-xl font-[itim] text-blue-900">
        Do We Share Your Information?
      </h2>
      <p className="text-blue-800 font[Poppins] text-md mb-3">
        We do not sell, trade, or otherwise transfer your personal information
        to third parties without your consent. However, we may share your
        information with trusted third-party service providers who assist us in
        operating our website and providing our services.
      </p>

      <h2 className=" font-extrabold text-xl font-[itim] text-blue-900">
        Do We Use Cookies?
      </h2>
      <p className="text-blue-800 font[Poppins] text-md mb-3">
        We use cookies and similar technologies to collect non-personal
        information and to enhance your user experience. You may choose to
        disable cookies in your browser settings, but this may affect your
        ability to use certain features of our website.
      </p>

      <h2 className=" font-extrabold text-xl font-[itim] text-blue-900">
        How Can You Access or Delete Your Information?
      </h2>
      <p className="text-blue-800 font[Poppins] text-md mb-3">
        You may access, modify, or delete your personal information by
        contacting us at{" "}
        <Link to="/contact" className=" text-orange-600">
          Contact
        </Link>
        . Please note that we may retain certain information for archival
        purposes and to comply with legal obligations.
      </p>

      <h2 className=" font-extrabold text-xl font-[itim] text-blue-900">
        Changes to Our Privacy Policy
      </h2>
      <p className="text-blue-800 font[Poppins] text-md mb-3">
        We reserve the right to change this privacy policy at any time without
        notice. Users should check the privacy policy periodically for any
        updates or changes.
      </p>

      <h2 className=" font-extrabold text-xl font-[itim] text-blue-900">
        Contact Information
      </h2>
      <p className="text-blue-800 text-md">
        If you have any questions or concerns about our privacy policy, please
        contact us.
        <Link to="/contact" className=" text-orange-600">
          {" "}
          <br />
          Contact
        </Link>
      </p>
    </div>
  );
};
export default Privacy;

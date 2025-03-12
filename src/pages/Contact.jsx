import React from "react";
import ContactForm from "../Components/contactForm/ContactForm";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 py-10 px-2">
      <h1 className="text-5xl text-slate-600 font-semibold  text-start">
        Get in touch
      </h1>
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <div className="flex-1 w-full">
          <p className="text-xl text-slate-600 font-medium">
            Looking to get in touch with us? Fill out the form <br /> and we’ll
            get right back to you
          </p>
          <h1 className="text-xl text-slate-400 font-medium uppercase mt-5">
            Phone
          </h1>
          <p className="text-xl text-slate-600 font-medium">305-570-5232</p>
          <h1 className="text-xl text-slate-400 font-medium uppercase mt-5">
            Email
          </h1>
          <p className="text-xl text-slate-600 font-medium">
          Reservations@strawberrymoonmiapoolparty.com
          </p>
          <div className="mt-6">
            <div className="w-full h-[200px]">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.940161289834!2d-73.98513082421165!3d40.75889677132062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855afc28a01%3A0xe55a379b68ac9234!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1690000000000"
              ></iframe>
            </div>

            {/* Get Directions Button */}
            <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
              <div>
               Strawberry Moon pool party <br />
               601 Washington Ave <br />
                Miami Beach, FL, United States
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Times+Square,New+York,USA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

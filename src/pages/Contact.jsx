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
          vipservices@strawberrymoonmiapoolparty.com
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
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.2975485418013!2d-80.13453982387156!3d25.77509387730244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b4f5b9c7f0f3%3A0x4f45d8b65d82db3!2s601%20Washington%20Ave%2C%20Miami%20Beach%2C%20FL%2033919%2C%20USA!5e0!3m2!1sen!2sus!4v1710800000000"
/>

            </div>

            {/* Get Directions Button */}
            <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
              <div>
               Strawberry Moon pool party <br />
               601 Washington Ave <br />
                Miami Beach, FL, United States
              </div>
             
              <a
             href="https://www.google.com/maps/dir/?api=1&destination=601+Washington+Ave,Miami+Beach,FL,USA"
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

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section text-white bg-primary">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-8 text-gray-300">
          Have a question or want to collaborate? Drop me a message below!
        </p>

        {submitted ? (
          <p className="text-green-400 text-lg font-medium mt-6">
            ✅ Thanks for your message! I'll be in touch soon.
          </p>
        ) : (
          <form
            action="https://formsubmit.co/akshaymaniyampara40@gmail.com"
            method="POST"
            className="flex flex-col space-y-4 text-left"
            onSubmit={() => setSubmitted(true)}
          >
            {/*  Spam Protection */}
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks for reaching out! I'll get back to you soon."
            />
            <input
              type="hidden"
              name="_next"
              value="https://yourdomain.com/thank-you"
            />

            {/*  Visible Fields */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg bg-white text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg bg-white text-black"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="p-3 rounded-lg bg-white text-black"
            />

            <button
              type="submit"
              className="bg-accent text-primary font-semibold py-3 px-6 rounded-full hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

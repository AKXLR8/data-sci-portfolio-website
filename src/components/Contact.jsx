
export default function Contact() {
  return (
    <section id="contact" className="section">
      <h3 className="text-3xl font-semibold mb-6">Get in touch</h3>
      <form
        className="card max-w-xl mx-auto space-y-4"
        action="https://formspree.io/f/yourID"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full p-3 rounded bg-primary border border-gray-600 focus:outline-accent"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-3 rounded bg-primary border border-gray-600 focus:outline-accent"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          required
          className="w-full p-3 rounded bg-primary border border-gray-600 focus:outline-accent"
        ></textarea>
        <button
          type="submit"
          className="block w-full py-3 rounded-full bg-accent text-primary font-semibold hover:scale-105 transition"
        >
          Send
        </button>
      </form>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-red-200"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-red-200"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-red-200"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h4 className="text-xl font-semibold mb-1">Visit Us</h4>
            <p>123 Flavor Street<br />Foodville, FL 45678</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-1">Call Us</h4>
            <p>+1 (234) 567-8901</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-1">Email</h4>
            <p>info@nextgenbites.com</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-1">Opening Hours</h4>
            <p>Mon–Sat: 11:00 AM – 10:00 PM<br />Sun: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

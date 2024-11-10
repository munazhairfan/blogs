export default function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6">
        <h1 className="text-4xl font-bold text-teal-600 mb-6">Contact Me</h1>
        <form className="w-full max-w-lg space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg text-teal-700 mb-2">Name:</label>
            <input type="text" id="name" name="name" className="w-full p-3 border-2 border-gray-300 rounded-lg" placeholder="Your Name" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg text-teal-700 mb-2">Email:</label>
            <input type="email" id="email" name="email" className="w-full p-3 border-2 border-gray-300 rounded-lg" placeholder="Your Email" required />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg text-teal-700 mb-2">Message:</label>
            <textarea id="message" name="message" className="w-full p-3 border-2 border-gray-300 rounded-lg" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="px-6 py-3 bg-teal-600 text-white rounded-lg w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
}

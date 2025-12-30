export default function Contact() {
  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-primary">Contact Us</h2>
      <form className="mt-6 space-y-4">
        <input className="w-full border p-2" placeholder="Name" />
        <input className="w-full border p-2" placeholder="Email" />
        <textarea className="w-full border p-2" placeholder="Message" />
        <button className="bg-secondary text-white px-4 py-2">
          Send Message
        </button>
      </form>
    </section>
  );
}
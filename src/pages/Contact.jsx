import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields");
      return;
    }

    setStatus("Message sent successfully! 🎉");

    console.log(form);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

      {/* CONTACT FORM */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Contact Us
        </h2>

        {status && (
          <p className="text-sm text-blue-600 mb-2">
            {status}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Send Message
          </button>

        </form>
      </div>

      {/* CONTACT INFO */}
      <div className="bg-gray-50 p-6 rounded shadow">
        <h3 className="text-xl font-bold mb-4">
          Get in Touch
        </h3>

        <div className="space-y-4 text-gray-700">

          <div className="p-3 bg-white rounded shadow">
             Location: Uttrakhand, India
          </div>

          <div className="p-3 bg-white rounded shadow">
             Phone: +91 98765 43210
          </div>

          <div className="p-3 bg-white rounded shadow">
             Email: ecostay@gmail.com
          </div>

          <div className="p-3 bg-white rounded shadow">
             Support: 24/7 Customer Service
          </div>

        </div>
      </div>

    </div>
  );
}
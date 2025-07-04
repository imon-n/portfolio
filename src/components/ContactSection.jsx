import {
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  Github,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { useState, useEffect } from "react";
import { useToast } from "../hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = 100;
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.6 + 0.4,
      });
    }
    setStars(newStars);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 px-8 md:px-4 overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-black -z-10">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-yellow-400"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              filter: "drop-shadow(0 0 2px #FFD700)",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl relative z-10 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:imon.eeecu@gmail.com"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    imon.eeecu@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone/What'App</h4>
                  <a
                    href="tel:+8801746726836"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    +880 1746726836
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-white/70">Chattogram, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/nur-mohammad-imon-29a2b4255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-primary transition-colors"
                >
                  <IoLogoLinkedin size={32} />
                </a>
                <a
                  href="https://www.facebook.com/mdimon.imon.18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-primary transition-colors"
                >
                  <FaFacebook size={32} />
                </a>
                <a
                  href="https://github.com/imon-n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                >
                  <FaGithub size={32} />
                </a>
                <a
                  href="https://www.instagram.com/mdimon.imon.18/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-primary transition-colors"
                >
                  <FaInstagram size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl text-white  font-semibold mb-6 ">
              Send a Message
            </h3>

            <form className="space-y-6 " onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-blue-white  text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input input-bordered w-full bg-gray-700"
                  placeholder="Rikar Machau..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input input-bordered w-full bg-gray-700"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-white"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="textarea textarea-bordered w-full resize-none bg-gray-700"
                  placeholder="Hello, I'd like to talk about..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

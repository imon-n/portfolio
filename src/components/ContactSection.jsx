import {
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  Github
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { useState } from "react";
import { useToast } from "../hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section id="contact" className="py-24 px-4 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
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
                    className="text-gray-600 hover:text-primary transition-colors"
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
                    href="tel:+11234567890"
                    className="text-gray-600 hover:text-primary transition-colors"
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
                  <p className="text-gray-600 hover:text-primary transition-colors">
                    Chattogram, Bangladesh
                  </p>
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
                  className="text-blue-600 rounded-md hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <IoLogoLinkedin size={32} />
                </a>
                <a
                  href="https://www.facebook.com/mdimon.imon.18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 rounded-md hover:text-primary transition-colors"
                  aria-label="Twitch"
                >
                  <FaFacebook size={32} />
                </a>
                <a
                  href="https://github.com/imon-n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <FaGithub size={32} />
                </a>
                <a
                  href="https://www.instagram.com/mdimon.imon.18/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" rounded-full text-pink-600 "
                  aria-label="Instagram"
                >
                  <FaInstagram size={32} />
                </a>
                
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-base-100 p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input input-bordered w-full"
                  placeholder="Rikar Machau..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input input-bordered w-full"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="textarea textarea-bordered w-full resize-none"
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

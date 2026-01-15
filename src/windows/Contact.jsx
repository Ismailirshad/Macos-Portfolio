import WindowControls from "../components/WindowControls";
import { socials } from "../constants";

const Contact = () => {
  return (
    <div id="contact">
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-2">
        <img
          src="/images/resumeDp.png"
          alt="irshad"
          className="w-20 rounded-full"
        />

        <h3>Let’s Connect</h3>
        <p className="text-sm text-gray-600">
          I’m actively seeking Software Developer roles and freelance
          opportunities where I can contribute to building scalable, secure, and
          user-focused web applications. With experience in full-stack MERN
          projects, real-time systems, and production deployments, I’m always
          open to meaningful collaborations and professional conversations.
        </p>

        <p className="font-semibold ">irshadsha164@gmail.com</p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li
              key={id}
              className="rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: bg }}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
                className="flex flex-col items-center"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/15">
                  <img
                    src={icon}
                    alt={text}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-white tracking-wide">
                  {text}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;

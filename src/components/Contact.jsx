import { Icon } from "./Icon"
import "../styles/components/contact.sass"

export function Contact({ content }) {
  return (
    <section id="contact" className="flex column align-center">
      <header>
        <h2 id="contact-title">{content["title"]}</h2>
      </header>
      <div id="text-container" className="flex align-center column">
        {content["contactText"].map((item, index) => (
          <p className="contact-text" key={index}>
            {item}
          </p>
        ))}
      </div>

      <ul className="contact-list flex column">
        <li className="contact-item">
          <a href="mailto:marcosag.dev@gmail.com?subject=Contato" target="_blank" className="contact-link flex align-center">
            <Icon
              icon="email"
              name="marcosag.dev@gmail.com"
            />
          </a>
        </li>
        <li className="contact-item">
          <a href="https://www.linkedin.com/in/marcosagdev/" target="_blank" className="contact-link flex align-center">
            <Icon
              icon="linkedin"
              name="Marcos Vinicius Garcia"
            />
          </a>
        </li>
        <li className="contact-item">
          <a href="https://github.com/marcosvag/" target="_blank" className="contact-link flex align-center">
            <Icon
              icon="github"
              name="@marcosvag"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
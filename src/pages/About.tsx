import { bio, skills, contact } from '../content/about';
import { Prose } from '../components/Prose';
import './About.css';

export function About() {
  return (
    <div className="about">
      <div className="about__inner">

        <section className="bio">
          <Prose>
            {bio.map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </section>

        <section className="about__skills">
          <p className="about__edge-code">skills</p>
          <dl className="skills-list">
            {skills.map((group) => (
              <div key={group.label} className="skills-list__group">
                <dt className="skills-list__label">{group.label}</dt>
                <dd className="skills-list__items">{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="about__contact">
          <p className="about__edge-code">contact</p>
          <ul className="contact-list">
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={contact.resume} target="_blank" rel="noopener noreferrer">
                Resume (PDF)
              </a>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}

import { bio, skills, contact, type BioParagraph } from '../content/about';
import { Link } from 'react-router-dom';
import { Prose } from '../components/Prose';
import './About.css';

function renderParagraph(p: BioParagraph, i: number) {
  if (typeof p === 'string') return <p key={i}>{p}</p>;
  return (
    <p key={i}>
      {p.map((seg, j) =>
        typeof seg === 'string' ? seg : (
          seg.href.startsWith('/') ? (
            <Link key={j} to={seg.href}>{seg.text}</Link>
          ) : (
            <a key={j} href={seg.href}>{seg.text}</a>
          )
        )
      )}
    </p>
  );
}

export function About() {
  return (
    <div className="about">
      <div className="about__inner">

        <section className="about__photo">
          <img
            src="/Gabriel.png"
            alt="Gabriel Arias"
            className="about__portrait"
          />
          <p className="about__edge-code">Gabriel Arias  2026</p>
        </section>

        <section className="bio">
          <Prose>
            {bio.map((p, i) => renderParagraph(p, i))}
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

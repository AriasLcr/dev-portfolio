import { Link } from 'react-router-dom';
import { Prose } from '../components/Prose';
import { WorkIcon, AnimationIcon, AboutIcon } from '../components/Icons';
import './Landing.css';

export function Landing() {
  return (
    <>
      <section className="intro">
        <div className="intro__inner">
          <h1 className="intro__name">Gabriel Arias</h1>
          <Prose>
            <p>
              Backend-leaning full-stack engineer. I work on payments, access control, and
              accessibility: the parts of a system that have to stay correct when things go wrong.
            </p>
            <p>
              Currently a software engineer intern at Ezre, building digital receipts that blind
              and low-vision customers can read. Tech lead on a makerspace platform delivered for
              an external client.
            </p>
            <p>Available full-time from January 2027. F-1 STEM OPT work authorization. Open to relocation.</p>
          </Prose>
        </div>
      </section>

      <section className="section-links">
        <div className="section-links__inner">
          <Link to="/work" className="section-links__item">
            <div className="section-links__placeholder" aria-hidden="true">
              <WorkIcon className="section-links__icon" />
            </div>
            <span className="section-links__label">work</span>
          </Link>
          <Link to="/animation" className="section-links__item">
            <div className="section-links__placeholder" aria-hidden="true">
              <AnimationIcon className="section-links__icon" />
            </div>
            <span className="section-links__label">animation</span>
          </Link>
          <Link to="/about" className="section-links__item">
            <div className="section-links__placeholder" aria-hidden="true">
              <AboutIcon className="section-links__icon" />
            </div>
            <span className="section-links__label">about</span>
          </Link>
        </div>
      </section>
    </>
  );
}

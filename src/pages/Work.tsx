import { caseStudies, textEntries } from '../content/work';
import { Frame } from '../components/Frame';
import { Prose } from '../components/Prose';
import './Work.css';

export function Work() {
  return (
    <div className="work">
      <div className="work__inner">

        {caseStudies.map((cs) => (
          <article key={cs.id} className="case-study">
            <h2 className="entry-title">{cs.org}</h2>
            <p className="edge-code">{cs.edgeCode}</p>
            <p className="work-meta">{cs.location}</p>
            <p className="work-stack">{cs.stack.join('  ·  ')}</p>
            {cs.url && (
              <a className="entry-link" href={cs.url} target="_blank" rel="noreferrer">[Link]</a>
            )}

            <Prose>
              {cs.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </Prose>

            {cs.media.length > 0 && (
              <div className="case-study__frames">
                {cs.media.map((m, i) => (
                  <Frame
                    key={i}
                    src={m.src}
                    poster={m.poster}
                    alt={m.alt}
                    label={m.label}
                    aspect={m.aspect}
                    expandable
                  />
                ))}
              </div>
            )}
          </article>
        ))}

        <div className="text-entries">
          {textEntries.map((te) => (
            <article key={te.id} className="text-entry">
              <h2 className="entry-title">{te.org}</h2>
              <p className="edge-code">{te.edgeCode}</p>
              <p className="work-meta">{te.location}</p>

              <Prose>
                {te.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </Prose>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}

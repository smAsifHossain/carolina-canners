import { useMemo, useState } from 'react';
import Button from '../../components/Button/Button.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import { imageSet } from '../../data/siteData.js';
import styles from './Contact.module.css';

const initialForm = {
  name: '',
  email: '',
  interest: 'Co-packing',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  const errors = useMemo(() => {
    const next = {};

    if (!form.name.trim()) {
      next.name = 'Name is required.';
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = 'Use a valid email address.';
    }

    if (form.message.trim().length < 12) {
      next.message = 'Message must be at least 12 characters.';
    }

    return next;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const submitForm = (event) => {
    event.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (hasErrors) {
      return;
    }

    setSubmitted(true);
    setForm(initialForm);
    setTouched({});
  };

  return (
    <div className="page">
      <Hero
        compact
        eyebrow="Contact"
        title="Turn interest into a clear next step."
        text="Connect with the Carolina Canners team about production capabilities, bottling partnerships, careers, or general business inquiries."
        image={imageSet.plant}
        imageAlt="Exterior of Carolina Canners facility"
      />

      <section className="section">
        <div className={`${styles.layout} container`}>
          <Reveal>
            <p className="eyebrow">Start a conversation</p>
            <h2 className="section-title">Tell us how we can help.</h2>
            <p className="section-copy">
              Share a few details about your question or opportunity, and the right team can follow
              up with the information you need.
            </p>
            <div className={styles.info}>
              <strong>Cheraw, South Carolina</strong>
              <span>1100 State Road</span>
              <span>Beverage manufacturing and bottling operations</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className={styles.form} onSubmit={submitForm} noValidate>
              <label>
                Name
                <input
                  name="name"
                  value={form.name}
                  aria-invalid={Boolean(touched.name && errors.name)}
                  aria-describedby="name-error"
                  onBlur={() => setTouched((current) => ({ ...current, name: true }))}
                  onChange={updateField}
                />
                <span id="name-error">{touched.name && errors.name ? errors.name : ''}</span>
              </label>

              <label>
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  aria-invalid={Boolean(touched.email && errors.email)}
                  aria-describedby="email-error"
                  onBlur={() => setTouched((current) => ({ ...current, email: true }))}
                  onChange={updateField}
                />
                <span id="email-error">{touched.email && errors.email ? errors.email : ''}</span>
              </label>

              <label>
                Interest
                <select name="interest" value={form.interest} onChange={updateField}>
                  <option>Co-packing</option>
                  <option>Bottling partnership</option>
                  <option>Careers</option>
                  <option>General question</option>
                </select>
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  aria-invalid={Boolean(touched.message && errors.message)}
                  aria-describedby="message-error"
                  onBlur={() => setTouched((current) => ({ ...current, message: true }))}
                  onChange={updateField}
                />
                <span id="message-error">
                  {touched.message && errors.message ? errors.message : ''}
                </span>
              </label>

              <Button type="submit" disabled={hasErrors}>
                Send Message
              </Button>

              {submitted && (
                <p className={styles.success} role="status">
                  Thank you. Your message is ready for review.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

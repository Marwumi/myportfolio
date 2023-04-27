


import React from 'react';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

const Formtwo = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSubmitting(true);

    emailjs
    .sendForm(
      "service_qomfuaa",
      "template_ozfz7dx",
      form.current,
      "9D7R1X3Chc0GoM7gL"
    )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      ).finally(() => {
        setSubmitting(false);
      });
  };

  const form = useRef();

  return (
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <h1 class="text-center">Contact me</h1>
          {/* <!-- contact form --> */}
          {success ? (
            <div className="alert alert-success">Message sent successfully!</div>
          ) : (
            <form ref={form} onSubmit={sendEmail}>
              {/* <!-- name --> */}
              <div class="form-group">
                <label for="name" className='text-light'>Name</label>
                <input
                  type="name"
                  name="yourname"
                  className="form-control"
                  id="yourname"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* <!-- email --> */}
              <div class="form-group">
                <label for="email" className='text-light'>Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* <!-- subject --> */}
              <div class="form-group">
                <label for="subject" className='text-light'>Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  id="subject"
                  placeholder="Enter email subject"
                  required
                />
              </div>

              <div class="form-group">
                <label for="email_body" className='text-light'>Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>

              {error && (
                <div className="alert alert-danger">Failed to send message. Please try again later.</div>
              )}

              <button type="submit" className="btn btn-primary text-center d-flex justify-content-center align-content-center" style={{margin: "10px auto", width: "50%"}} disabled={submitting}>
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Formtwo;


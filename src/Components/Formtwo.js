import React from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Formtwo = () => {
    
  const sendEmail = (e) => {
    e.preventDefault();

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
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };

  const form = useRef();

  return (
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <h1 class="text-center">Contact me</h1>
          {/* <!-- contact form --> */}
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
              />
            </div>

            <div class="form-group">
              <label for="email_body" className='text-light'>Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary text-center d-flex justify-content-center align-content-center" style={{margin: "10px auto", width: "50%"}}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formtwo

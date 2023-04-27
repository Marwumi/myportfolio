import "./FormStyles.css"


import React from 'react';
// import emailjs from 'emailjs;'


const Form = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs.send('service_qomfuaa', 'template_ozfz7dx', 'values', '9D7R1X3Chc0GoM7gL');
  // }
  return (
    <div className="form">
      <form action="mailto:mowumiolatinwo@gmail.com"> 
      {/* onSubmit={handleSubmit}> */}
        <label>Your Name</label>
        <input type="text"></input>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" />
        <button className="btn">Submit</button>
      </form>
      
    </div>
  )
}

export default Form;

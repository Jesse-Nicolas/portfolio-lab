import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css'

const ContactForm = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [message, setMessage] = useState('')


  const submitMessage = async () => {
    if (userEmail && message) {
      const serviceId = 'gmail_service_id'
      const templateId = 'contact_form'
      const userID = `MjnnWo5cMd2j84nXh`
      const templateParams = {
        userEmail: userEmail,
        userName: userName, 
        message: message,
      }
      try {
        await emailjs.send(serviceId, templateId, templateParams, userID)
      } catch (error) {
        console.log(error)
      }
      setUserName('')
      setUserEmail('')
      setMessage('')

    }
  }

  return (  
    <>
      <div id='form'>
        <h3>Reach out</h3>
        <div className='input'>
          <input type="email" value={userEmail} name='userEmail' placeholder='your email here' onChange={e => setUserEmail(e.target.value)}/>
        </div>
        <textarea name="message" value={message} cols="30" rows="20" placeholder='message' onChange={e => setMessage(e.target.value)}/>
        <button type="button" className="btn btn-secondary" onClick={submitMessage}>Send</button>
      </div>
    </>
  );
}

export default ContactForm;
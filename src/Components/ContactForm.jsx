import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css'

const ContactForm = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [message, setMessage] = useState('')


  const submitMessage = async () => {
    if (userEmail && userName && message) {
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
          <label htmlFor="userName">Name: </label>
          <input type="text" value={userName} name='userName' placeholder='your name' onChange={e => setUserName(e.target.value)}/>
        </div>
        <div className='input'>
          <label htmlFor="userEmail">Email: </label>
          <input type="email" value={userEmail} name='userEmail' placeholder='your email' onChange={e => setUserEmail(e.target.value)}/>
        </div>
        <textarea name="message" value={message} cols="40" rows="20" placeholder='message' onChange={e => setMessage(e.target.value)}/>
        <button type="button" class="btn btn-secondary" onClick={submitMessage}>Send</button>
      </div>
    </>
  );
}

export default ContactForm;
import React, { useState } from 'react'
import { send } from 'emailjs-com'
import '../styles/MessageForm.css'

function MessageForm() {

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    })

    const onSubmit = (e) => {
        setComplete(true)
        e.preventDefault()
        send(
            'service_vuvzz2b',
            'template_4nctapr',
            toSend,
            'bvJ4ECdVNTgQCBapi'
        )
        .then((response) => {
            console.log('Success', response.status, response.text)
        })
        .catch((err) => {
            console.log('Failed', err)
        })
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value})
    }

    const [complete, setComplete] = useState(false)

    const enabled = toSend.from_name.length > 0 && toSend.message.length > 0 && toSend.reply_to.length > 0

  return (
    <div>
        <h3 className='text'>Contact Me!</h3>
    <form onSubmit={onSubmit} className={complete === false ? 'false' : 'true'}>
        <input
            type={'text'}
            name='from_name'
            placeholder='Your Name'
            value={toSend.from_name}
            onChange={handleChange}
        /> 
        <input
            type={'text'}
            name='reply_to'
            placeholder='Your email'
            value={toSend.reply_to}
            onChange={handleChange}
        />
        <input
            type={'text'}
            name='message'
            placeholder='Your message'
            value={toSend.message}
            onChange={handleChange}
        />
        <button className={enabled === true ? 'form-button-enabled' : 'form-button-disabled'} type='submit' disabled={!enabled}>Submit</button>
    </form>
    </div>
  )
}

export default MessageForm
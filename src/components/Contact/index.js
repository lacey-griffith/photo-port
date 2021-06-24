import { DEFAULT_EXTENSIONS } from '@babel/core';
import React from 'react';


function ContactForm(){
    return(
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form'>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' placeholder='Name'></input>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' placeholder='Email'></input>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5'/>
                </div>
            <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;
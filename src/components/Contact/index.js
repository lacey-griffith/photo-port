import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm(){
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({name:'', email:'', message:''});

    const {name, email, message} = formState;

    function handleChange(e){

        if(e.target.name ==='email'){
        const isValid = validateEmail(e.target.value)
        if(!isValid){
            setErrorMessage('Invalid email.')
        } else {
            setErrorMessage('')
        }
    } else {
        if(!e.target.value.length){
            setErrorMessage(`${e.target.name} is required.`)
        } else {
            setErrorMessage('')
        }
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }
    }



    function handleSubmit(e){
        e.preventDefault();
        //console.log(formState)
    }

    return(
        <section>
            <h1 data-testid='contact'>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' placeholder='Name' defaultValue={name} name='Name' onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' placeholder='Email' name='Email' defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='Message' rows='5' defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
            <button type='submit' data-testid='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;
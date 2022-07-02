import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm('service_mmxlxb6', 'template_iiie0m9', form.current, 'zFLN3jT04QZupEfEd')
            .then((result) => {
                toast("Thank you for your mail.")
            }, (error) => {
                toast("Opps! There is something wrong!")
            });
        e.target.reset();   
    };

    return (
        <div name='contact' className='w-full bg-[#0a192f] flex justify-center items-center p-4'>
            <form
                onSubmit={sendEmail}
                ref={form}
                className='flex flex-col max-w-[600px] w-full'>
                <div className='py-6'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact me</p>
                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - azad.is.rasel@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' name="user_name" type="text" placeholder='Name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button type='submit' value="Send" className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact
"use client"

import { useState } from "react";
import emailjs from '@emailjs/browser';
import conf from "@/utils";
import { toast } from "sonner";

const ContactForm = () => {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const handleSubmit = async () => {
        if (!email || !name || !message) {
            toast.error('Please fill all the fields');
            return;
        }
        console.log(email, name, message);
        const templateParams = {
            from_name: name,
            to_name: "Siddhant",
            message,
        };
        try {
            const response = emailjs.send(conf.emailjsServiceId, conf.emailjsTemplateId, templateParams, conf.emailjsPublicKey);
            toast.promise(response, {
                loading: 'Sending email...',
                success: (response) => {
                    if (response.status === 200) {
                        setEmail("");
                        setName("");
                        setMessage("");
                        return 'Email sent successfully';
                    }
                },
                error: 'Error sending email'
            })
            // if (response.status === 200) {
            //     setEmail("");
            //     setName("");
            //     setMessage("");
            //     alert("Message sent successfully");
            //     toast.success('Email send successfully');
            // }
        } catch (error) {
            console.error(error);
            toast.error('Error sending email');
        }
    }
    return (
        <div className='px-6 py-6 md:py-8 md:px-10 flex flex-col gap-4 '>
            <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Your Name' className='bg-transparent  border-2 border-white/20 rounded-md px-4 py-2 outline-none focus:border-emerald-300' />
            <input type='email' required value={email} onChange={e => setEmail(e.target.value)} placeholder='Your Email' className='bg-transparent  border-2 border-white/20 rounded-md px-4 py-2 outline-none focus:border-emerald-300' />
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder='Your Message' className='bg-transparent  border-2 border-white/20 rounded-md px-4 py-2 outline-none focus:border-emerald-300' />
            <button onClick={handleSubmit} className='mx-auto  w-fit  text-gray-950 font-semibold items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5'>
                Let&apos;s Chat
            </button>
        </div>
    )
}

export default ContactForm
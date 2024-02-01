import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2xq4gtp', 'template_6wwrxxc', form.current, 'eS3fJ2fP3Ej0EH_Hb')
            .then((result) => {
                console.log(result.text);
                alert("Message Sent!!");
                clear
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <>
            <div>
                <section className="bg-orange-300 dark:bg-gray-900">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center underline text-gray-900 dark:text-white">Contact Us</h2>
                        <br />
                        <form className="space-y-8" ref={form} onSubmit={sendEmail}>
                            <div>
                                <label for="email" className="block mb-2 text-16xl font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                                <input type="email" name="from_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Email Id..." required />
                            </div>
                            <div>
                                <label for="name" className="block mb-2 text-16xl font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                                <input type="text" name="from_email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Name..." required />
                            </div>
                            <div>
                                <label for="subject" className="block mb-2 text-16xl font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <input type="text" name="subject" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                            </div>
                            <div classname="sm:col-span-2">
                                <label for="message" className="block mb-2 text-16xl font-medium text-gray-900 dark:text-gray-400">Your Message</label>
                                <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                        </form>
                    </div>
                </section>
            </div >
           
        </>
    );
};
export default Contact;
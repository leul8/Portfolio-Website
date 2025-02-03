import React from 'react';
import Reveal from "./Reveal";
import Swal from 'sweetalert2'
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1a1fa673-6773-49c4-aae3-a437315e661c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      Swal.fire({
      title: "Success!",
      text: "Message Sent Successfully!",
      icon: "success"
});
    }
  };
  return (
    
    <section id="contact" className="bg-white dark:bg-gray-900 py-20 px-4">
      
      <div className="container mx-auto max-w-full">
        <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white">Contact</h2>
        <form className="max-w-xl mx-auto space-y-6" onSubmit={onSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            name = "name"
            className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg" 
          required/>
          <input 
            type="email" 
            placeholder="Your Email" 
            name = "email"
            className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg" 
          required/>
          <textarea 
            placeholder="Write Message Here..." 
            name = "message"
            className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg h-32" 
          required/>
          <button 
            className="w-full px-6 py-2 bg-blue-500 dark:bg-blue-500 text-white rounded hover:bg-blue-800 dark:hover:bg-blue-800"
          >
            Send
          </button>
        </form></Reveal>
      </div>
    </section>
);
};

export default Contact;

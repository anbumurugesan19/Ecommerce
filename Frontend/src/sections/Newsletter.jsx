import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('Thank you for subscribing to our newsletter!');
                setEmail(''); // Reset the input field
            } else {
                toast.error('Failed to subscribe. Please try again.');
            }
        } catch (error) {
            toast.error('An error occurred while submitting. Please try again.');
        }
    };

    return (
        <div className="py-8">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <p className="text-center text-green-500 text-3xl font-bold mb-8">
                    Subscribe to Our Newsletter!
                </p>
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit} className="flex w-full">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="flex-1 bg-white rounded-l-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-r-full"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <ToastContainer theme='dark' position='top-center'/>
        </div>
    );
};

export default Newsletter;

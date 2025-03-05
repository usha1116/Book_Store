import React from "react";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "fa7e32e8-29fe-4d5d-a8d1-b8d09b8ece20");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Your Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Write your message here</label>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Enter your message"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-400 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Submit Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

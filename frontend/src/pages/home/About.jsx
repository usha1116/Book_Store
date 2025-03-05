import React from "react";
import { FaBook, FaUsers, FaStar } from "react-icons/fa";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
            {/* Header Section */}
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800">About <span className="text-blue-600">Our Bookstore</span></h1>
                <p className="text-gray-600 mt-4 text-lg">Discover, explore, and immerse yourself in the world of books.</p>
            </div>

            {/* Mission Section */}
            <div className="max-w-5xl mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800">📖 Our Mission</h2>
                <p className="text-gray-600 mt-4 leading-relaxed">
                    At <span className="text-blue-600 font-semibold">Book Haven</span>, our mission is to bring the joy of reading to everyone. 
                    Whether you're a fan of thrilling mysteries, romantic novels, or insightful self-improvement books, 
                    we have something for you. We believe in the power of books to change lives, inspire minds, and fuel imaginations.
                </p>
            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="bg-white p-6 rounded-xl shadow-md text-center w-60">
                    <FaBook className="text-blue-600 text-4xl mx-auto" />
                    <h3 className="text-2xl font-bold mt-4">10,000+</h3>
                    <p className="text-gray-600">Books Available</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center w-60">
                    <FaUsers className="text-blue-600 text-4xl mx-auto" />
                    <h3 className="text-2xl font-bold mt-4">50,000+</h3>
                    <p className="text-gray-600">Happy Readers</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center w-60">
                    <FaStar className="text-blue-600 text-4xl mx-auto" />
                    <h3 className="text-2xl font-bold mt-4">4.9/5</h3>
                    <p className="text-gray-600">Customer Ratings</p>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="max-w-5xl mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800">💬 What Our Readers Say</h2>
                <div className="mt-6 space-y-6">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <p className="text-gray-700">"A wonderful place to find rare books! Their collection is just amazing."</p>
                        <p className="text-gray-500 mt-2">- Emily, Book Enthusiast</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <p className="text-gray-700">"Fast delivery and excellent service. Highly recommend this bookstore!"</p>
                        <p className="text-gray-500 mt-2">- John, Avid Reader</p>
                    </div>
                </div>
            </div>

            {/* Call-To-Action */}
            <div className="max-w-4xl mx-auto text-center mt-12 bg-blue-600 text-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold">Start Your Reading Journey Today!</h2>
                <p className="text-lg mt-4">Explore our collection and find your next favorite book.</p>
                <a href="/" className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
                    Browse Books
                </a>
            </div>
        </div>
    );
};

export default About;

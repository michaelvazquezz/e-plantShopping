import React from "react";
import "./Welcome.css";

export default function Welcome({ onStart }) {
    return (
        <section className="welcome-hero">
            <div className="welcome-overlay" />

            <div className="welcome-inner container">
                <div className="left-column">
                    <h1 className="hero-title">
                        Welcome To
                        <span className="title-break">Paradise Nursery</span>
                    </h1>

                    <div className="underline" />

                    <p className="hero-tag">Where Green Meets Serenity</p>

                    <button className="get-started" onClick={onStart}>
                        Get Started
                    </button>
                </div>

                <div className="right-column">
                    <h1 className="hero-small-title">Welcome to Paradise Nursery, where green meets serenity!</h1>

                    <div className="hero-text">
                        <p>
                            At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a
                            wide range of high-quality plants that not only enhance the beauty of your surroundings but also
                            contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones,
                            we have something for every plant enthusiast.
                        </p>

                        <p>
                            Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care.
                            Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way.
                            Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office.
                        </p>

                        <p>
                            Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

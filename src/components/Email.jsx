import React, { useState } from "react";
import axios from "axios";

const EmailForm = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return; // Do nothing if the email is not provided

        try {
            // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint where your server is listening for email submissions
            await axios.post("YOUR_BACKEND_ENDPOINT", { email });
            alert("Email sent successfully!");
            setEmail(""); // Clear the input after successful submission
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please try again later.");
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="w-100">
            <form onSubmit={handleSubmit}>
                <div className="header-input">
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button type="submit" className="primary">
                        Get Started
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmailForm;

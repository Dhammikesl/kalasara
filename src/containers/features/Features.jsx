import React from "react";

const Features = ({ title, text, link }) => {
    return (
        <div className="feature">
            <div className="feature-title">
                <h3>{title}</h3>
            </div>
            <div className="feature-txt p-2">{text}</div>
            <a href={link} target='_blank' className="btn-feature">කියවන්න</a>
        </div>
    );
};

export default Features;
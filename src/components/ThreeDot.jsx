import React from 'react';
import '../style/ThreeDot.css';


const ThreeDot = ({ color = "#32cd32", size = "medium", text = "", textColor = "" }) => (
    <div className="three-dot">
        {[...Array(3)].map((_, index) => (
            <div 
                key={index} 
                className={`three-dot__dot ${index === 1 ? 'three-dot__dot--delay-1' : index === 2 ? 'three-dot__dot--delay-2' : ''}`}
                style={{
                    width: size === "small" ? "5px" : size === "large" ? "15px" : "10px", 
                    height: size === "small" ? "5px" : size === "large" ? "15px" : "10px", 
                    backgroundColor: color
                }}
            />
        ))}
        {text && <span style={{ color: textColor, marginLeft: "10px" }}>{text}</span>}
    </div>
);

export default ThreeDot;

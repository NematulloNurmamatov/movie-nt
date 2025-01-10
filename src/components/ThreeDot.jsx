import React from 'react';

const ThreeDot = ({ color = "#32cd32", size = "medium", text = "", textColor = "" }) => {
    const dotSize = size === "small" ? "5px" : size === "large" ? "15px" : "10px";

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <div style={{
                width: dotSize,
                height: dotSize,
                backgroundColor: color,
                borderRadius: "50%",
                animation: "dot-flash 1s infinite",
            }}></div>
            <div style={{
                width: dotSize,
                height: dotSize,
                backgroundColor: color,
                borderRadius: "50%",
                animation: "dot-flash 1s infinite 0.2s",
            }}></div>
            <div style={{
                width: dotSize,
                height: dotSize,
                backgroundColor: color,
                borderRadius: "50%",
                animation: "dot-flash 1s infinite 0.4s",
            }}></div>
            {text && <span style={{ color: textColor, marginLeft: "10px" }}>{text}</span>}
        </div>
    );
};

export default ThreeDot;

// CSS animations
const style = document.createElement("style");
style.textContent = `
@keyframes dot-flash {
  0%, 80%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}`;
document.head.appendChild(style);

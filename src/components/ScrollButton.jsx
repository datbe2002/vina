import React, { useRef } from 'react';

const ScrollButton = ({ targetId, duration }) => {
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);
        const targetPosition = targetElement.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTimestamp = null;

        function scrollAnimation(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            const easing = easeOutQuad(progress);
            window.scrollTo(0, startPosition + distance * easing);
            if (elapsed < duration) {
                window.requestAnimationFrame(scrollAnimation);
            }
        }

        function easeOutQuad(t) {
            return t * (2 - t);
        }

        window.requestAnimationFrame(scrollAnimation);
    };

    return (
        <button style={{ marginTop: "10rem" }} onClick={handleClick}>Scroll Down</button>
    );
};

export default ScrollButton;
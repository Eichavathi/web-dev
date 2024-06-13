document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const targetNumber = 1000;  // Change this to the number you want to count to
    const duration = 2000;  // Duration of the animation in milliseconds

    const updateCounter = () => {
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentNumber = Math.floor(progress * targetNumber);

            counter.textContent = currentNumber;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                counter.textContent = targetNumber;
            }
        };

        requestAnimationFrame(animate);
    };

    updateCounter();
});

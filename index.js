const body = document.body;
        const circle = document.getElementById('circle');
        const button = document.querySelector('.toggle-button');

        function toggleMode() {
            const isLightMode = !body.classList.contains('dark-mode');
            const circleDiameter = Math.hypot(window.innerWidth, window.innerHeight) * 2;
            const buttonRect = button.getBoundingClientRect();
            const buttonCenterX = buttonRect.left + buttonRect.width / 2;
            const buttonCenterY = buttonRect.top + buttonRect.height / 2;

            circle.style.width = circle.style.height = `${circleDiameter}px`;
            circle.style.top = `${buttonCenterY - circleDiameter / 2}px`;
            circle.style.left = `${buttonCenterX - circleDiameter / 2}px`;

            body.classList.toggle('dark-mode');

            requestAnimationFrame(() => {
                circle.style.width = circle.style.height = '0';
                circle.style.top = `${buttonCenterY}px`;
                circle.style.left = `${buttonCenterX}px`;
            });
        }

        button.addEventListener('click', toggleMode);
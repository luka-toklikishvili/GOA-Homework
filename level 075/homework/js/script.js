 const box = document.getElementById('box');

    box.addEventListener('mouseenter', () => {
      box.style.animationDuration = '1s';
    });

    box.addEventListener('mouseleave', () => {
      box.style.animationDuration = '4s';
    });
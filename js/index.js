
/*==============================Index.html============================== */
function goToCertificate() {
    window.location.href = 'certificate.html';
}


/*===========================Certificate.html===========================*/
// Generate sparkles dynamically
    const sparkleContainer = document.getElementById('sparkles');
    for (let i = 0; i < 50; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.animationDelay = (Math.random() * 5) + 's';
      sparkleContainer.appendChild(sparkle);
    }

    // Update name in the certificate
    function updateName() {
      const name = document.getElementById('nameInput').value.trim();
      const recipient = document.getElementById('recipientName');
      if (name) {
        recipient.textContent = name;
      } else {
        recipient.textContent = 'YOU';
      }
    }
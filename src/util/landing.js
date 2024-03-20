export function copyTokenToClipboard() {
  const tokenElement = document.querySelector('.token');

  if (tokenElement) {
    tokenElement.addEventListener('click', () => {
      const tokenText = tokenElement.textContent.trim();
      copyToClipboard(tokenText);
      showNotification();
    });
  }
}

function copyToClipboard(text) {
  const textField = document.createElement('textarea');
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
}

export function showNotification() {
  const notification = document.createElement('div');
  notification.textContent = 'Token copied!';
  notification.classList.add('notification');
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000); // Remove notification after 2 seconds
}

export function startCountdown() {
  const countdownDate = new Date('2024-03-21T23:59:59').getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
      countdownElement.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }

    if (distance < 0) {
      clearInterval(countdown);
      if (countdownElement) {
        countdownElement.innerHTML = 'Countdown expired';
      }
    }
  }, 1000);
}

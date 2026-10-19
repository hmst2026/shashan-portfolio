// CUSTOMIZE THESE SETTINGS BEFORE PUBLISHING
const CONFIG = {
  // Choose your real launch date and time, with timezone offset (UK winter +00:00).
  launchDate: '2026-11-01T12:00:00+00:00',
  contactEmail: 'hello@example.com', // Replace with your real email
  social: {
    linkedin: '', // e.g. https://www.linkedin.com/in/your-name/
    github: '',
    instagram: '',
    youtube: ''
  }
};

const $ = id => document.getElementById(id);
$('year').textContent = new Date().getFullYear();
$('contact-link').href = `mailto:${CONFIG.contactEmail}`;
for (const [name, url] of Object.entries(CONFIG.social)) {
  const link = document.querySelector(`[data-social="${name}"]`);
  if (link) { if (url) link.href = url; else link.dataset.disabled = 'true'; }
}
function updateCountdown() {
  const remaining = Math.max(0, new Date(CONFIG.launchDate).getTime() - Date.now());
  const seconds = Math.floor(remaining / 1000);
  const values = { days: Math.floor(seconds / 86400), hours: Math.floor(seconds / 3600) % 24, minutes: Math.floor(seconds / 60) % 60, seconds: seconds % 60 };
  Object.entries(values).forEach(([id, value]) => { $(id).textContent = String(value).padStart(2, '0'); });
  if (remaining === 0) document.querySelector('.notify > .eyebrow').textContent = 'THE WAIT IS OVER';
}
updateCountdown();
setInterval(updateCountdown, 1000);
$('notify-form').addEventListener('submit', event => {
  event.preventDefault();
  const email = $('email').value.trim();
  if (!$('email').checkValidity()) { $('email').reportValidity(); return; }
  const subject = encodeURIComponent('Please notify me when your portfolio launches');
  const body = encodeURIComponent(`Hello Shashan,\n\nPlease notify me at ${email} when your portfolio launches.\n\nThank you!`);
  window.location.href = `mailto:${CONFIG.contactEmail}?subject=${subject}&body=${body}`;
  $('form-note').textContent = 'Your email app should open with a prefilled message. Please send it to complete your request.';
});

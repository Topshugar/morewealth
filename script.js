const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const range = document.querySelector('#saving-range');
const number = document.querySelector('#tool-number');
const bar = document.querySelector('.tool-bar i');
const formatMoney = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
range?.addEventListener('input', () => {
  number.textContent = formatMoney(Number(range.value));
  bar.style.width = `${(Number(range.value) / Number(range.max)) * 100}%`;
});

const country = document.querySelector('#country');
const countryStatus = document.querySelector('#country-status');
country?.addEventListener('change', () => {
  countryStatus.textContent = country.value
    ? `${country.value}: education is available. Planning services will depend on local availability and requirements.`
    : 'Choose a country to see a general availability message.';
});

const form = document.querySelector('#contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  form.querySelector('.form-status').textContent = 'Thank you — your interest has been received.';
  form.reset();
});

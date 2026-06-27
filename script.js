// Replace this endpoint with the form URL you get from Buttondown, Mailerlite, or a Google Form webhook.
const FORM_ENDPOINT = 'https://buttondown.email/api/emails/embed-subscribe/your-form-id';

document.getElementById('email-form').addEventListener('submit', async e => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const btn = e.target.querySelector('button');
  btn.disabled = true;
  btn.textContent = 'Sending…';

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    if (!res.ok) throw new Error('Network error');
    alert('Thanks! We’ll send you an invite within 24 h.');
    e.target.reset();
  } catch (err) {
    alert('Oops – something went wrong. Please try again.');
    console.error(err);
  } finally {
    btn.disabled = false;
    btn.textContent = 'Notify Me →';
  }
});
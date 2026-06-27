// ReportCraft – email capture handler
const FORM_ENDPOINT = 'https://buttondown.email/api/emails/embed-subscribe/your-form-id';

document.querySelectorAll('.email-form').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    const btn = form.querySelector('button');
    btn.disabled = true;
    btn.textContent = 'Sending…';

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (!res.ok) throw new Error('Network error');
      // Show success state
      form.innerHTML = `
        <div style="text-align:center;padding:14px 18px;background:rgba(108,92,231,0.15);border:1px solid rgba(108,92,231,0.3);border-radius:12px;color:#a29bfe;font-size:0.95rem;">
          ✓ You're on the list! We'll keep in touch.
        </div>
      `;
    } catch (err) {
      alert('Oops – something went wrong. Please try again.');
      console.error(err);
      btn.disabled = false;
      btn.textContent = 'Get early access →';
    }
  });
});
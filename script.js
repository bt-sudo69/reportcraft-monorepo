// ReportCraft – email capture handler (MailerLite)
// Forms submit via POST to MailerLite JSONP endpoint in hidden iframe
// script.js does NOT intercept form submissions — the inline onSubmit handler handles it.
// This file exists for any future enhancements.
document.addEventListener('DOMContentLoaded', function() {
  // No automatic form interception needed.
  // Forms use onsubmit="return handleMLSubmit(this)" and POST to hidden iframe.
  console.log('ReportCraft MailerLite forms ready.');
});

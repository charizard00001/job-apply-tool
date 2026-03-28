/*
 * ═══════════════════════════════════════════════════════════════
 *  CONFIG — Copy this file to config.js and fill in your details.
 *           config.js is gitignored so your keys stay private.
 * ═══════════════════════════════════════════════════════════════
 *
 *  HOW TO GET EACH VALUE:
 *
 *  groqApiKey:
 *    1. Go to https://console.groq.com → Sign up (free)
 *    2. API Keys → Create API Key → Copy (starts with gsk_...)
 *
 *  googleScriptUrl:
 *    1. Go to https://script.google.com → New Project
 *    2. Paste this code (replace the default):
 *
 *       function doPost(e) {
 *         var data = JSON.parse(e.postData.contents);
 *         var options = { name: data.from_name };
 *         if (data.message_html) {
 *           options.htmlBody = data.message_html;
 *         }
 *         if (data.attachment_base64) {
 *           var blob = Utilities.newBlob(
 *             Utilities.base64Decode(data.attachment_base64),
 *             'application/pdf',
 *             data.attachment_name || 'resume.pdf'
 *           );
 *           options.attachments = [blob];
 *         }
 *         GmailApp.sendEmail(data.to_email, data.subject, data.message, options);
 *         return ContentService.createTextOutput(
 *           JSON.stringify({ status: "sent" })
 *         ).setMimeType(ContentService.MimeType.JSON);
 *       }
 *
 *    3. Deploy → New deployment → Web app
 *       - Execute as: Me
 *       - Who has access: Anyone
 *    4. Authorize → Allow Gmail permissions
 *    5. Copy the Web App URL and paste below
 *
 * ═══════════════════════════════════════════════════════════════
 */

const CONFIG = {
  // ── Your Info ──
  myName: '',              // e.g. 'Yash Kherwal'
  myEmail: '',             // e.g. 'yash@example.com'

  // ── Groq API ──
  groqApiKey: '',          // e.g. 'gsk_xxxxxxxxxxxx'

  // ── Google Apps Script (sends email from YOUR Gmail) ──
  googleScriptUrl: '',     // e.g. 'https://script.google.com/macros/s/xxxxx/exec'
};

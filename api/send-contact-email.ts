import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, message, inquiryType } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // If Resend API key is configured, send email
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Orivon Edge Website <noreply@orivonedge.dev>',
          to: [process.env.VITE_ADMIN_EMAIL || 'info@orivonedge.dev'],
          subject: `New ${inquiryType || 'Contact'} Inquiry from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Inquiry Type:</strong> ${inquiryType || 'General'}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted from Orivon Edge website</small></p>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const error = await resendResponse.json();
        console.error('Resend API error:', error);
        throw new Error('Failed to send email');
      }
    }

    // Send auto-reply to user
    if (process.env.RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Orivon Edge <noreply@orivonedge.dev>',
          to: [email],
          subject: 'Thank you for contacting Orivon Edge',
          html: `
            <h2>Thank you for reaching out!</h2>
            <p>Hi ${name},</p>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <p>In the meantime, feel free to explore our portfolio and learn more about our ventures:</p>
            <ul>
              <li><a href="https://orivonedge.dev/portfolio">View Our Portfolio</a></li>
              <li><a href="https://democrasee.vercel.app">Democrasee - Crisis Reporting Platform</a></li>
              <li><a href="https://farm-africaa.vercel.app">FarmAfricaa - Smart Farming Platform</a></li>
            </ul>
            <p>Best regards,<br>The Orivon Edge Team</p>
            <hr>
            <p><small>This is an automated response. Please do not reply to this email.</small></p>
          `,
        }),
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, source } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // If Resend API key is configured, send welcome email
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Orivon Edge <noreply@orivonedge.dev>',
          to: [email],
          subject: 'Welcome to Orivon Edge - Your FREE Tech Audit',
          html: `
            <h2>Welcome to Orivon Edge!</h2>
            <p>Thank you for subscribing to our newsletter.</p>
            
            <h3>🎁 Your FREE Tech Audit Checklist</h3>
            <p>As promised, here's your comprehensive 25-point technology assessment checklist:</p>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h4>Key Areas to Assess:</h4>
              <ul>
                <li>✅ Security vulnerabilities and data protection</li>
                <li>✅ Performance bottlenecks and optimization opportunities</li>
                <li>✅ Automation potential in your workflows</li>
                <li>✅ Scalability of your current infrastructure</li>
                <li>✅ AI/ML integration opportunities</li>
              </ul>
              <p><a href="https://orivonedge.dev" style="display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 10px;">Download Full Checklist</a></p>
            </div>

            <h3>What's Next?</h3>
            <p>You'll receive:</p>
            <ul>
              <li>🚀 Startup building insights and case studies</li>
              <li>🤖 AI automation tips and best practices</li>
              <li>💡 Venture success stories from our portfolio</li>
              <li>📊 Tech trends and industry analysis</li>
            </ul>

            <h3>Explore Our Ventures</h3>
            <ul>
              <li><a href="https://democrasee.vercel.app">Democrasee</a> - AI-powered crisis reporting platform</li>
              <li><a href="https://farm-africaa.vercel.app">FarmAfricaa</a> - Smart farming intelligence</li>
              <li><a href="https://dlvakids.com.ng">BICTDA Academy</a> - Digital education platform</li>
            </ul>

            <p>Have questions? Reply to this email or visit our <a href="https://orivonedge.dev/contact">contact page</a>.</p>

            <p>Best regards,<br>The Orivon Edge Team</p>
            
            <hr>
            <p style="font-size: 12px; color: #6b7280;">
              You're receiving this because you subscribed at orivonedge.dev. 
              <a href="https://orivonedge.dev/unsubscribe?email=${encodeURIComponent(email)}">Unsubscribe</a>
            </p>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const error = await resendResponse.json();
        console.error('Resend API error:', error);
        throw new Error('Failed to send welcome email');
      }

      // Notify admin of new subscriber
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Orivon Edge Website <noreply@orivonedge.dev>',
          to: [process.env.VITE_ADMIN_EMAIL || 'info@orivonedge.dev'],
          subject: 'New Newsletter Subscription',
          html: `
            <h2>New Newsletter Subscriber</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Source:</strong> ${source || 'Unknown'}</p>
            <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
          `,
        }),
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Subscribed successfully' 
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return res.status(500).json({ 
      error: 'Failed to subscribe',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

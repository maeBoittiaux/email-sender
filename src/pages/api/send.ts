import type { NextApiRequest, NextApiResponse } from 'next';
import { WaitlistEmail } from '../../../transactional/emails/waitlist';
import { resend } from '../../lib/resend';

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'POST': {
      const { email } = req.body; // Capture the email from the request body

      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }

      try {
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: [email],
          subject: 'This is an email.',
          react: WaitlistEmail({ name: 'User' }),
        });

        return res.status(200).json({ message: 'Email sent successfully' });
      } catch (error) {
        return res.status(500).json({ error: 'Failed to send email' });
      }
    }
    default: {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
};

export default send;
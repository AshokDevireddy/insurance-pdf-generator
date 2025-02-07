import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = process.env.GOOGLE_SHEETS_ID;

async function getAuthClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: SCOPES,
  });
  return auth;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;
    const auth = await getAuthClient();
    const sheets = google.sheets({ version: 'v4', auth });

    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A:B',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, email]],
      },
    });

    res.status(200).json({ message: 'Successfully added to waitlist' });
  } catch (error) {
    console.error('Waitlist error:', error);
    res.status(500).json({ message: 'Failed to add to waitlist' });
  }
}
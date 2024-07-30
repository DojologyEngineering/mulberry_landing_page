import axios from 'axios';

import { NextResponse } from 'next/server';

interface FormData {
  name: string;
  message: string;
  recaptchaToken: string;
}

export async function POST(request: Request) {
  const { name, message, recaptchaToken }: FormData = await request.json();
  try {
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      new URLSearchParams({
        secret: `${process.env.RECAPTCHA_SECRET_KEY_REACT}`,
        response: recaptchaToken,
      }),
    );

    if (!recaptchaResponse.data.success) {
      return NextResponse.json(
        { message: 'reCAPTCHA verification failed' },
        { status: 400 },
      );
    }
    const telegramResponse = await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN_REACT}/sendMessage`,
      {
        chat_id: `${process.env.TELEGRAM_CHAT_ID_REACT}`,
        text: `${message}`,
      },
    );

    if (!telegramResponse.data.ok) {
      return NextResponse.json(
        { message: 'Failed to send message to Telegram' },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: 'Submission successful' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}

import axios from 'axios';
import moment from 'moment';

import { NextResponse } from 'next/server';

import { IFormInput } from '@/components/ContactUs';

interface FormData {
  name: string;
  message: IFormInput;
  recaptchaToken: string;
}
function escapeMarkdownV2(text: string) {
  return text.replace(/([_.*[\]()~`>#+\-=|{}.!])/g, '\\$1');
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
        text: `*Request For School Tour:*
        \\
    \\- *Selected Centers:* ${escapeMarkdownV2(message.center)}
    \\- *Interested Programme:* ${escapeMarkdownV2(message.program)}\\
    \\
    \\- *Parent's Full Name:* ${escapeMarkdownV2(message.name)}\\
    \\- *Mobile Number:* ${escapeMarkdownV2(message.mobile)}\\
    \\- *Email Address:* ${escapeMarkdownV2(message.address)}\\
    \\
    *Child 1 Details:*\\
    \\- *Child's Name:* ${escapeMarkdownV2(message.childname1)}\\n
    \\- *Child's Date of Birth:* ${escapeMarkdownV2(moment(message.datechild1).format('DD/MM/YYYY'))}\\
    \\
    *Child 2 Details \\(if any\\):*\\
    \\- *Child's Name:* ${escapeMarkdownV2(message.childname2 || 'NA')}\\
    \\- *Child's Date of Birth:* ${escapeMarkdownV2(message.datechild2 ? moment(message.datechild2).format('DD/MM/YYYY') : 'NA')}\\
    \\- *How did you learn about us?:* ${escapeMarkdownV2(message.question || 'NA')}\\
    \\- *Message:* ${escapeMarkdownV2(message.message || 'NA')}`,
        parse_mode: 'MarkdownV2',
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

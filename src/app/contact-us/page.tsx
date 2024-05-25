import { Metadata } from 'next';
import React from 'react';

import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: ' Contact Us | Mulberry Learning Cambodia',
  description:
    'Mulberry Learning Cambodia is a vibrant environment that promotes holistic learning and empowers children to become enthusiastic, confident, and caring global citizens of the world. Powered by Cambodia Award-winning Reggio-inspired Preschool, certified by the USA`s Habits of Mind Institute',
};
function page() {
  return (
    <div>
      <ContactUs />
    </div>
  );
}

export default page;

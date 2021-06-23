import React from 'react';

import SectionHeading from 'src/components/SectionHeading';
import ContactInfo from './ContactInfo';
import Contact from './Contact';

const ContactUs = () => {
  return (
    <section className="contact-us pt-12">
      <SectionHeading
        title="LIÊN HỆ VỚI CHÚNG TÔI"
        description="Vui lòng chọn phương thức liện hệ phù hợp"
      />
      <ContactInfo />
      <Contact />
    </section>
  );
};

export default ContactUs;

import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: ' Ms. Wanda Boley',
      phone: '(703) 943-6076',
      email: 'bolewg@gmail.com',
      text: 'My lawn has never looked better! The team is professional and reliable.',
      rating: '★★★★★'
    },
    {
      name: 'Ms. Donna Meyers',
      phone: '(703) 335-1261',
      email: 'michaeljones123@gmail.com',
      text: 'Great service at a fair price. Highly recommend!',
      rating: '★★★★★'
    },
    {
      name: 'Mr. Chris Jones',
      phone: '(703) 309-1619',
      email: 'cdjones615@gmail.com',
      text: 'They transformed my backyard into an oasis. Very pleased!',
      rating: '★★★★☆'
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="rating">{testimonial.rating}</div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-text">"{testimonial.phone}"</p>
            <p className="testimonial-text">"{testimonial.email}"</p>
            <p className="testimonial-author">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
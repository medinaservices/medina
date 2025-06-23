import React, { useEffect } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"
import ContactForm from "./ContactForm"
export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZUh9UkY2Vt0LrNfYQfWP4FWsYfO3esT2Y18CCRYriBcsBcg/viewform" target="_blank" rel="noopener noreferrer">
  Fill Out Our Contact Form
</a>
            <ContactForm/>
          </div>
        ))}
      </section>
    </>
  )
}

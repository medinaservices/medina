import React from "react"
// import { About } from "../pages/About"
import { Blog } from "../pages/Blog"
import { Contact } from "../pages/Contact"
import { Counter } from "../pages/Counter"
// import { Portfolio } from "../pages/Portfolio"
import { Services } from "../pages/Services2"
import { Testimonials } from "../pages/Testimonials"
import { Hero } from "./Hero"
import PaypalPayment from "../pages/PaypalPayment"

export const Home = () => {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Services />
      <Counter />
      <Testimonials />
      <Blog />
      <Contact />
      <PaypalPayment />
    </>
  )
}

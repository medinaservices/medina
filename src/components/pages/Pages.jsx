import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "../common/Footer"
import { Header } from "../common/Header"
import { Topheader } from "../common/Topheader"
import { Home } from "../home/Home"
// import { About } from "./About"
import { Blog } from "./Blog"
import { Contact } from "./Contact"
// import { Portfolio } from "./Portfolio"
import { Services } from "./Services2"
import { Testimonials } from "./Testimonials"
import PaypalPayment from "./PaypalPayment"
export const Pages = () => {
  return (
    <>
      <Router>
        <Topheader/>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/about' component={About} /> */}
          <Route exact path='/services' component={Services} />
          <Route exact path='/paypal' component={PaypalPayment} />
          <Route exact path='/testimonials' component={Testimonials} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

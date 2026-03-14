import React, { useEffect } from "react";
import ServiceCarts from "../components/ServiceCarts";

function Services() {
  useEffect(() => {
    document.title = "Services | Medina Services LLC";
  }, []);

  return <ServiceCarts />;
}

export default Services;

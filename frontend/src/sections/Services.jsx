import { useState, useEffect } from "react"
import { fetchServices } from "../assets/constant/constant"
import { SectionTitle } from "../components/SectionTitle"
import { ServiceCard } from "../components/ServiceCard"

export const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetchServices().then(setServices).catch(console.error)
  }, [])
  
  return (
    <section className="padding">
        <SectionTitle title="Best Services for you"/>
        <div>
            <p className="text-white poppins-extralight text-center">
                I offer a range of services to help you achieve your goals. Whether you need web development, design, or consulting, I am here to assist you.
            </p>
            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                {services.map((service, index) => (
                <li key={index}>
                  <ServiceCard {...service} />
                </li>
              ))}
              </ul>
            </div>
        </div>
    </section>
  )
}

import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import HeroSection from './Hero-section'
import HomeCarePage from './HomeCarepage'
import ElderlyManagement from './Management'
import ExtensiveServices from './Services'
import ServicesComponent from './Services2'
import JoinNovaHomeCare from './Homecare'
import FaqSection from './Faq'
import Counter from './Counter'
import ContactForm from './Contact'
import AppointmentBooking from './Appointment'
import Footer from './Footer'
import ServiceGrid from './Care'

const Home = () => {
  return (
    <div>
       <Header />
       <Navbar/>
       <HeroSection />
       <ServiceGrid />
       <HomeCarePage />
       <ElderlyManagement />
            <ExtensiveServices />
            <ServicesComponent />
            <JoinNovaHomeCare />
            <FaqSection />
            <Counter />
            <ContactForm/>
            <AppointmentBooking />
            <Footer />
    </div>
  )
}

export default Home
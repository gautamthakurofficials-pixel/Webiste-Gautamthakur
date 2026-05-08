/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Properties from './components/sections/Properties';
import Investments from './components/sections/Investments';
import Cities from './components/sections/Cities';
import Media from './components/sections/Media';
import Testimonials from './components/sections/Testimonials';
import Connect from './components/sections/Connect';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import FloatingContact from './components/ui/FloatingContact';
import { AIChatbot } from './components/ui/AIChatbot';

export default function App() {
  return (
    <div className="relative min-h-screen bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Properties />
        <Investments />
        <Cities />
        <Media />
        <Testimonials />
        <Connect />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
      <AIChatbot />
    </div>
  );
}



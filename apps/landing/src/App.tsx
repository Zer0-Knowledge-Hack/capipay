import { Header } from "./components/Header";
import { Developers, Footer, Hero, HowItWorks, PaymentStates, Pricing, Waitlist, Why } from "./components/Sections";

export function App() {
  return (
    <div id="top">
      <Header />
      <main id="main">
        <Hero />
        <Why />
        <HowItWorks />
        <PaymentStates />
        <Developers />
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}


import About from "@/SharedComponent/About";
import Hero from "@/SharedComponent/Hero";
import Indications from "@/SharedComponent/Indications";
import KeyBenefits from "@/SharedComponent/Keybenefits";
import Products from "@/SharedComponent/Product";
import Results from "@/SharedComponent/Proven";
import WhatIsNPWT from "@/SharedComponent/WhatNPWt";
export default function Home() {
  return (
    <main>
      <Hero/>
       <Products/>
      <About/>
      <WhatIsNPWT/>
      <KeyBenefits/>
     
      <Indications/>
      <Results/>
    </main>
  );
}
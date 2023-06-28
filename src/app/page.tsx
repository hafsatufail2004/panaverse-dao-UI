import Hero from "@/components/widges/Hero"
import CoreTracks from "@/components/widges/Core-Tracks"
import SpecilisedTracks from "@/components/widges/SpecilisedTracks"
import ProgramOutcome from "@/components/widges/ProgramOutcome"
import Footer from "@/components/widges/Footer"

export default function Home() {
  return ( <>
  <main>
    {/* Hero Section */}
<Hero/>

{/* Core-Track section */}
<CoreTracks/>

{/* Specilized track */}
<SpecilisedTracks/>

{/* Outcome Section */}
<ProgramOutcome/>

{/* Footer */}
<Footer/>
  </main>
  </>)
}
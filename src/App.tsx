import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeedSection from "./components/Feedsection.tsx"
import CitiesNearMe from "./components/citiesNearMe.tsx"
import CountriesWithUberEats from "@/components/countriesWithUberEats.tsx"
import Footer from "./components/footer.tsx"

function App() {
  return (
    <div className=" min-h-svh ">
      <Navbar />
      <Hero></Hero>
      <FeedSection/>
      <CitiesNearMe/>
      <CountriesWithUberEats/>
      <Footer/>

    </div>
  )
}
 
export default App
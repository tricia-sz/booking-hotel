import BookARoom from "@/components/BookARoom"
import Footer from "@/components/Footer"
import Gallery from "@/components/Gallery"
import { Hero } from "@/components/Hero"
import SpecialOffers from "@/components/SpecialOffers"

export default function Home() {
  return (
  <>
    <Hero />
    <BookARoom />
    <Gallery />
    <SpecialOffers />
    <Footer />
  </>
  )
}

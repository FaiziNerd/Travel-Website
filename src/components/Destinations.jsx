/* eslint-disable no-unused-vars */
import HutsImage from "../assets/Huts.jpg"
import ParisImage from "../assets/Paris.jpg"
import BuildingsImage from "../assets/Buildings.jpg"
import ScenaryImage from "../assets/Scenary.jpg"
import BeachImage from "../assets/Beach.jpg"
import VeniceImage from "../assets/Venice.jpg"

 
 const Destinations = ()=>
{
   const Destinations =
   [
     {
       image: HutsImage,
       title:"Maldives",
       description:"Relax on beautiful beaches."
     },
     {
       image: ParisImage,
       title:"Paris",
       description:"Enjoy the city of love."
     },
     {
       image: BuildingsImage,
       title:"Dubai",
       description:"Discover the story of luxury."
     },
     {
       image: ScenaryImage,
       title:"Switzerland",
       description:"Enjoy snowy mountains"
     },
     {
       image: BeachImage,
       title:"Bali",
       description:"Explore tropical Paradise"
     },
     {
       image: VeniceImage,
       title:"Venice",
       description:"Enjoy romantic canals"
     }
   ]

   return (
    <section className="max-w-7xl mx-auto py-20 px-8">
      <h2 className="text-4xl text-center font-bold">
         Popular Destinations
      </h2>

      <p className="text-center text-gray-500 mt-4">
         Explore our most loved travel destinations around the world 
      </p>
      <div className="grid grid-cols-3 mt-12 gap-8 ">
         {
            Destinations.map((destination)=>
            (
        <div 
       key = {destination.title}
       className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
         <img 
         src={destination.image} 
         alt="destination.title"
          className="w-full h-64 object-cover hover:scale-110 transition duration-500" />
          <div className="p-5">
            <h3 className="text-2xl font-bold">
             {destination.title}
            </h3>
            <p className="text-gray-500 mt-2">
             {destination.description}
            </p>
          </div>
       </div>
            ))}
      </div>
    </section>
   )
}

export default Destinations
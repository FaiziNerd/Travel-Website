import  heroImage from "../assets/Hero.jpg";

const Hero = 
()=>
{
   return(
 <section className="h-screen bg-cover bg-center flex items-center"
  style={{backgroundImage: `url(${heroImage})`}}>
 <div className="w-full h-full bg-black/50 flex items-center">
 <div className="max-w-7xl mx-auto px-8 ">
   
   <h1 className="text-6xl font-bold text-white text-center leading-tight">
    Explore The World <br/>
    with TravelX
   </h1>
   
   <p className="text-white text-lg mt-6 max-w-xl text-center">
      Discover breathtaking destinations, unforgettable adventures,
      and make memories that last a lifetime.
   </p>

   <div className="flex gap-6 justify-center mt-10 ">
   <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
      Explore Now
   </button>
    <button className=" border-2 border-white text-white px-6 py-3 rounded-lg hover:text-black transition duration-300">
      Book Trip 
    </button>
 </div>
 </div>
 </div>
 </section>
   )
}
export default Hero
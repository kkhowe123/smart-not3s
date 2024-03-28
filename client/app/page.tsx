import Link from "next/link";
import { salsa } from "./ui/fonts";

export default function Home(){

  return(
<>
<div className={`hero min-h-screen bg-base-200 ${salsa.className} bg-slate-200 `}>
  <div className="hero-content text-center ">
    <div className="max-w-md">
      <h1 className="text-7xl font-bold  text-[#ffc700] mb-10 ">Unaek Notes</h1>
      <p className="py-6 text-2xl">Where Brilliance Finds Its Canvas!.</p>
      <Link href={'./signup'}> <button className="btn hover:bg-[#ffc700] hover:text-black bg-[#007F73]">  Get Started</button></Link> 
    </div>
  </div>
</div>


</>




  )
}

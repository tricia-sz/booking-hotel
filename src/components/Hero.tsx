import Nav from "./Nav"

export function Hero() {
  return (
    <section className="bg-[url('../../public/hotel3.jpg')]  relative overflow-hidden  bg-no-repeat bg-cover bg-inherit h-screen ">
      <div className="flex flex-col">
        <Nav />
        <div className="mx-auto w-7xl mt-70">
              <h1 className="font-bold cursor-pointer text-center -tracking-tight text-transparent  bg-clip-text bg-gradient-to-b from-slate-400 from-10% via-slate-100 via-30% to-slate-400 to-80%  md:text-7xl lg:text-8xl ">
                Descubra o extraordinário conforto em hotéis
              </h1>
        </div>

        {/* <div className="flex items-center justify-center gap-8 pt-20 font-black cursor-pointer ">
          <Button className="py-8 text-white font-bold text-3xl rounded-3xl bg-gradient-to-b from-sky-200/40 via-sky-700/30 to-sky-400  cursor-pointer" >Reserve já!</Button>
        </div> */}
        
      </div>
    </section>
  )
}
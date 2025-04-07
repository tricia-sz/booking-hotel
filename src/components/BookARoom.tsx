import { IoCalendarNumberSharp, IoMan } from "react-icons/io5"
import Container from "./Container"
import { LuBaby } from "react-icons/lu"
import { Button } from "./ui/button"

export default function BookARoom() {
    return (
        <>
            <Container className="mx-auto mt-32 flex-col  justify-center items-center">
                <div className="bg-[#E9F3F6] mx-auto rounded-4xl py-8 ">
                    <div className="flex flex-col mx-auto justify-center items-center ">
                        <p className="text-center text-3xl font-medium mt-12">
                            Reserve um quarto
                        </p>
                        <span className="text-zinc-600 text-sm mt-2">
                            Descubra o espaço perfeito para você, sua familia ou amigos!
                        </span>

                    </div>
                    <div className=" flex mx-auto justify-center items-center">
                        <div className="mx-auto flex  justify-between mt-20 gap-20">
                            <div className="">
                                <p className="font-medium mb-4">Date</p>
                                <div className="bg-white px-24 rounded-2xl py-6">
                                    <div className="flex justify-center items-center gap-2">
                                        <IoCalendarNumberSharp size={26} />
                                        <p>Disponivel</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="font-medium mb-4">Person</p>
                                <div className="flex  bg-white px-16 rounded-2xl ">
                                    <div className="flex gap-10 justify-center ">
                                        <div className="flex  py-6 ga-2 ">
                                            <IoMan size={26} />
                                            <p>Disponivel</p>
                                        </div>
                                        <div className="flex  py-6 gap-2">
                                            <LuBaby size={26} />
                                            <p>Disponivel</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="mt-8 mx-auto justify-cente">
                                <p className="font-medium mb-4 "></p>
                                <div className="rounded-2xl">
                                    <Button className="bg-blue-400 flex text-2xl justify-center items-center p-8">
                                        RESERVE AGORA

                                    </Button>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </Container>
        </>
    )
}
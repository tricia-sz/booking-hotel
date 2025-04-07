import Image from "next/image"
import Link from "next/link"

import logo from "../../public/logotrx.svg"
import Container from "./Container"

export default function Nav() {
    return (
        <Container>
            <nav className="justify-between mx-auto items-center mt-8 font-normal text-xl">
            <div className="bg-slate-100 rounded-xl text-black items-center flex gap-12 mx-auto justify-center w-5xl">
                <div className="flex gap-12 ">
                    <Link href={""} className="text-sky-500 font-medium">Início</Link>
                    <Link href={""}>Sobre</Link>
                    <Link href={""}>Newsletter</Link>
                </div>
                <div className="">
                    <Image alt="logo" src={logo} sizes="50px" priority/>
                </div>
                <div className="flex gap-12">
                    <Link href={""}>Quartos</Link>
                    <Link href={""}>Serviços</Link>
                    <Link href={""}>Preços</Link>
                </div>
            </div>
        </nav>
        </Container>

    )
}
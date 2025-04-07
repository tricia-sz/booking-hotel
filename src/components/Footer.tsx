
import Image from "next/image"
import logo from "../../public/logoFooter.svg"
import Container from "./Container"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-[#1E1E1E]">
            <Container >
                <div className="flex flex-col-2 justify-between py-24">
                    <div className="mt-16">
                        <div className="">
                           <p className="text-white text-3xl">News & Special Promo</p>
                        </div>
                        <div className="flex mt-4">
                            <Input className="bg-white rounded-r-none py-6 px-12" placeholder="Digite seu e-mail" />
                            <Button className="bg-sky-500 rounded-l-none py-6 border">Escreva-se</Button>
                        </div>
                    </div>

                    <div className="flexflex-col justify-center items-center mx-auto">
                        <div className="flex flex-col">
                            <div className="mx-auto justify-center items-center mt-8">
                                <Image
                                    alt="logo"
                                    src={logo} 
                                    priority
                                    className=""/>
                            </div>
                            <div className="grid grid-cols-3 gap-16 text-white ">
                                <div className="grid">
                                    <Link href={""}>Sobre nós</Link>
                                    <Link href={""}>Contato</Link>
                                    <Link href={""}>Localização</Link>
                                </div>
                                <div className="grid">
                                    <Link href={""}>FAQ</Link>
                                    <Link href={""}>Termos de uso</Link>
                                    <Link href={""}>Política de Privacidade</Link>
                                </div>
                                <div className="grid">
                                    <Link href={""}>Serviços & Facilites</Link>
                                    <Link href={""}>Carreiras</Link>
                                    <Link href={""}>Como Reservar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
                
        </footer>
        
    )
}
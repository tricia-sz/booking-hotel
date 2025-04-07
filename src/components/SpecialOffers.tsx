import Image from "next/image"
import Container from "./Container"

import honey from '../../public/honey.jpg'
import meetin from '../../public/meeting.jpg'
import dancing from '../../public/dancing.jpg'
import { Card } from "./ui/card"


export default function SpecialOffers() {
    return (
        <>
            <div className="w-full bg-white mt-32 mb-36">
                <Container>
                    <div>
                        <div className="flex flex-col justify-center items-start gap-4 px-8 py-16">
                            <h2 className="text-blue-600 text-2xl">Ofertas Especiais</h2>
                            <div>
                                <h3 className="text-3xl">A melhor oferta do mês</h3>
                                <span className="text-slate-600">A experiencia fantastica beneficia e bla bla bla</span>
                                <div>
                                    <button>Visualizar</button>
                                </div>
                            </div>
                        </div>
                        <div className="grid ">
                            <section className="grid mt-10">
                                <div className="grid grid-cols-3 gap-4">
                                    <Card className="py-3 px-4">
                                        <Image alt="" src={honey} className="rounded-4xl object-cover h-80" />
                                        <div className="flex flex-col">
                                            <p className="text-2xl">Roney</p>
                                            <span className="text-zinc-500">descrição do produto</span>
                                            <span className="text-3xl font-bold">$400</span>
                                        </div>
                                    </Card>
                                    <Card className="py-3 px-4">
                                        <Image alt="" src={meetin} className="rounded-4xl object-cover h-80" />
                                        <div className="flex flex-col">
                                            <p className="text-2xl">Meeting</p>
                                            <span className="text-zinc-500">descrição do produto</span>
                                            <span className="text-3xl font-bold">$300</span>
                                        </div>
                                    </Card>
                                    <Card className="py-3 px-4">
                                        <Image alt="" src={dancing} className="rounded-4xl object-cover h-80" />
                                        <div className="flex flex-col">
                                            <p className="text-2xl">Dacing</p>
                                            <span className="text-zinc-500">descrição do produto</span>
                                            <span className="text-3xl font-bold">$550</span>
                                        </div>
                                    </Card>
                                </div>
                        </section>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
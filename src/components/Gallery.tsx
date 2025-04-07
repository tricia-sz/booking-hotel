import Image from "next/image"
import Container from "./Container"

import rooms from '../../public/room.jpg'
import dinning from '../../public/dinning.jpg'
import conference from '../../public/conference.jpg'
import wedding from '../../public/wedding.jpg'
import workout from '../../public/workout.jpg'

export default function Gallery() {
    return (
        <>
            <div className="w-full bg-slate-100/50 mt-32">
                <Container>
                    <div className="flex gap-12 mt-12">
                        <article className="">
                            <Image alt="" src={rooms} className="rounded-4xl w-4xs h-2/2 object-cover py-4" />
                        </article>
                        <section className="grid mt-10">
                            <div className="grid grid-cols-2 ">
                                <div className="py-3 px-4">
                                    <Image alt="" src={dinning} className="rounded-4xl object-cover" />
                                </div>
                                <div className="py-3 px-4">
                                    <Image alt="" src={conference} className="rounded-4xl object-cover" />
                                </div>
                                <div className="py-3 px-4">
                                    <Image alt="" src={workout} className="rounded-4xl object-cover" />
                                </div>
                                <div className="py-3 px-4">
                                    <Image alt="" src={wedding} className="rounded-4xl object-cover" />
                                </div>
                            </div>
                        </section>
                    </div>
                </Container>
            </div>
        </>
    )
}
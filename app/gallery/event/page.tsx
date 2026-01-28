import Reveal from '../../components/Reveal';

export default function EventGallery() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#F4F9F6] text-[#083316]">
            <Reveal>
                <div className="text-center">
                    <h1 className="text-4xl font-serif italic mb-4">Event Archive</h1>
                    <p className="font-sans opacity-60 tracking-widest uppercase text-xs">Collection Empty</p>
                </div>
            </Reveal>
        </main>
    )
}

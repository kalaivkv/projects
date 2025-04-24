import Button from "../components/Button";

export default function Home() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                Finding the right job shouldn’t be complicated
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                Taizo.in helps manufacturers in Tamil Nadu hire skilled CNC/VMC machine operators to engineers faster.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 md:max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}

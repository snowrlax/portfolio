import Button from "@/components/Button";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-purplebg overflow-y-scroll no-scrollbar">
      <Hero />
      <div className="h-screen bg-slate-200">
        <p>ifahiwehfuiawehf</p>
        <Button>HI there!</Button>
      </div>
    </main>
  );
}

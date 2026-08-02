import HeroButtons from "./HeroButtons";

type HeroSlideProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function HeroSlide({
  title,
  subtitle,
  description,
}: HeroSlideProps) {
  return (
    <section className="relative flex min-h-[85vh] md:min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 text-center text-white">

      {/* پس‌زمینه */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* افکت نور */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

      {/* محتوا */}
      <div className="relative z-10 mx-auto max-w-4xl">

        <h1 className="text-4xl font-extrabold leading-tight text-yellow-400 drop-shadow-[0_0_20px_rgba(255,180,0,.35)] sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>

        <p className="mt-6 text-lg font-medium text-gray-200 sm:text-xl md:text-2xl">
          {subtitle}
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-gray-300 sm:text-base md:text-lg">
          {description}
        </p>

        <div className="mt-10">
          <HeroButtons />
        </div>

      </div>
    </section>
  );
}
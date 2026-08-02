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
    <section className="flex min-h-screen items-center justify-center bg-zinc-900 px-6 text-center text-white">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-extrabold text-yellow-400 md:text-6xl">
          {title}
        </h1>

        <p className="mt-6 text-2xl text-gray-300">
          {subtitle}
        </p>

        <p className="mt-4 text-lg leading-8 text-gray-400">
          {description}
        </p>

        <HeroButtons />
      </div>
    </section>
  );
}
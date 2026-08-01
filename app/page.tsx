import { Great_Vibes, Cormorant_Garamond, Quicksand } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ✏️ Personnalise les prénoms du couple ici
const PARTNER_ONE = "Floriane";
const PARTNER_TWO = "Swann";

export default function Home() {
  const cocktails = [
    {
      name: "Sex on the Beach",
      icon: "🌅",
      tagline: "Sucré, fruité & ensoleillé",
      accent: "#ff6b6b",
      ingredients: [
        "vodka",
        "liqueur de framboise",
        "crème de pêche",
        "jus d'orange",
        "jus de cranberry",
      ],
    },
    {
      name: "Piña Colada",
      icon: "🍍",
      tagline: "Crémeux & exotique",
      accent: "#f4a11c",
      ingredients: ["rhum blanc", "crème de coco", "jus d'ananas"],
    },
    {
      name: "Mojito",
      icon: "🌿",
      tagline: "Frais & pétillant",
      accent: "#2ec4a0",
      ingredients: [
        "rhum blanc",
        "citron vert",
        "menthe fraîche",
        "sucre de canne",
        "perrier",
      ],
    },
    {
      name: "Mint Julep",
      icon: "🥃",
      tagline: "Boisé & élégant",
      accent: "#118ab2",
      ingredients: ["bourbon", "menthe fraîche", "sirop de sucre"],
    },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#fff4cc] via-[#ffe0a8] to-[#ffc488] py-14 px-4">
      {/* Soleil & halos estivaux */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 -top-24 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#fff2c2]/70 blur-[120px]" />
        <div className="absolute bottom-0 left-6 h-[320px] w-[320px] rounded-full bg-[#ff8f6b]/30 blur-[120px]" />
        <div className="absolute right-6 top-1/4 h-[320px] w-[320px] rounded-full bg-[#bfe08a]/40 blur-[120px]" />
      </div>

      {/* Filet dégradé coucher de soleil */}
      <div className="fixed left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-[#ff6b6b] via-[#f4a11c] to-[#2ec4a0]" />
      <div className="fixed bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2ec4a0] via-[#f4a11c] to-[#ff6b6b]" />

      {/* Éléments estivaux flottants */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute left-[7%] top-[16%] text-3xl">🌻</div>
        <div className="absolute right-[9%] top-[20%] text-2xl">☀️</div>
        <div className="absolute left-[12%] bottom-[22%] text-2xl">🍋</div>
        <div className="absolute right-[11%] bottom-[18%] text-3xl">🌿</div>
        <div className="absolute left-[46%] bottom-[10%] text-2xl">🍹</div>
      </div>

      {/* En-tête */}
      <header className="relative z-10 mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
        <p
          className={`text-sm font-semibold uppercase tracking-[0.4em] text-[#e07a3f] ${quicksand.className}`}
        >
          Joyeux Anniversaire
        </p>

        <div className="my-5 flex items-center justify-center gap-4">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#e07a3f]" />
          <span className="text-2xl">🍹</span>
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#e07a3f]" />
        </div>

        <h1
          className={`flex flex-wrap items-baseline justify-center gap-x-4 py-3 text-5xl leading-[1.5] text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] via-[#f4711c] to-[#ff9a56] drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)] sm:text-6xl lg:text-7xl ${greatVibes.className}`}
        >
          <span>{PARTNER_ONE}</span>
          <span className="text-[#2ec4a0]">&amp;</span>
          <span>{PARTNER_TWO}</span>
        </h1>

        <p
          className={`mt-6 max-w-md text-lg italic text-[#0d5b57] sm:text-xl ${cormorant.className}`}
        >
          Un été, deux amoureux et quatre cocktails à siroter. Trinquons à vous deux&nbsp;! 🥂
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-1.5 w-1.5 rotate-45 bg-[#ff6b6b]" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#f4a11c]" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#2ec4a0]" />
        </div>
      </header>

      {/* Cartes cocktails */}
      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
        {cocktails.map((cocktail, index) => (
          <article
            key={cocktail.name}
            className="group relative overflow-hidden rounded-2xl border-2 bg-white/55 p-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:shadow-2xl"
            style={{ borderColor: `${cocktail.accent}66` }}
          >
            {/* Bandeau de couleur */}
            <span
              className="absolute inset-x-0 top-0 h-1.5"
              style={{ backgroundColor: cocktail.accent }}
            />

            {/* Numéro filigrane */}
            <span
              className={`pointer-events-none absolute -right-1 -top-3 select-none text-8xl font-bold ${quicksand.className}`}
              style={{ color: `${cocktail.accent}1f` }}
            >
              {(index + 1).toString().padStart(2, "0")}
            </span>

            {/* Icône & nom */}
            <div className="relative mb-5 flex items-center gap-4">
              <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                {cocktail.icon}
              </span>
              <div>
                <h2
                  className={`text-2xl font-bold tracking-wide text-[#0d5b57] sm:text-3xl ${quicksand.className}`}
                >
                  {cocktail.name}
                </h2>
                <p
                  className={`mt-1 text-base italic ${cormorant.className}`}
                  style={{ color: cocktail.accent }}
                >
                  {cocktail.tagline}
                </p>
              </div>
            </div>

            {/* Séparateur */}
            <div className="mb-5 flex items-center gap-3">
              <span
                className="h-px flex-1"
                style={{
                  background: `linear-gradient(to right, ${cocktail.accent}80, transparent)`,
                }}
              />
              <span
                className="h-1 w-1 rotate-45"
                style={{ backgroundColor: cocktail.accent }}
              />
            </div>

            {/* Ingrédients */}
            <ul className="space-y-2.5">
              {cocktail.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex items-center gap-3">
                  <span
                    className="h-1.5 w-1.5 flex-shrink-0 rotate-45"
                    style={{ backgroundColor: cocktail.accent }}
                  />
                  <span
                    className={`text-lg text-[#2c4f4b] ${cormorant.className}`}
                  >
                    {ingredient}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Citation finale */}
      <div className="relative z-10 mx-auto mt-16 max-w-xl text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#e07a3f]" />
          <span className="text-2xl">🌞</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#e07a3f]" />
        </div>
        <blockquote
          className={`text-xl italic text-[#0d5b57] sm:text-2xl ${cormorant.className}`}
        >
          &ldquo;L&rsquo;été, l&rsquo;amour et un verre bien frais&nbsp;:
          rien de plus à demander.&rdquo;
        </blockquote>
        <p
          className={`mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#e07a3f] ${quicksand.className}`}
        >
          À votre santé
        </p>
      </div>
    </main>
  );
}

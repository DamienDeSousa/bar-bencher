import { Cormorant_Garamond, Playfair_Display, DM_Sans } from "next/font/google";
import Image from "next/image";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  weight: ["400", "500"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function Home() {
  const categories = [
    {
      label: "Frais & Herbacé",
      cocktails: [
        {
          name: "Mojito",
          ingredients: ["citron vert", "sucre de canne", "rhum blanc", "perrier", "menthe"],
        },
        {
          name: "Mint Julep",
          ingredients: ["bourbon", "menthe", "sirop de sucre"],
        },
      ],
    },
    {
      label: "Fruité & Gourmand",
      cocktails: [
        {
          name: "Sex on the Beach",
          ingredients: ["liqueur de framboise", "crème de pêche", "vodka", "jus d'orange", "jus de cranberry"],
        },
        {
          name: "Piña Colada",
          ingredients: ["rhum blanc", "crème de coco", "jus d'ananas"],
        },
        {
          name: "Summer at Saint-Trop'",
          ingredients: ["vin blanc", "sirop de grenadine", "limonade"],
        },
        {
          name: "Cosmopolitan",
          ingredients: ["vodka", "cointreau", "jus de cranberry", "citron vert"],
        },
      ],
    },
    {
      label: "Pétillant & Léger",
      cocktails: [
        {
          name: "Cuba Libre",
          ingredients: ["rhum ambré", "coca", "citron vert"],
        },
      ],
    },
    {
      label: "Intense & Raffiné",
      cocktails: [
        {
          name: "Negroni",
          ingredients: ["campari", "vermouth rouge", "gin dry", "zeste d'orange"],
        },
        {
          name: "Old Fashioned",
          ingredients: ["sirop de sucre", "angostura", "bourbon", "zeste d'orange"],
        },
      ],
    },
  ];

  return (
    <main
      className={`min-h-screen flex flex-col items-center py-14 px-6 ${dmSans.className}`}
      style={{ backgroundColor: "#FAF7F2" }}
    >
      {/* Header */}
      <header className="flex flex-col items-center gap-5 mb-14">
        <Image src="/logo.png" width={62} height={62} alt="logo" />
        <h1
          className={`text-5xl tracking-[0.3em] uppercase ${cormorant.className}`}
          style={{ color: "#3B2F2F", fontWeight: 300 }}
        >
          Baradam&apos;s
        </h1>
        <div className="flex items-center gap-3 w-56">
          <div className="flex-1 h-px" style={{ backgroundColor: "#C9A97A" }} />
          <span style={{ color: "#C9A97A", fontSize: "0.55rem" }}>✦</span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#C9A97A" }} />
        </div>
        <p
          className="text-xs tracking-[0.35em] uppercase"
          style={{ color: "#C4705C", fontWeight: 300 }}
        >
          Carte des Cocktails
        </p>
      </header>

      {/* Cocktails par catégorie */}
      <div className="flex flex-col w-full max-w-xs gap-10">
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="flex flex-col gap-4">
            {/* Titre de catégorie */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px" style={{ backgroundColor: "#E8DDD5" }} />
              <span
                className="text-xs tracking-[0.25em] uppercase whitespace-nowrap"
                style={{ color: "#C4705C" }}
              >
                {category.label}
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "#E8DDD5" }} />
            </div>

            {/* Cocktails de la catégorie */}
            {category.cocktails.map((cocktail, index) => (
              <div key={index}>
                <div
                  className="flex flex-col items-center py-7 px-5 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.55)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 2px 24px rgba(59, 47, 47, 0.05)",
                  }}
                >
                  <h2
                    className={`text-2xl mb-2 ${playfair.className}`}
                    style={{ color: "#3B2F2F", fontWeight: 400, fontStyle: "italic" }}
                  >
                    {cocktail.name}
                  </h2>
                  <span
                    className="text-sm text-center leading-relaxed tracking-wide"
                    style={{ color: "#9A8478", fontWeight: 300 }}
                  >
                    {cocktail.ingredients.join("  ·  ")}
                  </span>
                </div>
                {index < category.cocktails.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-px" style={{ backgroundColor: "#E8DDD5" }} />
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#C9A97A" }} />
                      <div className="w-10 h-px" style={{ backgroundColor: "#E8DDD5" }} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 w-40 mt-14">
        <div className="flex-1 h-px" style={{ backgroundColor: "#C9A97A" }} />
        <span style={{ color: "#C9A97A", fontSize: "0.55rem" }}>✦</span>
        <div className="flex-1 h-px" style={{ backgroundColor: "#C9A97A" }} />
      </div>
    </main>
  );
}

import { Crimson_Text, Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const crimsonText = Crimson_Text({
  weight: ["400", "600"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function Home() {
  const cocktailsBySpirit = {
    "Bourbon & Whiskey": [
      {
        name: "Mint Julep",
        ingredients: ["bourbon", "menthe", "sirop de sucre"],
      },
      {
        name: "Old Fashioned",
        ingredients: ["sucre", "angostura", "bourbon", "zeste d'orange"],
      },
      {
        name: "Sazerac",
        ingredients: ["bourbon", "Peychaud's bitter", "sucre de canne"],
      },
    ],
    Gin: [
      {
        name: "Tom Collins",
        ingredients: [
          "zeste de citron",
          "citron",
          "sucre",
          "dry gin",
          "perrier",
        ],
      },
      {
        name: "Negroni",
        ingredients: ["campari", "vermouth rouge", "gin dry", "zeste d'orange"],
      },
      {
        name: "Vesper",
        ingredients: ["gin", "vodka", "lillet"],
      },
    ],
    Vodka: [
      {
        name: "Vodkatini",
        ingredients: ["vodka", "vermouth blanc", "olives (en option)"],
      },
      {
        name: "White Russian",
        ingredients: ["vodka", "Liqueur de café", "crème fraîche"],
      },
    ],
    Rhum: [
      {
        name: "Rhum Collins",
        ingredients: [
          "zeste de citron",
          "citron",
          "sucre",
          "rhum blanc",
          "perrier",
        ],
      },
      {
        name: "Mojito",
        ingredients: [
          "citron vert",
          "sucre de canne",
          "rhum blanc",
          "perrier",
          "menthe",
        ],
      },
      {
        name: "Cuba Libre",
        ingredients: ["rhum blanc", "coca", "citron vert"],
      },
      {
        name: "Piña Colada",
        ingredients: ["rhum blanc", "crème de coco", "jus d'ananas"],
      },
    ],
    "Cognac & Brandy": [
      {
        name: "Stinger",
        ingredients: ["cognac", "crème de menthe blanche"],
      },
    ],
    Apéritifs: [
      {
        name: "Americano",
        ingredients: [
          "campari",
          "vermouth rouge",
          "perrier",
          "tranche d'orange",
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#f4f1e8] to-[#e8dcc0] py-12 px-4 overflow-x-hidden">
      {/* Header épuré */}
      <header className="flex flex-col justify-center items-center mb-16 w-full">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Image
            src="/logo.png"
            width={60}
            height={60}
            alt="logo"
            className="filter drop-shadow-lg sm:w-[75px] sm:h-[75px]"
          />
          <div className="text-center">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-black text-[#2c1810] tracking-wider ${playfairDisplay.className}`}
            >
              BAR BENCHER
            </h1>
            <p
              className={`text-base sm:text-lg text-[#8b7355] italic mt-2 ${crimsonText.className}`}
            >
              Cocktails de Gentlemen
            </p>
          </div>
        </div>
      </header>

      {/* Sections de cocktails par type d'alcool */}
      <div className="max-w-6xl mx-auto space-y-16">
        {Object.entries(cocktailsBySpirit).map(
          ([spiritType, cocktails], spiritIndex) => (
            <section key={spiritType} className="w-full">
              {/* En-tête de section */}
              <div className="text-center mb-12">
                <div className="flex justify-center items-center mb-4">
                  <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent"></div>
                  <div className="w-2 h-2 bg-[#8b7355] rotate-45 mx-3 -mt-px"></div>
                  <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent"></div>
                </div>

                <h2
                  className={`text-3xl sm:text-4xl font-bold text-[#2c1810] tracking-wide mb-2 ${playfairDisplay.className}`}
                >
                  {spiritType}
                </h2>

                <div className="flex justify-center items-center mt-4">
                  <div className="w-8 h-px bg-[#8b7355]"></div>
                  <div className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mx-2"></div>
                  <div className="w-8 h-px bg-[#8b7355]"></div>
                </div>
              </div>

              {/* Grille de cocktails pour cette section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cocktails.map((cocktail, cocktailIndex) => {
                  const globalIndex =
                    Object.values(cocktailsBySpirit)
                      .slice(0, spiritIndex)
                      .reduce((acc, prev) => acc + prev.length, 0) +
                    cocktailIndex;

                  return (
                    <div
                      key={`${spiritType}-${cocktailIndex}`}
                      className="group relative bg-gradient-to-br from-[#f8f6f0] to-[#f0ebe0] 
                               border-2 border-[#d4c4a8] rounded-lg shadow-lg hover:shadow-xl 
                               transition-all duration-300 hover:scale-105 overflow-hidden"
                    >
                      {/* Coin décoratif */}
                      <div
                        className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent 
                                 border-t-[25px] border-t-[#8b7355] opacity-20"
                      ></div>

                      <div className="p-6">
                        {/* Nom du cocktail */}
                        <div className="text-center mb-4">
                          <h3
                            className={`text-2xl font-bold text-[#2c1810] tracking-wide 
                                      group-hover:text-[#8b7355] transition-colors duration-300 
                                      ${playfairDisplay.className}`}
                          >
                            {cocktail.name}
                          </h3>

                          {/* Ligne décorative sous le titre */}
                          <div className="flex justify-center items-center mt-3 mb-4">
                            <div className="w-8 h-px bg-[#8b7355]"></div>
                            <div className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mx-2"></div>
                            <div className="w-8 h-px bg-[#8b7355]"></div>
                          </div>
                        </div>

                        {/* Ingrédients */}
                        <div className="space-y-2">
                          {cocktail.ingredients.map((ingredient, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mr-3 flex-shrink-0"></div>
                              <span
                                className={`text-[#5a4a3a] text-sm leading-relaxed ${crimsonText.className}`}
                              >
                                {ingredient}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Numéro décoratif */}
                        <div className="absolute bottom-3 right-3 text-[#d4c4a8] text-xs font-bold">
                          #{(globalIndex + 1).toString().padStart(2, "0")}
                        </div>
                      </div>

                      {/* Effet de brillance au survol */}
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent 
                                 opacity-0 group-hover:opacity-10 transition-opacity duration-300 
                                 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] 
                                 transition-transform duration-700"
                      ></div>
                    </div>
                  );
                })}
              </div>
            </section>
          )
        )}

        {/* Citation élégante en bas */}
        <div className="text-center mt-16 mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent"></div>
            <div className="w-2 h-2 bg-[#8b7355] rotate-45 mx-4 -mt-px"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent"></div>
          </div>
          <blockquote
            className={`text-lg text-[#8b7355] italic max-w-md mx-auto ${crimsonText.className}`}
          >
            "Un cocktail parfaitement préparé est l'expression ultime de
            l'élégance"
          </blockquote>
        </div>
      </div>
    </main>
  );
}

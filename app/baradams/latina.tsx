import { Abril_Fatface, Architects_Daughter } from "next/font/google";

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const cocktails = [
    {
      name: "Pisco Sour",
      origen: "🇵🇪 Perú",
      perfil: "Ácido & Cremoso",
      ambiente: "Las cumbres de los Andes",
      icon: "🏔️",
      ingredients: [
        "Pisco",
        "Citron vert",
        "Blanc d'œuf",
        "Sirop de sucre de canne",
        "Angostura Bitters",
      ],
    },
    {
      name: "El Diablo",
      origen: "🇲🇽 México",
      perfil: "Picante & Burbujeante",
      ambiente: "El carácter de Jalisco",
      icon: "😈",
      ingredients: [
        "Tequila",
        "Crème de Mûre",
        "Citron vert",
        "Ginger Beer",
      ],
    },
    {
      name: "Piña Colada",
      origen: "🇵🇷 Puerto Rico",
      perfil: "Dulce & Cremoso",
      ambiente: "El sol del Caribe",
      icon: "🍍",
      ingredients: [
        "Rhum Blanc",
        "Crème de coco",
        "Jus d'ananas",
      ],
    },
    {
      name: "Mojito Passion",
      origen: "🇨🇺/🇧🇷 Cuba-Brasil",
      perfil: "Exótico & Fresco",
      ambiente: "La selva tropical",
      icon: "🌿",
      ingredients: [
        "Rhum Blanc",
        "Menthe fraîche",
        "Citron vert",
        "Fruits de la passion",
        "Eau gazeuse",
        "Sirop de sucre de canne",
      ],
    },
    {
      name: "Tamarindo Sour",
      origen: "🇸🇻 El Salvador",
      perfil: "Terroso & Vibrante",
      ambiente: "La autenticidad de Centroamérica",
      icon: "🌳",
      ingredients: [
        "Rhum Ambré",
        "Pâte de tamarin",
        "Citron vert",
        "Sirop de sucre de canne",
        "Sel & Piment",
      ],
    },
  ];

  const cardColors = [
    { border: "#e11d48", bg: "from-[#e11d48]/20 to-[#e11d48]/5" },
    { border: "#f59e0b", bg: "from-[#f59e0b]/20 to-[#f59e0b]/5" },
    { border: "#22c55e", bg: "from-[#22c55e]/20 to-[#22c55e]/5" },
    { border: "#0ea5e9", bg: "from-[#0ea5e9]/20 to-[#0ea5e9]/5" },
    { border: "#a855f7", bg: "from-[#a855f7]/20 to-[#a855f7]/5" },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e] py-8 px-4 overflow-hidden relative">
      {/* Motifs aztèques en arrière-plan */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Bordure décorative style textile */}
      <div className="fixed top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#e11d48] via-[#f59e0b] via-[#22c55e] via-[#0ea5e9] to-[#e11d48]"></div>
      <div className="fixed bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-[#e11d48] via-[#f59e0b] via-[#22c55e] via-[#0ea5e9] to-[#e11d48]"></div>

      {/* Éléments décoratifs flottants */}
      <div className="fixed top-20 left-4 text-4xl opacity-20 animate-pulse">
        🌺
      </div>
      <div className="fixed top-40 right-6 text-3xl opacity-20 animate-pulse delay-300">
        🦜
      </div>
      <div className="fixed bottom-32 left-8 text-3xl opacity-20 animate-pulse delay-500">
        🌴
      </div>
      <div className="fixed bottom-20 right-4 text-4xl opacity-20 animate-pulse delay-700">
        🌵
      </div>

      {/* Header avec style festif */}
      <header className="relative z-10 flex flex-col justify-center items-center mb-12 pt-4">
        {/* Cadre décoratif */}
        <div className="relative px-8 py-6">
          {/* Coins décoratifs */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#f59e0b] rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#22c55e] rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#0ea5e9] rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#e11d48] rounded-br-lg"></div>

          <div className="text-center">
            <div className="text-5xl mb-2">🎭</div>
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#e11d48] to-[#f59e0b] drop-shadow-lg ${abrilFatface.className}`}
            >
              BARADAM&apos;S
            </h1>
            <p
              className={`text-lg sm:text-xl text-[#fbbf24] mt-3 tracking-wider ${architectsDaughter.className}`}
            >
              ✦ Sabores de América Latina ✦
            </p>
          </div>
        </div>

        {/* Séparateur aztèque */}
        <div className="flex items-center justify-center mt-6 gap-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#f59e0b]"></div>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-[#e11d48] rotate-45"></div>
            <div className="w-2 h-2 bg-[#f59e0b] rotate-45"></div>
            <div className="w-2 h-2 bg-[#22c55e] rotate-45"></div>
            <div className="w-2 h-2 bg-[#0ea5e9] rotate-45"></div>
            <div className="w-2 h-2 bg-[#e11d48] rotate-45"></div>
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#f59e0b]"></div>
        </div>
      </header>

      {/* Liste des cocktails */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cocktails.map((cocktail, index) => {
            const colorScheme = cardColors[index % cardColors.length];

            return (
              <div
                key={cocktail.name}
                className={`group relative bg-gradient-to-br ${colorScheme.bg} 
                         backdrop-blur-sm border-2 rounded-xl overflow-hidden
                         hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                style={{ borderColor: `${colorScheme.border}40` }}
              >
                {/* Motif de coin aztèque */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-20"
                  style={{
                    background: `linear-gradient(135deg, ${colorScheme.border} 25%, transparent 25%),
                               linear-gradient(225deg, ${colorScheme.border} 25%, transparent 25%)`,
                    backgroundSize: "8px 8px",
                  }}
                ></div>

                <div className="p-6">
                  {/* Icône et nom */}
                  <div className="text-center mb-5">
                    <span className="text-5xl block mb-3 group-hover:scale-110 transition-transform duration-300">
                      {cocktail.icon}
                    </span>
                    <h3
                      className={`text-2xl sm:text-3xl font-bold text-white tracking-wide mb-2
                                ${abrilFatface.className}`}
                    >
                      {cocktail.name}
                    </h3>

                    {/* Origen */}
                    <p
                      className={`text-sm tracking-wider ${architectsDaughter.className}`}
                      style={{ color: colorScheme.border }}
                    >
                      {cocktail.origen}
                    </p>

                    {/* Séparateur */}
                    <div className="flex justify-center items-center mt-4">
                      <div
                        className="w-8 h-0.5 opacity-50"
                        style={{ backgroundColor: colorScheme.border }}
                      ></div>
                      <div
                        className="w-2 h-2 mx-2 rotate-45 opacity-50"
                        style={{ backgroundColor: colorScheme.border }}
                      ></div>
                      <div
                        className="w-8 h-0.5 opacity-50"
                        style={{ backgroundColor: colorScheme.border }}
                      ></div>
                    </div>
                  </div>

                  {/* Perfil & Ambiente */}
                  <div className="mb-4 text-center">
                    <p
                      className={`text-white text-base ${architectsDaughter.className}`}
                    >
                      {cocktail.perfil}
                    </p>
                    <p
                      className={`text-gray-400 text-sm italic mt-1 ${architectsDaughter.className}`}
                    >
                      {cocktail.ambiente}
                    </p>
                  </div>

                  {/* Séparateur avant ingrédients */}
                  <div className="flex justify-center items-center my-4">
                    <div
                      className="w-full h-px opacity-30"
                      style={{ backgroundColor: colorScheme.border }}
                    ></div>
                  </div>

                  {/* Ingrédients */}
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-3 text-center">
                      Ingrédients
                    </p>
                    <div className="space-y-1.5">
                      {cocktail.ingredients.map((ingredient, idx) => (
                        <div key={idx} className="flex items-center">
                          <div
                            className="w-1.5 h-1.5 rotate-45 mr-2 flex-shrink-0 opacity-70"
                            style={{ backgroundColor: colorScheme.border }}
                          ></div>
                          <span
                            className={`text-gray-300 text-sm ${architectsDaughter.className}`}
                          >
                            {ingredient}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Effet de brillance au survol */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent 
                         opacity-0 group-hover:opacity-5 transition-opacity duration-300 
                         transform -skew-x-12"
                ></div>
              </div>
            );
          })}
        </div>

        {/* Citation finale */}
        <div className="text-center mt-16 mb-8 pt-8">
          <div className="flex justify-center items-center mb-6">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#e11d48] rotate-45"></div>
              <div className="w-2 h-2 bg-[#f59e0b] rotate-45"></div>
              <div className="w-2 h-2 bg-[#22c55e] rotate-45"></div>
            </div>
            <div className="h-px w-16 mx-4 bg-gradient-to-r from-[#f59e0b] to-[#e11d48]"></div>
            <span className="text-3xl">🍹</span>
            <div className="h-px w-16 mx-4 bg-gradient-to-l from-[#f59e0b] to-[#e11d48]"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#22c55e] rotate-45"></div>
              <div className="w-2 h-2 bg-[#f59e0b] rotate-45"></div>
              <div className="w-2 h-2 bg-[#e11d48] rotate-45"></div>
            </div>
          </div>

          <blockquote
            className={`text-lg sm:text-xl text-[#fbbf24] italic max-w-lg mx-auto ${architectsDaughter.className}`}
          >
            &ldquo;La vida es corta, toma un buen cóctel&rdquo;
          </blockquote>

          <p className="text-gray-500 text-sm mt-4">
            ¡Salud! 🥂
          </p>
        </div>
      </div>
    </main>
  );
}

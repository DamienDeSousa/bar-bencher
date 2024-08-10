import { Lobster, Oswald } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({
  subsets: ["latin"],
});

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const cocktails = [
    {
      name: "Mint Julep",
      ingredients: ["bourbon", "menthe", "sirop de sucre"],
    },
    // {
    //   name: "Vodkatini",
    //   ingredients: ["vodka", "vermouth blanc", "olives (en option)"],
    // },
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
      name: "Tom Collins",
      ingredients: ["zeste de citron", "citron", "sucre", "dry gin", "perrier"],
    },
    {
      name: "Americano",
      ingredients: ["campari", "vermouth rouge", "perrier", "tranche d'orange"],
    },
    {
      name: "Negroni",
      ingredients: ["campari", "vermouth rouge", "gin dry", "zeste d'orange"],
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
    // {
    //   name: "Vesper",
    //   ingredients: ["gin", "vodka", "lillet"],
    // },
    {
      name: "Old Fashioned",
      ingredients: ["sucre", "angostura", "bourbon", "zeste d'orange"],
    },
    // {
    //   name: "Stinger",
    //   ingredients: ["cognac", "crème de menthe blanche"],
    // },
    {
      name: "Cuba Libre",
      ingredients: ["rhum blanc", "coca", "citron vert"],
    },
  ];

  return (
    <main className="flex flex-col py-7 px-4 gap-20">
      <header className="flex flex-col justify-center items-center gap-5">
        <div className="flex gap-2 justify-center items-center">
          <Image src="/logo.png" width={55} height={55} alt="logo" />
          <h1 className={`text-5xl font-bold ${oswald.className}`}>
            BAR BENCHER
          </h1>
        </div>
        <hr className="border-[#2c4137] border-2 rounded w-72" />
      </header>
      <div className="flex flex-col gap-10">
        {cocktails.map((cocktail, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <h2 className={`text-2xl font-semibold ${oswald.className}`}>
              {cocktail.name}
            </h2>
            <span
              className={`text-[#435550] font-thin block text-center ${lobster.className}`}
            >
              {cocktail.ingredients.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}

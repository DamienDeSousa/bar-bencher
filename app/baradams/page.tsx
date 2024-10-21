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
    {
      name: "Cuba Libre",
      ingredients: ["rhum blanc", "coca", "citron vert"],
    },
    {
      name: "Sazerac",
      ingredients: ["bourbon", "Peychaud's bitter", "sucre liquide"],
    },
    {
      name: "White Russian",
      ingredients: ["vodka", "Liqueur de café", "crème fraîche"],
    },
    {
      name: "Mint Julep",
      ingredients: ["bourbon", "menthe", "sirop de sucre"],
    },
    {
      name: "Old Fashioned",
      ingredients: ["sirop de sucre", "angostura", "bourbon", "zeste d'orange"],
    },
    {
      name: "Summer at Saint-Trop'",
      ingredients: ["vin blanc", "sirop de grenadine", "limonade"],
    },
    {
      name: "Sex on the Beach",
      ingredients: [
        "Liqueur de framboise",
        "crème de pêche",
        "vodka",
        "jus d'orange",
        "jus de cramberry",
      ],
    },
  ];

  return (
    <main className="flex flex-col py-7 px-4 gap-20">
      <header className="flex flex-col justify-center items-center gap-5">
        <div className="flex gap-2 justify-center items-center">
          <Image src="/logo.png" width={55} height={55} alt="logo" />
          <h1 className={`text-5xl font-bold ${oswald.className}`}>
            BARADAM&apos;S
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

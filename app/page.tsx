import Products from "@/components/Products";

export default function Home() {
  return (
    <main>
      <div
        className="flex flex-col px-40 py-40 items-start h-screen
     text-white"
      >
        <h1 className="text-5xl font-medium">
          Solenergi för en ljusare framtid
        </h1>
        <p className="text-lg font-medium">
          Fånga solen, sänk din elräkning och ditt klimatavtryck
        </p>
      </div>
      <div>
        <Products />
      </div>
    </main>
  );
}

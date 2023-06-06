import Image from "next/image";
import Cover from "@/public/cover.jpeg";
import { Form } from "@/components/";

function IndexPage() {
  return (
    <>
      <div className="relative">
        <Image src={Cover} alt="logo" className="object-cover" />
        <div className="flex flex-col absolute right-40 top-40">
          <button className="bg-yellow-400 hover:bg-yellow-600 text-4xl p-2 m-2 rounded">
            Lorem ipsum
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-600 text-4xl p-2 m-2 rounded">
            Dolor sit Amet
          </button>
        </div>
      </div>
      <main className="flex justify-center py-10">
        <article className="max-w-sm rounded overflow-hidden shadow-lg mx-3">
          <div className="px-6 py-4">
            <div className="font-bold text-xl bg-2 py-5 text-custom">
              Mejores precios
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </article>
        <article className="max-w-sm rounded overflow-hidden shadow-lg mx-3">
          <div className="px-6 py-4">
            <div className="font-bold text-xl bg-2 py-5 text-custom">
              Impacto
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </article>
        <article className="max-w-sm rounded overflow-hidden shadow-lg mx-3">
          <div className="px-6 py-4">
            <div className="font-bold text-xl bg-2 py-5 text-custom">
              Comunidad
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </article>
      </main>
      <Form />
    </>
  );
}

export default IndexPage;

import Image from "next/image";

export const metadata = {
  title: "Database",
  description:
    "Database concepts in the Fundamentals of Computing course [CMPS1134-2]",
};

export default function Database() {
  return (
    <a
      href="https://drive.google.com/file/d/1gL6zYcdEBFgzvh-4iPgwfkvESouDlsbX/view?usp=drive_link"
      target="_blank"
    >
      <div
        className="flex flex-col items-center gap-3 border-2 border-lime-600 bg-lime-100 p-4 
    transition-all hover:-translate-y-1 hover:translate-x-1 hover:bg-lime-200"
      >
        <div>
          <Image
            src="/database-screen.png"
            alt="Database demonstration"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
            className="mx-auto block h-auto w-5/6 border-2 border-neutral-500 shadow-lg"
          />
        </div>
        <div className="p-3 text-center">
          <h2 className="text-3xl font-bold uppercase text-lime-800">
            Database Demonstration
          </h2>
          <p className="text-center text-emerald-600">by Dr. Ryan</p>
          <p className="mb-0 mt-3 text-center">
            A database is a collection of data that is multidimensional. Click
            to view a video demonstration of databases.
          </p>
        </div>
      </div>
    </a>
  );
}

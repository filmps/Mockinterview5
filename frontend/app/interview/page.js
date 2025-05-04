import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* MAIN Interviewer PIC hear */}
        <Image
          src="https://www.shutterstock.com/image-photo/happy-mature-business-woman-middle-260nw-2454482105.jpg"
          alt="Interviewer Pic" 
          width={1000} 
          height={438} 
          priority
        />
        <a className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]" 
        href="#" 
        target="_blank" 
        rel="noopener noreferrer">Submit</a>   
      </main>
    </div>
  );
}

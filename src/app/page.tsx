import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return ( 
    <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                <nav className="mt-10 items-center bg-white-800">
                    <ul className="flex">
                        <li className="mr-4 flex items-center">
                            <Link href="/" className="text-black-600 dark:text-white-500">Home</Link>
                        </li> 
                        <li className="flex items-center">
                            <Link href="/projects" className="text-black-600 dark:text-white-500">Projects</Link>
                        </li>
                    </ul>
                </nav>
                <section className="mt-10 max-w-xl mx-4 ml-0 flex flex-col w-full">
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Welcome to my Porfolio</h1>
                    <p className="mb-4">Hey! My name is Jesse. I'm a software engineer, and this is my website where I showcase my projects and experience. You can also check out what I'm currently working on here!</p>
                    <div className="my-8">
                        <div>
                            <Link href="/projects/website" className="flex flex-col space-y-1 mb-4">
                                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                                    <p className="text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums">April 28, 2024</p>
                                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">Making this website!</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <footer className="mb-16">
                        <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
                            <li>
                                <Link href="https://github.com/JesseDeJonge1" 
                                    className="flex items-center text-black-600 transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
                                    <Image src="/images/arrow.png" alt="GitHub" width={24} height={24} />
                                    GitHub
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/jesse-de-jonge-3268b6256/" 
                                    className="flex items-center text-black-600 transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
                                    <Image src="/images/arrow.png" alt="LinkedIn" width={24} height={24} /> 
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                </footer>
        </main>
    </body>
  );
}

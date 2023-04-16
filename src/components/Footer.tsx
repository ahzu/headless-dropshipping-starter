import Link from "next/link"

export default function Footer () {
    return (
        <>
         <footer className="p-5 bg-black">
          <div className="mx-auto max-w-6xl px-5">
            <div className="py-6 text-center flex flex-col md:flex-row items-center justify-between">
            <p className="text-white text-sm">
            &copy; 2023 yourcompany
                
            </p>
            <nav className="flex items-center justify-end space-x-3 md:space-x-6">
                <Link href="/about">
                <a className="text-white hover:text-blue-600 p-1 transition text-sm">
                    FAQS
                </a>
                </Link>
                <Link href="/terms-of-sale">
                <a className="text-white hover:text-blue-600 p-1 transition text-sm">
                    Terms of Sale
                </a>
                </Link>
                <div className="text-white">
                <a
                href="https://ahzudirecttech.com"
                title="Learn more about custom app developemtn services."
                target="_blank"
                rel="noopener noreferrer"
                className="ml-0.5 text-white hover:text-blue-600"
                >
                </a>
                Built by{" "}
                <a
                href="https://twitter.com/ahzudirecttech"
                title="Follow the creator on Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-0.5 text-white hover:text-blue-600"
                >
                @ahzudirecttech
                </a>
                </div>
            </nav>
            </div>
          </div>
        </footer>
        </>

    )
}

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-lg">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 px-4 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © 2025 Talha. Built with Next.js & Tailwind.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Mail className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

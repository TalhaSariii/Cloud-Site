"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, FileText, Github, Linkedin, Mail, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
    const [text, setText] = useState("")
    const phrases = ["Linux Enthusiast", "Full Stack Dev", "Cybersec Learner"]
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex]
        const typingSpeed = isDeleting ? 50 : 100
        const pauseTime = 2000

        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < currentPhrase.length) {
                setText(currentPhrase.substring(0, charIndex + 1))
                setCharIndex(charIndex + 1)
            } else if (isDeleting && charIndex > 0) {
                setText(currentPhrase.substring(0, charIndex - 1))
                setCharIndex(charIndex - 1)
            } else if (!isDeleting && charIndex === currentPhrase.length) {
                setTimeout(() => setIsDeleting(true), pauseTime)
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false)
                setPhraseIndex((prev) => (prev + 1) % phrases.length)
            }
        }, isDeleting ? 50 : charIndex === currentPhrase.length ? pauseTime : 100)

        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, phraseIndex, phrases])

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container flex flex-col items-center gap-6"
            >
                <div className="flex items-center gap-2 rounded-full border bg-background/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-md">
                    <Terminal className="h-4 w-4 text-primary" />
                    <span>v1.0.0 Online</span>
                </div>

                <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
                    Architecting the Cloud.{" "}
                    <span className="block text-primary">Developing the Future.</span>
                </h1>

                <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    Hi, I'm Talha. MIS Student & Aspiring Cloud Architect.
                    <br />
                    I am a{" "}
                    <span className="font-mono font-bold text-foreground">
                        {text}
                        <span className="animate-pulse">|</span>
                    </span>
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button size="lg" className="h-12 px-8 text-base">
                        My Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                        Download CV
                        <FileText className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <div className="mt-12 flex gap-6 text-muted-foreground">
                    <Github className="h-6 w-6 hover:text-foreground cursor-pointer transition-colors" />
                    <Linkedin className="h-6 w-6 hover:text-foreground cursor-pointer transition-colors" />
                    <Mail className="h-6 w-6 hover:text-foreground cursor-pointer transition-colors" />
                </div>
            </motion.div>
        </section>
    )
}

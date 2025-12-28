"use client"

import { motion } from "framer-motion"
import { Terminal, Circle } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
    return (
        <section className="container py-24 px-4 sm:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-4xl"
            >
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
                    <p className="mt-4 text-muted-foreground">The logic behind the code.</p>
                </div>

                <Card className="border-0 bg-black/40 backdrop-blur-xl ring-1 ring-white/10 overflow-hidden text-sm sm:text-base font-mono shadow-2xl">
                    <CardHeader className="flex flex-row items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <Circle className="h-3 w-3 fill-red-500 text-red-500" />
                                <Circle className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                                <Circle className="h-3 w-3 fill-green-500 text-green-500" />
                            </div>
                            <div className="ml-4 flex items-center gap-2 text-muted-foreground">
                                <Terminal className="h-4 w-4" />
                                <span>talha@cloud-dev:~/about</span>
                            </div>
                        </div>
                        <div className="text-xs text-muted-foreground">bash</div>
                    </CardHeader>
                    <CardContent className="p-6 text-foreground/90 space-y-4">
                        <p>
                            <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-amber-300">cat</span> bio.txt
                        </p>
                        <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                            <p>
                                Starting with <span className="text-primary font-bold">Computer Programming</span>, I built a logic-first foundation. Now, studying <span className="text-primary font-bold">Management Information Systems (YBS)</span>, I bridge the gap between code and business strategy.
                            </p>
                            <p>
                                Whether it&apos;s optimizing <span className="text-yellow-400">Linux servers</span>, analyzing <span className="text-green-400">BIST100 trends</span>, or building no-code apps, I focus on efficiency and systems thinking (INTP).
                            </p>
                        </div>
                        <p className="animate-pulse">
                            <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="inline-block w-2.5 h-4 bg-muted-foreground align-middle ml-1" />
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    )
}

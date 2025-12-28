"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = {
    Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn/ui"],
    Backend: ["Node.js", "MongoDB", "Express", "Drizzle ORM"],
    "Cloud/DevOps": ["Linux (Ubuntu/WSL)", "Bash Scripting", "AWS (Learning)", "Docker", "Git"],
    "Other Interests": ["Stock Analysis (BIST100)", "FlutterFlow", "No-code", "Cybersecurity"],
}

export function SkillsSection() {
    return (
        <section className="container py-24 px-4 sm:px-8 bg-muted/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Arsenal</h2>
                    <p className="mt-4 text-muted-foreground">Tools and technologies I work with.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex flex-col gap-4 rounded-xl border bg-background/50 p-6 backdrop-blur-sm transition-all hover:bg-background/80 hover:shadow-md"
                        >
                            <h3 className="text-xl font-semibold text-primary">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

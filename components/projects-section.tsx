"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Smartphone, Cloud, BarChart } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
    {
        title: "SpeedTyper App",
        description: "A Monkeytype-inspired mobile typing speed test app built with FlutterFlow & Firebase. Gamifying productivity on the go.",
        tag: "Mobile Dev",
        status: "In Development",
        statusColor: "bg-yellow-500",
        icon: Smartphone,
        className: "md:col-span-1",
    },
    {
        title: "DGS Consultancy Hub",
        description: "A comprehensive digital platform and consultancy service for students preparing for the Vertical Transfer Exam (DGS).",
        tag: "EdTech",
        status: "Active Planning",
        statusColor: "bg-green-500",
        icon: BarChart,
        className: "md:col-span-2",
    },
    {
        title: "Cloud Lab",
        description: "My personal playground for Linux server hardening, AWS architecture experiments, and DevOps automation.",
        tag: "DevOps",
        status: "Continuous",
        statusColor: "bg-blue-500",
        icon: Cloud,
        className: "md:col-span-3",
    },
]

export function ProjectsSection() {
    return (
        <section className="container py-24 px-4 sm:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-5xl"
            >
                <div className="mb-12 text-start">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
                    <p className="mt-4 text-muted-foreground">Highlights of my recent engineering work.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`${project.className}`}
                        >
                            <Card className="h-full flex flex-col justify-between overflow-hidden border-muted-foreground/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <project.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <Badge variant="outline" className={`${project.statusColor} bg-opacity-20 text-white border-0`}>
                                            <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${project.statusColor}`} />
                                            {project.status}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                    <CardDescription className="text-base mt-2">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Badge variant="secondary">{project.tag}</Badge>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

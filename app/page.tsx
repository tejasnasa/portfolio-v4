"use client";

import { Section } from "@/components/Section";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PROJECTS from "@/data/projects.json";
import SKILLS from "@/data/skills.json";
import {
  ArrowRight,
  Briefcase,
  Code,
  Download,
  ExternalLink,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 pt-12 md:pt-24 selection:bg-neutral-800">
      <Section delay={0.1}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
          <div className="w-24 h-24 rounded-full bg-neutral-800 overflow-hidden relative shrink-0 flex items-center justify-center text-neutral-500 text-2xl font-semibold shadow-inner">
            <Image
              src="/resume-pfp.png"
              alt="Tejas Nasa"
              width={96}
              height={96}
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-100">
              Tejas Nasa
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl mt-2">
              Full Stack Developer
            </p>
          </div>
        </div>

        <div className="prose prose-invert prose-neutral mt-6 max-w-none text-neutral-300">
          <p>
            Focused on backend systems and real-time architectures. I have
            extensive experience building scalable collaborative platforms,
            AI-powered code analysis tools, and high-performance APIs.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 mt-8">
          <a
            href="/tejas_nasa_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-neutral-100 text-neutral-950 hover:bg-white rounded-full font-medium text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-neutral-100/10"
          >
            <Download className="w-4 h-4" /> View Resume
          </a>

          <a
            href="https://github.com/tejasnasa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            <Code className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/tejasnasa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            <Briefcase className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="mailto:tejasnasa1908@gmail.com"
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
          <a
            href="tel:+919599875310"
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            <Phone className="w-4 h-4" /> +91 9599875310
          </a>
        </div>
      </Section>

      <Section delay={0.2} id="projects">
        <h2 className="text-xl font-semibold mb-8 text-neutral-100">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.title} className="relative">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="group text-left flex flex-col justify-between p-4 md:p-6 rounded-2xl bg-neutral-900/20 hover:bg-neutral-900/60 border border-neutral-800/30 hover:border-neutral-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-neutral-900/50 cursor-pointer w-full backdrop-blur-md">
                    <div className="w-full aspect-video bg-neutral-950/50 rounded-xl mb-6 border border-neutral-800/30 overflow-hidden relative">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-medium text-xl text-neutral-200 group-hover:text-white flex items-center gap-2 transition-colors">
                        {project.title}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                      <p className="text-sm text-neutral-400 mt-2 font-medium tracking-wide uppercase text-[10px]">
                        {project.tagline}
                      </p>
                      <p className="text-sm text-neutral-500 mt-3 leading-relaxed">
                        {project.shortDesc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-neutral-950/50 border border-neutral-800/50 rounded-md text-xs text-neutral-400 group-hover:border-neutral-700/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="px-2.5 py-1 bg-neutral-950/50 border border-neutral-800/50 rounded-md text-xs text-neutral-500">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      {project.title}
                    </DialogTitle>
                    <DialogDescription className="text-base">
                      {project.tagline}
                    </DialogDescription>
                    <div className="flex items-center gap-4 mt-4 mb-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors"
                      >
                        <Code className="w-4 h-4" /> View Source
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    </div>
                  </DialogHeader>
                  <div className="space-y-6 text-neutral-300 text-sm">
                    <div className="w-full aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 relative">
                      <Image
                        src={project.img}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-medium text-neutral-200 mb-3 text-base">
                        Key Achievements
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-neutral-400 leading-relaxed">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-200 mb-3 text-base">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-xs text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <div className="flex gap-3 absolute bottom-3 right-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-500 hover:text-neutral-300 flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" /> Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-500 hover:text-neutral-300 flex items-center gap-1"
                >
                  <Code className="w-3 h-3" /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section delay={0.3} id="stack">
        <h2 className="text-xl font-semibold mb-6 text-neutral-100">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((tech) => (
            <div
              key={tech}
              className="px-3 py-1.5 bg-neutral-900/20 border border-neutral-800/30 rounded-full text-sm text-neutral-400 hover:text-neutral-950 hover:bg-neutral-200 hover:border-neutral-200 transition-all duration-300 cursor-default backdrop-blur-md hover:scale-105"
            >
              {tech}
            </div>
          ))}
        </div>
      </Section>

      <Section delay={0.12} id="education">
        <h2 className="text-xl font-semibold mb-8 text-neutral-100">
          Education
        </h2>
        <div className="space-y-8">
          <div className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
            <div className="text-sm text-neutral-500 md:w-32 shrink-0">
              2023 — 2027
            </div>
            <div>
              <h3 className="font-medium text-neutral-200">
                Bachelor of Technology in Information Technology
              </h3>
              <p className="text-neutral-400 text-sm mt-1">
                Maharaja Surajmal Institute of Technology, Delhi
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section delay={0.4}>
        <div className="border-t border-neutral-800/50 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Tejas Nasa. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tejasnasa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/tejasnasa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/tejasnasa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}

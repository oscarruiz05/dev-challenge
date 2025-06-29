import CTA from "@/components/CTA";
import CalendarGrid from "@/components/CalendarGrid";
import Features from "@/components/Features";
import { Button } from "@/components/ui/button";
import { Calendar, Code2, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* hero */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23334155' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
            <Calendar className="w-4 h-4" />
            <span>25 Días de Código</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Calendario de
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent block">
              Retos de Código
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Desafía tus habilidades de programación cada día con retos únicos.
            Una experiencia gamificada que te convertirá en mejor desarrollador.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/25"
            >
              <Link href="/retos">
                <Code2 className="w-5 h-5 mr-2" />
                Comenzar Ahora
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-slate-300">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                <Trophy className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-2xl font-bold text-white">25</span>
              <span className="text-sm">Retos Únicos</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-2xl font-bold text-white">10K+</span>
              <span className="text-sm">Desarrolladores</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3">
                <Code2 className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-2xl font-bold text-white">4+</span>
              <span className="text-sm">Lenguajes</span>
            </div>
          </div>
        </div>
      </div>
      {/* calendar */}
      <CalendarGrid />
      {/* features */}
      <Features />
      {/* cta */}
      <CTA />
    </>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import CalendarGrid from "@/components/CalendarGrid";
import BackToTop from "@/components/layout/BackToTop";

const Calendar = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Calendario de Retos
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Aquí tienes todos los retos disponibles. Completa cada día para
              desbloquear el siguiente desafío.
            </p>
          </div>

          <CalendarGrid />
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default Calendar;

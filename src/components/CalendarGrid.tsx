import React from "react";
import { Lock, CheckCircle, Clock } from "lucide-react";

const CalendarGrid = () => {
  const currentDay = 8; // Simulando que estamos en el día 8

  const getDayStatus = (day: number) => {
    if (day < currentDay) return "completed";
    if (day === currentDay) return "current";
    return "locked";
  };

  const getDayIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      case "current":
        return <Clock className="w-5 h-5 text-yellow-400" />;
      default:
        return <Lock className="w-5 h-5 text-slate-500" />;
    }
  };

  const getDayStyles = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/20 border-emerald-500/40 text-emerald-100 hover:bg-emerald-500/30";
      case "current":
        return "bg-yellow-500/20 border-yellow-500/40 text-yellow-100 hover:bg-yellow-500/30 animate-pulse";
      default:
        return "bg-slate-800/50 border-slate-700/50 text-slate-500";
    }
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tu Calendario de
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Aventuras
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Cada día trae un nuevo desafío. Desbloquea retos progresivamente y
            construye tu racha de código.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto">
          {Array.from({ length: 25 }, (_, i) => {
            const day = i + 1;
            const status = getDayStatus(day);
            const isClickable = status !== "locked";

            return (
              <div
                key={day}
                className={`
                  relative aspect-square rounded-xl border-2 flex flex-col items-center justify-center 
                  transition-all duration-300 cursor-pointer group
                  ${getDayStyles(status)}
                  ${
                    isClickable
                      ? "hover:scale-105 hover:shadow-lg"
                      : "cursor-not-allowed"
                  }
                `}
              >
                <div className="absolute top-2 right-2 opacity-60">
                  {getDayIcon(status)}
                </div>

                <span className="text-2xl md:text-3xl font-bold mb-1">
                  {day}
                </span>

                <span className="text-xs text-center opacity-75">
                  {status === "completed" && "Completado"}
                  {status === "current" && "Disponible"}
                  {status === "locked" && "Bloqueado"}
                </span>

                {status === "current" && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 animate-pulse"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CalendarGrid;

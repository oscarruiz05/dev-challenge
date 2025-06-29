import React from "react";
import { Zap, Target, Award, Users, Brain, Gamepad2, Bot } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Retos Diarios",
      description: "Un nuevo desafío cada día con dificultad progresiva",
      color: "text-yellow-400",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Múltiples Lenguajes",
      description: "Resuelve en JavaScript, Java, Python y más",
      color: "text-blue-400",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Sistema de Logros",
      description: "Desbloquea insignias y sube en el ranking",
      color: "text-emerald-400",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunidad Activa",
      description: "Comparte soluciones y aprende de otros",
      color: "text-purple-400",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Algoritmos Avanzados",
      description: "Desde básicos hasta desafíos de nivel experto",
      color: "text-pink-400",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Integración con IA",
      description: "IA para generar retos y realizar tests automáticos",
      color: "text-orange-400",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Por qué elegir nuestro
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Calendario?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Una experiencia de aprendizaje diseñada para mantener tu motivación
            y acelerar tu crecimiento como programador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-700/50 mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

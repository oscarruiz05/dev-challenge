"use client";

import React from "react";
import { ArrowLeft, Trophy, Medal, Award, Crown } from "lucide-react";
import Link from "next/link";

const Leaderboard = () => {
  const leaderboardData = [
    {
      rank: 1,
      name: "Ana García",
      username: "@ana_dev",
      points: 2850,
      challengesCompleted: 23,
      streak: 15,
      avatar: "🚀",
    },
    {
      rank: 2,
      name: "Carlos Ruiz",
      username: "@carlos_code",
      points: 2720,
      challengesCompleted: 21,
      streak: 12,
      avatar: "⚡",
    },
    {
      rank: 3,
      name: "María López",
      username: "@maria_js",
      points: 2650,
      challengesCompleted: 20,
      streak: 18,
      avatar: "🎯",
    },
    {
      rank: 4,
      name: "David Chen",
      username: "@david_py",
      points: 2400,
      challengesCompleted: 19,
      streak: 8,
      avatar: "🔥",
    },
    {
      rank: 5,
      name: "Laura Sánchez",
      username: "@laura_tech",
      points: 2350,
      challengesCompleted: 18,
      streak: 10,
      avatar: "💎",
    },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <Trophy className="w-5 h-5 text-slate-400" />;
    }
  };

  const getRankStyles = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-500/40";
      case 2:
        return "bg-gradient-to-r from-gray-400/20 to-slate-400/20 border-gray-400/40";
      case 3:
        return "bg-gradient-to-r from-amber-600/20 to-orange-500/20 border-amber-600/40";
      default:
        return "bg-slate-800/50 border-slate-700/50";
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Clasificación Global
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Descubre quiénes están liderando la comunidad y compite por llegar
              a la cima de la clasificación.
            </p>
          </div>

          {/* Top 3 Podium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {leaderboardData.slice(0, 3).map((user, index) => (
              <div
                key={user.rank}
                className={`p-6 rounded-xl border-2 text-center ${getRankStyles(
                  user.rank
                )} ${
                  index === 0
                    ? "md:order-2 transform md:scale-105"
                    : index === 1
                    ? "md:order-1"
                    : "md:order-3"
                }`}
              >
                <div className="flex justify-center mb-4">
                  {getRankIcon(user.rank)}
                </div>
                <div className="text-4xl mb-2">{user.avatar}</div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {user.name}
                </h3>
                <p className="text-slate-400 text-sm mb-3">{user.username}</p>
                <div className="text-2xl font-bold text-emerald-400 mb-2">
                  {user.points.toLocaleString()} pts
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                  <div>
                    <div className="font-medium">
                      {user.challengesCompleted}
                    </div>
                    <div className="text-xs text-slate-400">Retos</div>
                  </div>
                  <div>
                    <div className="font-medium">{user.streak}</div>
                    <div className="text-xs text-slate-400">Racha</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full Leaderboard */}
          <div className="space-y-3">
            {leaderboardData.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] ${getRankStyles(
                  user.rank
                )}`}
              >
                <div className="flex items-center justify-center w-12 h-12">
                  {user.rank <= 3 ? (
                    getRankIcon(user.rank)
                  ) : (
                    <span className="text-xl font-bold text-slate-400">
                      #{user.rank}
                    </span>
                  )}
                </div>

                <div className="text-3xl">{user.avatar}</div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white truncate">
                    {user.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{user.username}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-emerald-400">
                      {user.points.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-400">Puntos</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-400">
                      {user.challengesCompleted}
                    </div>
                    <div className="text-xs text-slate-400">Retos</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-400">
                      {user.streak}
                    </div>
                    <div className="text-xs text-slate-400">Racha</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

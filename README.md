# 🗓️ Calendario de Retos de Código

> Una plataforma gamificada para mejorar tus habilidades de programación con retos diarios durante 25 días.

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contribuir](#-contribuir)
- [Roadmap](#-roadmap)
- [Licencia](#-licencia)

## 🎯 Descripción

El **Calendario de Retos de Código** es una aplicación web interactiva que presenta 25 días de desafíos de programación progresivos. Diseñada para desarrolladores que buscan mejorar sus habilidades de manera consistente y gamificada.

### ✨ Características Principales

- 🗓️ **25 Retos Únicos**: Un desafío diferente cada día con dificultad progresiva
- 🎮 **Experiencia Gamificada**: Sistema de logros, insignias y progreso visual
- 💻 **Múltiples Lenguajes**: Soporte para JavaScript, Python, Java y más
- 🏆 **Sistema de Ranking**: Compite con otros desarrolladores
- 🤖 **Integración con IA**: Generación automática de retos y tests
- 👥 **Comunidad Activa**: Comparte soluciones y aprende de otros
- 📱 **Diseño Responsivo**: Funciona perfectamente en todos los dispositivos

## 🛠️ Tecnologías

### Frontend
- **Next.js 15.3.4** - Framework de React con App Router
- **React 19.0.0** - Biblioteca de interfaz de usuario
- **TypeScript 5.0** - Tipado estático para JavaScript
- **Tailwind CSS 4.0** - Framework de CSS utilitario

### UI/UX
- **Radix UI** - Componentes accesibles y sin estilos
- **Lucide React** - Iconos modernos y consistentes
- **Class Variance Authority** - Gestión de variantes de componentes
- **Tailwind Merge** - Fusión inteligente de clases CSS

### Herramientas de Desarrollo
- **ESLint** - Linter para JavaScript/TypeScript
- **PostCSS** - Procesador de CSS
- **Turbopack** - Bundler ultra-rápido para desarrollo

## 🚀 Instalación

### Prerrequisitos

- Node.js 18.0 o superior
- npm, yarn, pnpm o bun

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/oscarruiz05/dev-challenge.git
   cd dev-challenge
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   # o
   bun install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   # o
   bun dev
   ```

4. **Abre tu navegador**
   
   Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 💡 Uso

### Scripts Disponibles

```bash
# Desarrollo con Turbopack
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm run start

# Linting
npm run lint
```

### Desarrollo Local

1. La aplicación se recarga automáticamente cuando editas archivos
2. Los componentes principales están en `src/components/`
3. Las páginas están en `src/app/`
4. Los estilos globales están en `src/app/globals.css`

## 📁 Estructura del Proyecto

```
dev-challenge/
├── public/                 # Archivos estáticos
│   ├── *.svg              # Iconos SVG
│   └── favicon.ico        # Favicon
├── src/
│   ├── app/               # App Router de Next.js
│   │   ├── globals.css    # Estilos globales
│   │   ├── layout.tsx     # Layout principal
│   │   └── page.tsx       # Página de inicio
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes de UI base
│   │   ├── BackToTop.tsx # Botón volver arriba
│   │   ├── CalendarGrid.tsx # Calendario de retos
│   │   ├── CTA.tsx       # Call to action
│   │   ├── Features.tsx  # Sección de características
│   │   ├── Footer.tsx    # Pie de página
│   │   └── Header.tsx    # Encabezado
│   ├── hooks/            # Custom hooks
│   └── lib/              # Utilidades
│       └── utils.ts      # Funciones auxiliares
├── .gitignore            # Archivos ignorados por Git
├── eslint.config.mjs     # Configuración ESLint
├── next.config.ts        # Configuración Next.js
├── package.json          # Dependencias y scripts
├── postcss.config.mjs    # Configuración PostCSS
├── README.md             # Este archivo
└── tsconfig.json         # Configuración TypeScript
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Aquí te explicamos cómo puedes ayudar:

### Formas de Contribuir

1. **🐛 Reportar Bugs**: Abre un issue describiendo el problema
2. **💡 Sugerir Características**: Propón nuevas funcionalidades
3. **📝 Mejorar Documentación**: Ayuda a mejorar este README
4. **🔧 Contribuir Código**: Envía pull requests con mejoras
5. **🎨 Diseño UI/UX**: Propón mejoras visuales
6. **🧪 Testing**: Añade tests para mejorar la calidad

### Proceso de Contribución

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Guías de Contribución

- Sigue las convenciones de código existentes
- Escribe mensajes de commit descriptivos
- Añade documentación para nuevas características
- Asegúrate de que el código pase el linting
- Prueba tus cambios localmente antes de enviar

### Issues y Sugerencias

Si encuentras un bug o tienes una sugerencia:

1. Revisa si ya existe un issue similar
2. Si no existe, crea uno nuevo con:
   - Descripción clara del problema/sugerencia
   - Pasos para reproducir (si es un bug)
   - Capturas de pantalla (si aplica)
   - Información del entorno (OS, navegador, etc.)

## 🗺️ Roadmap

### Versión Actual (v0.1.0)
- ✅ Interfaz de calendario interactivo
- ✅ Sistema de progreso visual
- ✅ Diseño responsivo
- ✅ Componentes base de UI

### Próximas Versiones

#### v0.2.0 - Backend y Autenticación
- [ ] Sistema de autenticación de usuarios
- [ ] Base de datos para retos y progreso
- [ ] API REST para gestión de datos
- [ ] Perfiles de usuario

#### v0.3.0 - Retos Interactivos
- [ ] Editor de código integrado
- [ ] Sistema de testing automático
- [ ] Múltiples lenguajes de programación
- [ ] Validación de soluciones

#### v0.4.0 - Gamificación
- [ ] Sistema de puntos y logros
- [ ] Ranking global y por categorías
- [ ] Insignias y certificados
- [ ] Rachas de código

#### v0.5.0 - Comunidad
- [ ] Foro de discusión
- [ ] Compartir soluciones
- [ ] Sistema de comentarios
- [ ] Mentorías entre usuarios

#### v1.0.0 - Lanzamiento Completo
- [ ] Integración con IA para retos personalizados
- [ ] Aplicación móvil
- [ ] Análisis de rendimiento
- [ ] Certificaciones oficiales

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  <p>Hecho con ❤️ por la comunidad de desarrolladores</p>
  <p>
    <a href="#-tabla-de-contenidos">⬆️ Volver arriba</a>
  </p>
</div>

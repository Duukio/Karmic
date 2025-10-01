# 🌐 Karmic

**Karmic** es una red social moderna inspirada en **Twitter**, construida con el stack más reciente de **Next.js 14, Prisma y Clerk**.  
El objetivo es simple: **compartir, conectar y crear tu karma digital**.  

🔗 [Demo en Vercel](https://karmic-omega.vercel.app)  

---

## ✨ Características

- 🔐 **Autenticación con Clerk** (registro e inicio de sesión).
- 👤 **Perfiles de usuario** con foto, bio, ubicación y sitio web.
- 📝 **Posts** con texto e imágenes.
- 💬 **Comentarios** y sistema de discusión.
- ❤️ **Likes** con prevención de duplicados.
- ➕ **Follow / Unfollow** para seguir a otros usuarios.
- 🔔 **Notificaciones en tiempo real** (comentarios, likes, follows).
- 🎨 **Theming** con dark/light mode (next-themes).
- 📱 **Diseño responsive** (TailwindCSS + shadcn/ui).
- 🚀 **Server Actions** → sin necesidad de APIs externas.

---

## 🛠️ Stack Tecnológico

- [Next.js 14 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [NeonDB (PostgreSQL)](https://neon.tech/)
- [Clerk Auth](https://clerk.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 🚀 Instalación y uso

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/karmic.git
   cd karmic
---

2. Instala dependencias:

npm install


3. Configura variables de entorno (.env):


4. Migra la base de datos:

npx prisma migrate dev


Levanta el servidor local:

npm run dev


Abre en tu navegador:

http://localhost:3000


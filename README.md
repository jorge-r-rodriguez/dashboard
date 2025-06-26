# React Dashboard App

Este proyecto es una aplicación web de dashboard desarrollada con **React**, **Vite** y **Material UI (MUI)**. Incluye autenticación, rutas privadas, navegación moderna con sidebar colapsable, y múltiples vistas con gráficos y formularios.

---

## 🧱 Tecnologías principales

- ⚛️ React 18
- ⚡ Vite
- 🎨 Material UI
- 📦 React Router DOM
- 🧠 Context API (`CasUserContext`)
- 📊 Gráficos con componentes propios

---

## 📂 Estructura del proyecto

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── theme.jsx
├── Auth/
│   ├── Login.jsx
│   └── SignUp.jsx
├── components/
│   ├── Header.jsx
│   ├── PrivateRoute.jsx
│   ├── ProfileMenu.jsx
│   ├── SideBar.jsx
│   └── TopBar.jsx
├── context/
│   └── CasUserContext.jsx
├── layout/
│   └── CasLayout.jsx
├── page/
│   ├── bar/
│   ├── calendar/
│   ├── contacts/
│   ├── dashboard/
│   ├── faq/
│   ├── form/
│   ├── invoices/
│   ├── line/
│   ├── pie/
│   └── team/
└── utils/
    └── casClient.ts
```

---

## 🔐 Funcionalidades clave

- **Login simulado** con validación de email/contraseña.
- **Rutas privadas** protegidas por contexto (`PrivateRoute`).
- **Logout** con limpieza automática de `localStorage`.
- **Sidebar responsivo** con navegación entre vistas.
- **Vistas**: Dashboard, Calendario, FAQ, Gráficos (Barras, Líneas, Pie), Formularios, Contactos, Facturas, Equipo.
- **Soporte para dark/light mode** desde `TopBar`.

---

## 🚀 Cómo correr el proyecto

1. Cloná el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

2. Instalá las dependencias:

```bash
npm install
```

3. Ejecutá el servidor de desarrollo:

```bash
npm run dev
```

---

## 👤 Usuario demo

Este proyecto usa un login simulado. Podés ingresar con cualquier combinación válida como:

[![Ingresando en:](https://img.shields.io/badge/GitHub%20Pages-Dashboard-blue?logo=github)](https://jorge-r-rodriguez.github.io/dashboard/)


```
Email: demo@site.com
Password: 12345678
```

---

## 🧪 Scripts útiles

- `npm run dev` – inicia el servidor de desarrollo
- `npm run build` – crea la versión de producción
- `npm run preview` – previsualiza el build

---

## 📄 Licencia

MIT — libre para uso y modificación.

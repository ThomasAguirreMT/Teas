# NovaNet — ISP Landing Page

Landing page moderna para un proveedor de internet (ISP), construida con:

- **React 18** + **Vite**
- **Tailwind CSS v3**
- **Syne** (tipografía display) + **DM Sans** (tipografía cuerpo)

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx      # Navegación sticky con menú móvil
│   ├── Hero.jsx        # Hero con velocímetro animado
│   ├── Stats.jsx       # Cifras clave
│   ├── Plans.jsx       # Tarjetas de planes + CTA empresarial
│   ├── Coverage.jsx    # Mapa de cobertura
│   ├── Features.jsx    # Diferenciadores
│   ├── FAQ.jsx         # Preguntas frecuentes con acordeón
│   ├── Contact.jsx     # Formulario de contacto
│   └── Footer.jsx      # Footer con links y redes
├── data/
│   └── content.js      # Todos los textos y datos editables
├── App.jsx
├── main.jsx
└── index.css           # Estilos globales + animaciones CSS
```

## Personalización

Edita **`src/data/content.js`** para cambiar:
- Planes y precios
- Ciudades de cobertura
- Preguntas frecuentes
- Datos de contacto
- Estadísticas

## Paleta de colores

| Uso | Color |
|-----|-------|
| Acento principal | `#06b6d4` (cyan-500) |
| Gradiente | cyan-500 → blue-600 |
| Fondo | `#050b18` |
| Texto secundario | `rgba(255,255,255,0.4)` |

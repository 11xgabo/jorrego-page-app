# Configuración i18n - Inglés y Español

El proyecto está completamente configurado para soportar internacionalización (i18n) con los idiomas inglés y español.

## Estructura de Archivos

```
src/
├── config/
│   ├── siteConfig.js          # Configuración estática de la empresa
│   └── i18n.js                # Diccionario de traducciones (ES/EN)
├── context/
│   └── LanguageContext.jsx    # Context para manejar el idioma activo
├── hooks/
│   └── useTranslation.js      # Hook personalizado para usar traducciones
└── components/
    ├── Header/                # Incluye botones ES/EN para cambiar idioma
    ├── Hero/
    ├── Services/
    ├── WhyChooseUs/
    └── Footer/
```

## Cómo Usar

### 1. Usar el Hook `useTranslation` en Componentes

```jsx
import useTranslation from "../../hooks/useTranslation";

const MiComponente = () => {
  const { t, language } = useTranslation();
  
  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <p>Idioma actual: {language}</p> {/* "es" o "en" */}
    </div>
  );
};
```

### 2. Estructura de Claves de Traducción

Las claves usan notación de punto para acceder a propiedades anidadas:

```javascript
t("hero.title")              // Accede a translations[idioma].hero.title
t("services.generalCargo.title")  // Accede a translations[idioma].services.generalCargo.title
```

### 3. Agregar Nuevas Traducciones

Edita [src/config/i18n.js](../config/i18n.js):

```javascript
export const translations = {
  es: {
    miSeccion: {
      miClave: "Texto en español",
    },
  },
  en: {
    miSeccion: {
      miClave: "Text in English",
    },
  },
};
```

Luego úsalo en tu componente:

```jsx
const { t } = useTranslation();
t("miSeccion.miClave"); // Devuelve el texto según el idioma activo
```

## Cambiar de Idioma

El Header incluye botones ES/EN en la parte superior derecha. Al hacer clic, se alterna entre español e inglés automáticamente.

También puedes cambiar el idioma programáticamente:

```jsx
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const MiComponente = () => {
  const { language, setLanguage, toggleLanguage } = useContext(LanguageContext);
  
  return (
    <button onClick={toggleLanguage}>
      Cambiar a {language === "es" ? "English" : "Español"}
    </button>
  );
};
```

## Idioma Predeterminado

El idioma predeterminado es **español** (`es`). Puedes cambiarlo en [src/context/LanguageContext.jsx](../context/LanguageContext.jsx):

```javascript
const [language, setLanguage] = useState("en"); // Cambiar a inglés por defecto
```

## Funciones Disponibles

### useTranslation()

```javascript
const { t, language } = useTranslation();

// t(key)  - Función para obtener traducción
// language - Idioma actual ("es" o "en")
```

### LanguageContext

```javascript
const { language, setLanguage, toggleLanguage } = useContext(LanguageContext);

// language      - Idioma actual
// setLanguage() - Cambiar idioma manualmente
// toggleLanguage() - Alternar entre ES y EN
```

## Lista de Traducciones Disponibles

### Navegación (`nav`)
- `nav.home` - Inicio/Home
- `nav.services` - Servicios/Services
- `nav.about` - Nosotros/About Us
- `nav.contact` - Contacto/Contact

### Hero (`hero`)
- `hero.title` - Título principal
- `hero.tagline` - Subtítulo/eslogan
- `hero.cta` - Botón "Solicitar Cotización"

### Servicios (`services`)
- `services.title` - Título de la sección
- `services.generalCargo.title/description`
- `services.cargoManagement.title/description`
- `services.hazardousMaterials.title/description`
- `services.vehicleTransport.title/description`

### Por Qué Elegirnos (`whyChooseUs`)
- `whyChooseUs.title`
- `whyChooseUs.professionals`
- `whyChooseUs.attention`
- `whyChooseUs.coverage`
- `whyChooseUs.solutions`

### Footer (`footer`)
- `footer.rights` - "Todos los derechos reservados"

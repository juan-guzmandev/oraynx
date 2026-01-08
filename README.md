# 🚀 ORAYNX - Arquitectura Sin Base de Datos

## 📋 Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Arquitectura Técnica](#arquitectura-técnica)
4. [Cómo Funciona Sin BD](#cómo-funciona-sin-bd)
5. [Configuración Inicial](#configuración-inicial)
6. [Integración con n8n](#integración-con-n8n)
7. [Deploy y Hosting](#deploy-y-hosting)
8. [Mantenimiento](#mantenimiento)

---

## 🎯 Descripción General

ORAYNX es un sitio web corporativo profesional construido con **arquitectura JAMstack** (JavaScript, APIs, Markup) que **NO requiere base de datos tradicional**.

### ✅ Ventajas de esta arquitectura:

- ⚡ **Velocidad extrema:** Carga en <1 segundo
- 💰 **Costo $0:** Hosting gratis en Netlify/Vercel
- 🔒 **Seguridad máxima:** Sin vulnerabilidades SQL injection
- 🛠️ **Mantenimiento mínimo:** Sin BD que gestionar
- 📈 **SEO perfecto:** Todo estático, Google lo ama
- 🤖 **Automatización integrada:** n8n maneja los procesos

---

## 📁 Estructura del Proyecto

```
oraynx-web/
├── index.html                  # Página principal
├── servicios.html              # Página de servicios
├── portafolio.html             # Casos de éxito
├── nosotros.html               # Quiénes somos
├── blog.html                   # Blog principal
├── precios.html                # Tabla de precios
├── contacto.html               # Formulario de contacto
├── gracias.html                # Página de agradecimiento
│
├── css/
│   └── styles.css              # Estilos globales (opcional si usas inline)
│
├── js/
│   ├── data.js                 # "Base de datos" en JavaScript
│   ├── forms.js                # Manejador de formularios
│   ├── main.js                 # Funciones generales
│   └── blog-render.js          # Renderizado dinámico del blog
│
├── img/
│   ├── logo.svg                # Logo ORAYNX
│   ├── hero/                   # Imágenes del hero
│   ├── portfolio/              # Screenshots de proyectos
│   ├── testimonios/            # Fotos de clientes
│   └── blog/                   # Imágenes de artículos
│
├── blog/
│   └── articulos/              # Artículos en HTML
│       ├── articulo-1.html
│       ├── articulo-2.html
│       └── ...
│
├── _redirects                  # Reglas de Netlify
├── netlify.toml                # Configuración Netlify
└── README.md                   # Este archivo
```

---

## 🏗️ Arquitectura Técnica

### Diagrama de Flujo

```
┌─────────────────────────────────────┐
│   USUARIO                           │
│   Visita www.oraynx.com             │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   NETLIFY/VERCEL (CDN Global)       │
│   - Sirve HTML/CSS/JS estáticos     │
│   - SSL automático                  │
│   - Velocidad máxima                │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   PÁGINA WEB (Frontend)             │
│   - HTML estático                   │
│   - CSS inline/externo              │
│   - JavaScript (data.js, forms.js)  │
└──────────────┬──────────────────────┘
               │
               │ (Usuario llena formulario)
               ▼
┌─────────────────────────────────────┐
│   n8n (Servidor de Automatización)  │
│   - Recibe webhook del formulario   │
│   - Procesa los datos               │
└──────┬──────┬──────┬─────────────┬──┘
       │      │      │             │
       ▼      ▼      ▼             ▼
    Gmail  WhatsApp  Google    Analytics
                     Sheets
                       │
                       ▼
                  [Tu "Base
                   de Datos"]
```

### Stack Tecnológico

| Capa | Tecnología | Costo |
|------|------------|-------|
| Frontend | HTML5 + CSS3 + JavaScript | $0 |
| Hosting | Netlify o Vercel | $0 |
| CDN | Incluido en Netlify | $0 |
| SSL | Let's Encrypt (auto) | $0 |
| Formularios | n8n webhooks | $0 (self-hosted) |
| "Base de Datos" | Google Sheets | $0 |
| Email | Gmail | $0 |
| WhatsApp | WhatsApp Business API | $0 |
| Analytics | Google Analytics 4 | $0 |
| **TOTAL** | | **$0/mes** |

*Único costo: Dominio ($12/año)*

---

## 💡 Cómo Funciona Sin BD

### 1. Contenido Estático (No cambia frecuentemente)

**Servicios, Precios, Testimonios:**
- Almacenados en `js/data.js` como objetos JavaScript
- Se renderizan dinámicamente en las páginas
- Actualizas editando el archivo JS

**Ejemplo:**
```javascript
const SERVICIOS = [
    {
        nombre: "Web Corporativa",
        precio: 2500,
        incluye: [...]
    }
];
```

### 2. Blog (Actualizaciones periódicas)

**Opción A: Archivos HTML**
```
blog/articulos/mi-articulo.html
```

**Opción B: Markdown + Script**
```javascript
// Conviertes .md a HTML automáticamente
```

**Opción C: Headless CMS gratuito**
- Contentful
- Strapi
- Directus
- Ghost (solo para blog)

### 3. Formularios (Datos que llegan)

**NO se guardan en BD, van directo a:**

#### Flujo n8n:
```
Formulario web
    ↓
Webhook n8n
    ↓
├─→ Email a ti (Gmail)
├─→ WhatsApp automático al cliente
├─→ Google Sheets (registro)
└─→ Respuesta automática
```

**Ventaja:** Google Sheets actúa como tu "base de datos visual"

### 4. Portafolio (Proyectos)

**Almacenado en `data.js`:**
```javascript
const PORTAFOLIO = [
    {
        id: 1,
        nombre: "Proyecto X",
        imagen: "img/portfolio/proyecto-1.jpg",
        resultados: ["+180% consultas"]
    }
];
```

**Para agregar proyecto nuevo:**
1. Abres `data.js`
2. Agregas nuevo objeto al array
3. Subes imagen a `/img/portfolio/`
4. Deploy a Netlify (automático)

---

## ⚙️ Configuración Inicial

### Paso 1: Personalizar Datos

Edita `js/data.js`:

```javascript
const CONFIG = {
    contacto: {
        whatsapp: "+591XXXXXXXX",  // ← CAMBIAR
        email: "tu@email.com",      // ← CAMBIAR
    }
};
```

### Paso 2: Configurar n8n (Automatizaciones)

#### 2.1 Instalar n8n (Opciones)

**Opción A: n8n Cloud (Más fácil)**
```
1. Crear cuenta en n8n.cloud
2. Plan gratuito: 5,000 ejecuciones/mes
3. URL webhook: https://tu-instancia.app.n8n.cloud/webhook/...
```

**Opción B: Self-hosted (Gratis ilimitado)**
```bash
# Con Docker
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n

# Acceder: http://localhost:5678
```

**Opción C: Railway/Render (Gratis con límites)**

#### 2.2 Crear Workflow de Contacto

**Workflow sugerido:**
```
1. Webhook Trigger
   ↓
2. Filtro/Validación de datos
   ↓
3. Gmail (enviar email a ti)
   ↓
4. Google Sheets (guardar lead)
   ↓
5. WhatsApp (mensaje automático al cliente)
   ↓
6. Responder al webhook (confirmación)
```

**Configuración:**
```javascript
// En forms.js, agregar URL del webhook
const N8N_WEBHOOKS = {
    contacto: 'https://tu-n8n.com/webhook/contacto'
};
```

### Paso 3: Configurar Google Sheets como "BD"

**1. Crear Google Sheet:**
```
Nombre: ORAYNX - Leads
```

**2. Estructura sugerida:**
```
| Fecha | Nombre | Email | Teléfono | Servicio | Mensaje | Estado | Origen |
```

**3. En n8n, agregar nodo "Google Sheets":**
- Conectar con tu cuenta Google
- Seleccionar el sheet
- Mapear campos del formulario

### Paso 4: Deploy a Netlify

**Método 1: GitHub (Recomendado)**
```bash
# 1. Crear repositorio en GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/oraynx-web.git
git push -u origin main

# 2. En Netlify:
- New site from Git
- Conectar GitHub
- Seleccionar repositorio
- Deploy!
```

**Método 2: Drag & Drop**
```
1. Ir a app.netlify.com
2. Arrastrar carpeta del proyecto
3. ¡Listo!
```

**Configuración Netlify:**

`netlify.toml`:
```toml
[build]
  publish = "."
  
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Paso 5: Configurar Dominio

**En Netlify:**
```
1. Site settings > Domain management
2. Add custom domain
3. Agregar: oraynx.com
4. Configurar DNS en tu registrador
```

**Registros DNS:**
```
A     @     75.2.60.5
CNAME www   tu-sitio.netlify.app
```

---

## 🤖 Integración con n8n

### Ejemplo Completo: Workflow de Contacto

**1. Trigger Webhook**
```
Method: POST
Path: /webhook/contacto
Authentication: None (o Header token)
```

**2. Nodo Set (Preparar datos)**
```javascript
{
  "fecha": "{{$now.format('YYYY-MM-DD HH:mm')}}",
  "nombre": "{{$json.nombre}}",
  "email": "{{$json.email}}",
  "telefono": "{{$json.telefono}}",
  "servicio": "{{$json.servicio}}",
  "mensaje": "{{$json.mensaje}}"
}
```

**3. Gmail (Enviarte notificación)**
```
To: contacto@oraynx.com
Subject: 🔔 Nuevo contacto: {{$json.nombre}}
Body:
  Nombre: {{$json.nombre}}
  Email: {{$json.email}}
  Teléfono: {{$json.telefono}}
  Servicio: {{$json.servicio}}
  Mensaje: {{$json.mensaje}}
```

**4. Google Sheets (Guardar lead)**
```
Spreadsheet: ORAYNX - Leads
Sheet: Leads
Operation: Append
Values:
  - {{$json.fecha}}
  - {{$json.nombre}}
  - {{$json.email}}
  - {{$json.telefono}}
  - {{$json.servicio}}
  - {{$json.mensaje}}
  - Nuevo
  - Web
```

**5. WhatsApp (Respuesta automática)**
```
To: {{$json.telefono}}
Message:
  Hola {{$json.nombre}}! 👋
  
  Gracias por contactar a ORAYNX.
  Recibimos tu consulta sobre {{$json.servicio}}.
  
  Te responderemos en menos de 2 horas.
  
  Saludos!
  Equipo ORAYNX
```

**6. Respond to Webhook**
```json
{
  "success": true,
  "message": "Gracias por contactarnos"
}
```

---

## 🚀 Deploy y Hosting

### Netlify (Recomendado)

**Ventajas:**
- ✅ Hosting gratis ilimitado
- ✅ SSL automático
- ✅ CDN global
- ✅ Deploy automático desde Git
- ✅ Formularios nativos (alternativa a n8n)

**Deploy automático:**
```bash
# Cada push a GitHub = deploy automático
git add .
git commit -m "Update"
git push
```

### Vercel (Alternativa)

**Ventajas:**
- Similar a Netlify
- Mejor para proyectos Next.js (futuro)

**Deploy:**
```bash
npm i -g vercel
vercel
```

---

## 🛠️ Mantenimiento

### Actualizar Contenido

**Agregar servicio nuevo:**
```javascript
// En data.js
SERVICIOS.push({
    id: "nuevo-servicio",
    nombre: "Consultoría Digital",
    precio: 1500,
    // ...
});
```

**Agregar proyecto al portafolio:**
```javascript
// En data.js
PORTAFOLIO.push({
    id: 4,
    nombre: "Nuevo Proyecto",
    // ...
});
```

**Publicar artículo de blog:**
```html
<!-- Crear: blog/articulos/nuevo-articulo.html -->
<!-- Agregar a data.js -->
ARTICULOS_BLOG.push({
    id: 4,
    titulo: "Nuevo Artículo",
    // ...
});
```

### Backup

**Google Sheets (Leads):**
- Descarga manual: File > Download > Excel
- Automático: n8n puede hacer backup diario

**Código:**
- Todo en GitHub = backup automático
- Netlify guarda historial de deploys

### Monitoreo

**Google Analytics:**
```html
<!-- En todas las páginas -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Uptime Monitoring:**
- UptimeRobot (gratis)
- Pingdom

---

## 📊 Performance

**Objetivos:**
- ✅ PageSpeed: 90+ (mobile y desktop)
- ✅ First Contentful Paint: <1.5s
- ✅ Time to Interactive: <2.5s

**Optimizaciones aplicadas:**
- Imágenes en WebP
- CSS inline en critical path
- JavaScript defer/async
- CDN de Netlify
- Compresión Gzip/Brotli

---

## 🔒 Seguridad

**Protecciones:**
- ✅ SSL automático (HTTPS)
- ✅ Sin SQL injection (no hay BD)
- ✅ Sin XSS (validación de formularios)
- ✅ Headers de seguridad (Netlify)

**Headers configurados:**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

---

## 📞 Soporte

**Documentación:**
- Netlify: https://docs.netlify.com
- n8n: https://docs.n8n.io

**Comunidad:**
- n8n Community: https://community.n8n.io
- Netlify Community: https://answers.netlify.com

---

## 📝 Checklist Pre-Launch

- [ ] Cambiar número de WhatsApp en data.js
- [ ] Cambiar email en data.js
- [ ] Configurar webhooks n8n en forms.js
- [ ] Probar todos los formularios
- [ ] Verificar que Google Sheets recibe datos
- [ ] Subir imágenes reales
- [ ] Configurar Google Analytics
- [ ] Configurar dominio custom
- [ ] Probar en móvil
- [ ] PageSpeed > 90
- [ ] Todas las páginas accesibles
- [ ] Links de WhatsApp funcionando

---

## 🎉 ¡Listo!

Tu sitio ORAYNX está funcionando **sin base de datos**, con:
- ✅ Velocidad máxima
- ✅ Costo $0
- ✅ Automatización completa
- ✅ Fácil mantenimiento

**Próximos pasos:**
1. Personalizar contenido
2. Configurar n8n
3. Deploy a Netlify
4. ¡Empezar a captar clientes!

---

**Documentación creada por:** ORAYNX  
**Versión:** 1.0  
**Fecha:** Enero 2025
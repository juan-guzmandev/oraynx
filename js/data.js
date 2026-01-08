// ============================================
// ORAYNX - CONFIGURACIÓN DE DATOS
// Archivo: js/data.js
// Este archivo reemplaza la base de datos
// ============================================

// CONFIGURACIÓN GENERAL
const CONFIG = {
    empresa: {
        nombre: "ORAYNX",
        tagline: "Crecimiento digital hecho simple",
        descripcion: "Crecimiento digital hecho simple para PYMEs en Bolivia",
        fundacion: 2024,
        ubicacion: "Cochabamba, Bolivia"
    },
    
    contacto: {
        whatsapp: "+59100000000", // CAMBIAR POR TU NÚMERO REAL
        whatsappLink: "https://wa.me/59100000000",
        email: "contacto@oraynx.com", // CAMBIAR POR TU EMAIL REAL
        telefono: "+591 XXXX XXXX",
        direccion: "Cochabamba, Bolivia",
        horarios: "Lun-Vie 9am-6pm, Sáb 9am-1pm"
    },
    
    social: {
        instagram: "https://instagram.com/oraynx",
        facebook: "https://facebook.com/oraynx",
        linkedin: "https://linkedin.com/company/oraynx"
    },
    
    // Webhook n8n para formularios
    n8n: {
        webhookContacto: "https://tu-n8n-instance.com/webhook/contacto",
        webhookNewsletter: "https://tu-n8n-instance.com/webhook/newsletter"
    }
};

// SERVICIOS
const SERVICIOS = [
    {
        id: "web-corporativa",
        icono: "🌐",
        nombre: "Web Corporativa",
        descripcionCorta: "Diseño profesional, responsive y optimizado para convertir visitantes en clientes.",
        descripcionLarga: "Sitios web profesionales que transmiten confianza y generan clientes. Diseñados con las mejores prácticas de UX/UI y optimizados para motores de búsqueda.",
        caracteristicas: [
            "Diseño responsive (móvil, tablet, desktop)",
            "5-10 páginas según plan",
            "Formularios de contacto integrados",
            "SEO básico configurado",
            "Dominio y hosting primer año",
            "30 días de ajustes incluidos"
        ],
        idealPara: "Empresas que necesitan presencia profesional online",
        precioDesde: 2500,
        planes: [
            {
                nombre: "Básico",
                precio: 2500,
                incluye: [
                    "5 páginas",
                    "Diseño responsive",
                    "Formulario contacto",
                    "Dominio + hosting 1 año",
                    "30 días soporte"
                ]
            },
            {
                nombre: "Premium",
                precio: 4500,
                incluye: [
                    "10 páginas",
                    "Blog integrado",
                    "SEO avanzado",
                    "Animaciones",
                    "Dominio + hosting 1 año",
                    "60 días soporte"
                ]
            }
        ]
    },
    {
        id: "landing-pages",
        icono: "🚀",
        nombre: "Landing Pages",
        descripcionCorta: "Páginas diseñadas específicamente para captar leads y maximizar conversiones.",
        descripcionLarga: "Landing pages optimizadas para convertir visitantes en clientes. Ideales para campañas publicitarias, lanzamientos de productos y captación de leads.",
        caracteristicas: [
            "Diseño enfocado en conversión",
            "Formularios optimizados",
            "Respuestas automáticas",
            "Integración con CRM",
            "A/B testing (plan avanzado)",
            "Analytics configurado"
        ],
        idealPara: "Campañas publicitarias, lanzamiento de productos, captación de leads",
        precioDesde: 1500,
        planes: [
            {
                nombre: "Simple",
                precio: 1500,
                incluye: [
                    "1 página optimizada",
                    "Formulario básico",
                    "Hosting 1 año",
                    "Integración básica"
                ]
            },
            {
                nombre: "Avanzada",
                precio: 2800,
                incluye: [
                    "1 página + A/B testing",
                    "Formulario avanzado",
                    "Integraciones múltiples",
                    "Analytics avanzado",
                    "3 meses optimización"
                ]
            }
        ]
    },
    {
        id: "automatizaciones",
        icono: "🤖",
        nombre: "Automatizaciones",
        descripcionCorta: "Automatiza procesos manuales y ahorra tiempo con flujos inteligentes.",
        descripcionLarga: "Implementación de automatizaciones usando n8n para optimizar procesos empresariales, desde email marketing hasta sincronización de datos entre plataformas.",
        caracteristicas: [
            "Email marketing automático",
            "Integración CRM",
            "Notificaciones WhatsApp",
            "Sincronización de datos",
            "Generación de reportes",
            "Flujos personalizados"
        ],
        idealPara: "Empresas que pierden tiempo en tareas manuales repetitivas",
        precioDesde: 1500,
        ejemplos: [
            "Formulario → CRM → Email → WhatsApp",
            "Nuevo pedido → Registro → Notificación → Confirmación",
            "Lead nuevo → Clasificación → Asignación → Seguimiento",
            "Reporte diario automático de ventas"
        ],
        planes: [
            {
                nombre: "Simple",
                precio: 1500,
                incluye: [
                    "1 flujo automatizado",
                    "Hasta 3 integraciones",
                    "Documentación",
                    "1 mes ajustes"
                ]
            },
            {
                nombre: "Complejo",
                precio: 3500,
                incluye: [
                    "3+ flujos automatizados",
                    "Integraciones ilimitadas",
                    "Capacitación extendida",
                    "3 meses soporte"
                ]
            }
        ],
        planesRecurrentes: [
            {
                nombre: "Básico",
                precio: 300,
                incluye: [
                    "Monitoreo de flujos",
                    "1 modificación/mes",
                    "Soporte email"
                ]
            },
            {
                nombre: "Profesional",
                precio: 600,
                incluye: [
                    "Monitoreo 24/7",
                    "3 modificaciones/mes",
                    "Soporte WhatsApp prioritario"
                ]
            }
        ]
    }
];

// PORTAFOLIO / CASOS DE ÉXITO
const PORTAFOLIO = [
    {
        id: 1,
        nombre: "Studio de Diseño - Web Corporativa",
        cliente: "María R.",
        industria: "Diseño",
        tipo: "Web Corporativa",
        imagen: "img/portfolio/proyecto-1.jpg",
        descripcion: "Renovación completa de sitio web con foco en captación de leads",
        desafio: "Studio de diseño con web obsoleta, perdía 60% de consultas por formularios que no funcionaban",
        solucion: "Landing page optimizada + automatización de respuestas + CRM simple en Google Sheets",
        tecnologias: ["HTML/CSS", "JavaScript", "n8n", "Google Sheets", "WhatsApp API"],
        resultados: [
            "+180% de consultas recibidas",
            "Tiempo de respuesta: de 4 horas a 2 minutos",
            "3 nuevos clientes en primer mes (ROI 400%)"
        ],
        testimonio: "Antes perdíamos clientes porque no respondíamos a tiempo. Ahora todo es automático y profesional.",
        fecha: "2024-10",
        destacado: true
    },
    {
        id: 2,
        nombre: "Restaurante - Automatización de Pedidos",
        cliente: "Restaurante XYZ",
        industria: "Gastronomía",
        tipo: "Automatización",
        imagen: "img/portfolio/proyecto-2.jpg",
        descripcion: "Sistema automático de gestión de pedidos online",
        resultados: [
            "20 horas/semana ahorradas en gestión manual",
            "0% errores en pedidos",
            "Incremento 45% en pedidos online"
        ],
        fecha: "2024-11"
    },
    {
        id: 3,
        nombre: "Consultora - Landing Page + CRM",
        cliente: "Consultora ABC",
        industria: "Servicios Profesionales",
        tipo: "Landing Page",
        imagen: "img/portfolio/proyecto-3.jpg",
        descripcion: "Landing page para captación de leads B2B con automatización completa",
        resultados: [
            "+250% leads calificados",
            "Tasa de conversión 12% (vs 3% anterior)",
            "Pipeline organizado automáticamente"
        ],
        fecha: "2024-12"
    }
];

// TESTIMONIOS
const TESTIMONIOS = [
    {
        id: 1,
        texto: "Gracias a ORAYNX, ahora recibo 3x más consultas y no pierdo contactos. Todo automatizado y profesional.",
        autor: "María R.",
        cargo: "Dueña de estudio de diseño",
        empresa: "Studio Creativo",
        foto: "img/testimonios/maria.jpg",
        rating: 5
    },
    {
        id: 2,
        texto: "Implementaron automatizaciones que nos ahorran 20 horas semanales. El equipo ahora se enfoca en cocinar, no en gestionar pedidos.",
        autor: "Carlos M.",
        cargo: "Gerente",
        empresa: "Restaurante Sabor",
        foto: "img/testimonios/carlos.jpg",
        rating: 5
    },
    {
        id: 3,
        texto: "Nuestra landing page ahora convierte al 12%, antes era 3%. La inversión se pagó sola en el primer mes.",
        autor: "Ana L.",
        cargo: "Directora Comercial",
        empresa: "Consultora Estratégica",
        foto: "img/testimonios/ana.jpg",
        rating: 5
    }
];

// PRECIOS - MANTENIMIENTO
const PLANES_MANTENIMIENTO = [
    {
        nombre: "Básico",
        precio: 300,
        descripcion: "Para sitios web simples con actualizaciones ocasionales",
        incluye: [
            "Actualizaciones de seguridad",
            "1 cambio de contenido/mes",
            "Soporte por email",
            "Backup semanal",
            "Tiempo respuesta: 48 horas"
        ],
        ideal: "Web corporativas pequeñas"
    },
    {
        nombre: "Profesional",
        precio: 600,
        descripcion: "Para empresas que necesitan actualizar contenido regularmente",
        incluye: [
            "Todo del Básico +",
            "3 cambios de contenido/mes",
            "Soporte prioritario WhatsApp",
            "Monitoreo 24/7",
            "Reportes mensuales",
            "Tiempo respuesta: 4 horas"
        ],
        ideal: "Empresas activas online",
        destacado: true
    },
    {
        nombre: "Premium",
        precio: 1200,
        descripcion: "Soporte completo y optimización continua",
        incluye: [
            "Todo del Profesional +",
            "Cambios ilimitados",
            "Optimización continua",
            "Consultoría mensual 1 hora",
            "Soporte dedicado",
            "Mejoras proactivas",
            "Tiempo respuesta: 1 hora"
        ],
        ideal: "E-commerce y empresas grandes"
    }
];

// PAQUETES COMBO (con descuento)
const PAQUETES_COMBO = [
    {
        nombre: "Despegue",
        descripcion: "Web Corporativa + Landing Page",
        servicios: ["Web Corporativa Básica", "Landing Page Simple"],
        precioIndividual: 4000,
        precioCombo: 3500,
        ahorro: 500,
        porcentajeDescuento: 15,
        ideal: "Empresas que lanzan presencia digital"
    },
    {
        nombre: "Crecimiento",
        descripcion: "Web + Landing + Automatizaciones",
        servicios: ["Web Corporativa", "Landing Page", "2 Automatizaciones"],
        precioIndividual: 8000,
        precioCombo: 6500,
        ahorro: 1500,
        porcentajeDescuento: 20,
        ideal: "PYMEs que quieren escalar",
        destacado: true
    },
    {
        nombre: "Completo",
        descripcion: "Solución integral con soporte incluido",
        servicios: ["Web Premium", "Landing Avanzada", "3 Automatizaciones", "Mantenimiento 3 meses"],
        precioIndividual: 12600,
        precioCombo: 9500,
        ahorro: 3100,
        porcentajeDescuento: 25,
        ideal: "Empresas que quieren todo resuelto"
    }
];

// ARTÍCULOS DE BLOG
const ARTICULOS_BLOG = [
    {
        id: 1,
        titulo: "5 señales de que tu web está perdiendo clientes",
        slug: "5-senales-web-pierde-clientes",
        extracto: "Descubre si tu sitio web está ahuyentando clientes potenciales y cómo solucionarlo.",
        contenido: "articulos/5-senales-web-pierde-clientes.html",
        autor: "ORAYNX",
        fecha: "2025-01-15",
        categoria: "Desarrollo Web",
        imagen: "img/blog/web-perdiendo-clientes.jpg",
        tiempoLectura: 5,
        tags: ["web", "conversión", "UX"]
    },
    {
        id: 2,
        titulo: "Cómo automatizar el seguimiento de leads sin CRM caro",
        slug: "automatizar-seguimiento-leads-sin-crm",
        extracto: "Guía práctica para automatizar tu proceso de ventas usando Google Sheets y n8n.",
        contenido: "articulos/automatizar-seguimiento-leads.html",
        autor: "ORAYNX",
        fecha: "2025-01-10",
        categoria: "Automatización",
        imagen: "img/blog/automatizar-leads.jpg",
        tiempoLectura: 8,
        tags: ["automatización", "CRM", "n8n"]
    },
    {
        id: 3,
        titulo: "Guía: Cuánto cuesta una página web profesional en Bolivia 2025",
        slug: "cuanto-cuesta-pagina-web-bolivia-2025",
        extracto: "Precios reales y factores que determinan el costo de una web profesional en Bolivia.",
        contenido: "articulos/cuanto-cuesta-web-bolivia.html",
        autor: "ORAYNX",
        fecha: "2025-01-05",
        categoria: "Tips para PYMEs",
        imagen: "img/blog/precios-web-bolivia.jpg",
        tiempoLectura: 6,
        tags: ["precios", "bolivia", "web"]
    }
];

// ESTADÍSTICAS DE LA EMPRESA
const ESTADISTICAS = {
    anosExperiencia: 3,
    clientesAtendidos: 15,
    proyectosCompletados: 25,
    horasAhorradasClientes: 500,
    tasaSatisfaccion: 100,
    tiempoPromedioRespuesta: "2 horas"
};

// FAQ - PREGUNTAS FRECUENTES
const FAQ = [
    {
        pregunta: "¿Cuánto tiempo toma desarrollar un sitio web?",
        respuesta: "Un sitio web corporativo básico toma entre 2-3 semanas. Landing pages 1-2 semanas. Proyectos más complejos pueden tomar 4-6 semanas. Te damos un timeline específico en la propuesta."
    },
    {
        pregunta: "¿Qué pasa después de entregar el proyecto?",
        respuesta: "Incluimos 30 días de ajustes y soporte. Después puedes contratar planes de mantenimiento desde Bs. 300/mes o hacer cambios puntuales según necesites."
    },
    {
        pregunta: "¿Puedo actualizar el contenido yo mismo?",
        respuesta: "Sí, te capacitamos para que puedas hacer cambios básicos de texto e imágenes. Para cambios de diseño o funcionalidad, te apoyamos nosotros."
    },
    {
        pregunta: "¿Trabajan con empresas fuera de Cochabamba?",
        respuesta: "Sí, trabajamos con empresas de toda Bolivia. Todo el proceso lo hacemos online (videollamadas, WhatsApp, email)."
    },
    {
        pregunta: "¿Qué es n8n y por qué lo usan?",
        respuesta: "n8n es una plataforma de automatización que conecta diferentes herramientas. Es más flexible y económica que alternativas como Zapier, perfecta para PYMEs."
    },
    {
        pregunta: "¿Incluyen el hosting y dominio?",
        respuesta: "Sí, el primer año de hosting y dominio está incluido en todos nuestros paquetes de desarrollo web."
    }
];

// Exportar todo (para usar en otras páginas)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CONFIG,
        SERVICIOS,
        PORTAFOLIO,
        TESTIMONIOS,
        PLANES_MANTENIMIENTO,
        PAQUETES_COMBO,
        ARTICULOS_BLOG,
        ESTADISTICAS,
        FAQ
    };
}
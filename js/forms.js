// ============================================
// ORAYNX - MANEJADOR DE FORMULARIOS
// Archivo: js/forms.js
// Envía formularios a n8n sin necesidad de BD
// ============================================

/**
 * Configuración de webhooks n8n
 * Reemplaza estas URLs con tus webhooks reales de n8n
 */
const N8N_WEBHOOKS = {
    contacto: 'https://tu-n8n-instance.com/webhook/contacto',
    newsletter: 'https://tu-n8n-instance.com/webhook/newsletter',
    cotizacion: 'https://tu-n8n-instance.com/webhook/cotizacion'
};

/**
 * Envía datos del formulario a n8n
 * @param {string} webhookUrl - URL del webhook n8n
 * @param {object} formData - Datos del formulario
 * @returns {Promise} - Respuesta del servidor
 */
async function enviarAn8n(webhookUrl, formData) {
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                timestamp: new Date().toISOString(),
                fuente: 'web-oraynx',
                userAgent: navigator.userAgent
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error al enviar a n8n:', error);
        throw error;
    }
}

/**
 * Alternativa: Enviar usando FormSubmit (sin configurar n8n)
 * Útil para empezar rápido sin servidor n8n
 */
async function enviarPorFormSubmit(email, formData) {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = `https://formsubmit.co/${email}`;
    
    // Configuración de FormSubmit
    const hiddenFields = {
        '_subject': `Nuevo contacto de ORAYNX: ${formData.nombre}`,
        '_captcha': 'false',
        '_template': 'table',
        '_next': `${window.location.origin}/gracias.html`
    };
    
    // Agregar todos los campos
    Object.entries({...formData, ...hiddenFields}).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
}

/**
 * Manejador del formulario de contacto
 */
function inicializarFormularioContacto() {
    const form = document.getElementById('contacto-form');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Mostrar loading
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        
        try {
            // Recopilar datos del formulario
            const formData = {
                nombre: form.querySelector('[name="nombre"]').value,
                email: form.querySelector('[name="email"]').value,
                telefono: form.querySelector('[name="telefono"]').value,
                empresa: form.querySelector('[name="empresa"]')?.value || '',
                servicio: form.querySelector('[name="servicio"]').value,
                mensaje: form.querySelector('[name="mensaje"]').value
            };
            
            // OPCIÓN 1: Enviar a n8n
            await enviarAn8n(N8N_WEBHOOKS.contacto, formData);
            
            // OPCIÓN 2 (alternativa): Usar FormSubmit
            // await enviarPorFormSubmit('contacto@oraynx.com', formData);
            
            // Mostrar mensaje de éxito
            mostrarMensaje('success', '✅ ¡Mensaje enviado! Te contactaremos pronto.');
            
            // Resetear formulario
            form.reset();
            
            // Redirigir a página de gracias (opcional)
            setTimeout(() => {
                window.location.href = '/gracias.html';
            }, 2000);
            
        } catch (error) {
            console.error('Error:', error);
            mostrarMensaje('error', '❌ Hubo un error. Por favor intenta nuevamente o escríbenos por WhatsApp.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

/**
 * Manejador del formulario de newsletter
 */
function inicializarFormularioNewsletter() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Suscribiendo...';
        
        try {
            const formData = {
                email: form.querySelector('[name="email"]').value,
                nombre: form.querySelector('[name="nombre"]')?.value || ''
            };
            
            await enviarAn8n(N8N_WEBHOOKS.newsletter, formData);
            
            mostrarMensaje('success', '✅ ¡Suscrito! Recibirás nuestros tips semanales.');
            form.reset();
            
        } catch (error) {
            console.error('Error:', error);
            mostrarMensaje('error', '❌ Error al suscribir. Intenta nuevamente.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

/**
 * Manejador del formulario de cotización
 */
function inicializarFormularioCotizacion() {
    const form = document.getElementById('cotizacion-form');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando solicitud...';
        
        try {
            const formData = {
                nombre: form.querySelector('[name="nombre"]').value,
                email: form.querySelector('[name="email"]').value,
                telefono: form.querySelector('[name="telefono"]').value,
                empresa: form.querySelector('[name="empresa"]').value,
                servicios: Array.from(form.querySelectorAll('[name="servicios[]"]:checked'))
                    .map(cb => cb.value),
                presupuesto: form.querySelector('[name="presupuesto"]').value,
                detalles: form.querySelector('[name="detalles"]').value
            };
            
            await enviarAn8n(N8N_WEBHOOKS.cotizacion, formData);
            
            mostrarMensaje('success', '✅ Solicitud enviada. Te contactaremos en menos de 24 horas.');
            form.reset();
            
            setTimeout(() => {
                window.location.href = '/gracias.html';
            }, 2000);
            
        } catch (error) {
            console.error('Error:', error);
            mostrarMensaje('error', '❌ Error al enviar. Contáctanos por WhatsApp.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

/**
 * Muestra mensajes de feedback al usuario
 */
function mostrarMensaje(tipo, texto) {
    // Eliminar mensajes previos
    const prevMessages = document.querySelectorAll('.form-message');
    prevMessages.forEach(msg => msg.remove());
    
    // Crear nuevo mensaje
    const mensaje = document.createElement('div');
    mensaje.className = `form-message form-message-${tipo}`;
    mensaje.textContent = texto;
    mensaje.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${tipo === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(mensaje);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        mensaje.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => mensaje.remove(), 300);
    }, 5000);
}

/**
 * Validación de campos en tiempo real
 */
function inicializarValidacion() {
    // Validar email
    document.querySelectorAll('input[type="email"]').forEach(input => {
        input.addEventListener('blur', () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (input.value && !emailRegex.test(input.value)) {
                input.style.borderColor = '#ef4444';
                mostrarErrorCampo(input, 'Email inválido');
            } else {
                input.style.borderColor = '';
                eliminarErrorCampo(input);
            }
        });
    });
    
    // Validar teléfono
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('input', () => {
            // Permitir solo números y algunos caracteres
            input.value = input.value.replace(/[^0-9+\-\s]/g, '');
        });
    });
}

/**
 * Helpers para mostrar errores de campo
 */
function mostrarErrorCampo(input, mensaje) {
    eliminarErrorCampo(input);
    const error = document.createElement('span');
    error.className = 'field-error';
    error.textContent = mensaje;
    error.style.cssText = 'color: #ef4444; font-size: 0.85rem; margin-top: 0.25rem; display: block;';
    input.parentNode.appendChild(error);
}

function eliminarErrorCampo(input) {
    const error = input.parentNode.querySelector('.field-error');
    if (error) error.remove();
}

/**
 * Tracking de eventos para analytics (opcional)
 */
function trackFormEvent(eventName, formData) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'event_category': 'Forms',
            'event_label': formData.servicio || 'contacto',
            'value': 1
        });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_name: formData.servicio || 'contacto'
        });
    }
}

/**
 * Inicializar todo cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
    inicializarFormularioContacto();
    inicializarFormularioNewsletter();
    inicializarFormularioCotizacion();
    inicializarValidacion();
    
    console.log('✅ Sistema de formularios ORAYNX inicializado');
});

// Agregar estilos para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
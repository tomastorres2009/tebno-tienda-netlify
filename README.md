# TeBno para Netlify

## Cómo publicarlo para que funcione el tiempo real
Esta tienda usa **Netlify Functions + Netlify Blobs** para guardar productos, textos, métricas y cambios del panel.

### Método recomendado
Publica el proyecto con una de estas dos opciones:

1. **Conecta un repositorio Git a Netlify** y deja que Netlify haga el deploy.
2. **Usa Netlify CLI** desde la carpeta del proyecto.

> No uses solo arrastrar y soltar la carpeta si quieres que el guardado en tiempo real funcione. Ese flujo es ideal para sitios estáticos; esta tienda necesita funciones activas.

## Deploy rápido con Git
1. Descomprime el ZIP.
2. Sube la carpeta `TeBno_final_netlify` a GitHub.
3. En Netlify elige **Add new project** y conecta ese repositorio.
4. Netlify detectará `netlify.toml` y las funciones automáticamente.
5. Espera el deploy y abre tu sitio.
6. Entra al panel Admin o Asesores y guarda un cambio de prueba.

## Deploy rápido con Netlify CLI
1. Instala dependencias:
   `npm install`
2. Inicia sesión:
   `npx netlify login`
3. Para probar localmente:
   `npm run dev`
4. Para publicar en producción:
   `npm run deploy`

## Qué queda guardado para todos los visitantes
- Productos, categorías y opiniones
- Textos principales de la tienda
- Contraseñas de admin y asesores
- Consultas del chat pasadas a asesores
- Métricas de visitas, búsquedas y chats
- Logo cargado como URL o imagen embebida

## Qué mejoré en esta versión
- Lectura de datos con consistencia fuerte para que los cambios nuevos aparezcan antes en otros visitantes.
- Polling más rápido para refresco entre sesiones.
- Indicador visual de estado: modo local, guardando o Netlify en vivo.
- Botón para recargar datos directamente desde el servidor.
- Mejor compatibilidad para publicar en Netlify con Node 18+.
- Instrucciones más claras para desplegar sin perder las funciones.

## Claves iniciales
- Admin: `tebno123`
- Asesor: `asesor123`

## Nota importante
Si abres `index.html` directamente en tu computador, la tienda mostrará una **vista previa local** con datos de ejemplo. El guardado compartido y el reflejo entre visitantes aparece cuando la web corre ya desplegada en Netlify con funciones activas.

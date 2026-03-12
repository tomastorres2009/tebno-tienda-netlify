const { getStore } = require('@netlify/blobs');

const store = getStore({ name:'tebno-site', consistency:'strong' });

function nowIso(){ return new Date().toISOString(); }
function dayKey(){ const d=new Date(); return d.toISOString().slice(0,10); }
function uid(){ return 'id'+Math.random().toString(36).slice(2,10)+Date.now().toString(36); }
function defaultData(){
  return {
    site:{name:'TeBno',tagline:'Celulares y tecnología',heroBadge:'Identidad premium',heroTitle:'Encuentra tu próximo celular al mejor precio',heroSubtitle:'Compra equipos nuevos y seminuevos con precios claros, atención rápida por WhatsApp y catálogo fácil de revisar. Diseñada para verse bien en móviles nuevos y también en dispositivos más antiguos.',heroPrimaryText:'Ver catálogo',heroSecondaryText:'Pedir por WhatsApp',highlightTitle:'Hasta 30% de descuento',highlightText:'Promociones en referencias seleccionadas. Consulta colores, memoria y disponibilidad.',catalogTitle:'Productos publicados',catalogSubtitle:'Usa el buscador y los filtros para ver precios y referencias.',chatPanelTitle:'Asistencia rápida',offerTitle:'Promociones activas',offerText:'Pregunta por referencias seleccionadas con descuento.',contactText:'Escríbenos para conocer precios, disponibilidad, promociones y asesoría personalizada.',phone:'3202033463',address:'Calle 18 # 4 - 07, Avenida del Hospital',city:'Cali, Colombia',schedule:'Lunes a sábado de 9:00 a. m. a 7:00 p. m.',paymentMethods:'Efectivo, transferencia, Nequi, Daviplata y pagos acordados en tienda.',deliveryInfo:'Entregas locales, envíos nacionales y coordinación por WhatsApp según disponibilidad.',warrantyInfo:'Garantía según referencia, estado del equipo y condiciones acordadas.',tradeInInfo:'Recibimos tu usado como parte de pago según revisión.',instagramUrl:'https://instagram.com/tebno.store',facebookUrl:'https://facebook.com/tebno.store',tiktokUrl:'https://tiktok.com/@tebno.store',footerText:'© 2026 TeBno. Todos los derechos reservados.',footerRight:'Cali, Colombia · Atención rápida',syncNote:'En Netlify, la tienda consulta cambios cada pocos segundos para mostrarlos a otros visitantes.',chatPlaceholder:'Pregunta por precio o referencia',advisorGreeting:'Hola, soy tu asesor virtual de TeBno. Dime el modelo o presupuesto y te ayudo.',advisorEscalation:'Puedo pasar tu caso a un asesor humano por WhatsApp.',floatingAvailableText:'Disponibles',floatingChatText:'Chat',floatingAdvisorText:'Asesor',faq1q:'¿Los equipos tienen garantía?',faq1a:'Sí. La garantía depende de la referencia y del estado del equipo. Puedes aclararla antes de comprar.',faq2q:'¿Manejan equipos seminuevos?',faq2a:'Sí. La tienda puede publicar equipos nuevos o seminuevos y el estado queda visible en cada producto.',faq3q:'¿Hacen envíos?',faq3a:'Sí. Puedes coordinar entrega local o envío nacional por WhatsApp.'},
    security:{adminPassword:'tebno123',advisorPassword:'asesor123'},
    products:[
      {id:uid(),name:'iPhone 13',brand:'Apple',category:'iPhone',price:2699000,status:'Disponible',memory:'128GB',description:'Excelente cámara, rendimiento alto y gran valor de reventa.',image:'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=900&q=80',published:true,featured:true},
      {id:uid(),name:'iPhone 11',brand:'Apple',category:'iPhone',price:1899000,status:'Seminuevo',memory:'128GB',description:'Muy buen equilibrio entre cámara, rendimiento y precio.',image:'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=900&q=80',published:true,featured:false},
      {id:uid(),name:'Samsung S23',brand:'Samsung',category:'Samsung',price:2899000,status:'Disponible',memory:'256GB',description:'Pantalla premium y cámara muy sólida.',image:'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80',published:true,featured:true},
      {id:uid(),name:'Samsung A25',brand:'Samsung',category:'Samsung',price:1299000,status:'Nuevo',memory:'256GB',description:'Buena batería, pantalla fluida y precio competitivo.',image:'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=900&q=80',published:true,featured:false},
      {id:uid(),name:'Redmi Note 13',brand:'Xiaomi',category:'Xiaomi',price:1199000,status:'Disponible',memory:'256GB',description:'Buen precio, buena batería y desempeño equilibrado.',image:'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',published:true,featured:true},
      {id:uid(),name:'Poco X6',brand:'Xiaomi',category:'Xiaomi',price:1699000,status:'Nuevo',memory:'256GB',description:'Potencia alta para juegos, pantalla llamativa y buena carga.',image:'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?auto=format&fit=crop&w=900&q=80',published:true,featured:false},
      {id:uid(),name:'Motorola G84',brand:'Motorola',category:'Motorola',price:999000,status:'Disponible',memory:'256GB',description:'Ideal para uso diario y presupuesto ajustado.',image:'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=80',published:true,featured:false},
      {id:uid(),name:'Motorola Edge 40',brand:'Motorola',category:'Motorola',price:1799000,status:'Seminuevo',memory:'256GB',description:'Diseño premium, buen rendimiento y carga rápida.',image:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',published:true,featured:false},
      {id:uid(),name:'Honor X8b',brand:'Honor',category:'Honor',price:1399000,status:'Nuevo',memory:'256GB',description:'Buena pantalla, equipo liviano y cámara frontal destacada.',image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',published:true,featured:false},
      {id:uid(),name:'Infinix Note 40',brand:'Infinix',category:'Infinix',price:1149000,status:'Disponible',memory:'256GB',description:'Opción económica con buena batería y bastante memoria.',image:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80',published:true,featured:false}
    ],
    testimonials:[
      {id:uid(),name:'Laura M.',title:'Muy buena atención',text:'Me respondieron rápido y el equipo salió muy bueno.'},
      {id:uid(),name:'Andrés C.',title:'Buenos precios',text:'Comparé con varias tiendas y aquí encontré mejor precio.'},
      {id:uid(),name:'Karina P.',title:'Lo recomiendo',text:'Compré un iPhone seminuevo y llegó en muy buen estado.'}
    ],
    categories:['Todas','iPhone','Samsung','Xiaomi','Motorola','Honor','Infinix'], analytics:{dailyVisits:{},dailySearches:{},topSearches:{},chatInterests:{},chatLogs:[],advisorNotes:[]}, inquiries:[], toggles:{showOffers:true,showOpinions:true,showFloatingAvailable:true,showFloatingChat:true,showFloatingAdvisor:true,showFeatured:true,showBrands:true,showBenefits:true,showFaqs:true}, updatedAt:null
  };
}
function mergeData(remote){
  const base=defaultData();
  if(!remote) return base;
  const copy = JSON.parse(JSON.stringify(remote));
  function merge(a,b){ for(const k in b){ if(b[k] && typeof b[k]==='object' && !Array.isArray(b[k])){ if(!a[k]||typeof a[k]!=='object'||Array.isArray(a[k])) a[k]={}; merge(a[k],b[k]); } else if(a[k]===undefined){ a[k]=b[k]; } } return a; }
  const merged = merge(copy, base);
  merged.categories = Array.from(new Set([...(merged.categories||[]), ...(base.categories||[])]));
  merged.products = (merged.products||[]).slice();
  (base.products||[]).forEach((p) => { if(!merged.products.some((x) => x.name===p.name)) merged.products.push(p); });
  merged.testimonials = (merged.testimonials||[]).slice();
  (base.testimonials||[]).forEach((t) => { if(!merged.testimonials.some((x) => x.title===t.title && x.name===t.name)) merged.testimonials.push(t); });
  return merged;
}
async function getData(){ const current = await store.get('data', { type:'json', consistency:'strong' }); return mergeData(current); }
async function saveData(data){ data.updatedAt = nowIso(); await store.setJSON('data', data); return data; }
async function saveAnalytics(data){ await store.setJSON('analytics', data); return data; }
async function getAnalytics(){ const current = await store.get('analytics', { type:'json' }); return current || { dailyVisits:{}, dailySearches:{}, topSearches:{}, chatInterests:{}, chatLogs:[], advisorNotes:[] }; }
function tokenise(s){ return String(s||'').toLowerCase().replace(/[^a-z0-9áéíóúñü\s]/gi,' ').split(/\s+/).filter(Boolean).filter(w=>w.length>2).slice(0,6); }

exports.handler = async (event) => {
  try {
    const body = event.httpMethod === 'POST' ? JSON.parse(event.body || '{}') : {};
    const action = body.action || 'getData';
    const payload = body.payload || {};

    if (action === 'health') {
      return json({ ok:true, mode:'netlify-blobs', consistency:'strong', now: nowIso() });
    }

    if (action === 'getData') {
      const data = await getData();
      const analytics = await getAnalytics();
      data.analytics = analytics;
      return json({ ok:true, data });
    }

    if (action === 'saveData') {
      const incoming = mergeData(payload.data);
      const current = await getData();
      incoming.analytics = current.analytics || await getAnalytics();
      const saved = await saveData(incoming);
      return json({ ok:true, data:saved });
    }

    if (action === 'logVisit') {
      const analytics = await getAnalytics();
      const dk = dayKey();
      analytics.dailyVisits[dk] = (analytics.dailyVisits[dk] || 0) + 1;
      await saveAnalytics(analytics);
      return json({ ok:true });
    }

    if (action === 'logSearch') {
      const analytics = await getAnalytics();
      const dk = dayKey();
      const term = String(payload.term || '').trim().toLowerCase();
      if (term) {
        analytics.dailySearches[dk] = (analytics.dailySearches[dk] || 0) + 1;
        analytics.topSearches[term] = (analytics.topSearches[term] || 0) + 1;
      }
      await saveAnalytics(analytics);
      return json({ ok:true });
    }

    if (action === 'logChat') {
      const analytics = await getAnalytics();
      const text = String(payload.message || '').trim();
      if (text) {
        analytics.chatLogs.unshift({ id:uid(), message:text, date:nowIso() });
        analytics.chatLogs = analytics.chatLogs.slice(0,400);
        tokenise(text).forEach((w) => { analytics.chatInterests[w] = (analytics.chatInterests[w] || 0) + 1; });
      }
      await saveAnalytics(analytics);
      return json({ ok:true });
    }

    return json({ ok:false, error:'Acción no soportada' }, 400);
  } catch (error) {
    return json({ ok:false, error:error.message || 'Error interno' }, 500);
  }
};

function json(body, statusCode=200){
  return {
    statusCode,
    headers:{ 'content-type':'application/json; charset=utf-8', 'cache-control':'no-store' },
    body: JSON.stringify(body)
  };
}

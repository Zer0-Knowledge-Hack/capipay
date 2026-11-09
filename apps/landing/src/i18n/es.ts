import type { Dict } from "./en";

// Neutral Latin American Spanish, "tú". No voseo, no regional slang. See docs/brand/README.md.
export const es: Dict = {
  meta: {
    title: "CapiPay · Pagos en USDC verificados en Stellar",
    description:
      "Links de pago y API en USDC sobre Stellar para comercios de Latinoamérica. Verificados en la red, directo a tu wallet.",
  },
  header: {
    skip: "Saltar al contenido",
    nav: { how: "Cómo funciona", pricing: "Precios", developers: "Desarrolladores" },
    navLabel: "Principal",
    languageLabel: "Idioma",
    cta: "Pedir acceso anticipado",
  },
  hero: {
    eyebrow: "Links de pago y API en USDC · Stellar",
    badge: "Testnet · muy pronto",
    title: "Cobra en USDC. Tu negocio sigue solo.",
    sub: "Comparte un link por WhatsApp o Instagram. El pago se verifica en la red, no en una captura, y el neto llega a tu wallet en segundos.",
    primary: "Pedir acceso anticipado",
    secondary: "Ver la API",
    previewLabel: "Vista previa del checkout",
    merchant: "Tienda de Lu · Velas de soja",
    timer: "Tiempo para pagar",
    pay: "Pagar con wallet",
    paid: "Pagado",
    paidSub: "Ya en tu wallet",
  },
  why: {
    eyebrow: "Sin comprobantes falsos",
    title: "Una captura no es prueba. El estado del pago, sí.",
    features: [
      {
        title: "Verificado en la red",
        text: "CapiPay detecta el pago en Stellar y lo concilia con el memo de la sesión. Nadie puede mostrarte un pago que no existe.",
      },
      {
        title: "Tu negocio sigue solo",
        text: "Cuando el pago se confirma, te llega un webhook y una notificación. Tu proceso continúa sin que revises nada.",
      },
      {
        title: "Directo a tu wallet",
        text: "El neto se reenvía automáticamente a tu wallet de cobro. No guardamos tu dinero.",
      },
    ],
  },
  how: {
    eyebrow: "Cómo funciona",
    title: "Del link a tu wallet, en tres pasos.",
    steps: [
      {
        title: "Crea tu link",
        text: "Pon el monto en USDC y conecta tu wallet de cobro. Empiezas en minutos, sin papeles.",
      },
      {
        title: "Compártelo",
        text: "Envíalo por WhatsApp, Instagram o tu web. Cada vez que alguien lo abre, se crea una sesión con su propio memo.",
      },
      {
        title: "Cobra y sigue",
        text: "El pago se verifica en Stellar, te avisamos y el neto llega a tu wallet. Tú sigues con lo tuyo.",
      },
    ],
  },
  states: {
    eyebrow: "Cada pago, con su estado",
    title: "Sabes qué pasó sin leer la blockchain",
    text: "Los pagos parciales, de más o fuera de tiempo tienen reglas claras. Si falta dinero, el comprador completa con el mismo memo antes de que expire la sesión.",
    caption: "Pagos de ejemplo",
    columns: { item: "Producto", amount: "Monto", status: "Estado" },
    items: ["Velas de soja", "Pack x3 aromas", "Difusor de bambú", "Tarjeta de regalo"],
    status: { paid: "Pagado", waiting: "Esperando", partial: "Parcial", expired: "Expirado" },
  },
  developers: {
    eyebrow: "Para desarrolladores",
    title: "Una API. El mismo motor que usan los links.",
    text: "Crea sesiones de checkout desde tu SaaS y recibe webhooks firmados cuando el pago se confirma. Links, dashboard y widgets usan esta misma API pública.",
    codeLabel: "Ejemplo ilustrativo",
    cta: "Leer la documentación",
  },
  pricing: {
    eyebrow: "Precios",
    title: "1% por pago exitoso. Sin cargo fijo.",
    sub: "Sin costo de alta, sin mensualidad y sin recargo por cobrar al instante. La comisión baja cuando vendes más.",
    tiers: [
      { fee: "1%", range: "Hasta 10.000 USDC al mes" },
      { fee: "0.8%", range: "De 10.000 a 50.000 USDC al mes" },
      { fee: "0.6%", range: "Más de 50.000 USDC al mes" },
    ],
    note: "Los tramos son mensuales y automáticos.",
  },
  waitlist: {
    title: "Tu primer link, en minutos.",
    sub: "Únete a la lista de espera de la testnet.",
    label: "Correo electrónico",
    placeholder: "tu@negocio.com",
    submit: "Pedir acceso anticipado",
    invalid: "Escribe un correo válido, como tu@negocio.com.",
    success: "Ya estás en la lista. Te escribiremos cuando abra la testnet.",
  },
  footer: {
    tagline: "Pagos en USDC verificados en Stellar · Hecho en Latinoamérica",
    columns: [
      { title: "Producto", links: ["Links de pago", "Checkout", "API"] },
      { title: "Empresa", links: ["Precios", "Seguridad", "Contacto"] },
      { title: "Legal", links: ["Términos", "Privacidad"] },
    ],
    copyright: "© 2026 CapiPay",
  },
};

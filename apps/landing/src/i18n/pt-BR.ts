import type { Dict } from "./en";

// Brazilian Portuguese, "você". Informal but not slangy. See docs/brand/README.md.
export const ptBR: Dict = {
  meta: {
    title: "CapiPay · Pagamentos em USDC verificados na Stellar",
    description:
      "Links de pagamento e API em USDC na Stellar para lojistas da América Latina. Verificados na rede, direto na sua carteira.",
  },
  header: {
    skip: "Pular para o conteúdo",
    nav: { how: "Como funciona", pricing: "Preços", developers: "Desenvolvedores" },
    navLabel: "Principal",
    languageLabel: "Idioma",
    cta: "Quero acesso antecipado",
  },
  hero: {
    eyebrow: "Links de pagamento e API em USDC · Stellar",
    badge: "Testnet · em breve",
    title: "Receba em USDC. Seu negócio segue sozinho.",
    sub: "Compartilhe um link pelo WhatsApp ou Instagram. O pagamento é verificado na rede, não em um print, e o valor líquido chega à sua carteira em segundos.",
    primary: "Quero acesso antecipado",
    secondary: "Ver a API",
    previewLabel: "Prévia do checkout",
    merchant: "Loja da Lu · Velas de soja",
    timer: "Tempo para pagar",
    pay: "Pagar com carteira",
    paid: "Pago",
    paidSub: "Já na sua carteira",
  },
  why: {
    eyebrow: "Chega de comprovantes falsos",
    title: "Um print não é prova. O status do pagamento, sim.",
    features: [
      {
        title: "Verificado na rede",
        text: "O CapiPay detecta o pagamento na Stellar e o concilia com o memo da sessão. Ninguém consegue mostrar um pagamento que não existe.",
      },
      {
        title: "Seu negócio segue sozinho",
        text: "Quando o pagamento é confirmado, você recebe um webhook e uma notificação. Seu processo continua sem você conferir nada.",
      },
      {
        title: "Direto na sua carteira",
        text: "O valor líquido é repassado automaticamente para a sua carteira de recebimento. Não guardamos o seu dinheiro.",
      },
    ],
  },
  how: {
    eyebrow: "Como funciona",
    title: "Do link à sua carteira, em três passos.",
    steps: [
      {
        title: "Crie seu link",
        text: "Defina o valor em USDC e conecte sua carteira de recebimento. Você começa em minutos, sem burocracia.",
      },
      {
        title: "Compartilhe",
        text: "Envie pelo WhatsApp, Instagram ou pelo seu site. Cada vez que alguém abre o link, é criada uma sessão com o próprio memo.",
      },
      {
        title: "Receba e siga em frente",
        text: "O pagamento é verificado na Stellar, avisamos você e o valor líquido chega à sua carteira. Você segue com o seu dia.",
      },
    ],
  },
  states: {
    eyebrow: "Cada pagamento, com seu status",
    title: "Saiba o que aconteceu sem ler a blockchain",
    text: "Pagamentos parciais, a mais ou fora do prazo seguem regras claras. Se faltar dinheiro, o comprador completa com o mesmo memo antes de a sessão expirar.",
    caption: "Pagamentos de exemplo",
    columns: { item: "Produto", amount: "Valor", status: "Status" },
    items: ["Velas de soja", "Kit 3 aromas", "Difusor de bambu", "Vale-presente"],
    status: { paid: "Pago", waiting: "Aguardando", partial: "Parcial", expired: "Expirado" },
  },
  developers: {
    eyebrow: "Para desenvolvedores",
    title: "Uma API. O mesmo motor que os links usam.",
    text: "Crie sessões de checkout no seu SaaS e receba webhooks assinados quando o pagamento for confirmado. Links, painel e widgets usam esta mesma API pública.",
    codeLabel: "Exemplo ilustrativo",
    cta: "Ler a documentação",
  },
  pricing: {
    eyebrow: "Preços",
    title: "1% por pagamento aprovado. Sem tarifa fixa.",
    sub: "Sem taxa de adesão, sem mensalidade e sem custo extra para receber na hora. A taxa cai conforme você vende mais.",
    tiers: [
      { fee: "1%", range: "Até 10.000 USDC por mês" },
      { fee: "0,8%", range: "De 10.000 a 50.000 USDC por mês" },
      { fee: "0,6%", range: "Acima de 50.000 USDC por mês" },
    ],
    note: "As faixas são mensais e automáticas.",
  },
  waitlist: {
    title: "Seu primeiro link, em minutos.",
    sub: "Entre na lista de espera da testnet.",
    label: "E-mail",
    placeholder: "voce@seunegocio.com",
    submit: "Quero acesso antecipado",
    invalid: "Digite um e-mail válido, como voce@seunegocio.com.",
    success: "Você está na lista. Vamos escrever quando a testnet abrir.",
  },
  footer: {
    tagline: "Pagamentos em USDC verificados na Stellar · Feito na América Latina",
    columns: [
      { title: "Produto", links: ["Links de pagamento", "Checkout", "API"] },
      { title: "Empresa", links: ["Preços", "Segurança", "Contato"] },
      { title: "Legal", links: ["Termos", "Privacidade"] },
    ],
    copyright: "© 2026 CapiPay",
  },
};

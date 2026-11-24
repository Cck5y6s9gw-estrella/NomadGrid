import Link from "next/link";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";
import { cities } from "@/data/cities";
import { breadcrumbLd, absUrl } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";

export default function MethodologyPage({ lang }: { lang: Lang }) {
  const es = lang === "es";
  const pre = es ? "" : "/en";
  const n = cities.length;

  const sections = es
    ? [
        {
          h: "Coste de vida",
          p: `El coste mensual es el gasto estimado de una persona sin contar alquiler, según Numbeo, convertido a euros. Sirve para comparar ciudades entre sí, no es un presupuesto exacto: tu gasto real dependerá de tu estilo de vida y de dónde vivas.`,
        },
        {
          h: "Internet",
          p: "La velocidad es la media nacional de banda ancha fija según el Speedtest Global Index de Ookla. Es un dato del país, no de la ciudad, así que dos ciudades del mismo país muestran la misma cifra. Antes de comprometerte con un alojamiento, comprueba la conexión concreta.",
        },
        {
          h: "Seguridad",
          p: "Es una nota de 0 a 10 que combina dos fuentes: un 60 % del índice de seguridad de Numbeo y un 40 % del Global Peace Index del país (Institute for Economics & Peace). El primero aporta el detalle por ciudad y el segundo corrige los casos con pocos datos.",
        },
        {
          h: "Calidad de vida",
          p: "Otra nota de 0 a 10: un 60 % del índice de calidad de vida de Numbeo y un 40 % del Índice de Desarrollo Humano de la ONU del país. Igual que en seguridad, el peso mayor es el dato por ciudad.",
        },
        {
          h: "Visados e impuestos",
          p: "Las guías de visado, fiscalidad, sanidad y barrios se redactan a partir de fuentes oficiales y especializadas, que enlazamos en cada sección. Las tasas, umbrales de ingresos y tramos cambian con frecuencia: la información es orientativa, no es asesoramiento legal ni fiscal, y conviene verificarla en la fuente oficial antes de iniciar cualquier trámite.",
        },
        {
          h: "Actualización y límites",
          p: "Los datos se revisan y amplían de forma manual, y cada ciudad indica su fuente original. Numbeo se alimenta de aportaciones de usuarios, por lo que en ciudades con pocas respuestas los datos pueden ser menos fiables. Los rankings se ordenan solo por estos datos.",
        },
      ]
    : [
        {
          h: "Cost of living",
          p: "Monthly cost is the estimated spending of one person excluding rent, according to Numbeo, converted to euros. It is meant to compare cities with each other, not as an exact budget: your real spending depends on your lifestyle and where you live.",
        },
        {
          h: "Internet",
          p: "Speed is the national average fixed broadband speed from Ookla's Speedtest Global Index. It is a country figure, not a city one, so two cities in the same country show the same number. Check the actual connection before committing to a place to stay.",
        },
        {
          h: "Safety",
          p: "A 0 to 10 score combining two sources: 60% Numbeo's safety index and 40% the country's Global Peace Index (Institute for Economics & Peace). The first gives city-level detail and the second corrects cases with little data.",
        },
        {
          h: "Quality of life",
          p: "Another 0 to 10 score: 60% Numbeo's quality of life index and 40% the UN Human Development Index of the country. As with safety, the larger weight goes to the city-level figure.",
        },
        {
          h: "Visas and taxes",
          p: "Our visa, tax, healthcare and neighborhood guides are written from official and specialist sources, which we link in each section. Fees, income thresholds and tax brackets change often: the information is for guidance, it is not legal or tax advice, and you should verify it with the official source before starting any procedure.",
        },
        {
          h: "Updates and limits",
          p: "Data is reviewed and extended manually, and every city shows its original source. Numbeo relies on user contributions, so cities with few responses may have less reliable figures. Rankings are ordered only by this data.",
        },
      ];

  const title = es ? "Metodología y fuentes de los datos" : "Methodology and data sources";
  const intro = es
    ? `Roavio compara ${n} ciudades para trabajar en remoto con datos de fuentes públicas. Así calculamos cada cifra y de dónde sale.`
    : `Roavio compares ${n} cities for remote work using public data sources. This is how we calculate each figure and where it comes from.`;

  const ld = [
    breadcrumbLd([
      { name: "Roavio", path: es ? "/" : "/en" },
      { name: title, path: `${pre}/metodologia` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description: intro,
      url: absUrl(`${pre}/metodologia`),
      inLanguage: lang,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={ld} />
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <nav aria-label="Breadcrumb" className="text-xs text-muted mb-4">
          <Link href={es ? "/" : "/en"} className="hover:text-foreground">{es ? "Inicio" : "Home"}</Link> /{" "}
          <span className="text-foreground">{es ? "Metodología" : "Methodology"}</span>
        </nav>
        <h1 className="text-3xl sm:text-5xl leading-tight mb-4">{title}</h1>
        <p className="text-muted mb-10">{intro}</p>
        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-2xl mb-2">{s.h}</h2>
              <p className="text-muted leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">
          <Link href={`${pre}/rankings`} className="text-accent hover:underline">{es ? "Ver los rankings" : "See the rankings"}</Link>
          {" · "}
          <Link href={`${pre}/cities`} className="text-accent hover:underline">{es ? "Ver todas las ciudades" : "Browse all cities"}</Link>
        </p>
      </div>
    </main>
  );
}

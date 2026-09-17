// Este archivo se genera a partir de la investigación ampliada v3 (visado y fiscalidad,
// sanidad y seguro médico, barrios y coworkings) para las 20 ciudades de Roavio.
// Cada sección incluye su propio contenido y una lista de fuentes citadas.
// IMPORTANTE: las cifras de visados, impuestos y tasas cambian con frecuencia.
// Revisar y actualizar periódicamente contra las fuentes oficiales enlazadas.

export type GuideSource = {
  label: string;
  url: string;
};

export type GuideSection = {
  content: string;
  sources: GuideSource[];
};

export type CityGuide = {
  visaFiscal: GuideSection;
  sanidad: GuideSection;
  barrios: GuideSection;
};

export const visaDisclaimer = "las cifras de tasas, umbrales de ingresos y tramos fiscales cambian con frecuencia. Esta información es orientativa — antes de viajar o iniciar cualquier trámite, verificar siempre los datos vigentes en la fuente oficial (embajada, consulado o portal gubernamental correspondiente).";

export const visaDisclaimerEn = "fees, income thresholds, and tax brackets change frequently. This information is for guidance only — before traveling or starting any procedure, always verify the current figures with the official source (embassy, consulate, or the relevant government portal).";

export const cityGuides: Record<string, CityGuide> = {
  "valencia": {
    "visaFiscal": {
      "content": "El trámite principal es la Autorización de Residencia para Teletrabajo de Carácter Internacional, regulada por el artículo 74 bis de la Ley 14/2013, que puede solicitarse ante la Unidad de Grandes Empresas y Colectivos Estratégicos (UGE-CE) si el solicitante ya se encuentra en España, o ante el consulado español correspondiente al país de residencia si se tramita desde el extranjero.\n\nEntre los documentos comunes a todos los perfiles se encuentran: el pasaporte con una validez mínima de un año; el formulario de solicitud cumplimentado; el pago de la tasa modelo 790-038 (aproximadamente 73,26 €); el certificado de antecedentes penales apostillado; un seguro médico privado que no incluya copagos ni periodos de carencia; la acreditación de alojamiento en España; unos ingresos mensuales iguales o superiores al 200% del Salario Mínimo Interprofesional (SMI), lo que en 2026 equivale a entre aproximadamente 2.640 y 2.849 €/mes; una titulación universitaria o, alternativamente, tres años de experiencia profesional acreditada; y la traducción jurada de todos los documentos que no estén originalmente en español.\n\nSegún la situación laboral del solicitante se añaden requisitos específicos. Los trabajadores por cuenta ajena deben aportar un contrato con una antigüedad mínima de tres meses, una carta del empleador que autorice expresamente el teletrabajo, las nóminas correspondientes y el formulario A1 o el alta en el Régimen General de la Seguridad Social española. Los autónomos deben acreditar más de un año de actividad, contratos en los que más del 80% de los ingresos procedan de clientes fuera de España, las facturas de los últimos tres meses y el alta como autónomo en el RETA. Los propietarios de empresa no pueden superar una participación del 25% del capital y deben aportar la documentación registral de la sociedad junto con las cuentas de los últimos tres meses; esta última circunstancia es, de hecho, una de las causas más frecuentes de denegación, por sospecha de que se trate de una \"empresa pantalla\".\n\nEn cuanto al proceso, existen dos vías: la tramitación consular, con un plazo oficial de 10 días hábiles (aunque en la práctica suele tardar entre 3 y 6 semanas), que concede un visado válido por un año; o la tramitación en España a través de la UGE-CE, con un plazo oficial de 20 días hábiles (en la práctica, entre 4 y 8 semanas), que otorga una autorización de hasta tres años. Además, hay que abonar la tasa de la Tarjeta de Identidad de Extranjero (TIE), modelo 790-012, de aproximadamente 16 €. Las renovaciones siguen calendarios distintos según la vía de entrada: 1+2+2 años por la vía consular, y 3+2 años por la vía UGE-CE.\n\nEntre las causas típicas de denegación destacan una carta del empleador redactada de forma genérica, apostillas mal tramitadas, ingresos que no se corresponden con los movimientos bancarios reales, o un seguro médico que incluye copagos. Ante una denegación cabe presentar un recurso o volver a solicitar el permiso corrigiendo el defecto señalado.\n\nEn lo que respecta a los familiares, pueden incluirse en la misma solicitud o reagruparse posteriormente; el requisito de ingresos aumenta entre un 75% y un 100% del SMI por cada cónyuge y un 25% adicional por cada hijo (conviene confirmar la cifra vigente en el momento de la solicitud).\n\nEn materia fiscal, se considera residente en España a quien permanece 183 días en el país o tiene en él su centro de intereses económicos. El régimen especial conocido como Ley Beckham permite tributar a un tipo fijo del 24% sobre los primeros 600.000 € de renta del trabajo, con exención de la renta obtenida fuera de España durante seis años; debe solicitarse en un plazo de seis meses desde el alta en la Seguridad Social, y exige que los ingresos procedentes de clientes españoles no superen el 20% del total. Los errores más comunes son no declarar los activos en el extranjero mediante el Modelo 720, dejar pasar el plazo para acogerse a la Ley Beckham, y no planificar con antelación el convenio de doble imposición aplicable con el país de origen.",
      "sources": [
        {
          "label": "Teletrabajadores – Unidad de Grandes Empresas (UGE), Ministerio de Inclusión, Seguridad Social y Migraciones",
          "url": "https://www.inclusion.gob.es/en/web/unidadgrandesempresas/teletrabajadores"
        },
        {
          "label": "Portal del Programa de Residencia para Inversores y Emprendedores – Nómadas digitales",
          "url": "https://prie.comercio.gob.es/es-es/Paginas/Teletrabajadores-caracter-internacional.aspx"
        },
        {
          "label": "Artículo 74 quater. Visado para teletrabajo de carácter internacional (Iberley)",
          "url": "https://www.iberley.es/legislacion/articulo-74-quater-apoyo-emprendedores-internacionalizacion"
        },
        {
          "label": "Ley Beckham en España: qué es y cómo solicitarla (Taxdown)",
          "url": "https://taxdown.es/extranjeros/como-funciona-ley-beckham"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los hospitales de referencia en Valencia se encuentran Quirónsalud Valencia, IMED Valencia Hospital y Vithas Valencia 9 de Octubre.\n\nEn cuanto a los seguros, SafetyWing ofrece primas orientativas según la edad: menores de 39 años, aproximadamente 56 $ cada 4 semanas; de 40 a 49 años, unos 92 $; de 50 a 59 años, unos 145 $; y de 60 a 69 años, unos 197 $. Conviene tener en cuenta que esta póliza no siempre cumple el requisito de \"sin copago\" que exige el visado de teletrabajo. Entre los seguros españoles que sí suelen ajustarse a ese requisito están ASISA/Adeslas Extensa, de 80 a 130 €/mes; Sanitas Más Completo, de 150 a 200 €/mes; y DKV Top Health, de 270 a 350 €/mes.\n\nLos precios orientativos pagando de bolsillo son: consulta de médico general, entre 20 y 50 €; consulta con especialista, entre 50 y 150 €; atención de urgencias, entre 100 y 250 €; y hospitalización, entre 600 y 1.500 €/día.\n\nEn materia de vacunas, no se exige ninguna obligatoria para entrar en el espacio Schengen.",
      "sources": [
        {
          "label": "Insurance for Nomads, by Nomads – SafetyWing",
          "url": "https://safetywing.com/nomad-insurance"
        },
        {
          "label": "Hospital Quirónsalud Valencia",
          "url": "https://www.quironsalud.com/valencia"
        },
        {
          "label": "Private Hospital in Valencia – Vithas 9 de Octubre",
          "url": "https://vithas.es/en/center/vithas-valencia-9-de-octubre-hospital/"
        }
      ]
    },
    "barrios": {
      "content": "Entre los barrios más recomendados para nómadas digitales destacan:\n1. **Ruzafa** — cosmopolita y con mucha vida nocturna, con alquileres de entre 850 y 1.500 €/mes; céntrico y popular entre nómadas jóvenes.\n2. **El Carmen** — histórico, bohemio y turístico, con alquileres de entre 750 y 1.100 €/mes.\n3. **Eixample** — de estilo modernista y ambiente tranquilo, con alquileres de entre 950 y 2.000 €/mes; atrae a familias y profesionales.\n4. **Benimaclet** — joven, multicultural y universitario, con alquileres de entre 500 y 800 €/mes; opción para quien tiene un presupuesto ajustado.\n5. **El Cabanyal** — costero y en proceso de gentrificación, con alquileres de entre 650 y 950 €/mes; ideal para quienes buscan vida de playa.\n6. **Patraix** — residencial y práctico, con alquileres de entre 550 y 850 €/mes.\n\nEn cuanto a los espacios de coworking, Wayco cuenta con varias sedes y salas de reuniones, con un bono de día de entre 25 y 40 € + IVA y tarifas mensuales de entre 80 y 450 € + IVA; La Harinera y La Fábrica de Hielo, en el Cabanyal, tienen un enfoque creativo; Cloud Coworking se ubica en Ciutat Vella; Gravity, en Ruzafa, está orientado a startups; y PlugIn ofrece oficinas privadas.",
      "sources": [
        {
          "label": "¿Dónde alojarse en Valencia? Nómada digital – Holafly",
          "url": "https://esim.holafly.com/es/blog/nomada-digital/nomada-digital-valencia/"
        },
        {
          "label": "Tarifas Coworking en Valencia – Wayco",
          "url": "https://wayco.es/coworking-valencia-precios/"
        },
        {
          "label": "Nómadas Digitales en Valencia – Remote Work Spain",
          "url": "https://remoteworkspain.es/nomadas-digitales-en-valencia/"
        }
      ]
    }
  },
  "lisboa": {
    "visaFiscal": {
      "content": "El trámite principal es el visado D8, que se desarrolla en dos fases: la primera ante el consulado portugués del país de residencia, y la segunda —ya en Portugal— ante la Agencia para la Integración, Migraciones y Asilo (AIMA).\n\nEntre los documentos exigidos figuran: el pasaporte con una validez mínima de 12 meses; unos ingresos mensuales de al menos 4 veces el Salario Mínimo Nacional (SMN) portugués, lo que equivale a aproximadamente entre 3.280 y 3.680 €/mes; los extractos bancarios de los últimos 3 meses; la última declaración de la renta; el certificado de antecedentes penales apostillado, con una validez de 90 días; la acreditación de alojamiento; un seguro médico con una cobertura mínima de aproximadamente 30.000 €; y el Número de Identificação Fiscal (NIF) portugués. Los trabajadores por cuenta ajena deben aportar además el contrato de trabajo y una carta del empleador; los autónomos, contratos con clientes extranjeros, facturas y el alta como *trabalhador independente*; y los propietarios de empresa, la documentación registral correspondiente.\n\nEn cuanto al proceso, se inicia en el consulado (con una tasa de aproximadamente 110 €, un plazo de resolución de hasta 60 días, y un visado válido por 4 meses y 2 entradas), y continúa en Portugal ante la AIMA (con una tasa de aproximadamente 177,08 €, la obtención del Número de Identificação da Segurança Social —NISS—, y un plazo oficial de hasta 90 días que en la práctica acumula varios meses de retraso). En total, las tasas suman aproximadamente 287 €.\n\nLa validez del permiso es de 2 años en la concesión inicial, 3 años en la primera renovación, 3 años en las renovaciones sucesivas, y da acceso a la residencia permanente a los 5 años.\n\nEn cuanto a los familiares, es posible solicitar la reagrupación de manera simultánea a la solicitud principal, acreditando los medios económicos correspondientes por cada miembro adicional.\n\nEn materia fiscal, Portugal aplica el IRS (Imposto sobre o Rendimento das Pessoas Singulares), un impuesto progresivo con 9 tramos que van del 12,5% al 48%, además de un adicional de solidaridad del 2,5% o el 5% según el nivel de renta. El antiguo régimen NHR se cerró en 2024 y fue sustituido por el IFICI, conocido informalmente como \"NHR 2.0\", que ofrece un tipo fijo del 20% más la exención de la renta obtenida en el extranjero, pero únicamente para quienes desarrollan actividades consideradas \"altamente cualificadas\" (investigación y desarrollo, docencia universitaria, startups certificadas, perfiles STEM cualificados). Esto implica que la mayoría de freelancers \"genéricos\" no cumplen los requisitos y acaban tributando por el régimen general. Entre los errores más frecuentes están creer que el visado D8 da acceso automático al IFICI, no tramitar a tiempo el NIF y el NISS, e ignorar que superar los 183 días de estancia obliga a declarar la renta mundial.",
      "sources": [
        {
          "label": "Visto de nómada digital (D8) Portugal: requisitos – Jobbatical",
          "url": "https://www.jobbatical.com/blog/portugal-digital-nomad-visa-d8-guide"
        },
        {
          "label": "Portugal: new special tax regime (IFICI / NHR 2.0) – Vialto Partners",
          "url": "https://vialtopartners.com/regional-alerts/portugal-global-mobility-tax-new-special-tax-regime-ifici-or-nhr-2-0"
        },
        {
          "label": "Portugal NHR 2.0 (IFICI): el nuevo régimen fiscal para profesionales cualificados",
          "url": "https://portugalresidencyadvisors.com/es/regimen-de-residencia-no-habitual-de-portugal-2025-nhr-2-0"
        },
        {
          "label": "Cómo solicitar el visto D8 para nómadas digitales",
          "url": "https://prime-legalfirm.com/en/how-to-apply-for-the-d8-visa-for-digital-nomads-in-portugal/"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los hospitales de referencia se encuentran el Hospital da Luz Lisboa, la red CUF (con centros como Descobertas y Tejo) y el Hospital Particular de Lisboa.\n\nEn cuanto a seguros, las aseguradoras locales (Médis, Multicare, Allianz Portugal) ofrecen primas de entre 30 y 130 €/mes para edades de 40 a 50 años, y de entre 70 y 200 €/mes para edades de 55 a 65 años; para una pareja de 55 a 65 años, la prima combinada ronda entre 250 y 380 €/mes. Las aseguradoras internacionales (Cigna, Bupa) pueden llegar a costar entre 700 y 1.200 €/mes para una pareja de 60 años. SafetyWing mantiene precios similares a los indicados para Valencia.\n\nLos precios de bolsillo orientativos son: consulta de médico general, entre 40 y 100 €; consulta con especialista, entre 65 y 180 € (en CUF, entre 89 y 125 €); urgencias, entre 80 y 200 €; hospitalización, entre 300 y 800 €/noche (en CUF, entre 275 y 745 €); y una noche en UCI, entre 880 y 1.765 €.",
      "sources": [
        {
          "label": "Hospital da Luz Lisboa",
          "url": "https://www.hospitaldaluz.pt/lisboa/en/"
        },
        {
          "label": "Urgent Care 24h – Hospital da Luz Lisboa",
          "url": "https://www.hospitaldaluz.pt/lisboa/en/services/urgent-care-24-hours"
        },
        {
          "label": "Preçários CUF",
          "url": "https://www.cuf.pt/clientes-e-acompanhantes/precarios-cuf"
        },
        {
          "label": "Insurance for Nomads, by Nomads – SafetyWing",
          "url": "https://safetywing.com/nomad-insurance"
        }
      ]
    },
    "barrios": {
      "content": "Entre los barrios recomendados destacan:\n1. **Mouraria/Intendente** — de carácter local y auténtico, con alquileres de entre 1.000 y 1.300 €/mes; céntrico.\n2. **Príncipe Real** — elegante y con ambiente boutique, con alquileres de entre 1.200 y 1.600 €/mes.\n3. **Arroios/Anjos** — en auge y más asequible, con alquileres de entre 900 y 1.200 €/mes.\n4. **Santos/Alcântara** — creativo y junto al río, con alquileres de entre 1.000 y 1.300 €/mes.\n5. **Alfama** — histórico y con calles empinadas, con pocos coworkings disponibles.\n6. **Campo de Ourique/Marvila** — zonas emergentes, por debajo de la media de precios (entre 1.200 y 1.700 €/mes para un T1 céntrico).\n\nEn coworkings, destacan Coworklisboa (en Mouraria, aproximadamente 180 €/mes), Second Home (en el Mercado da Ribeira, entre 250 y 350 €/mes), LACS (en Alcântara y Chiado, entre 220 y 350 €/mes), Heden (con bono de día de entre 18 y 25 €) y Factory Lisboa (en Príncipe Real, entre 200 y 280 €/mes). En el conjunto del mercado, un puesto flexible (*hot desk*) cuesta entre 150 y 200 €/mes, y un puesto fijo (*dedicated desk*), entre 220 y 320 €/mes.",
      "sources": [
        {
          "label": "¿Dónde alojarse en Lisboa como nómada digital? – Holafly",
          "url": "https://esim.holafly.com/es/blog/nomada-digital/donde-alojarse-lisboa/"
        },
        {
          "label": "Coworking Space Lisbon – Second Home",
          "url": "https://secondhome.io/coworking-space-lisbon/"
        },
        {
          "label": "Offices and Coworking in Lisbon, Cascais & Porto – LACS",
          "url": "https://www.lacs.pt/en/"
        }
      ]
    }
  },
  "bali": {
    "visaFiscal": {
      "content": "El trámite principal es el Remote Worker Visa E33G, que da lugar al KITAS y se solicita a través de la plataforma de Inmigración indonesia, habitualmente con el apoyo de un agente local.\n\nEntre los documentos exigidos están: unos ingresos anuales de al menos 60.000 $, procedentes al 100% de fuentes extranjeras; un saldo bancario mínimo de 2.000 $ con una antigüedad de 3 meses; el pasaporte con una validez mínima de 18 meses; una fotografía, el currículum y un seguro médico. Los trabajadores por cuenta ajena deben aportar una carta del empleador junto con el contrato. Para los freelancers, la situación normativa es poco clara y existe riesgo de rechazo, por lo que se recomienda asesoría previa. Una restricción clave del visado es que un solo pago procedente de una fuente indonesia invalida el permiso.\n\nEl proceso sigue estos pasos: verificación de la documentación, preparación de los documentos, solicitud online (normalmente a través de un agente), entrada al país dentro de los 90 días siguientes a la aprobación, y finalmente la obtención del KITAS junto con la toma de datos biométricos. Las tasas incluyen entre 8 y 15 millones de rupias indonesias (IDR) de honorarios del agente, más entre 1 y 2 millones de IDR de tasas gubernamentales, lo que supone un total aproximado de entre 750 y 1.150 $. El plazo habitual es de 4 a 8 semanas (entre 10 y 12 semanas en casos complejos), y la oficina competente en Bali es el Kantor Imigrasi Kelas I Khusus TPI Ngurah Rai.\n\nEl permiso tiene una validez de 1 año y no es renovable ni extensible: al finalizar, es necesario salir del país y volver a solicitarlo desde cero.\n\nEn cuanto a los familiares, deben presentar solicitudes separadas, cada una con su propia documentación.\n\nEn materia fiscal, los residentes tributan por su renta mundial. Los tramos para 2026 son: 5% hasta 60 millones de IDR, 15% entre 60 y 250 millones de IDR, 25% entre 250 y 500 millones de IDR, 30% entre 500 millones y 5.000 millones de IDR, y 35% a partir de 5.000 millones de IDR. Es obligatorio obtener el Número de Identificación Fiscal (NPWP) y presentar la declaración anual. Según la norma PER-23/PJ/2025, los titulares de un KITAS pueden ser considerados residentes fiscales desde el primer día, en aplicación del criterio de \"sustancia económica\". Entre los errores más comunes están usar el visado de turista B211A para teletrabajar (lo que está provocando un aumento de las deportaciones), creer que el E33G se puede extender como un sello de turista, e ignorar los convenios de doble imposición aplicables.",
      "sources": [
        {
          "label": "E33G Remote Worker Visa Indonesia 2026: Requirements, Rules, and Tax – Emerhub",
          "url": "https://emerhub.com/indonesia/visas/remote-worker-visa/"
        },
        {
          "label": "Indonesia Tax Residency: Are You a Tax Resident? – Emerhub",
          "url": "https://emerhub.com/indonesia/tax-residency/"
        },
        {
          "label": "Kantor Imigrasi Kelas I Khusus TPI Ngurah Rai (oficina oficial)",
          "url": "https://ngurahrai.imigrasi.go.id/"
        },
        {
          "label": "E33G Remote Worker Visa Bali 2026: Real Cost & Timeline – Knowmads Bali",
          "url": "https://knowmadsbali.com/en/blog/e33g-remote-worker-visa-bali-2026-real-cost-timeline"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los hospitales de referencia están BIMC (de estándar internacional y con personal 100% angloparlante), Siloam (moderno y entre un 30% y un 50% más barato que BIMC) y Kasih Ibu (orientado a la relación calidad-precio).\n\nEn cuanto a seguros, SafetyWing mantiene precios similares a los indicados anteriormente; el seguro público BPJS no constituye una opción práctica para nómadas digitales.\n\nLos precios de bolsillo orientativos son: en BIMC, consulta de entre 50 y 75 $ y hospitalización de entre 188 y 313 $/noche; en Siloam, consulta de entre 25 y 38 $ y hospitalización de entre 94 y 188 $/noche; y en Kasih Ibu, consulta de entre 16 y 25 $ y hospitalización de entre 50 y 94 $/noche.\n\nRespecto a las vacunas, no se exige ninguna obligatoria viniendo desde España, salvo la de la fiebre amarilla en caso de tránsito por un país endémico; se recomiendan las de hepatitis A y B, tifoidea y encefalitis japonesa, y existe riesgo de dengue durante todo el año (en España está disponible la vacuna QDENGA).",
      "sources": [
        {
          "label": "Best Hospitals in Bali for Foreigners (2026 Guide)",
          "url": "https://insurance-indonesia.com/best-hospitals-bali/"
        },
        {
          "label": "Bali Hospitals Compared 2026: Cost & Quality Guide",
          "url": "https://balizero.com/living/hospitals-comparison-bali"
        },
        {
          "label": "Insurance for Nomads, by Nomads – SafetyWing",
          "url": "https://safetywing.com/nomad-insurance"
        }
      ]
    },
    "barrios": {
      "content": "Entre las zonas recomendadas destacan:\n1. **Canggu** (Batu Bolong / Berawa / Pererenan) — la \"capital nómada\", con un coste para una pareja de entre 1.400 y 2.300 €/mes; a 40 minutos del aeropuerto.\n2. **Ubud** — cultural y tranquilo, con villas desde menos de 90 €/noche; a 1 hora del aeropuerto; no es la opción más recomendable para quien busca vida nocturna o viaja con niños.\n3. **Seminyak** — refinado, con beach clubs y precios elevados; a entre 20 y 30 minutos del aeropuerto.\n4. **Uluwatu** — de acantilados, apto para surf avanzado, con conexión a internet menos estable; cerca del aeropuerto.\n5. **Sanur** — tranquilo y orientado a familias, a unos 25 minutos del aeropuerto.\n\nEn coworkings, Dojo Bali ofrece un bono de día por 150.000 IDR y una tarifa mensual de hasta 2,7 millones de IDR, con piscina incluida; Outpost, presente en Canggu y Ubud, cuesta entre 49 y 210 $/mes; Tribal es gratuito con consumo mínimo, y a partir de ahí cuesta 100.000 IDR; también destacan BWork Bali, Kinship Studio (bono de día de 250.000 IDR) y ZIN Café.",
      "sources": [
        {
          "label": "¿Dónde alojarse en Bali como nómada digital? – Holafly",
          "url": "https://esim.holafly.com/es/blog/nomada-digital/donde-alojarse-bali/"
        },
        {
          "label": "Guía para nómadas digitales en Canggu, Bali – Outsite",
          "url": "https://www.outsite.co/blog/digital-nomad-guide-to-canggu-bali"
        },
        {
          "label": "Dojo Bali Coworking",
          "url": "https://dojobali.org/"
        },
        {
          "label": "Coworking Space at Outpost Canggu, Bali – Coworker",
          "url": "https://www.coworker.com/indonesia/bali/outpost-canggu"
        }
      ]
    }
  },
  "bangkok": {
    "visaFiscal": {
      "content": "El trámite principal es la Destination Thailand Visa (DTV), gestionada por el Ministerio de Asuntos Exteriores tailandés a través de las embajadas y consulados (en Madrid, en la calle Joaquín Costa 29).\n\nExisten varias categorías, cada una con sus propios documentos. La DTV1, dirigida a nómadas digitales y freelancers, exige un pasaporte biométrico con una validez mínima de 6 meses, un depósito bancario de al menos 500.000 baht tailandeses (THB) con una antigüedad mínima de 3 meses, y un certificado de empleo (o, en el caso de los freelancers, registros fiscales, contratos y facturas). La DTV2, orientada al \"soft power\" (Muay Thai, cocina, actividades de salud), requiere la aceptación de una institución reconocida. La DTV3, para dependientes, exige una copia de la DTV del titular principal junto con el certificado de matrimonio o de nacimiento correspondiente.\n\nEl proceso comienza con una solicitud online tipo eVisa, que puede dar lugar a requerimientos adicionales de documentación (entre el día 3 y el 7), seguida de una resolución en un plazo de entre 3 y 7 días hábiles (aunque en algunas embajadas puede tardar más de un mes). Tras la entrada al país es obligatorio presentar un informe cada 90 días, y es posible solicitar una extensión de hasta 180 días continuos por cada entrada. La tasa es de 10.000 THB (aproximadamente entre 260 y 280 €, aunque varía según la embajada; en Estados Unidos asciende a 400 $).\n\nAnte una denegación, conviene identificar la causa concreta, reforzar la documentación aportada y, si es posible, volver a intentarlo en otra embajada.\n\nEn materia fiscal, se considera residente a quien permanece 180 días al año en el país. Los tramos para 2026 son: exento hasta 150.000 THB, y progresivo del 5% al 35% hasta los 4 millones de THB o más. Aplicando las deducciones estándar, el tipo efectivo ronda el 12,5% para unos ingresos de aproximadamente 40.000 $/año. Desde 2024, la renta extranjera que se remite a Tailandia en el mismo año en que se genera es gravable; si se mantiene fuera del país o se remite en un año posterior a su generación, generalmente queda exenta. Los errores más frecuentes son creer que basta con mantener el dinero \"fuera\" de Tailandia para evitar el impuesto —cuando lo que realmente determina la tributación es el año en que se realiza la transferencia— y no llevar la cuenta de los 180 días de estancia.",
      "sources": [
        {
          "label": "Destination Thailand Visa (DTV) – Royal Thai Embassy, Madrid",
          "url": "https://madrid.thaiembassy.org/en/publicservice/dtv"
        },
        {
          "label": "Destination Thailand Visa (DTV) 2026: guía y requisitos oficiales – ThaiEmbassy.com",
          "url": "https://www.thaiembassy.com/thailand-visa/dtv-visa-thailand"
        },
        {
          "label": "Thailand Remittance Tax 2026: Do Expats Owe Tax on Foreign Income?",
          "url": "https://www.terms.law/Thai/tax/remittance-tax-2024/"
        },
        {
          "label": "Thailand: tax authorities clarify application of the 'remittance rule' – BDO",
          "url": "https://www.bdo.global/en-gb/insights/tax/world-wide-tax/thailand-tax-authorities-clarify-application-of-the-%E2%80%98remittance-rule%E2%80%99-for-foreign-source-income-of"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los hospitales de referencia están el Bumrungrad International (el más conocido, con acreditación JCI), el Samitivej (también acreditado JCI, con especial fortaleza en pediatría y medicina familiar) y el BNH Hospital (más asequible).\n\nEn cuanto a seguros, para una persona de 30 años las opciones económicas rondan entre 70 y 250 $, y Cigna entre 150 y 360 $; a los 40 años, entre 100 y 300 $ (o entre 200 y 480 $ con Cigna); y a partir de los 60 años, Cigna puede superar los 400-950 $. SafetyWing mantiene precios similares a los indicados anteriormente.\n\nEl sistema público es muy económico (una urgencia con radiografía cuesta en torno a 15 €), aunque presenta barreras de idioma; en cambio, la sanidad privada puede llegar a costar entre 50 y 100 veces más por el mismo procedimiento: una apendicectomía ronda los 6.000 €, y un bypass cardíaco en el Bumrungrad cuesta entre 22.800 y 39.400 $, lo que subraya la importancia de contar con un seguro adecuado.\n\nSe recomiendan las vacunas de hepatitis A y B, tifoidea y protección frente al dengue.",
      "sources": [
        {
          "label": "Top 5 Hospitals Bangkok: Bumrungrad, BNH & More (2026)",
          "url": "https://insurance-thailand.com/best-hospitals-bangkok-foreigners/"
        },
        {
          "label": "Cardiac Surgery in Thailand – Bumrungrad International: Costs & Success Rates",
          "url": "https://my1health.com/articles/cardiac-surgery-in-thailand-bumrungrad-international-hospital"
        },
        {
          "label": "Insurance for Nomads, by Nomads – SafetyWing",
          "url": "https://safetywing.com/nomad-insurance"
        }
      ]
    },
    "barrios": {
      "content": "Entre las zonas recomendadas destacan:\n1. **Sukhumvit** — vibrante y con excelente conexión de BTS (tren elevado), con precios de entre 15.000 y 32.000 THB según el tramo de la avenida.\n2. **Silom** — el barrio financiero, con precios de entre 25.000 y 55.000 THB.\n3. **Ari** — residencial, tranquilo y muy seguro, con precios asequibles.\n4. **Thonglor** — de moda y con buen ambiente para hacer networking, aunque caro.\n5. **Sathorn** — diplomático y de lujo, con precios de entre 25.000 y 35.000 THB.\n6. **On Nut/Rama 9** — la mejor relación calidad-precio, con precios de entre 15.000 y 24.000 THB.\n\nEn coworkings, The Hive Thonglor ofrece un bono de día de aproximadamente 400 THB y una tarifa mensual de aproximadamente 4.500 THB; WeWork The Parq, desde aproximadamente 9.000 THB; JustCo Samyan Mitrtown, aproximadamente 5.000 THB/mes; The Work Loft Silom, aproximadamente 4.000 THB; True Digital Park, desde aproximadamente 4.000 THB (un campus orientado a startups tecnológicas); y The Urban Office Sukhumvit, aproximadamente 3.500 THB.",
      "sources": [
        {
          "label": "¿Dónde alojarse en Bangkok como nómada digital? – Holafly",
          "url": "https://esim.holafly.com/es/blog/nomada-digital/donde-alojarse-bangkok/"
        },
        {
          "label": "Mejores barrios para nómadas digitales de Bangkok – Nomada.co",
          "url": "https://nomada.co/es/tailandia/mejores-barrios-bangkok/"
        },
        {
          "label": "The Hive Thonglor: Coworking Space in Bangkok – Nomadwise",
          "url": "https://www.nomadwise.io/coworking/thailand-bangkok-the-hive-thonglor"
        }
      ]
    }
  },
  "chiang-mai": {
    "visaFiscal": {
      "content": "Chiang Mai se acoge al mismo esquema que Bangkok para el DTV (Destination Thailand Visa), cuya tasa es de 10.000 THB. Entre los documentos comunes que se exigen figuran el pasaporte, una fotografía y un extracto bancario con un saldo igual o superior a 500.000 THB mantenido durante los últimos tres meses (no se aceptan fondos en criptomonedas ni en productos de inversión). Si el solicitante es dueño de una empresa, debe aportar además una carta explicativa, el certificado de constitución de la sociedad y la declaración del impuesto de sociedades. Los familiares —cónyuge e hijos solteros menores de 20 años— deben presentar una solicitud y pagar una tasa por separado, acompañadas del certificado de matrimonio o de nacimiento correspondiente.\n\nEl visado tiene una vigencia de 5 años con entradas múltiples, y cada entrada permite una estancia de 180 días, ampliable con una extensión adicional de 180 días por un coste de 1.900 THB.\n\nEn materia fiscal, permanecer 180 días en el país convierte a la persona en residente fiscal. Desde 2024, a raíz de las órdenes Por.161 y Por.162, toda renta extranjera que se remite a Tailandia tributa con independencia del momento en que se generó, salvo la renta obtenida antes de 2024, que queda excluida si se puede documentar adecuadamente. Los tramos del impuesto sobre la renta van del 5% (para ingresos entre 150.000 y 300.000 THB) hasta el 35% (para ingresos superiores a 5 millones de THB). El régimen LTR (Long Term Resident), que es distinto del DTV, sí exime de tributación la renta extranjera para perfiles de altos ingresos, pero el DTV no incorpora esa exención. Los errores más frecuentes son mezclar fondos generados antes y después de 2024 sin poder demostrarlo documentalmente, olvidar que los reintegros hechos con una tarjeta extranjera también cuentan como remesa, y confundir el programa Thailand Elite (que ofrece privilegios de estancia) con una exención fiscal, que no concede.",
      "sources": [
        {
          "label": "Destination Thailand Visa (DTV) – Thai e-Visa, portal oficial",
          "url": "https://www.thaievisa.go.th/visa/dtv-visa"
        },
        {
          "label": "Comprehensive Overview of Order No. Por.161/2566 and No. Por.162/2566 – Mahanakorn Partners",
          "url": "https://mahanakornpartners.com/comprehensive-overview-of-order-no-por-161-2566-and-no-por-162-2566-on-personal-income-tax-for-foreign-sourced-income/"
        },
        {
          "label": "Tax benefits for Long-Term Resident (LTR) visa holders – HLB Thailand",
          "url": "https://www.hlbthai.com/tax-benefits-for-long-term-resident-ltr-visa-holders/"
        },
        {
          "label": "DTV Visa Thailand 2026 – Siam Legal International",
          "url": "https://www.siam-legal.com/thailand-visa/dtv-visa-thailand.php"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los hospitales de referencia en la ciudad están el Bangkok Hospital Chiang Mai, que atiende las 24 horas, el Chiangmai Ram Hospital y el McCormick/Sriphat Medical Center, este último vinculado a la universidad y valorado por su buena relación calidad-precio.\n\nEn cuanto a seguros, SafetyWing cuesta entre 56 y 197 dólares cada cuatro semanas según la edad del asegurado; Cigna Global se sitúa entre 202 y 982 dólares al mes para personas de entre 33 y 65 años; e IMG oscila entre 148 y 4.903 dólares al mes para el tramo de 24 a 65 años, con un salto de precio marcado a partir de los 60.\n\nEl gasto de bolsillo para una consulta general varía entre 150 y 1.200 THB según el centro elegido; no se ha encontrado un dato fiable sobre el coste de urgencias u hospitalización. Ninguna vacuna es obligatoria para entrar al país, aunque se recomienda estar al día con hepatitis A y B, tétanos-difteria y fiebre tifoidea.",
      "sources": [
        {
          "label": "International Medical Services Department – Bangkok Hospital Chiang Mai (oficial)",
          "url": "https://www.bangkokhospital-chiangmai.com/en/our-services/international-medical-services-department/"
        },
        {
          "label": "Best Hospitals in Chiang Mai for Foreigners – ExpatDen",
          "url": "https://www.expatden.com/thailand/hospitals-in-chiang-mai/"
        },
        {
          "label": "Best Health Insurance for Digital Nomads – Digital Nomad Index",
          "url": "https://digitalnomadindex.com/nomad-insurance"
        }
      ]
    },
    "barrios": {
      "content": "Nimman es el barrio de moda, con un estudio entre 400 y 650 euros al mes y un piso de una habitación entre 550 y 900 euros. Old City es la zona histórica y de ambiente mochilero, con alquileres entre 300 y 700 euros. Santitham resulta la opción más económica, entre 200 y 400 euros, aproximadamente un 30% más barata que las anteriores. Hang Dong es un barrio tranquilo y orientado a familias, con precios entre 400 y 600 euros y a 25-30 minutos del centro. Mae Rim, de carácter rural, se considera la zona más segura de la ciudad, situada a 35-40 minutos del centro. Por último, Chang Khlan y la ribera del río forman la zona comercial y turística.\n\nEntre los espacios de coworking destacan Yellow Coworking, en Nimman, con acceso 24 horas para socios; Punspace, con dos sedes y también acceso 24 horas para socios; Alt_ChiangMai, con un pase diario de 320 THB y una tarifa mensual de aproximadamente 4.000 THB; Hub53, que combina coliving y coworking; Heartwork, una opción económica que cierra los domingos; y CAMP at Maya Mall, abierto de 10 a 22 horas.",
      "sources": [
        {
          "label": "Where to stay in Chiang Mai – Nomadic Notes",
          "url": "https://www.nomadicnotes.com/where-to-stay-in-chiang-mai/"
        },
        {
          "label": "Where to Live in Chiang Mai: Neighborhood Guide – CNX Local",
          "url": "https://cnxlocal.com/the-ultimate-chiang-mai-neighborhood-guide-for-digital-nomads-and-expats/"
        },
        {
          "label": "Coworking spaces en Chiang Mai – Coworker",
          "url": "https://www.coworker.com/thailand/chiang-mai"
        },
        {
          "label": "Best Chiang Mai Coworking & Meeting Spaces – NomadAgent",
          "url": "https://nomadagent.online/thailand/chiang-mai-coworking"
        }
      ]
    }
  },
  "medellin": {
    "visaFiscal": {
      "content": "El trámite correspondiente es la Visa V — Nómada Digital, que se solicita a través de la plataforma SITAC y, una vez concedida, se formaliza con la cédula de extranjería ante Migración Colombia.\n\nEl ingreso mínimo exigido equivale a 3 SMMLV, es decir, COP $5.252.715 al mes (aproximadamente 1.400 dólares), que debe acreditarse mediante extractos bancarios de los últimos tres meses. Si el solicitante es empleado, necesita el contrato de trabajo, una carta del empleador que confirme que el puesto es 100% remoto y el certificado de existencia de la empresa, apostillado. Si trabaja como autónomo, debe presentar sus contratos internacionales junto con los extractos bancarios. Si es emprendedor o dueño de su propio negocio, tiene que aportar una carta de motivación y evidencia tanto de sus recursos económicos como del capital humano de su empresa. En todos los casos es obligatorio contar con una póliza que cubra accidentes, enfermedad, maternidad, invalidez, hospitalización y repatriación; un seguro de viaje básico no es suficiente para cumplir este requisito.\n\nEn cuanto a las tasas, el estudio de la solicitud cuesta 55 dólares y la expedición 178 dólares, lo que suma un total de 233 dólares; a esto se añade el registro ante Migración Colombia, de aproximadamente 75.000 COP, la cédula, de unos 246.000 COP, y el seguro anual, que oscila entre 800 y 2.000 dólares. El proceso se realiza íntegramente en línea a través de SITAC, con una resolución que tarda entre 5 y 15 días hábiles (y entre 10 y 15 días adicionales si se requiere subsanar documentación), de modo que el trámite completo suele extenderse entre 3 y 5 semanas; una vez aprobada, existe una ventana de 30 días para descargar la visa.\n\nLa visa tiene una validez de hasta 2 años, renovable, pero no computa para obtener la residencia permanente. Además, solo autoriza a trabajar para empresas extranjeras. Los familiares —cónyuge o pareja e hijos menores de 25 años— pueden obtener una visa de beneficiario con la misma vigencia, aunque deben presentar su propia documentación.\n\nEn materia fiscal, se adquiere la condición de residente al permanecer 183 días, no necesariamente consecutivos, dentro de un periodo de 365 días. Los tramos del impuesto de renta, expresados en UVT (conviene confirmar el valor de la UVT vigente cada año), son los siguientes: de 0 a 1.090 UVT, tarifa del 0%; hasta 1.700 UVT, 19%; hasta 4.100 UVT, 28%; hasta 8.670 UVT, 33%; hasta 18.970 UVT, 35%; hasta 31.000 UVT, 37%; y por encima de 31.000 UVT, 39%. Los errores más comunes son creer que vivir fuera de Colombia elimina automáticamente la obligación tributaria cuando el centro de intereses económicos y vitales sigue estando en el país, y confundir el domicilio civil con el domicilio fiscal.",
      "sources": [
        {
          "label": "Tipos de Visa – Cancillería de Colombia (portal oficial)",
          "url": "https://www.cancilleria.gov.co/atencion-y-servicio-al-ciudadano/tramites-y-servicios/visa/tipos-de-visa"
        },
        {
          "label": "Colombia Digital Nomad Visa 2026 – Genki Guide",
          "url": "https://guide.genki.world/colombia-digital-nomad-visa-the-ultimate-guide/"
        },
        {
          "label": "UVT 2026 en Colombia: nuevo valor y su impacto en impuestos – Actualícese",
          "url": "https://actualicese.com/uvt-2026/"
        },
        {
          "label": "Retención en la fuente 2026: tabla y tarifas – Buk",
          "url": "https://www.buk.co/blog/retencion-en-la-fuente-2026"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los centros hospitalarios de referencia destacan el Hospital Pablo Tobón Uribe, que figura entre los 250 mejores del mundo según un ranking de una revista estadounidense, y la Clínica Las Américas, que cuenta con oficina de atención internacional.\n\nPara los seguros, aplican las mismas opciones internacionales de siempre (SafetyWing, Cigna Global, IMG). Las prepagadas locales —SURA, Colsanitas y Allianz Colombia— resultan más económicas para quienes residen en el país durante periodos largos, aunque no se ha encontrado un desglose de precios fiable para incluir aquí.\n\nEl gasto de bolsillo por consulta oscila entre 35.000 y 250.000 COP, y afiliarse a la EPS cuesta aproximadamente 110.000 COP al mes. En cuanto a vacunas, existe alerta de fiebre amarilla para determinadas zonas de riesgo dentro de Colombia; conviene confirmar con el consulado si esta recomendación aplica al viajero según su itinerario.",
      "sources": [
        {
          "label": "Un hospital de Medellín está entre los 250 mejores del mundo – El Colombiano",
          "url": "https://www.elcolombiano.com/medellin/hospital-pablo-tobon-uribe-medellin-uno-de-los-250-mejores-del-mundo-JN33942478"
        },
        {
          "label": "Pablo Tobón Uribe Hospital – Wikipedia",
          "url": "https://en.wikipedia.org/wiki/Pablo_Tob%C3%B3n_Uribe_Hospital"
        },
        {
          "label": "Ranking Intellat de mejores hospitales y clínicas de América Latina 2025",
          "url": "https://intellat.com/wp-content/uploads/2025/09/Ranking-Calidad-2025.pdf"
        }
      ]
    },
    "barrios": {
      "content": "El Poblado es el barrio más internacional y también el más caro, con alquileres entre 850 y 1.200 dólares al mes. Laureles ofrece un ambiente más auténtico y universitario, con precios entre 540 y 730 dólares, entre un 30% y un 40% más barato que El Poblado. Envigado es tranquilo y familiar, con rentas entre 560 y 855 dólares. Sabaneta funciona como un pueblo dentro de la ciudad, con alquileres desde 490 dólares. Belén y la zona occidental son de clase media, con poca presencia de extranjeros, y los precios se mueven entre 1,5 y 2 millones de COP.\n\nEn cuanto a coworkings, Selina Medellín cobra 10 dólares el día y entre 75 y 120 dólares al mes; WeWork cobra entre 25 y 35 dólares el día y entre 200 y 300 dólares al mes; Atomhouse, en Laureles, cuesta 12 dólares el día y entre 80 y 150 dólares al mes, con una conexión de más de 200 Mbps; Tinkko tiene planes mensuales de entre 51 y 169 dólares; y Casa Co cobra entre 10 y 15 dólares el día y entre 70 y 110 dólares al mes.",
      "sources": [
        {
          "label": "Mejores barrios de Medellín para expats y nómadas digitales – Mifinka",
          "url": "https://mifinka.com/blog/mejores-barrios-medellin"
        },
        {
          "label": "Renta Promedio en Medellín 2026 por Barrio – Colombia Move",
          "url": "https://colombiamove.com/blog/average-rent-medellin-neighborhood-prices/"
        },
        {
          "label": "Best Coworking Spaces in Medellín 2026 – Vidala",
          "url": "https://vidala.co/guides/medellin-coworking/"
        },
        {
          "label": "Coworking spaces en Medellín – Coworker",
          "url": "https://www.coworker.com/colombia/medellin/selina-cowork-medellin/review-14392"
        }
      ]
    }
  },
  "ciudad-de-mexico": {
    "visaFiscal": {
      "content": "México no cuenta con una figura oficial de \"visa de nómada digital\"; el trámite aplicable es la Visa de Residente Temporal, que se solicita en el consulado mexicano correspondiente (a través del sistema SRE/MiConsulado) y que, una vez obtenida, se canjea ante el Instituto Nacional de Migración (INM).\n\nLos documentos requeridos son el pasaporte, el formulario de solicitud, una fotografía y la prueba de solvencia económica, cuyos requisitos concretos varían según el consulado. Quien cobra directamente de una empresa mexicana necesita un trámite distinto, no cubierto por esta vía; en cambio, quien trabaja como freelance debe aportar la misma evidencia de solvencia que cualquier otro solicitante, sin que exista una vía diferenciada para su caso.\n\nPara 2026, la visa consular cuesta 56 dólares, el canje por un año cuesta MXN $11.141, y la renovación tiene el mismo coste (o un descuento del 50% en determinados supuestos). La validez de la residencia temporal puede llegar hasta 4 años. Para los familiares, existen trámites de vínculo familiar que requieren la firma de ambas partes; conviene consultar los requisitos específicos con el consulado correspondiente.\n\nEn el plano fiscal, se es residente si se permanece 183 días en México o si el centro de intereses vitales se encuentra en el país. La tabla del ISR 2026 (sobre base anual, en MXN) arranca en 1,92% para ingresos de hasta $10.135 y sube progresivamente hasta el 35% para ingresos superiores a $5.107.704. El régimen RESICO (Régimen Simplificado de Confianza) aplica a quienes facturan hasta $3,5 millones de MXN al año (aproximadamente 205.000 dólares), con una tasa de ISR de entre el 1% y el 2,5%, y exige contar con RFC, CURP, domicilio fiscal y firma electrónica. El riesgo principal es que está prohibido tributar en RESICO si se perciben ingresos procedentes de Regímenes Fiscales Preferentes (REFIPRES); si el SAT audita y detecta esta situación, reclasifica la actividad a las tasas generales, que pueden llegar al 35%, con los recargos correspondientes. El error más habitual es creer que facturar únicamente como \"exportación de servicios\" exime de declarar el resto de los ingresos: lo que activa la obligación de tributar por la renta mundial es la residencia fiscal, no la ubicación del dinero.",
      "sources": [
        {
          "label": "Visa de residencia temporal – Secretaría de Relaciones Exteriores (gob.mx, oficial)",
          "url": "https://www.gob.mx/sre/acciones-y-programas/visa-de-residencia-temporal"
        },
        {
          "label": "Visa Residente Temporal por Solvencia Económica – Consulado de México en Houston (oficial)",
          "url": "https://consulmex.sre.gob.mx/houston/images/Visas/2025/residente-temporal-solvencia-economica-2025.pdf"
        },
        {
          "label": "RESICO personas físicas 2026: tabla de tasas ISR – Alegra",
          "url": "https://blog.alegra.com/mexico/resico-personas-fisicas/"
        },
        {
          "label": "RESICO 2026: Guía Completa de tasas y obligaciones – SAT Fácil",
          "url": "https://www.satfacil.com.mx/blog/regimen-simplificado-confianza-resico-guia-2026"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los hospitales de referencia figuran Médica Sur, acreditado por la JCI y situado en el puesto número 1 del ranking de Newsweek de 2024, además de estar afiliado a la Mayo Clinic; el Centro Médico ABC, también acreditado por la JCI y destacado en cardiología y oncología; y el Hospital Ángeles, la mayor cadena hospitalaria privada del país.\n\nAdemás de las aseguradoras internacionales genéricas, GNP y AXA México ofrecen Gastos Médicos Mayores (GMM) con primas anuales que van, según la edad, de $14.000 a $24.000 MXN entre los 19 y 29 años, de $18.000 a $32.000 MXN entre los 30 y 39, de $24.000 a $42.000 MXN entre los 40 y 49, de $36.000 a $60.000 MXN entre los 50 y 59, y de $55.000 a $90.000 MXN entre los 60 y 64 años.\n\nEl gasto de bolsillo por una consulta privada oscila entre $300 y $600 MXN. Como alternativa gratuita, desde julio de 2024 existe IMSS-Bienestar para las personas no afiliadas al sistema de seguridad social. En cuanto a vacunas, se recomiendan (sin ser obligatorias) las de hepatitis A y B y tétanos-difteria.",
      "sources": [
        {
          "label": "El mejor hospital de México – Médica Sur (oficial)",
          "url": "https://medicasur.com.mx/elmejorhospital"
        },
        {
          "label": "El mejor hospital de México – Centro Médico ABC (oficial)",
          "url": "https://centromedicoabc.com/en/digital-magazine/abc-medical-center-the-best-hospital-in-mexico/"
        },
        {
          "label": "Los 10 mejores hospitales de México, edición 2024 – Saludiario",
          "url": "https://www.saludiario.com/mejores-hospitales-de-mexico-2024/"
        }
      ]
    },
    "barrios": {
      "content": "Roma Norte es un barrio social y muy caminable, con alquileres entre 900 y 1.600 dólares al mes. Condesa es más tranquilo y arbolado, con precios entre 1.000 y 1.800 dólares. Polanco es la zona premium y corporativa, con rentas de entre 1.400 y 3.500 dólares. Juárez es un barrio central, de ambiente LGBTQ+ y con seguridad variable según la calle, con precios entre 800 y 1.300 dólares. Coyoacán conserva un carácter colonial y cultural, con alquileres entre 500 y 800 dólares. Narvarte ofrece la mejor relación calidad-precio, con rentas entre 650 y 950 dólares. Del Valle es residencial y de ambiente local, con precios entre 550 y 850 dólares.\n\nEntre los coworkings, Colony, en Roma Norte, cobra entre $400 y $500 MXN el día y entre $3.500 y $4.500 MXN al mes; Impact Hub CDMX tiene una tarifa mensual de aproximadamente $3.000 MXN; PÚBLICO ofrece acceso 24 horas con una mensualidad de entre $3.000 y $3.500 MXN; Spacioss, en Narvarte, cobra entre $2.900 y $3.200 MXN al mes y destaca por su buena relación calidad-precio; WeWork Polanco tiene planes mensuales desde $3.459 MXN; y Co-Madre Roma, fundado por mujeres, cobra $3.500 MXN al mes.",
      "sources": [
        {
          "label": "Best neighborhoods in Mexico City for remote workers – StayWork CDMX",
          "url": "https://stayworkcdmx.com/blog/best-neighborhoods-mexico-city-remote-workers-2026/"
        },
        {
          "label": "Best Neighborhoods in Mexico City for Expats – MyLatinLife",
          "url": "https://mylatinlife.com/best-neighborhoods-mexico-city-expats/"
        },
        {
          "label": "Coworking en CDMX: comparación de precios por colonia – StayWork CDMX",
          "url": "https://stayworkcdmx.com/blog/coworking-cdmx-price-comparison/"
        },
        {
          "label": "Coworking Space & Shared Offices in Polanco – WeWork (oficial)",
          "url": "https://www.wework.com/l/coworking-space/polanco--mexico-city--DIF"
        }
      ]
    }
  },
  "dubai": {
    "visaFiscal": {
      "content": "El trámite se conoce como \"Work Remotely from Dubai\" (Virtual Working Programme) y se gestiona a través de la GDRFA de Dubái, sin necesidad de patrocinador (sponsor) local.\n\nExisten tres categorías de solicitantes: el empleado remoto, que debe tener un contrato de al menos un año con una empresa extranjera; el freelancer, cuyos clientes deben estar fuera de los Emiratos; y el dueño de un negocio extranjero, que debe llevar al menos un año operando. Las fuentes no coinciden en el ingreso mínimo exigido, que se sitúa entre 3.500 y 5.000 dólares al mes, por lo que conviene confirmar la cifra exacta antes de presentar la solicitud (el portal oficial de Invest in Dubai remite a este mismo programa sin detallar el umbral, mientras que guías especializadas como Citizen Remote sitúan el requisito en 3.500 dólares mensuales, acreditados con nóminas y seis meses de extractos bancarios).\n\nLos documentos necesarios son el pasaporte con al menos 6 meses de vigencia, una fotografía, el contrato, las facturas o el registro mercantil según el perfil del solicitante, extractos bancarios de entre 3 y 6 meses, un seguro médico con cobertura en los Emiratos, una carta de no objeción del empleador y prueba de alojamiento.\n\nEn cuanto a los costes, la investigación previa cifraba la tasa en unos AED 1.535, el examen médico entre AED 320 y 500, el Emirates ID en aproximadamente AED 370, y el seguro entre AED 1.500 y 5.000 al año (con una fuente que situaba el coste total en unos 611 dólares). Una revisión más reciente (Citizen Remote) ofrece cifras algo distintas: una tasa de solicitud de unos 287 dólares (aproximadamente AED 1.050), un examen médico de entre 85 y 270 dólares, un Emirates ID de unos 165 dólares y un seguro de entre 500 y 2.500 dólares al año, con un coste total estimado para el primer año de entre 1.400 y 2.000 dólares o más; se recomienda cotizar directamente antes de aplicar, dado el margen de variación entre fuentes.\n\nEl proceso se realiza en línea: solicitud, pago, examen médico obligatorio y, finalmente, la emisión del Emirates ID y el estampado del visado, todo ello en un plazo de 2 a 4 semanas. La visa tiene una validez de 1 año, sin opción de renovación multianual (hay que volver a solicitarla cada año), y una ausencia superior a 6 meses podría invalidarla, aunque este último punto no está confirmado por una segunda fuente. La restricción principal es que no se puede trabajar para clientes o empresas con sede en los Emiratos.\n\nEn materia fiscal, los Emiratos no aplican IRPF. El impuesto de sociedades es del 9% sobre el beneficio que supere los AED 375.000 (por debajo de esa cifra, la tasa es del 0%; las \"Qualifying Free Zone Persons\" pueden mantener el 0% si cumplen los requisitos de actividad calificada). El IVA es del 5%. En cuanto a la residencia fiscal, se suele citar el criterio de 183 días (o 90 días bajo determinadas condiciones), aunque este dato no se ha podido confirmar con una fuente primaria oficial. El error más costoso es asumir que \"vivir en Dubái\" basta por sí solo para dejar de ser residente fiscal en España, sin acreditar de forma objetiva ni los 183 días de estancia ni el traslado del centro de intereses vitales, especialmente si la familia permanece en España.",
      "sources": [
        {
          "label": "Work Remotely from Dubai – Invest in Dubai (portal oficial del Gobierno de Dubái)",
          "url": "https://www.investindubai.gov.ae/en/live-and-work/visas-and-entry/work-remotely-from-dubai"
        },
        {
          "label": "Dubai Digital Nomad Visa 2026: Requirements, Cost & UAE Virtual Working Programme – Citizen Remote",
          "url": "https://citizenremote.com/visas/dubai-digital-nomad-visa/"
        },
        {
          "label": "Corporate Tax – Ministry of Finance UAE (portal oficial)",
          "url": "https://mof.gov.ae/en/public-finance/tax/corporate-tax/"
        },
        {
          "label": "Free Zone Persons (CTGFZP1) – Federal Tax Authority UAE (portal oficial)",
          "url": "https://tax.gov.ae/en/content/free.zone.persons.ctgfzp1.aspx"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los hospitales privados de referencia para expatriados en Dubái están el American Hospital Dubai, situado en Al Barsha, con 254 camas, más de 30 especialidades, un programa oncológico integral y el mérito de haber realizado la primera cirugía robótica de la ciudad; el grupo Mediclinic, que opera varias sedes en los Emiratos (entre ellas Mediclinic City Hospital) y suma más de 950 camas ambulatorias entre cardiología, obstetricia, dermatología y odontología; y el Saudi German Hospital Dubai, en Al Barsha 3, con 300 camas, 35 especialidades ambulatorias, seis quirófanos, dos laboratorios de cateterismo y un laboratorio acreditado por el CAP, orientado también al turismo médico.\n\nEl seguro médico es obligatorio por ley: la Ley N.º 11 de 2013 de Dubái exige que todo residente —incluidos los expatriados con visado de trabajo, sus cónyuges, hijos, padres mayores a su cargo y el personal doméstico— cuente con cobertura sanitaria mínima, normalmente proporcionada por el empleador o el patrocinador. Para quienes ganan menos de AED 4.000 al mes existe el Essential Benefits Plan (EBP), cuya prima anual va de AED 650 a 725 para empleados, AED 650 para dependientes generales de 0 a 65 años, AED 1.600 para mujeres casadas de entre 18 y 45 años, AED 2.500 para padres mayores a cargo y AED 650 para personal doméstico; este plan cubre hasta AED 150.000 en total, incluyendo hospitalización, consulta ambulatoria, fisioterapia (6 sesiones al año), medicamentos (hasta AED 1.500), ambulancia y prestaciones de maternidad. Los planes mejorados, con cobertura internacional, pueden llegar hasta AED 15.000 al año. Entre las aseguradoras locales que operan bajo este marco están Sukoon, Cigna Insurance Middle East, Dubai Insurance Company y Orient Insurance (no se ha podido confirmar con esta misma fuente la presencia de Daman, AXA o Nextcare entre los proveedores, aunque ambas son marcas conocidas y activas en el mercado emiratí, por lo que conviene cotizar directamente con ellas). El gasto de bolsillo fuera del seguro obligatorio sigue sin un dato fiable verificado; se recomienda cotizar de forma directa con cada aseguradora.",
      "sources": [
        {
          "label": "Best Private Hospitals in Dubai: American, Mediclinic and More – MyBayut",
          "url": "https://www.bayut.com/mybayut/list-best-hospitals-dubai/"
        },
        {
          "label": "Law No. (11) of 2013 Concerning Health Insurance in the Emirate of Dubai – Dubai Legislation (portal oficial)",
          "url": "https://dlp.dubai.gov.ae/Legislation%20Reference/2013/Law%20No.%20(11"
        },
        {
          "label": "2026 Guide to Mandatory Health Insurance in Dubai – Pacific Prime UAE",
          "url": "https://www.pacificprime.ae/blog/guide-to-mandatory-health-insurance-in-dubai/"
        }
      ]
    },
    "barrios": {
      "content": "Dubai Marina es una zona social, con acceso a la playa y vida nocturna intensa; el alquiler anual de un estudio va de AED 80.000 a 110.000, y el de un apartamento de una habitación, de AED 95.000 a 135.000. JBR (Jumeirah Beach Residence) es similar a Marina, con playa pública, y sus precios son algo más altos: un estudio va de AED 85.000 a 115.000 al año, y una habitación, de AED 100.000 a 140.000. Downtown Dubai es la zona más icónica y también de las más caras: un estudio cuesta entre AED 75.000 y 100.000 al año, y una habitación, entre AED 90.000 y 130.000. Business Bay, más asequible y contiguo a Downtown, tiene estudios de AED 65.000 a 85.000 al año y habitaciones de AED 90.000 a 120.000. JVC (Jumeirah Village Circle) es la opción económica orientada a familias, con estudios entre AED 35.000 y 45.000 al año y habitaciones entre AED 50.000 y 65.000; en términos mensuales equivale, aproximadamente, a entre AED 2.900 y 3.750 para un estudio. Deira y Bur Dubai son la zona histórica y, por reputación general del mercado, la más barata de la ciudad, aunque no se ha localizado en esta revisión una fuente con cifras concretas de alquiler para estos dos barrios; conviene confirmarlas directamente en portales inmobiliarios como Bayut, Property Finder o Dubizzle.\n\nEn coworkings, los precios de mercado generales en Dubái se mueven entre AED 50 y 100 al día por un puesto compartido (hot desk) y entre AED 800 y 1.500 al mes; un puesto fijo (dedicated desk) cuesta entre AED 1.200 y 2.500 al mes; una oficina privada para 2-4 personas va de AED 300 a 500 al día o de AED 5.000 a 10.000 al mes; y una sala de reuniones cuesta entre AED 100 y 200 la hora. Dentro de este mercado, AstroLabs es un espacio orientado a startups que, según su propia web, tiene su sede en Dubai Internet City (y no en el DIFC, como indicaba la investigación previa); Nook se orienta a familias; Cowrks tiene un perfil más corporativo; Kave se dirige a perfiles creativos; in5 combina startups con apoyo gubernamental; y Letswork funciona como una aplicación que da acceso a una red de espacios de coworking repartidos por la ciudad. No se ha encontrado un desglose de precio específico para cada uno de estos seis espacios, por lo que conviene tratar las cifras generales anteriores como una orientación y confirmar la tarifa exacta en la web de cada proveedor.",
      "sources": [
        {
          "label": "Dubai Rent Prices by Area 2026 – RelodXB",
          "url": "https://www.relodxb.com/blog/dubai-rent-prices-by-area-2026"
        },
        {
          "label": "Top 10 Coworking Spaces in Dubai 2026 – CoworkingFinder.ae",
          "url": "https://coworkingfinder.ae/dubai-coworking-locations/top-10-coworking-spaces-in-dubai-2026/"
        },
        {
          "label": "AstroLabs – ubicación (oficial)",
          "url": "https://astrolabs.com/location"
        },
        {
          "label": "Best Residential Areas to Live in Dubai 2026 – Property Finder",
          "url": "https://www.propertyfinder.ae/blog/best-areas-to-live-in-dubai/"
        }
      ]
    }
  },
  "budapest": {
    "visaFiscal": {
      "content": "El trámite para nómadas digitales en Hungría es el White Card, gestionado por la OIF (National Directorate-General for Aliens Policing). Para solicitarlo hay que presentar el formulario de solicitud, una foto, el pasaporte, la prueba de que se ejerce una actividad remota (carta certificada del empleador, contratos como autónomo o registro de empresa junto con certificación fiscal), extractos bancarios de los últimos 6 meses que acrediten un ingreso neto igual o superior a 3.000 euros al mes, prueba de alojamiento, un seguro médico integral y medios suficientes para costear la salida del país. El proceso puede iniciarse en un consulado húngaro fuera de Hungría o directamente en la OIF (a través del sistema Enter Hungary) dentro del país; el plazo estándar de resolución es de 21 días, con un máximo de 30. Las tasas son de aproximadamente 110 euros si se tramita en el consulado, unos 100 euros de forma presencial en Hungría, alrededor de 60 euros si se hace online, y la prórroga cuesta unos 76 euros. El permiso tiene una validez de 1 año y puede renovarse una única vez, hasta un máximo de 2 años; para la prórroga es obligatorio haber residido en Hungría al menos 90 de los últimos 180 días. En caso de denegación, existe la posibilidad de apelar en un plazo de 8 días. El White Card no permite la reagrupación familiar: es un permiso estrictamente individual, con la única excepción de un hijo nacido en Hungría durante su vigencia.\n\nEn materia fiscal, se considera residente a quien pasa 183 días en el país o tiene allí su vivienda o centro de intereses. El IRPF húngaro es un tipo plano del 15%, y el impuesto de sociedades es del 9%, el más bajo de toda la Unión Europea. El régimen simplificado KATA quedó muy restringido desde 2022 y ya no se aplica a quienes facturan a clientes extranjeros. Los errores más habituales son creer que el White Card exime automáticamente de tributar en Hungría, y no cerrar correctamente la residencia fiscal en España antes de trasladarse.",
      "sources": [
        {
          "label": "White Card – residency for digital nomads (OIF, oficial)",
          "url": "https://oif.gov.hu/factsheets/white-card-residency-for-digital-nomads"
        },
        {
          "label": "Hungary - Corporate - Taxes on corporate income (PwC Tax Summaries)",
          "url": "https://taxsummaries.pwc.com/hungary/corporate/taxes-on-corporate-income"
        },
        {
          "label": "KATA and flat-rate taxation in Hungary in 2022 (Helpers Finance)",
          "url": "https://helpersfinance.hu/kata-and-flat-rate-taxation-in-hungary-in-2022/"
        },
        {
          "label": "Hungary Digital Nomad Visa: Requirements & Application (Freaking Nomads)",
          "url": "https://freakingnomads.com/hungary-digital-nomad-visa/"
        }
      ]
    },
    "sanidad": {
      "content": "Entre las clínicas privadas de referencia en Budapest destacan FirstMed Centers, Medicover Hospital y Duna Medical Center. En cuanto a seguros, SafetyWing cuesta entre 56 y 197 dólares por cada periodo de 4 semanas; Cigna Global ronda los 1.500-2.800 dólares al año para una persona de 30 años, y entre 250-400 dólares o más al mes para el tramo de 40-59 años, subiendo a 500-800 dólares o más al mes a partir de los 60; IMG cuesta aproximadamente 60 dólares al mes para el tramo de 20-39 años y unos 210 dólares al mes entre los 40 y los 59. Pagando de bolsillo, una consulta cuesta entre 45 y 75 dólares, y una visita de urgencias (sin contar pruebas adicionales) entre 150 y 300 dólares.",
      "sources": [
        {
          "label": "FirstMed's Budapest Clinic (oficial)",
          "url": "https://firstmed.hu/about-us/our-budapest-clinic/"
        },
        {
          "label": "Duna Medical Center en Budapest (Medical Voyage)",
          "url": "https://medical-voyage.com/clinics/pg/duna-medical-center"
        },
        {
          "label": "Budapest Medical Providers (US Embassy Budapest, PDF oficial)",
          "url": "https://hu.usembassy.gov/wp-content/uploads/sites/154/2024/12/Budapest-Medical-Providers-updated-12-2024.pdf"
        },
        {
          "label": "Expat Health Insurance in Hungary (Expatriate Healthcare)",
          "url": "https://www.expatriatehealthcare.com/expat-country-guides/health-insurance-hungary/"
        }
      ]
    },
    "barrios": {
      "content": "Entre los barrios más recomendados para nómadas digitales en Budapest se encuentra el Distrito VII, conocido por su vida nocturna, con alquileres de alrededor de 600 euros al mes para un piso de 45 m²; el Distrito V, elegante y junto al Danubio, desde 800 euros al mes; el Distrito VIII, más auténtico y entre un 25% y un 30% más barato (desde unos 450 euros al mes); el Distrito II, en Buda, tranquilo y residencial; el Distrito IX, actualmente en proceso de renovación; y el Distrito XIII, moderno y situado junto al Danubio.\n\nEn cuanto a coworkings, destacan Kaptár (unos 8 euros el día o 100 euros al mes), KUBIK (unos 12 euros el día, con terraza), ClickOffice (oficinas privadas desde unos 15 euros la hora), Espresso Embassy (un café cuesta unos 2,50 euros), Kelet Café (con su \"Remote Worker Menu\" por unos 8 euros) y la Biblioteca Szabó Ervin (unos 5 euros al día).",
      "sources": [
        {
          "label": "KAPTÁR Coworking Space of Budapest (oficial)",
          "url": "https://kaptarbudapest.hu/en/"
        },
        {
          "label": "Best Coworking Spaces in Budapest (Flatio)",
          "url": "https://www.flatio.com/blog/best-coworking-spaces-in-budapest"
        },
        {
          "label": "A guide to Budapest for digital nomads (Flatio)",
          "url": "https://www.flatio.com/blog/a-guide-to-budapest-for-digital-nomads"
        },
        {
          "label": "7 Best Coworking Spaces in Budapest, Hungary (Andy Sto)",
          "url": "https://andysto.com/7-best-coworking-spaces-in-budapest-hungary/"
        }
      ]
    }
  },
  "praga": {
    "visaFiscal": {
      "content": "La República Checa no cuenta con un visado específico para nómadas digitales, por lo que existen dos vías principales. La primera es la Živno visa (para autónomos con licencia de comercio), que solo puede tramitarse en el consulado checo del país de origen o de residencia, nunca dentro de la propia Chequia. Requiere un expediente documental completo, extractos bancarios que acrediten al menos 156.500 coronas checas, un seguro de viaje para los primeros 90 días y un seguro integral para el resto de la estancia, y todos los documentos deben estar traducidos y apostillados, con una antigüedad máxima de 180 días. Al llegar es obligatorio registrar el domicilio en un plazo de 3 días hábiles. La tasa ronda las 5.000 coronas (unos 205 dólares), el plazo de resolución es de entre 60 y 120 días, y la validez inicial es de 1 año. La segunda vía es la Employee Card, pensada para empleados de una empresa checa, que no cubre el caso de quien trabaja para un empleador puramente extranjero. En caso de denegación cabe una revisión administrativa, descrita como una \"nueva valoración de motivos\". En cuanto a familiares, existen visados de dependiente, pero cada solicitante debe cumplir individualmente los requisitos.\n\nA efectos fiscales, se es residente al superar los 183 días en el país o al tener allí la vivienda permanente. El IRPF checo es del 15% hasta 2 millones de coronas anuales de renta, y del 23% por encima de ese umbral; el impuesto de sociedades es del 19%. Los autónomos que facturan menos de 2 millones de coronas al año pueden acogerse al paušální daň (impuesto de cuota fija): un pago mensual fijo de aproximadamente 6.200 coronas, o bien el método del 60/40, con un tipo efectivo de en torno al 6% sobre el ingreso bruto. El IVA general es del 21%, con tipos reducidos del 15% y el 10%. Entre los errores más frecuentes están no cerrar la residencia fiscal española al activar el živno, olvidar darse de alta en la seguridad social o el seguro checos, y superar sin darse cuenta el límite de facturación del paušální daň.",
      "sources": [
        {
          "label": "Visa Types (Ministerio de Asuntos Exteriores checo, oficial)",
          "url": "https://mzv.gov.cz/jnp/en/information_for_aliens/types_of_visas/index.html"
        },
        {
          "label": "Czech Republic Freelance Visa (Zivno Visa): How to Apply (Nomads Embassy)",
          "url": "https://nomadsembassy.com/czech-republic-freelance-visa/"
        },
        {
          "label": "Flat tax registration (paušální daň) in the Czech Republic 2026 (Pexpats)",
          "url": "https://www.pexpats.com/Flat-Tax-Registration"
        },
        {
          "label": "Changes to the Flat-Rate Tax System (Paušální Daň) in 2026 (Expat Tax)",
          "url": "https://expat-tax.cz/changes-to-the-flat-rate-tax-system-pausalni-dan-in-2026/"
        }
      ]
    },
    "sanidad": {
      "content": "Entre las clínicas privadas más utilizadas por extranjeros en Praga están Canadian Medical Care (con 7 sedes y hospitalización propia), UNICARE (atención en 16 idiomas) y My Clinic. Pagando de bolsillo, una consulta cuesta entre 22 y 35 dólares, y una urgencia entre 65 y 435 dólares; en los hospitales públicos se suele exigir un depósito de entre 5.000 y 10.000 coronas checas a los extranjeros que no acrediten seguro.",
      "sources": [
        {
          "label": "Unicare Medical Center (oficial)",
          "url": "https://www.unicare.cz/"
        },
        {
          "label": "Expats.cz Clinics & Hospitals Guide - Prague",
          "url": "https://www.expats.cz/czech-news/article/clinics-hospitals-guide"
        },
        {
          "label": "Canadian Medical - Prague (directorio Expats.cz)",
          "url": "https://www.expats.cz/directory/listing/canadian-medical-care-2"
        }
      ]
    },
    "barrios": {
      "content": "Entre los barrios más valorados están Vinohrady (residencial, con ambiente LGBTQ+ y muy céntrico), Žižkov (alternativo y más barato), Nové Město (comercial y universitario), Holešovice (zona industrial reconvertida), Karlín (moderno y con buenos coworkings) y Smíchov (en plena transformación). Como referencia de precios, Numbeo sitúa el alquiler de un piso de una habitación en el centro entre 1.038 y 1.492 euros al mes, y fuera del centro entre 898 y 1.149 euros al mes.\n\nEn coworkings destacan Locus Workspace (en Karlín, entre 10 y 20 euros al día, con más de 100 Mbps de conexión), Node5 (en Smíchov, orientado a startups), Impact Hub Prague (entre 10 y 20 euros al día), Opero (unos 20 euros al día, de perfil corporativo) y HubHub (en el Palác Ara). En el mercado local, un bono semanal cuesta entre 32 y 60 euros, un abono mensual flexible entre 120 y 240 euros, y un puesto fijo mensual entre 200 y 400 euros.",
      "sources": [
        {
          "label": "Cost of Living in Prague (Numbeo)",
          "url": "https://www.numbeo.com/cost-of-living/in/Prague"
        },
        {
          "label": "An overview of the best co-working, event, and meetings spaces in Prague (Expats.cz)",
          "url": "https://www.expats.cz/czech-news/article/pragues-top-coworking-spaces"
        },
        {
          "label": "Digital nomad guide to Prague (Flatio)",
          "url": "https://www.flatio.com/blog/digital-nomad-guide-to-prague"
        }
      ]
    }
  },
  "buenos-aires": {
    "visaFiscal": {
      "content": "El trámite específico es la Residencia Transitoria como Nómada Digital, gestionada por la Dirección Nacional de Migraciones (DNM) al amparo del artículo 24h de la Ley 25.871, y solo está disponible para nacionalidades que no cuenten ya con visa de turista. Los documentos requeridos incluyen certificado de antecedentes penales argentino y del país de origen, comprobante de domicilio, comprobante de entrada regular al país, la solicitud junto con un currículum, prueba de la relación laboral o de los ingresos provenientes del exterior, una referencia profesional, y todo ello debidamente legalizado y traducido. El trámite no es 100% online: en la Ciudad Autónoma de Buenos Aires (CABA) se realiza por contacto directo con Migraciones, mientras que en el interior del país se hace en la delegación local correspondiente. La residencia tiene una validez de 180 días, prorrogable por otros 180 días adicionales presentando comprobantes de ingresos y antecedentes actualizados. No se ha podido confirmar una cifra fiable de la tasa en pesos argentinos, por lo que conviene verificarla directamente en migraciones.gob.ar.\n\nComo alternativa existe la visa de Rentista, pensada para quienes acreditan una renta pasiva de al menos 5 salarios mínimos, vitales y móviles (SMVM), equivalente a unos 1.200-1.300 dólares al mes; a diferencia de la residencia de nómada digital, sí contempla la reagrupación familiar (cónyuge, padres e hijos). Puede tramitarse a través del sistema RaDEX o en un consulado argentino, con una tasa de entre 200 y 400 dólares más los honorarios de gestoría (un total de entre 1.100 y 4.400 dólares), y un plazo de resolución de entre 2 y 6 meses.\n\nEn materia fiscal, se es residente si se cuenta con residencia migratoria permanente, si se ha permanecido más de 12 meses en el país, o si se superan los 183 días con centro de intereses en Argentina. Quien tenga la residencia transitoria de nómada digital y trabaje exclusivamente para clientes del exterior queda, en principio, exceptuado de tributar en Argentina por esas rentas. Los errores más comunes son confundir la residencia migratoria con la residencia fiscal, no cerrar debidamente la residencia fiscal española, y subestimar la volatilidad cambiaria entre el dólar oficial y el dólar blue.",
      "sources": [
        {
          "label": "Obtener una residencia transitoria como Nómada Digital (Argentina.gob.ar, oficial)",
          "url": "https://www.argentina.gob.ar/servicio/obtener-una-residencia-transitoria-como-nomada-digital"
        },
        {
          "label": "Obtener una prórroga de residencia transitoria como Nómada Digital (Argentina.gob.ar, oficial)",
          "url": "https://www.argentina.gob.ar/servicio/obtener-una-prorroga-de-residencia-transitoria-como-nomada-digital"
        },
        {
          "label": "Disposición 758/2022 - Dirección Nacional de Migraciones (Boletín Oficial, oficial)",
          "url": "https://www.boletinoficial.gob.ar/detalleAviso/primera/262282/20220511"
        },
        {
          "label": "Argentina Rentista Visa Guide 2026 (Global Citizen Solutions)",
          "url": "https://www.globalcitizensolutions.com/argentina-rentista-visa/"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los hospitales de referencia en Buenos Aires están el Hospital Italiano de Buenos Aires, el Hospital Alemán y el Hospital Universitario Austral, en Pilar. En cuanto a seguros, son más relevantes las prepagas locales por el efecto del tipo de cambio: OSDE cuesta entre 38.000 y 68.000 pesos argentinos al mes según el plan (para una persona de 30 años en CABA), y Swiss Medical entre un 5% y un 10% más barato (unos 36.000-64.000 ARS/mes). Con un dólar blue de aproximadamente 1.540-1.560 ARS/USD (agosto de 2026), esas cifras equivalen a unos 23-44 dólares al mes.\n\nPagando de bolsillo, una consulta corta cuesta unos 54.220 pesos argentinos (unos 35 dólares al tipo blue). No se dispone de un dato fiable sobre el coste de una urgencia o una hospitalización, por lo que se recomienda contar con seguro desde el primer día.",
      "sources": [
        {
          "label": "OSDE en Buenos Aires: cartilla, planes y precios 2026 (PrepagaYa)",
          "url": "https://www.prepagaya.com.ar/prepagas/buenos-aires/osde"
        },
        {
          "label": "Swiss Medical 2026: Compará planes y precios (MiObraSocial)",
          "url": "https://www.miobrasocial.com.ar/medicina-prepaga/swiss-medical/"
        },
        {
          "label": "Cotización del dólar blue - 26 de agosto de 2026 (El Cronista)",
          "url": "https://www.cronista.com/finanzas-mercados/cotizacion-del-dolar-blue-cual-es-el-precio-de-este-miercoles-26-de-agosto/"
        },
        {
          "label": "Hospital Italiano de Buenos Aires (Wikipedia)",
          "url": "https://en.wikipedia.org/wiki/Hospital_Italiano_de_Buenos_Aires"
        }
      ]
    },
    "barrios": {
      "content": "Entre los barrios más recomendados están Palermo (el que ofrece mayor oferta, también el más caro), Recoleta (elegante, con precios similares o algo superiores), Belgrano (de perfil familiar, con acceso a la línea D de subte), San Telmo y Monserrat (bohemios y más económicos), Villa Crespo (entre un 20% y un 40% más barato que Palermo) y Almagro/Caballito (de precios medios y perfil más discreto). Respecto a los aeropuertos, el trayecto hasta Ezeiza desde estos barrios es de entre 30 y 50 minutos, mientras que Aeroparque queda mucho más cerca.\n\nEn coworkings, con precios habitualmente expresados en dólares por ser la moneda de referencia del sector, destacan AreaTres (en Palermo Soho, unos 28 dólares al día, con salas desde 152 dólares al día), Huerta Cowork (unos 20 dólares al día, certificado B Corp), La Maquinita Co. (con más de 10 sedes, entre 15 y 20 dólares al día), Joy Cowork (en Villa Crespo, unos 15 dólares al día) e Inda Cowork (en Palermo, unos 20 dólares al día).",
      "sources": [
        {
          "label": "The 33 Best Buenos Aires Coworking Spaces in Palermo, Recoleta, Belgrano and More (A Brother Abroad)",
          "url": "https://abrotherabroad.com/buenos-aires-coworking-space/"
        },
        {
          "label": "The 12 Best Spaces for Coworking in Palermo Buenos Aires (and Villa Crespo) (A Brother Abroad)",
          "url": "https://abrotherabroad.com/coworking-palermo-buenos-aires/"
        },
        {
          "label": "Buenos Aires Digital Nomad Guide 2026 (Your New Base)",
          "url": "https://www.yournewbase.com/guides/buenos-aires/"
        }
      ]
    }
  },
  "ho-chi-minh": {
    "visaFiscal": {
      "content": "Vietnam no cuenta con un visado de nómada digital. Existen tres vías principales. La primera es el e-visa (tramitado en evisa.gov.vn), que exige un pasaporte con al menos 6 meses de vigencia, una foto y una dirección temporal en el país, sin necesidad de carta de invitación ni patrocinador; la tasa es de 25 dólares para entrada única o 50 dólares para entradas múltiples, con un plazo de resolución de 3 a 5 días hábiles y una validez de hasta 90 días, aunque no permite establecer un vínculo laboral con una empresa vietnamita. La segunda vía son los visados DN1 y DN2, orientados a negocios y estancias más largas, que requieren obligatoriamente una carta de invitación o patrocinio de una empresa vietnamita, lo que los hace inaccesibles para autónomos que no cuenten con una entidad local; la empresa patrocinadora debe aportar su registro mercantil notariado junto con los formularios NA2, NA5 y NA16, y la duración del permiso va de 1 a 12 meses, con un máximo de 90 días por cada entrada; las tasas oscilan entre 25 y 50 dólares en el consulado, o bien 25 dólares por el e-visa de negocios más entre 25 y 135 dólares de sellado a la llegada. La tercera vía es el SVEC, dirigido a perfiles de alto talento, inaccesible para la mayoría de nómadas digitales. En cuanto a familiares, cada uno debe tramitar su propio e-visa o su propio DN.\n\nEn materia fiscal, se considera residente a quien pasa 183 días en el país dentro de un año natural, o bien dentro de cualquier periodo móvil de 12 meses, contando como día completo tanto el de entrada como el de salida; esto significa que encadenar varios e-visas de 90 días puede hacer superar el umbral de residencia sin que el interesado lo perciba. Existe además una regla poco conocida según la cual alquilar una vivienda durante 183 días o más puede por sí sola generar residencia fiscal. Los residentes tributan por su renta mundial a un tipo progresivo de entre el 5% y el 35%; los no residentes tributan a un tipo fijo del 20%, solo sobre la renta de fuente vietnamita. Los errores más frecuentes son no contar los días de entrada y salida como días completos, desconocer la regla del alquiler, y asumir sin más que trabajar físicamente desde Vietnam para clientes extranjeros nunca constituye \"renta de fuente vietnamita\", un criterio que de hecho es objeto de debate.",
      "sources": [
        {
          "label": "Vietnam E-Visa 2026 - Costs, Countries, Processing time and Requirements (MyVietnamVisa)",
          "url": "https://www.myvietnamvisa.com/vietnam-e-visa.html"
        },
        {
          "label": "Vietnam Business Visa for Foreigners: DN1 and DN2 Visa Updated for 2026 (Nhi Gia)",
          "url": "https://nhigia.vn/en/news/vietnam-business-visa-for-foreigners-dn1-and-dn2-visa/"
        },
        {
          "label": "Vietnam's 183-Day Rule for Foreign Employees (ASEAN Briefing)",
          "url": "https://www.aseanbriefing.com/news/vietnams-183-day-rule-tax-implications-for-foreign-employees/"
        },
        {
          "label": "Vietnam - Individual - Residence (PwC Tax Summaries)",
          "url": "https://taxsummaries.pwc.com/vietnam/individual/residence"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los hospitales privados de referencia en Ho Chi Minh están el FV Hospital (Distrito 7), Vinmec Central Park (Binh Thanh) y Family Medical Practice (Diamond Plaza). Pagando de bolsillo, una consulta cuesta unos 757.812 dongs vietnamitas (entre 29 y 30 dólares); los hospitales internacionales suelen exigir un depósito a quienes no acreditan un seguro. En cuanto a vacunas, ninguna es obligatoria viniendo desde España; la de fiebre amarilla solo se exige si se llega procedente de un país de riesgo.",
      "sources": [
        {
          "label": "Guide to Best Hospitals for Expats in Ho Chi Minh City (Epic Adventures Vietnam)",
          "url": "https://epicadventures.vn/guide-to-best-hospitals-for-expats-in-ho-chi-minh-city/"
        },
        {
          "label": "10 Best Hospitals for Foreigners in Ho Chi Minh City (Vietnam Clinic)",
          "url": "https://vietnamclinic.com/hospitals-ho-chi-minh-city"
        },
        {
          "label": "Healthcare in Ho Chi Minh City: 2026 (Nomedic)",
          "url": "https://nomedic.co/travel/vietnam/city/ho-chi-minh-city"
        }
      ]
    },
    "barrios": {
      "content": "Entre las zonas más habituales para nómadas digitales están el Distrito 1 (el centro, entre 500 y 800 dólares al mes), Thảo Điền, en el Distrito 2 (de perfil expatriado, entre 400 y 700 dólares al mes, a 20-30 minutos del centro), el Distrito 3 (de estilo colonial, entre 350 y 550 dólares al mes), Bình Thạnh (moderno, entre 300 y 500 dólares al mes), Phú Nhuận (más local y económico) y Phú Mỹ Hưng, en el Distrito 7 (una urbanización cerrada con colegios internacionales, desde unos 400 dólares al mes).\n\nEn coworkings destacan Dreamplex (con abonos mensuales de entre 60 y 120 dólares), The Hive (también entre 60 y 120 dólares al mes, con fuerte componente de comunidad), Toong (presente en varias ciudades), Cafe Apartment, en el Distrito 1 (entre 2 y 4 dólares por consumición) y las cadenas Phúc Long y The Coffee House (con conexión de entre 80 y 150 Mbps).",
      "sources": [
        {
          "label": "Check Out The 10 Best Coworking Spaces In Ho Chi Minh City (Vietnam Is Awesome)",
          "url": "https://vietnamisawesome.com/articles/coworking-spaces-in-ho-chi-minh/"
        },
        {
          "label": "Best Neighborhoods for Single Digital Nomads Living in Ho Chi Minh City (Digital Nomad Exchange)",
          "url": "https://www.digitalnomadexchange.com/ctryguide/32677/119/Vietnam/Living-in-Ho-Chi-Minh-City-Best-Neighborhoods-for-Single-Digital-Nomads-Living-in-Ho-Chi-Minh-City"
        },
        {
          "label": "Ho Chi Minh City Digital Nomad Guide 2026: Districts, Costs, Coworking (Nomad Agent)",
          "url": "https://nomadagent.online/vietnam/ho-chi-minh-city"
        }
      ]
    }
  },
  "kuala-lumpur": {
    "visaFiscal": {
      "content": "El trámite principal es el DE Rantau Nomad Pass, gestionado por la Malaysia Digital Economic Corporation (MDEC). Los profesionales del sector tecnológico deben acreditar unos ingresos anuales mínimos de 24.000 dólares, mientras que quienes trabajan en sectores no tecnológicos (diseño, ciberseguridad, marketing, etc.) deben demostrar al menos 60.000 dólares al año.\n\nEntre los documentos exigidos figuran el pasaporte con una vigencia mínima de 14 meses, el currículum vitae, los extractos bancarios de los últimos tres meses, la declaración de impuestos, una fianza personal, una carta de buena conducta, el título académico, el registro fiscal y un seguro médico con cobertura de al menos tres meses. Los freelancers deben presentar uno o varios contratos de proyecto con una duración mínima de tres meses, y los empleados por cuenta ajena deben aportar un contrato vigente de al menos tres meses. Es importante señalar que el DE Rantau no aplica a los dueños de empresa, quienes deben recurrir en su lugar al Employment Pass o al Malaysia Tech Entrepreneur Programme (MTEP).\n\nEl proceso consiste en crear una cuenta en el portal de MDEC, completar el formulario correspondiente, esperar la aprobación (que tarda entre 6 y 8 semanas) y viajar a Malasia dentro de los 6 meses siguientes; el endoso y la entrega del pase físico llegan aproximadamente una semana después. Las tasas ascienden a 1.080 ringgits malasios (RM), más RM 540 por cada dependiente, RM 30 al mes por persona, y el coste del visado de entrada. En caso de denegación, existe la posibilidad de apelar en el plazo de un mes. Los familiares —cónyuge, hijos y padres— pueden incluirse como dependientes bajo la misma categoría de documentos. La validez inicial del pase es de entre 3 y 12 meses, con posibilidad de renovación por 12 meses adicionales.\n\nEn materia fiscal, se adquiere la residencia a partir de 182 días de estancia (aunque una regla de enlace puede aplicar con menos días). Los residentes tributan según una escala progresiva de entre el 0% y el 30%, mientras que los no residentes pagan un tipo fijo del 30% sin posibilidad de deducciones —una diferencia crítica que conviene tener presente—. La renta extranjera remitida a Malasia está generalmente exenta desde 2022 cuando se trata de renta pasiva, mientras que la renta laboral obtenida en el extranjero depende del caso concreto. Malasia no cuenta con un régimen fiscal especial para nómadas digitales. España y Malasia tienen en vigor un convenio de doble imposición (BOE-A-2008-2484). Los errores más habituales son asumir que se aplica la escala fiscal de origen en lugar del tipo fijo del 30% como no residente, no regularizar el estatus fiscal ante la Lembaga Hasil Dalam Negeri Malaysia (LHDN), y no conservar los justificantes durante los 7 años exigidos.",
      "sources": [
        {
          "label": "DE Rantau Nomad Pass — ampliación de elegibilidad, MDEC/Ministerio de Economía Digital",
          "url": "https://www.digital.gov.my/en-GB/siaran/DE-Rantau-Nomad-Pass-eligibility-expanded"
        },
        {
          "label": "Portal oficial de solicitud del DE Rantau Nomad Pass",
          "url": "https://rai.malaysia.gov.my/digital-services/674d807abf56b738f6c0a469"
        },
        {
          "label": "Agencia Tributaria: convenio de doble imposición España–Malasia",
          "url": "https://sede.agenciatributaria.gob.es/Sede/normativa-criterios-interpretativos/fiscalidad-internacional/convenios-doble-imposicion-firmados-espana/malasia.html"
        },
        {
          "label": "BOE-A-2008-2484 — texto íntegro del convenio",
          "url": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2008-2484"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los hospitales de referencia para pacientes internacionales destacan el Gleneagles Kuala Lumpur y el Prince Court Medical Centre, ambos orientados específicamente a la atención de extranjeros. En cuanto a seguros, SafetyWing ofrece su plan Essential (para edades de 18 a 39 años) por aproximadamente 63 dólares cada 4 semanas, y su plan Complete por unos 177,50 dólares al mes; IMG cobra entre 60 y 150 dólares mensuales; Cigna, entre 150 y 460 dólares al mes; y las aseguradoras locales, como Allianz Malaysia, ofrecen pólizas desde RM 480 al mes.\n\nEn gastos de bolsillo, una consulta en el sistema público cuesta entre RM 40 y 100, en el sistema privado entre RM 80 y 250, y en un hospital internacional entre RM 250 y 600. Una urgencia nocturna en el sistema público oscila entre RM 160 y 500, en el privado entre RM 800 y 3.000, y en un centro internacional entre RM 2.500 y 6.000. Desde julio de 2025 rige un impuesto sobre bienes y servicios (SST) del 6% que se aplica a los pacientes extranjeros/no ciudadanos tratados en **hospitales privados** —no en los públicos, como a veces se afirma en otras fuentes—; el propio Gobierno malasio ha señalado en 2026 que esta tasa no ha reducido la afluencia de turismo médico.\n\nNo existe ninguna vacuna obligatoria salvo la de la fiebre amarilla para quienes llegan en tránsito desde zonas de riesgo; se recomiendan, no obstante, las vacunas contra la tifoidea, la hepatitis A y B, y la encefalitis japonesa.",
      "sources": [
        {
          "label": "Prince Court Medical Centre — pacientes internacionales",
          "url": "https://princecourt.com/internationalpatients"
        },
        {
          "label": "Gleneagles Hospitals Malaysia — IHH Healthcare",
          "url": "https://www.ihhhealthcare.com/my/our-brands/our-hospitals/gleneagles"
        },
        {
          "label": "The Star: \"Healthcare travel sector not affected by 6% SST\" (mayo 2026)",
          "url": "https://www.thestar.com.my/news/nation/2026/05/19/healthcare-travel-sector-not-affected-by-6-sst"
        },
        {
          "label": "SafetyWing Nomad Insurance — planes y precios",
          "url": "https://safetywing.com/nomad-insurance"
        }
      ]
    },
    "barrios": {
      "content": "Entre los barrios más destacados de Kuala Lumpur se encuentra KLCC, el centro de negocios de la ciudad, con alquileres que van de RM 1.800-3.500 en la gama media a RM 4.500-8.000 en la gama premium. Bukit Bintang, conocido por su intensa vida nocturna, tiene precios de RM 1.800-3.500. Bangsar, popular entre expatriados y su ambiente de brunch, alcanza los RM 4.500-7.500. Mont Kiara, de carácter internacional y con buenos colegios, se mueve entre RM 4.000 y 6.500. Chinatown/Petaling Street destaca por su cultura local, y Damansara Heights por su ambiente verde y tranquilo. Para quienes buscan opciones más económicas, barrios como Cheras, Setapak, Kepong, Sentul y Wangsa Maju ofrecen alquileres de entre RM 1.600 y 2.300.\n\nEn cuanto a espacios de coworking, Colony @ KLCC cuesta 9 dólares el día o 107 dólares al mes e incluye piscina; WORQ Bangsar ofrece pase diario a 9 dólares y mensual a 111 dólares, con acceso 24/7; WORQ Intermark cobra 16 dólares al día y 133 dólares al mes, también con acceso 24/7; Common Ground KL Eco City tiene un pase diario de 11 dólares y mensual de 178 dólares; WORQ KL Sentral ofrece 13 dólares al día y 133 dólares al mes con acceso 24/7; y Komune @ KLCC cuesta 11 dólares el día y 111 dólares al mes.",
      "sources": [
        {
          "label": "WORQ — espacios de coworking en Kuala Lumpur y Petaling Jaya",
          "url": "https://worq.space/best-coworking-space-kuala-lumpur/"
        },
        {
          "label": "KL Nomad — guía de coworkings en Kuala Lumpur",
          "url": "https://klnomad.com/coworking-space-kuala-lumpur/"
        },
        {
          "label": "Nextspace — comparativa de precios de WORQ en Malasia",
          "url": "https://nextspace.co/my/worq-coworking-space-malaysia/"
        }
      ]
    }
  },
  "tiflis": {
    "visaFiscal": {
      "content": "En 2026 se ha producido un cambio importante: el antiguo programa \"Remotely from Georgia\" ha quedado suspendido y ya no constituye una vía de entrada válida. Los ciudadanos españoles pueden seguir entrando sin visado y permanecer hasta 365 días, pero esa autorización da derecho a *estar* en el país, no a *trabajar* en él. Desde el 1 de marzo de 2026 es obligatorio tramitar el permiso **\"Right to Labour Activity\"** (derecho a la actividad laboral), emitido por la **State Employment Promotion Agency** a través del portal labourmigration.moh.gov.ge. Para los nómadas digitales cuyos clientes son 100% extranjeros, la aplicabilidad exacta de este permiso sigue **pendiente de aclaración regulatoria** por parte de las autoridades: es, en la práctica, una auténtica zona gris. Las tasas del trámite son de 200 GEL para la vía estándar (30 días de tramitación) o 400 GEL para la vía exprés (10 días). Las sanciones por incumplimiento se escalonan en 2.000, 4.000 y 6.000 GEL según la reincidencia. Existe un periodo transitorio: quienes ya estaban trabajando en Georgia antes del 1 de marzo de 2026 debían regularizar su situación antes del 1 de mayo de ese mismo año, y el resto de los extranjeros registrados en la base de datos unificada tiene de plazo hasta el 1 de enero de 2027.\n\nLa vía práctica más utilizada por los nómadas para operar fiscalmente sigue siendo el registro como **Individual Entrepreneur (IE)** en la Agencia Nacional de Registro Público (NAPR) —trámite que requiere solo el pasaporte, se resuelve en un día y cuesta unos 20 euros—, combinado con la obtención del **Small Business Status (SBS)** en el portal rs.ge (que tarda entre 2 y 5 días) y la apertura de una cuenta en TBC Bank o Bank of Georgia.\n\nEn cuanto a la reagrupación familiar, es posible tras obtener el permiso de residencia, aunque no existe un desglose público de tasas específico para este trámite.\n\nEn materia fiscal, el régimen SBS permite tributar al 1% sobre la facturación bruta hasta 500.000 GEL al año (aproximadamente 166.000 euros), y al 3% por encima de ese umbral. Georgia aplica un sistema territorial, por lo que la renta de fuente extranjera generalmente no tributa en el país. La residencia fiscal se adquiere a partir de 183 días en un periodo de 12 meses. España y Georgia tienen en vigor un convenio de doble imposición (BOE-A-2011-9527). En cuanto al impuesto de salida (*exit tax*) español, solo afecta a patrimonios superiores a 4 millones de euros en activos financieros o a 1 millón de euros en participaciones superiores al 25%, por lo que no afecta a la mayoría de los nómadas. Los errores más comunes son confiar únicamente en la exención de visado sin regularizar el nuevo permiso de trabajo exigido desde 2026, no conservar documentación que acredite desde dónde se realiza el trabajo, y no solicitar el certificado de residencia fiscal georgiano.",
      "sources": [
        {
          "label": "KPMG Flash Alert: Georgia — Mandatory Work Authorization Introduced for Foreign Employees and Self-Employed Individuals (2026)",
          "url": "https://kpmg.com/xx/en/our-insights/gms-flash-alert/2026/flash-alert-2026-117.html"
        },
        {
          "label": "Eurofast: Georgia's 2026 Labour Migration Law Reforms — Work Permits, Digital Nomads & Immigration Compliance",
          "url": "https://eurofast.eu/georgias-2026-labour-migration-law-reforms-work-permits-digital-nomads-immigration-compliance/"
        },
        {
          "label": "ExpatHub.GE: registro de Individual Entrepreneur (IE) + Small Business Status (SBS)",
          "url": "https://expathub.ge/individual-entrepreneur-georgia-business-registration/"
        },
        {
          "label": "Agencia Tributaria / BOE-A-2011-9527 — convenio de doble imposición España–Georgia",
          "url": "https://www.boe.es/buscar/doc.php?id=BOE-A-2011-9527"
        }
      ]
    },
    "sanidad": {
      "content": "Entre las principales redes clínicas del país destacan Evex (la de mayor cobertura), New Hospitals (con estándares europeos) y American Medical Centers (que atiende 24 horas y en inglés). El gasto de bolsillo por una consulta oscila entre 15 y 30 dólares, y por una urgencia entre 50 y 150 dólares.\n\nDesde 2026 es obligatorio contratar un seguro de viaje con cobertura médica mínima antes de entrar en el país. El mínimo legal exigido es de **30.000 GEL** (unos 11.000 dólares al cambio de 2026) para gastos médicos y hospitalización — cifra confirmada, distinta e inferior a los 15.000 dólares que a veces se citan en otras guías desactualizadas. La evacuación médica de emergencia no aparece como requisito legal explícito en las fuentes oficiales consultadas, aunque sí es una cobertura habitual y recomendada, presente en pólizas como HeyMondo o SafetyWing. En cualquier caso, el seguro ya no es opcional: sin él se puede denegar la entrada al país.",
      "sources": [
        {
          "label": "U.S. Embassy in Georgia: Georgia to Require Insurance for All Tourists Starting 1/1/2026",
          "url": "https://ge.usembassy.gov/georgia-to-require-insurance-for-all-tourists-starting-1-1-2026/"
        },
        {
          "label": "Wander-Lush: Travel Insurance for Georgia (2026) — qué necesitas saber",
          "url": "https://wander-lush.org/travel-insurance-for-georgia/"
        },
        {
          "label": "ExpatHub.GE: mejores hospitales en Tiflis",
          "url": "https://expathub.ge/hospitals-in-tbilisi/"
        }
      ]
    },
    "barrios": {
      "content": "Vake es un barrio de aire europeo y ambiente tranquilo, con alquileres de entre 400 y 600 dólares al mes, aunque carece de estación de metro propia. Vera tiene un carácter creativo y una animada oferta de bares de vino, con precios similares (400-600$/mes), y es el barrio recomendado específicamente para nómadas digitales. Saburtalo es una zona de arquitectura soviética renovada, con alquileres de entre 300 y 500 dólares. Sololaki conserva mansiones del siglo XIX y se encuentra cerca del casco antiguo. Marjanishvili/Chugureti tiene un ambiente artístico y muy local. Didi Dighomi es un barrio en crecimiento, con los alquileres más asequibles del grupo (300-400$/mes).\n\nEn coworkings, Vibe Coworking Cafe cuesta 7 dólares el día o 93 dólares al mes; Impact Hub Tbilisi, ubicado en el complejo Fabrika, cobra 15 dólares al día y 194 dólares al mes; Space Z tiene una cuota mensual de 56 dólares e incluye gimnasio; Terminal Khorava ofrece acceso 24/7 por 11 dólares al día o 157 dólares al mes; D Block @ Stamba cuesta 15 dólares al día y 185 dólares al mes; y Tsre Coworking, 9 dólares al día y 108 dólares al mes.",
      "sources": [
        {
          "label": "Wander-Lush: 8 Best Tbilisi Neighbourhoods to Stay or Live In",
          "url": "https://wander-lush.org/where-to-stay-in-tbilisi-neighbourhoods-map/"
        },
        {
          "label": "ExpatHub.GE: guía completa de barrios de Tiflis",
          "url": "https://expathub.ge/living-in-tbilisi-georgia/"
        },
        {
          "label": "ExpatHub.GE: mejores espacios de coworking en Tiflis",
          "url": "https://expathub.ge/coworking-spaces-in-tbilisi/"
        },
        {
          "label": "Fabrika Tbilisi: Impact Hub Tbilisi",
          "url": "https://fabrikatbilisi.com/resident/impact-hub-tbilisi/"
        }
      ]
    }
  },
  "tokio": {
    "visaFiscal": {
      "content": "El trámite correspondiente es el Visado de Actividades Designadas para Nómadas Digitales, gestionado por el Ministerio de Asuntos Exteriores de Japón (MOFA) a través de sus embajadas y consulados. El requisito de ingresos es de 10 millones de yenes al año (unos 60.000 euros aproximadamente), y solo pueden optar a él las nacionalidades que cuentan con un acuerdo recíproco con Japón —más de 50 países, entre ellos España—, siempre que el solicitante trabaje exclusivamente para clientes o empresas extranjeras.\n\nEntre los documentos exigidos están el formulario de solicitud, el pasaporte, una prueba de ingresos (un contrato de trabajo o, para los freelancers, un certificado equivalente) y un seguro médico con una cobertura mínima de 10 millones de yenes; los dependientes deben aportar, además de su pasaporte, prueba de la relación familiar y su propio seguro.\n\nLa solicitud se presenta en la embajada o el consulado correspondiente, en persona o por correo, y se resuelve en unos 5 días hábiles. Desde el 1 de julio de 2026, las tasas son de 15.000 yenes para el visado de entrada única y 30.000 yenes para el de entradas múltiples. La duración del visado es de 6 meses y **no es renovable ni prorrogable**: una vez agotado, hay que salir de Japón y volver a solicitarlo desde el extranjero.\n\nEn materia fiscal, el umbral que determina la residencia fiscal en Japón es de **un año de estancia acumulada**, no los 183 días habituales en otros países. Como el visado de nómada digital solo permite 6 meses, normalmente no se supera ese umbral, por lo que **no se paga impuesto japonés sobre la renta obtenida en el extranjero**. Si se supera el año acumulado, se aplican tramos del 5% al 45%, más un impuesto local adicional de aproximadamente el 10%. España y Japón cuentan con un convenio de doble imposición actualizado en 2018 (BOE-A-2021-2977). El error más frecuente es creer que el visado exime automáticamente de tributar en Japón: en realidad, todo depende de no superar el año de estancia acumulada.",
      "sources": [
        {
          "label": "Japan Travel (oficial): Digital Nomad Visa",
          "url": "https://www.japan.travel/en/plan/digital-nomad-visa/"
        },
        {
          "label": "Ministerio de Asuntos Exteriores de Japón (MOFA): tasas de visado",
          "url": "https://www.mofa.go.jp/j_info/visit/visa/procedure/pagewe_000001_00391.html"
        },
        {
          "label": "Agencia Tributaria: convenio de doble imposición España–Japón",
          "url": "https://sede.agenciatributaria.gob.es/Sede/normativa-criterios-interpretativos/fiscalidad-internacional/convenios-doble-imposicion-firmados-espana/japon.html"
        },
        {
          "label": "BOE-A-2021-2977 — texto íntegro del convenio",
          "url": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2021-2977"
        }
      ]
    },
    "sanidad": {
      "content": "Entre las clínicas de referencia en Tokio se encuentran el St. Luke's International Hospital, el Tokyo Saiseikai Central Hospital y la Tokyo Station International Clinic. El gasto de bolsillo por una consulta ronda los 5.000 yenes (entre 40 y 45 euros); una apendicectomía puede costar desde 400.000 yenes (entre 3.200 y 3.600 euros); y una urgencia combinada con cirugía puede alcanzar hasta 5.000.000 de yenes (entre 40.000 y 45.000 euros).\n\nEl seguro nacional de salud japonés (NHI) solo está disponible para los residentes registrados en el país, no para los titulares del visado de nómada digital, que están obligados a contratar un seguro privado con una cobertura mínima de 10 millones de yenes.",
      "sources": [
        {
          "label": "St. Luke's International Hospital — ficha del hospital",
          "url": "https://www.japanhospitalsearch.org/hospital/010/"
        },
        {
          "label": "The Expat's Guide to Japan: St. Luke's International Hospital",
          "url": "https://expatsguide.jp/health-safety/medical-care/hospitals-clinics-tokyo/st-lukes-international-hospital/"
        },
        {
          "label": "Invest Tokyo: Medical Services in English by Foreign Doctors (PDF oficial)",
          "url": "https://www.investtokyo.metro.tokyo.lg.jp/en/oursupports/life/data-medical/hospital_and_medilocus.pdf"
        }
      ]
    },
    "barrios": {
      "content": "Shibuya es un barrio moderno y joven, con estudios de entre 120.000 y 160.000 yenes al mes y pisos de un dormitorio (1LDK) de entre 210.000 y 300.000 yenes. Ebisu tiene un carácter elegante y una fuerte presencia de expatriados, con precios en la franja media-alta. Nakameguro, de ambiente creativo, ofrece estudios de 110.000 a 150.000 yenes y 1LDK de 180.000 a 260.000 yenes. Kichijoji está considerado, en conjunto, \"el mejor barrio\" de la ciudad, con precios medios. Koenji es una opción económica, con estudios de entre 85.000 y 110.000 yenes. Shimokitazawa/Setagaya combina zonas verdes con un ambiente familiar, con estudios de 90.000 a 120.000 yenes. Para quienes buscan coworking, se recomiendan especialmente los barrios de Kiyosumi-Shirakawa y Jiyugaoka.\n\nEn cuanto a los espacios de coworking, .andwork, en Shibuya, cobra 3.300 yenes el pase diario y entre 29.000 y 34.000 yenes al mes, con horario de 7 a 24h; Creative Lounge MOV cuesta 1.100 yenes la hora y 23.400 yenes al mes; Midori.so, en Nakameguro, tiene un pase diario de 2.200 yenes y cuotas mensuales desde 42.350 yenes; S-Tokyo, en Nihonbashi, funciona 24/7 y cuesta desde 27.500 yenes al mes; Impact Hub Tokyo tiene cuotas desde 29.700 yenes al mes; y Ryozan Park, el más económico de todos, cuesta 1.650 yenes el día y desde 16.500 yenes al mes.",
      "sources": [
        {
          "label": "Out of Town Blog: Tokyo for Digital Nomads — Best Cafes, WiFi, and Neighborhoods",
          "url": "https://outoftownblog.com/tokyo-for-digital-nomads/"
        },
        {
          "label": "Tokyo Relocation Guide: Where to Live in Tokyo for Digital Nomads",
          "url": "https://tokyorelocationguide.com/blogs/where-to-live-in-tokyo-for-digital-nomads/"
        },
        {
          "label": ".andwork Shibuya — página oficial",
          "url": "https://www.xandwork.com/en/location/shibuya/"
        },
        {
          "label": "Coworkintel: ficha de .andwork shibuya",
          "url": "https://www.coworkintel.com/best-coworking-spaces/tokyo/andwork-shibuya"
        }
      ]
    }
  },
  "seul": {
    "visaFiscal": {
      "content": "El trámite es el visado **F-1-D**, conocido como \"Workcation\", que desde el 30 de junio de 2026 se ha convertido en un programa **permanente** (dejando atrás su fase piloto) y cuya duración máxima se ha ampliado a **3 años**.\n\nLos requisitos de ingresos son los siguientes: en la modalidad estándar (personas de 35 años o más que se instalan en Seúl) se exigen 104,82 millones de wones al año (unos 80.000 dólares); en la modalidad reducida (de 18 a 34 años, fuera del área metropolitana) el requisito baja a 52,41 millones de wones al año (unos 40.000 dólares).\n\nEntre los documentos necesarios están el formulario de solicitud, el pasaporte con una vigencia mínima de 6 meses, una fotografía, un certificado de antecedentes penales apostillado con menos de 6 meses de antigüedad, y un seguro médico de al menos 100 millones de wones que incluya, de forma explícita, una **cláusula de repatriación** —su ausencia es, de hecho, la primera causa de rechazo de las solicitudes—. Los empleados por cuenta ajena deben presentar una carta de verificación laboral (que acredite al menos un año de experiencia) junto con dos de los siguientes tres documentos: nóminas, extractos bancarios o declaraciones de impuestos. Los autónomos y dueños de empresa deben aportar, además, el registro de su empresa en el extranjero y declaraciones de impuestos que reflejen la renta imponible. **Los freelancers puros que no tienen una empresa constituida corren un riesgo real de que se les deniegue la solicitud**, por lo que resulta más prudente constituir una entidad antes de solicitar el visado.\n\nEl proceso puede tramitarse en un consulado (sin entrevista, entre 2 y 4 semanas) o mediante un cambio de estatus migratorio dentro de Corea (entre 3 y 10 días, solo disponible para quienes ya tienen un visado de corta duración); después, la tarjeta de residencia (ARC) se emite en un plazo de hasta 90 días, aunque en la práctica suele tardar unas 6 semanas. Está expresamente **prohibido trabajar o facturar a clientes coreanos**. En cuanto a los familiares, pueden incluirse el cónyuge y los hijos menores de 18 años solteros, siempre con los certificados correspondientes traducidos.\n\nEn materia fiscal, desde 2026 los 183 días continuos de estancia que crucen dos años fiscales también hacen surgir la residencia fiscal. Durante los primeros 5 años, la renta extranjera que no se remita a Corea no tributa en el país; superado ese plazo, la renta mundial pasa a tributar entre el 6% y el 45%, más un recargo local del 10% (lo que puede llegar a un tipo real del 49,5%). Existe además un tipo fijo opcional del **19%** para los extranjeros que empiecen su actividad antes del 31 de diciembre de 2026, aplicable hasta 20 años y sin posibilidad de deducciones; según la investigación original, esta opción compensa a partir de unos ingresos de entre 130 y 150 millones de wones al año (algunas fuentes recientes sitúan el punto de equilibrio bastante más bajo, en torno a los 70-80 millones de wones, y precisan que el tipo fijo está pensado sobre todo para perfiles técnicos y científicos de alta cualificación contratados por empresas coreanas, no necesariamente para freelancers; conviene simular ambos escenarios con un asesor fiscal antes de decidir). España y Corea del Sur tienen en vigor un convenio de doble imposición (BOE-A-1994-27627).",
      "sources": [
        {
          "label": "Human Resources Online: South Korea makes digital nomad visa permanent with lower thresholds",
          "url": "https://www.humanresourcesonline.net/south-korea-makes-digital-nomad-visa-permanent-with-lower-thresholds"
        },
        {
          "label": "Seoulstart: F-1-D Visa Guide 2026",
          "url": "https://seoulstart.com/guides/f-1-d-visa-guide"
        },
        {
          "label": "CountryTaxCalc: South Korea Flat Tax for Foreigners 2026",
          "url": "https://www.countrytaxcalc.com/tax-guides/south-korea-flat-tax-foreigners/"
        },
        {
          "label": "Agencia Tributaria / BOE-A-1994-27627 — convenio de doble imposición España–Corea del Sur",
          "url": "https://www.boe.es/buscar/act.php?id=BOE-A-1994-27627"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los grandes hospitales de la ciudad destacan el Asan Medical Center, el Samsung Medical Center y el Severance Hospital (Universidad Yonsei), los tres con centros específicos para pacientes internacionales.\n\nEn gastos de bolsillo, una consulta general sin cobertura del NHIS cuesta entre 30.000 y 60.000 wones; una consulta con especialista, entre 30.000 y 150.000 wones; una urgencia, entre 200.000 y 500.000 wones; un día de hospitalización, entre 50.000 y 2,7 millones de wones; y una apendicectomía en un hospital privado, entre 11 y 20 millones de wones (entre 6.770 y 12.310 euros).\n\nLa afiliación al **NHIS** (seguro nacional de salud) es obligatoria a partir de los 6 meses de residencia continuada para los titulares del visado F-1-D, con una prima desde unos 150.000 wones al mes; solo se puede quedar exento contratando un seguro privado con una cobertura vitalicia de aproximadamente 1.000 millones de wones, un umbral que la mayoría de las pólizas pensadas para nómadas no alcanza.",
      "sources": [
        {
          "label": "Seoulstart: Korea National Health Insurance (NHIS) Guide for Foreign Residents (2026)",
          "url": "https://seoulstart.com/guides/nhis-enrollment-guide"
        },
        {
          "label": "Seoulstart: Private Health Insurance in Korea",
          "url": "https://seoulstart.com/guides/private-health-insurance-korea"
        },
        {
          "label": "Asan Medical Center — ficha para pacientes internacionales",
          "url": "https://my1health.com/hospital/south-korea/seoul/asan-medical-center"
        }
      ]
    },
    "barrios": {
      "content": "Itaewon es un barrio internacional, con buenos colegios, y alquileres de entre 900.000 y 1,4 millones de wones al mes. Hongdae, joven y ruidoso, se mueve entre 700.000 y 1,3 millones. Yeonnam-dong, más tranquilo y con ambiente de cafeterías, oscila entre 800.000 y 1,3 millones. Gangnam, de carácter corporativo y el más caro de todos, supera los 1,3-2,5 millones de wones. Seodaemun/Muak, tranquilo y con zonas de senderismo, es la opción más asequible dentro del centro, con precios de 600.000 a 1 millón. Yongsan/Hannam-dong, de categoría premium y cercano a las embajadas, va de 1,2 a 2,5 millones de wones.\n\nEn coworkings, Hoppin House, en Yeonnam-dong, cuesta 16 dólares el día y 206 dólares al mes, con acceso 24/7; Hey Ground cobra desde 275 dólares al mes, también 24/7; Local Stitch Creator Town cuesta 254 dólares al mes; Blue Pebbles, el más económico, cobra 11 dólares al día y 130 dólares al mes; ECS153, en Gangnam, va de 210 a 290 dólares al mes; y WeWork tiene cuotas desde 217 dólares al mes.",
      "sources": [
        {
          "label": "SharedHomies: Best Seoul Neighborhoods for Foreigners (2026)",
          "url": "https://sharedhomies.com/blog/best-seoul-neighborhoods-for-foreigners"
        },
        {
          "label": "Homessignature: Digital Nomad & Long-Stay Guide to Seoul — Neighbourhoods, Costs & Co-working Spots",
          "url": "https://homessignature.com/en/blog/69cceecb-b7a5-4adb-8649-be282aab07bc"
        },
        {
          "label": "Hoppin House — página oficial",
          "url": "https://www.hoppin.life/hoppinhouse/coworking"
        }
      ]
    }
  },
  "estambul": {
    "visaFiscal": {
      "content": "Existen dos vías principales para instalarse legalmente en Estambul. La primera es el Visado de Nómada Digital a través de GoTürkiye, que constituye una pre-aprobación y no una residencia directa: el solicitante obtiene primero el visado en el consulado turco correspondiente y, ya en Turquía, debe tramitar el İkamet Tezkeresi (permiso de residencia), que es el documento que realmente autoriza la estancia en el país. Para acceder a esta vía es necesario tener entre 21 y 55 años, poseer la nacionalidad de uno de los aproximadamente 36 países elegibles (entre los que se incluye España), acreditar un ingreso mínimo de 3.000 dólares al mes y disponer de un título universitario.\n\nLa segunda vía, más utilizada en la práctica, consiste en solicitar directamente el İkamet estándar sin pasar por el visado de nómada digital. Para ello se requiere el pasaporte, el formulario e-ikamet cumplimentado, cuatro fotografías, un contrato de alquiler registrado, un seguro médico llamado \"Yabancı Sağlık Sigortası\", la acreditación de medios económicos suficientes y, según la situación laboral, uno de los siguientes documentos: una carta del empleador si se trabaja por cuenta ajena, la documentación de la actividad junto con contratos y facturas si se es autónomo (freelance), o el certificado de registro mercantil si se es propietario de una empresa.\n\nEn cuanto a las tasas vigentes en 2026 (sujetas a cambios frecuentes), el İkamet conlleva un harç escalonado de 3.359,90 liras turcas por el primer mes más 2.232,30 liras por cada mes adicional, al que se suma un Belge Bedeli fijo de 964 liras. En total, el coste aproximado es de 17.718 liras para seis meses, 31.112 liras para doce meses y 57.899 liras para veinticuatro meses. Están exentos del pago del harç los nacionales de Chequia, Dinamarca, Irlanda, Kosovo, Nepal, Sri Lanka, Siria, Turkmenistán, Palestina y la República Turca del Norte de Chipre (KKTC).\n\nPara la reunificación familiar se exige el certificado de matrimonio o de nacimiento apostillado, junto con la prueba de que el titular dispone de medios económicos suficientes.\n\nEn materia fiscal, se adquiere la residencia fiscal a partir de 183 días de estancia en el país. Los tramos del IRPF turco en 2026 van del 15% (hasta 190.000 liras) al 40% (a partir de 5,3 millones de liras). El cambio más relevante es el nuevo régimen introducido por la Ley 7582 (junio de 2026), que establece una exención fiscal de veinte años sobre determinadas rentas de origen extranjero para quienes se conviertan en residentes fiscales a partir del 1 de enero de 2026 y no hayan sido residentes fiscales en Turquía durante los tres años anteriores; se trata del primer régimen de este tipo aprobado en el país (verificado: la ley fue publicada en el Boletín Oficial el 4 de junio de 2026 y está en vigor). Además, el convenio de doble imposición entre España y Turquía está vigente desde 2004. Entre los errores más habituales se encuentran creer que el visado exime automáticamente del pago de impuestos al superar los 183 días de estancia, confundir el permiso de residencia con la residencia fiscal, y no actualizar el İkametgah (domicilio registrado) al cambiar de vivienda.",
      "sources": [
        {
          "label": "GoTürkiye — Requisitos del Visado de Nómada Digital",
          "url": "https://digitalnomads.goturkiye.com/application-requirements-for-digital-nomad-visa-and-short-term-residence"
        },
        {
          "label": "Ikamet.com — Tasas del permiso de residencia en Turquía 2026",
          "url": "https://ikamet.com/turkey-residence-permit-fee-2026/"
        },
        {
          "label": "Mondaq — Ley n.º 7582, publicada en el Boletín Oficial el 4 de junio de 2026",
          "url": "https://www.mondaq.com/turkey/income-tax/1797334/law-no-7582-on-the-amendment-of-certain-laws-published-in-the-official-gazette-dated-4-june-2026"
        },
        {
          "label": "Istanbul Lawyer Firm — Exención fiscal de 20 años sobre rentas extranjeras (Ley 7582)",
          "url": "https://istanbullawyerfirm.com/blog/turkey-20-year-foreign-income-tax-exemption"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los principales centros hospitalarios de la ciudad destacan el American Hospital, situado en el barrio de Nişantaşı, el grupo Acıbadem (con acreditación JCI) y el grupo Memorial.\n\nEn cuanto a los seguros privados, SafetyWing ofrece su plan Essential desde 62,72 dólares cada cuatro semanas y su plan Complete desde 177,50 dólares al mes para personas de entre 18 y 39 años (no se dispone de un dato fiable para mayores de 40 años). El seguro Yabancı Sağlık Sigortası, obligatorio para obtener el İkamet, no tiene un precio de referencia homogéneo y fiable, por lo que se recomienda solicitar cotización directamente a las aseguradoras.\n\nEn gastos de bolsillo, una consulta médica corta cuesta aproximadamente 2.801 liras turcas (unos 50 euros), aunque se trata de un dato preliminar.",
      "sources": [
        {
          "label": "SafetyWing — Seguro Nomad Insurance (planes y precios)",
          "url": "https://safetywing.com/nomad-insurance"
        },
        {
          "label": "Memorial Hospitals Group — Acreditación JCI",
          "url": "https://www.memorialistanbul.com/about/jci-accreditation"
        },
        {
          "label": "Acıbadem Healthcare Group (Wikipedia)",
          "url": "https://en.wikipedia.org/wiki/Ac%C4%B1badem_Healthcare_Group"
        }
      ]
    },
    "barrios": {
      "content": "Entre los barrios más recomendados para nómadas digitales están Kadıköy y Moda, de ambiente bohemio y situados en el lado asiático de la ciudad; Beşiktaş, dinámico y céntrico; Nişantaşı y Şişli, sofisticados pero caros; Sarıyer, tranquilo, junto al bosque y de categoría premium; y Bomonti, en pleno proceso de gentrificación y con perfil creativo. El alquiler de referencia se sitúa entre 974 y 979 dólares al mes en el centro, y entre 651 y 654 dólares al mes fuera del centro. Se recomienda evitar zonas como Tarlabaşı, Esenler, Gaziosmanpaşa, Sultangazi, Zeytinburnu y Bağcılar.\n\nEn cuanto a espacios de coworking, destacan Kolektif House (en Levent, abierto 24 horas los 7 días de la semana), Impact Hub (en Kâğıthane, desde 200 liras al mes), IDEA (en Kadıköy, abierto de 9 a 23 horas, con vistas al mar), Workinton (en Nişantaşı, desde 1.425 liras al mes, abierto 24/7), e-Ofis (en Pera, desde 860 liras al mes) y DAIRE (en Beşiktaş, desde 50 liras la hora).",
      "sources": [
        {
          "label": "Holafly — Mejor barrio para alojarse en Estambul como nómada digital",
          "url": "https://esim.holafly.com/expats/best-neighborhood-stay-istanbul/"
        },
        {
          "label": "GoTürkiye — Guía para trabajar desde Estambul",
          "url": "https://goturkiye.com/digitalnomads/discover-work-from-istanbul"
        },
        {
          "label": "Istanbul Tourist Information — Los 10 mejores espacios de coworking en Estambul",
          "url": "https://istanbul-tourist-information.com/best-coworking-spaces-in-istanbul/"
        },
        {
          "label": "Deal-TR — Alquiler medio en Estambul 2026 por distrito",
          "url": "https://www.deal-tr.com/en/blog/average-rent-in-istanbul-2026-prices-by-district-roi-investment-opportunities"
        }
      ]
    }
  },
  "varsovia": {
    "visaFiscal": {
      "content": "Para un ciudadano español, al pertenecer a la Unión Europea, rige la libre circulación. No obstante, las estancias superiores a tres meses exigen el registro de residencia ante el Voivoda (la autoridad regional) en un plazo de tres meses; el trámite es gratuito y la resolución es inmediata, aunque no registrarse conlleva una multa.\n\nPara los ciudadanos de fuera de la Unión Europea no existe un visado de nómada digital oficial en Polonia. La vía más habitual es la del autónomo (freelance): registrarse mediante el formulario CEIDG-1 (trámite online y gratuito), obtener el número PESEL y el NIP, y contar con al menos un cliente polaco. A esto se añade el visado tipo D, cuya tasa oscila entre 70 y 80 euros y cuya resolución tarda entre 15 y 30 días. Posteriormente es necesario tramitar la Karta Pobytu (tarjeta de residencia) a través del portal MOS 2.0, obligatorio desde abril de 2026, con una tasa de 340 PLN más 100 PLN, es decir, 440 PLN en total. Los plazos de resolución varían mucho según la región: en Varsovia oscilan entre 9 y 14 meses (los más lentos del país), en Wrocław entre 6 y 12 meses, en Cracovia entre 6 y 10 meses, y en Szczecin entre 4 y 7 meses; se trata de un factor clave a tener en cuenta si se elige instalarse en Varsovia.\n\nEn caso de denegación, cabe recurso en un plazo de 14 días ante el Jefe de la Oficina de Extranjería.\n\nPara la reunificación familiar se requieren los certificados correspondientes junto con la prueba de que el titular dispone de ingresos suficientes.\n\nEn materia fiscal, se adquiere la residencia a partir de 183 días de estancia o cuando el centro de intereses vitales se encuentra en Polonia. El IRPF general se sitúa en el 12% y el 32% según tramos. Los autónomos pueden optar por el ryczałt (un tipo que va del 2% al 17% sobre los ingresos brutos, situándose normalmente en el 12% para el sector IT), por el régimen lineal del 19%, o por el IP Box del 5% para quienes desarrollen software propio y cualificado. Entre los errores más frecuentes están elegir mal el régimen fiscal sin asesoría profesional, subestimar las cotizaciones al ZUS (la seguridad social polaca) y dar por hecho que se cumplen los requisitos del IP Box sin verificarlo. El convenio de doble imposición entre España y Polonia está vigente desde 1982.",
      "sources": [
        {
          "label": "MOS 2.0 — Guía completa para extranjeros en Polonia (2026)",
          "url": "https://mos20.pl/en/"
        },
        {
          "label": "LegalSol — Tiempos reales de espera de la Karta Pobytu en 2026",
          "url": "https://www.legalsol.pl/blog/how-long-does-a-karta-pobytu-application-really-take-in-2026-en"
        },
        {
          "label": "Xolo — Cómo registrarse y trabajar como autónomo en Polonia en 2026",
          "url": "https://blog.xolo.io/how-to-register-and-work-as-a-freelancer-in-poland"
        },
        {
          "label": "Podnik.io — Tipos del ryczałt por actividad en Polonia 2026",
          "url": "https://www.podnik.io/en/blog/poland/faq-ryczalt-rates-2026"
        }
      ]
    },
    "sanidad": {
      "content": "Entre las principales clínicas privadas se encuentran Medicover (que incluye la American Clinic Warsaw) y LUX MED.\n\nEn gastos de bolsillo, una consulta con el médico de cabecera cuesta entre 150 y 300 PLN, una consulta con especialista entre 200 y 450 PLN, y una hospitalización sin seguro puede costar \"de varios cientos a varios miles\" de PLN. Con la tarjeta sanitaria europea (TSE/EHIC) se accede al sistema público del NFZ, aunque con listas de espera largas para especialistas.",
      "sources": [
        {
          "label": "LUX MED — Paquete Standard (precios oficiales)",
          "url": "https://www.luxmed.pl/en/for-patient/subscriptions/subscriptions-for-children-and-adults/standard-package"
        },
        {
          "label": "Comisión Europea — Tarjeta Sanitaria Europea en Polonia",
          "url": "https://employment-social-affairs.ec.europa.eu/policies-and-activities/moving-working-europe/eu-social-security-coordination/european-health-insurance-card/how-use-card/poland-european-health-insurance-card_en"
        },
        {
          "label": "Clinics on Call — Medicover en Polonia: precios y médicos",
          "url": "https://clinicsoncall.com/en/clinic/medicover/"
        }
      ]
    },
    "barrios": {
      "content": "Entre los barrios de la ciudad destacan Śródmieście (el centro, caro), Stare Miasto (el casco histórico), Wola (moderno y con mejor precio que el centro), Mokotów (exclusivo y con buena relación calidad-precio), Praga (bohemio, el más barato y en pleno proceso de transición) y Żoliborz (verde y económico). Como referencia, una habitación en el centro cuesta unos 1.050 euros al mes, y fuera del centro unos 835 euros al mes.\n\nEn cuanto a coworkings, destacan Mindspace (de gama premium), Regus (oficinas con servicios), Business Link (una red histórica en la ciudad) y Spaces, perteneciente al grupo IWG. Los precios son variables y conviene verificarlos directamente con cada operador; los agregadores online citan \"desde 16 euros al día\" como referencia genérica.",
      "sources": [
        {
          "label": "Domkaspot — Mejores barrios de Varsovia para internacionales 2026",
          "url": "https://domkaspot.com/blog/best-neighborhoods-warsaw-internationals-2026"
        },
        {
          "label": "Domkaspot — Mejores espacios de coworking en Varsovia, Cracovia y Wrocław 2026",
          "url": "https://domkaspot.com/blog/best-coworking-spaces-warsaw-krakow-wroclaw-2026"
        },
        {
          "label": "Digital Nomads World — Guía de nómada digital de Varsovia",
          "url": "https://digitalnomads.world/city-guide/warsaw/"
        }
      ]
    }
  },
  "split": {
    "visaFiscal": {
      "content": "Para un ciudadano español, la Unión Europea permite la libre circulación durante 90 días. Transcurrido ese plazo, es necesario registrar la residencia temporal en la comisaría del MUP (la policía de extranjería) en un plazo de 8 días, sin necesidad de justificar el motivo del registro, bastando con acreditar medios económicos y seguro médico; la tarjeta resultante tiene una validez de 5 años.\n\nPara los ciudadanos de fuera de la Unión Europea existe el permiso de estancia para nómada digital, tramitado ante el MUP. La documentación requerida incluye el formulario correspondiente, el pasaporte con una validez mínima de 6 meses, la prueba de la condición de nómada digital, el certificado de antecedentes penales, el OIB (el número fiscal croata), un seguro médico con una cobertura mínima de 30.000 euros para toda la duración de la estancia, la acreditación de alojamiento y la prueba de medios económicos suficientes. Un requisito clave es que el cliente o la empresa para la que se trabaja debe estar situado fuera de Croacia. La tasa asciende a un mínimo de 450 kunas (aproximadamente 60 euros), y el plazo mínimo de resolución es de un mes, durante el cual es obligatorio permanecer en Croacia.\n\nEl permiso tiene una validez de hasta 18 meses y no es renovable de forma consecutiva: es necesario salir del país y esperar 6 meses antes de poder solicitarlo de nuevo.\n\nEn cuanto a la reunificación familiar, el cónyuge puede acogerse a ella, pero la normativa aplicable a los hijos no está publicada con claridad, por lo que conviene confirmarla directamente con el MUP.\n\nEn materia fiscal, la renta procedente del trabajo o de la actividad profesional para un empleador que no sea croata queda exenta del IRPF mientras se mantenga el estatus de nómada digital; esta exención no cubre, sin embargo, los dividendos, los alquileres ni las inversiones, que sí tributan si proceden de fuentes croatas. Fuera de este régimen especial, el IRPF croata es del 20% hasta 60.000 euros y del 30% a partir de esa cifra, a lo que se suma un recargo municipal de entre el 0% y el 18% (Zagreb aplica el máximo; en el caso de Split, la cifra exacta no está confirmada). El convenio de doble imposición entre España y Croacia está vigente desde 2005. Un error frecuente es creer que el estatus de nómada digital exime del pago de todo impuesto croata, cuando en realidad solo cubre la renta del trabajo por cuenta de un empleador extranjero.",
      "sources": [
        {
          "label": "Nordic Star Law — Permiso de residencia temporal en Croacia para nómadas digitales: requisitos, procedimiento, impuestos y riesgos",
          "url": "https://www.nordicstar.law/en/news/temporary-residence-rermit-in-croatia-for-digital-nomads-requirements-procedure-taxes-risks/"
        },
        {
          "label": "Taxes for Expats — Guía 2026 del visado de nómada digital y reglas fiscales en Croacia",
          "url": "https://www.taxesforexpats.com/country-guides/hr/croatia-digital-nomad-visa.html"
        },
        {
          "label": "Kluwer International Tax Blog — Croacia: ¿una nueva tierra prometida libre de impuestos para nómadas digitales?",
          "url": "https://legalblogs.wolterskluwer.com/international-tax-law-blog/croatia-a-new-tax-free-promised-land-for-digital-nomads-part-i/"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los principales centros sanitarios están el KBC Split (hospital público universitario) y la Poliklinika Priska Med, la mayor clínica privada de la costa dálmata, que ofrece atención multilingüe sin necesidad de cita previa.\n\nEn gastos de bolsillo, una consulta general cuesta entre 25 y 40 dólares, una consulta con especialista entre 75 y 165 dólares, y una urgencia entre 80 y 150 dólares. En el sistema público, con la tarjeta sanitaria europea (TSE/EHIC), el copago es de 17,70 euros al día, con un máximo de 530,88 euros por ingreso hospitalario.",
      "sources": [
        {
          "label": "Poliklinika Priska Med — Lista de precios (Cjenik)",
          "url": "https://www.priska-med.com/cjenik/"
        },
        {
          "label": "Poliklinika Priska Med — Asistencia médica para turistas",
          "url": "https://www.priska-med.com/tourist-medical-assistance/"
        },
        {
          "label": "Comisión Europea — Tarjeta Sanitaria Europea en Croacia",
          "url": "https://employment-social-affairs.ec.europa.eu/policies-and-activities/moving-working-europe/eu-social-security-coordination/european-health-insurance-card/how-use-card/croatia-european-health-insurance-card_en"
        }
      ]
    },
    "barrios": {
      "content": "Entre las zonas de la ciudad destacan el centro histórico, en torno al Palacio de Diocleciano y muy turístico; Veli Varoš, de piedra tradicional y junto al centro; Lučac, cerca de Bačvice; Bačvice, junto a la playa y de ambiente social; Meje, residencial y tranquilo; y Split 3/Spinut, de perfil universitario y asequible. Como referencia, una habitación en el centro cuesta unos 920 euros al mes, y fuera del centro unos 665 euros al mes, con subidas notables entre junio y septiembre.\n\nEn cuanto a coworkings, destacan CoCreative (en Spinut, 11 euros al día o 99 euros al mes), Saltwater Workspace (en Riva, con equipo de audio y vídeo), Amosfera (en Split 3, cerrado los fines de semana) y TinkTank, The Works y Re.Split, todos ellos activos pero sin precio verificado, por lo que conviene confirmarlo directamente.",
      "sources": [
        {
          "label": "Nomads.com — Espacios de coworking en Split",
          "url": "https://nomads.com/coworking/split"
        },
        {
          "label": "Coworker — CoCreative Coworking, Split",
          "url": "https://www.coworker.com/croatia/split/cocreative"
        },
        {
          "label": "Split Tech City — Espacios de coworking únicos en Split",
          "url": "https://en.split-techcity.com/unique-coworking-spaces-split/"
        }
      ]
    }
  },
  "tallin": {
    "visaFiscal": {
      "content": "Para un ciudadano español, la libre circulación en la Unión Europea permite la entrada sin trámites. Sin embargo, las estancias superiores a tres meses exigen obtener el código de identidad personal, registrar el domicilio y solicitar la ID card ante la PBGB (la Junta de Policía y Guardia de Fronteras); el derecho de residencia se revoca si no existe un domicilio registrado.\n\nPara los ciudadanos de fuera de la Unión Europea existe el Visado de Nómada Digital, pionero en Europa, que se tramita en las embajadas de Estonia o directamente ante la PBGB. El requisito más destacado es un ingreso mínimo neto de 4.500 euros al mes durante los seis meses anteriores a la solicitud, una de las cifras más altas de Europa para este tipo de visado. No existe una distinción formal de trámite entre empleado por cuenta ajena, autónomo o propietario de empresa: lo único que cambia es el tipo de justificante de ingresos que se debe presentar. Las tasas son de 120 euros para el visado tipo D (válido hasta 365 días) y de 90 euros para el visado tipo C (válido hasta 90 días), con un plazo de resolución de entre 15 y 30 días.\n\nEn cuanto a la reunificación familiar, los cónyuges y los hijos menores pueden acogerse a ella en las mismas condiciones, y se reconocen también las parejas del mismo sexo.\n\nEn materia fiscal, se adquiere la residencia a partir de 183 días de estancia dentro de cualquier periodo móvil de 12 meses. El IRPF estonio es un tipo fijo del 22% sobre la renta mundial, con un mínimo exento de 700 euros al mes (8.400 euros al año). Por debajo de los 183 días de estancia, este visado permite residir en Estonia sin llegar a ser residente fiscal del país, una especie de \"laguna\" legal. Aparte de esto, el programa e-Residency (distinto del visado de nómada digital) permite crear una empresa OÜ que tributa al 0% sobre los beneficios no distribuidos. El convenio de doble imposición entre España y Estonia está vigente desde 2003. Entre los errores más comunes están el mal conteo de los días de estancia, confundir el ingreso bruto con el neto, operar una OÜ \"sin sustancia\" (lo que conlleva un alto riesgo de inspección fiscal), no presentar la declaración aunque el resultado sea de 0 euros (con sanciones de entre 400 y 3.200 euros) y no darse de alta a efectos de IVA al superar los 40.000 euros de facturación.",
      "sources": [
        {
          "label": "Work in Estonia / Visit Estonia — Visado de Nómada Digital (página oficial)",
          "url": "https://visitestonia.com/en/what-to-do/digital-nomad-visa"
        },
        {
          "label": "e-Residency Estonia — Preguntas frecuentes sobre el visado de nómada digital",
          "url": "https://www.e-resident.gov.ee/blog/posts/faqs-about-estonias-digital-nomad-visa/"
        },
        {
          "label": "Junta de Impuestos y Aduanas de Estonia (EMTA) — Tipos impositivos",
          "url": "https://www.emta.ee/en/private-client/taxes-and-payment/declaration-income/tax-rates"
        },
        {
          "label": "Grant Thornton Estonia — Cálculo del mínimo exento desde 2026",
          "url": "https://www.grantthornton.ee/en/insights1/calculating-the-basic-exemption-from-2026/"
        }
      ]
    },
    "sanidad": {
      "content": "Entre los principales centros sanitarios están los hospitales públicos North Estonia Medical Centre y East/West Tallinn Central Hospital, así como la clínica privada Confido Meditsiinikeskus, que permite el acceso directo a especialistas sin pasar por el médico de familia.\n\nEn gastos de bolsillo, una consulta general cuesta entre 55 y 110 euros, una consulta con especialista entre 83 y 143 euros, y una urgencia desde 138 euros. La hospitalización en el sistema público con la tarjeta sanitaria europea (TSE/EHIC) cuesta 5,50 euros al día, con un tope de 50 euros por caso. Un análisis de sangre cuesta entre 44 y 77 euros (entre 138 y 165 euros en el hospital), una radiografía de tórax entre 17 y 61 euros, y una resonancia magnética entre 259 y 314 euros.",
      "sources": [
        {
          "label": "Confido Health Centre Tallinn — Página oficial",
          "url": "https://www.confido.ee/en/confido-health-centre-tallinn/"
        },
        {
          "label": "Nomedic — Sanidad en Tallin: consejos y costes",
          "url": "https://nomedic.co/travel/estonia/city/tallinn"
        },
        {
          "label": "Comisión Europea — Tarjeta Sanitaria Europea en Estonia",
          "url": "https://employment-social-affairs.ec.europa.eu/policies-and-activities/moving-working-europe/eu-social-security-coordination/european-health-insurance-card/how-use-card/estonia-european-health-insurance-card_en"
        }
      ]
    },
    "barrios": {
      "content": "Entre las zonas de la ciudad destacan el casco antiguo o Vanalinn, medieval y recorrible enteramente a pie; el Kesklinn moderno, de perfil comercial; Kalamaja, bohemio, en pleno proceso de gentrificación y favorito de los nómadas digitales; Kadriorg, verde y orientado a familias; la zona del puerto, práctica por su ubicación; y Ülemiste, junto al aeropuerto y de perfil corporativo. Como referencia, una habitación en el centro cuesta unos 707 euros al mes, y fuera del centro unos 509 euros al mes, de las cifras más bajas entre las 20 ciudades comparadas.\n\nEn cuanto a coworkings, destacan Lift99 (el más económico, entre 120 y 160 euros al mes, orientado a startups), Spring Hub (entre 180 y 250 euros al mes), WorkHub Telliskivi (entre 180 y 250 euros al mes, en el distrito creativo de Telliskivi), Ülemiste City Business Campus (entre 270 y 350 euros al mes, abierto 24/7, con gimnasio y clínica), Tempt Coworking (entre 270 y 350 euros al mes, abierto 24/7) y Garden Hub (entre 180 y 250 euros al mes, el más flexible).",
      "sources": [
        {
          "label": "Work in Estonia — Mejores espacios de coworking en Tallin, Tartu y el resto de Estonia",
          "url": "https://workinestonia.com/best-coworking-spaces-in-tallinn-tartu-and-around-estonia/"
        },
        {
          "label": "e-Residency Estonia — Lift99, espacios de coworking en Tallin y Kiev",
          "url": "https://www.e-resident.gov.ee/blog/posts/lift99-coworking-spaces-tallinn-kyiv/"
        },
        {
          "label": "Relocate.me — Coste de la vida en Tallin: alquiler, servicios y alimentación",
          "url": "https://relocate.me/cost-of-living/estonia/tallinn"
        }
      ]
    }
  },
  oporto: {
    visaFiscal: {
      content: "Los ciudadanos de la Unión Europea y del Espacio Económico Europeo pueden instalarse en Oporto sin ningún trámite de visado, amparados por la libre circulación de personas; basta con registrarse ante las autoridades locales pasados tres meses de residencia. Para los nómadas digitales no comunitarios, Portugal ofrece el visado D8, que exige acreditar unos ingresos mensuales de al menos 3.680 € (cuatro veces el salario mínimo portugués), demostrados mediante nóminas, contrato y extractos bancarios reales.\n\nEl antiguo régimen fiscal NHR (Non-Habitual Resident), que durante años atrajo a miles de extranjeros con tipos reducidos, dejó de aceptar nuevas solicitudes el 31 de marzo de 2025 y fue sustituido por el IFICI (Incentivo Fiscal à Investigação Científica e Inovação), un régimen mucho más restringido y orientado a perfiles de investigación e innovación, no disponible para la mayoría de nómadas digitales. Para el resto de contribuyentes rige la regla general de residencia fiscal: se considera residente en Portugal a quien permanece más de 183 días al año en el país.",
      sources: [
        { label: "Guía de la visa de nómada digital en Portugal 2026 — Integrate Abroad", url: "https://integrateabroad.com/blog/visa-nomada-digital-espana-requisitos" },
        { label: "Fin del régimen NHR y llegada del IFICI — Portugal.com", url: "https://www.portugal.com/moving-to-portugal/nhr-tax-regime-portugal/" },
      ],
    },
    sanidad: {
      content: "Los residentes legales en Portugal tienen acceso al Serviço Nacional de Saúde (SNS) una vez formalizada su inscripción en el centro de salud de su zona, con una atención pública de bajo coste para el paciente. Sin embargo, para tramitar el visado D8 es obligatorio presentar un seguro médico privado con cobertura mínima de 30.000 € que cubra tratamiento y hospitalización en Portugal durante todo el periodo de la solicitud.\n\nEl coste de una póliza privada adecuada para este requisito en Oporto ronda entre 30 € y 60 € al mes para un adulto joven sin patologías previas. La sanidad privada en la ciudad es de calidad alta y con tiempos de espera mucho menores que en la red pública, por lo que buena parte de los nómadas mantiene el seguro privado incluso tras acceder al SNS.",
      sources: [
        { label: "Requisitos de seguro médico para el visado D8 — Global Citizen Solutions", url: "https://www.globalcitizensolutions.com/portugal-d8-visa/" },
        { label: "Sistema de salud en Portugal — Numbeo Healthcare Portugal", url: "https://www.numbeo.com/health-care/country_result.jsp?country=Portugal" },
      ],
    },
    barrios: {
      content: "Cedofeita es el barrio de referencia para nómadas digitales jóvenes por su ambiente bohemio, sus galerías de arte y su alta densidad de cafeterías con wifi; un piso de un dormitorio ronda entre 700 € y 950 € al mes. Bonfim, más residencial y algo más asequible, atrae a quienes buscan tranquilidad sin alejarse del centro, con alquileres desde 650 € para un dormitorio. Foz do Douro, junto a la desembocadura del río, es la zona más cotizada por su cercanía a la playa, con rentas que superan los 1.100 € mensuales, mientras que Baixa, el centro histórico, combina turismo y vida local con precios intermedios, en torno a 900 € para un dormitorio.\n\nEntre los coworkings destaca Porto i/o, uno de los espacios más consolidados de la ciudad, con puestos flexibles y una comunidad activa de startups; Selina Navis, que combina coworking y coliving junto al río Duero; y Vertical Coworking, en el centro, orientado a freelancers y pequeños equipos con salas de reuniones y acceso 24/7.",
      sources: [
        { label: "Precios de alquiler por zonas en Oporto — Investropa", url: "https://investropa.com/blogs/news/florence-rents" },
        { label: "Porto i/o Coworking", url: "https://portoio.com/" },
        { label: "Selina Porto", url: "https://www.selina.com/portugal/porto/" },
      ],
    },
  },
  madrid: {
    visaFiscal: {
      content: "Los ciudadanos de la Unión Europea y del Espacio Económico Europeo no necesitan visado ni permiso de trabajo para instalarse en Madrid: la libre circulación les permite residir y trabajar sin más trámite que empadronarse y solicitar el certificado de registro de ciudadano de la UE. Para los nómadas digitales no comunitarios, España ofrece desde 2023 el visado para teletrabajadores de carácter internacional, creado por la Ley de Startups y gestionado por la Unidad de Grandes Empresas. El solicitante debe acreditar unos ingresos mensuales equivalentes al 200% del salario mínimo interprofesional, en torno a 2.849 €/mes en 2026, demostrados mediante nóminas, contrato y extractos bancarios reales.\n\nLa autorización inicial se concede por hasta tres años, renovable por periodos de dos años, con acceso a la residencia de larga duración a los cinco años. Quienes obtienen este visado pueden acogerse además al régimen especial para trabajadores desplazados o Ley Beckham, que fija un tipo fijo del 24% en el IRPF sobre los primeros 600.000 € de renta (47% por encima de ese umbral) durante el año de llegada más los cinco siguientes. Para el resto de contribuyentes rige la regla general de residencia fiscal: más de 183 días naturales en España durante el año natural.",
      sources: [
        { label: "Visado para nómadas digitales — Legalitas", url: "https://www.legalitas.com/actualidad/visado-nomada-digital" },
        { label: "La ley Beckham en España 2026 — Raisin", url: "https://www.raisin.com/es-es/tributacion/ley-beckham/" },
      ],
    },
    sanidad: {
      content: "Los residentes legales en Madrid tienen acceso al Sistema Nacional de Salud una vez formalizada su afiliación a la Seguridad Social o su empadronamiento, con una atención pública de amplia cobertura y coste muy bajo para el paciente. Sin embargo, para tramitar el visado de teletrabajador es obligatorio presentar una póliza de seguro médico privado, contratada con una aseguradora autorizada por la Dirección General de Seguros y Fondos de Pensiones, que cubra asistencia sanitaria en España sin copagos ni carencias; los seguros de viaje quedan expresamente excluidos.\n\nEl coste de una póliza privada de este tipo en Madrid para un adulto joven sin patologías previas ronda entre 50 € y 100 € al mes según la cobertura y la aseguradora (Sanitas, Adeslas, Asisa, DKV o Cigna, entre las más habituales). La sanidad privada en Madrid es de calidad alta, con tiempos de espera mucho menores que en la pública y una amplia red de clínicas y hospitales privados en toda la ciudad.",
      sources: [
        { label: "Seguro médico para el visado de nómada digital — Cohen y Aguirre", url: "https://cohenyaguirre.es/seguro-medico-para-visa-nomada-digital" },
        { label: "Precio del seguro médico privado en España 2026 — Calculates", url: "https://www.calculates.es/blog/seguro-medico-privado-precio-mensual-2026/" },
      ],
    },
    barrios: {
      content: "Malasaña es el barrio de referencia para nómadas digitales jóvenes por su ambiente alternativo, su vida nocturna y su alta densidad de cafeterías con wifi; el alquiler ronda entre 1.200 € y 1.460 € al mes para un piso de 50-60 m². Chueca, contiguo, destaca por su ambiente cosmopolita y precios similares. Salamanca es el barrio más elegante y caro, con arquitectura señorial, en torno a 1.165 € a 1.400 € para un piso de ese tamaño. La Latina conserva el sabor más castizo de la ciudad, con un alquiler medio algo más asequible, en torno a 900 € a 1.200 € según la zona.\n\nEntre los coworkings, Impact Hub Madrid opera varios espacios en la ciudad, entre ellos Alameda (junto a Atocha) y Barceló (junto a Malasaña), con puestos flexibles y una comunidad activa de emprendedores. Utopicus tiene su sede principal en Paseo de la Castellana 163, además de otras cinco ubicaciones repartidas por Madrid, todas con acceso 24/7. LOOM es otra cadena consolidada con varios espacios en el centro y en la zona de negocios de la capital.",
      sources: [
        { label: "Precio del alquiler por barrios en Madrid — Bankinter", url: "https://www.bankinter.com/blog/finanzas-personales/precio-alquiler-barrios-madrid" },
        { label: "Impact Hub Madrid", url: "https://madrid.impacthub.net/en/" },
        { label: "Utopicus Coworking Madrid", url: "https://loom.es/en/coworking-spaces/madrid/" },
      ],
    },
  },
  barcelona: {
    visaFiscal: {
      content: "Los ciudadanos de la Unión Europea y del Espacio Económico Europeo no necesitan visado ni permiso de trabajo para instalarse en Barcelona: la libre circulación les permite residir y trabajar sin más trámite que registrarse en el padrón municipal y solicitar el NIE. Para los nómadas digitales de fuera de la UE, España ofrece desde 2023 el mismo visado para teletrabajadores de carácter internacional que en el resto del país, con un requisito de ingresos mensuales de en torno a 2.849 €/mes en 2026 y una validez inicial de tres años, prorrogable por periodos de dos.\n\nQuienes obtienen este visado pueden acogerse además al régimen especial para trabajadores desplazados o Ley Beckham, que fija un tipo fijo del 24% en el IRPF sobre los primeros 600.000 € de renta durante seis ejercicios fiscales, siempre que no hayan sido residentes fiscales en España en los cinco años anteriores. Para el resto de contribuyentes rige la regla general de residencia fiscal: más de 183 días al año en el país.",
      sources: [
        { label: "Visado para nómadas digitales — Legalitas", url: "https://www.legalitas.com/actualidad/visado-nomada-digital" },
        { label: "La ley Beckham: lo que debes saber en 2026 — Raisin", url: "https://www.raisin.com/es-es/tributacion/ley-beckham/" },
      ],
    },
    sanidad: {
      content: "Los residentes legales en Barcelona dan de alta su tarjeta sanitaria en el CatSalut, el servicio público de salud de Cataluña integrado en el Sistema Nacional de Salud, con cobertura gratuita o muy subvencionada una vez formalizada la afiliación a la Seguridad Social. Sin embargo, el visado de teletrabajador internacional exige contratar un seguro médico privado con cobertura completa en España antes de solicitar la autorización, ya que el acceso al sistema público no está garantizado desde el primer día del trámite.\n\nEn Barcelona, las pólizas privadas que cumplen los requisitos del visado oscilan entre 80 € y 130 €/mes para adultos de entre 30 y 45 años en compañías como Adeslas o Asisa, mientras que las opciones de gama alta con cobertura internacional pueden costar entre 250 € y 400 €/mes. La sanidad privada española tiene fama de rapidez y buena calidad diagnóstica, con hospitales de referencia como el Hospital Quirónsalud Barcelona.",
      sources: [
        { label: "Los mejores seguros médicos para nómadas digitales en España — Haycare", url: "https://haycare.es/mejores-seguros-nomadas-digitales-espana/" },
        { label: "Seguro médico para visado — Sanitas", url: "https://www.sanitas.es/seguros/seguro-medico-para-visado" },
      ],
    },
    barrios: {
      content: "Gràcia es el barrio bohemio favorito de la comunidad de nómadas digitales, con plazas peatonales y ambiente de pueblo dentro de la ciudad; un alquiler de un dormitorio ronda entre 600 € y 1.200 €/mes. El Born, en el casco antiguo, combina arquitectura medieval con vida social intensa y precios similares o algo superiores. El Eixample, con su trazado en cuadrícula y excelente conexión de metro, es la zona más versátil para vivir y trabajar, con alquileres de un dormitorio entre 750 € y 1.600 €/mes. Poblenou, antiguo barrio industrial reconvertido en el distrito tecnológico 22@, es el más elegido por perfiles tech por su cercanía a la playa, con alquileres desde unos 700 €/mes.\n\nEntre los coworkings destaca Betahaus Barcelona, pionero del sector desde 2010, ubicado en Gràcia, con puestos flexibles desde 150 €/mes; Cloudworks, en Gran Vía, con terrazas y ambiente corporativo desde 250 €/mes; y Aticco Bogatell, cerca del Parque de la Ciutadella, con azotea y puestos desde 200 €/mes.",
      sources: [
        { label: "Los mejores barrios y zonas para vivir en Barcelona — Holafly", url: "https://esim.holafly.com/es/blog/nomada-digital/mejores-barrios-vivir-barcelona/" },
        { label: "Los 10 mejores espacios coworking en Barcelona — Holafly", url: "https://esim.holafly.com/es/blog/nomada-digital/coworking-barcelona/" },
      ],
    },
  },
  berlin: {
    visaFiscal: {
      content: "Los ciudadanos de la Unión Europea, el Espacio Económico Europeo y Suiza no necesitan visado ni permiso de residencia para instalarse en Berlín gracias a la libertad de movimiento: solo deben empadronarse (Anmeldung) si se quedan más de tres meses. Alemania no tiene un visado de nómada digital propiamente dicho como el de Portugal o España. La vía que usan la mayoría de trabajadores remotos no comunitarios es el permiso de residencia para autónomos (Freiberufler-Aufenthaltserlaubnis), que exige demostrar cualificación profesional, un plan de negocio, contratos o clientes previstos, seguro médico y normalmente un contrato de alquiler en Alemania.\n\nExiste además una vía específica para ciudadanos de once países (entre ellos Estados Unidos, Reino Unido, Canadá, Australia, Japón y Corea del Sur), que pueden entrar sin visado durante 90 días y solicitar el permiso directamente ya en Alemania. Para el resto de nacionalidades no comunitarias que entran solo como turistas rige la norma Schengen de 90 días dentro de un periodo de 180, pero esa autorización no da derecho a trabajar. Quien pasa más de 183 días en un periodo de doce meses en Alemania se convierte en residente fiscal alemán y queda sujeto a tributación sobre su renta mundial.",
      sources: [
        { label: "Remote Work and Digital Nomad Visas in Germany 2026 — SE Legal", url: "https://se-legal.de/digital-nomads-in-germany-residence-permits-and-visas/?lang=en" },
        { label: "Germany Tax Residency: 183-Day Rule 2026", url: "https://www.countrytaxcalc.com/tax-guides/germany/183-day-rule-2026/" },
      ],
    },
    sanidad: {
      content: "Alemania exige seguro médico obligatorio a todos sus residentes, incluidos los autónomos, y este es un requisito indispensable para tramitar el permiso de residencia freelance: la falta de una póliza adecuada es una de las causas más comunes de rechazo de la solicitud. Existen dos sistemas: el seguro público (gesetzliche Krankenversicherung), cuyo coste equivale a entre el 19,1% y el 22,6% de los ingresos declarados con una cuota mínima de alrededor de 250 € al mes, y el seguro privado (private Krankenversicherung), habitualmente recomendado para quienes ganan más de 35.000 € anuales.\n\nPara la primera solicitud de residencia se acepta también un seguro de viaje homologado, pero en la renovación solo se admiten pólizas públicas o privadas alemanas. En la práctica, la mayoría de freelancers extranjeros en Berlín optan por el seguro privado al inicio, por su coste fijo y previsible.",
      sources: [
        { label: "Health insurance for freelancers in Germany — All About Berlin", url: "https://allaboutberlin.com/guides/german-health-insurance/for-freelancers" },
        { label: "Health insurance for freelancers in Germany: 2026 guide — Feather", url: "https://feather-insurance.com/blog/health-insurance-germany-freelancer-guide" },
      ],
    },
    barrios: {
      content: "Kreuzberg y Friedrichshain concentran gran parte de la vida nocturna y cultural alternativa de Berlín y atraen a jóvenes profesionales de toda Europa; un piso de un dormitorio ronda entre 1.000 € y 1.400 € al mes. Neukölln, especialmente su zona norte, se ha consolidado como el barrio más dinámico y asequible para nómadas digitales, con alquileres de un dormitorio entre 500 € y 900 €. Prenzlauer Berg combina cafés con buen wifi y calles tranquilas, con rentas de entre 800 € y 1.500 € para un dormitorio.\n\nEntre los coworkings, betahaus, fundado en 2009 en Kreuzberg, fue uno de los primeros espacios de coworking de Berlín, con bonos de día desde 35 € y membresías mensuales desde 115 €. St. Oberholz, en Mitte, es un clásico de la cultura de trabajar desde el café berlinesa. Factory Berlin atrae a un perfil más tecnológico y de startups, con una comunidad más seleccionada que los espacios de acceso abierto.",
      sources: [
        { label: "Best Neighbourhoods to Live in Berlin: 2026 Guide — Faraway Home", url: "https://www.farawayhome.com/en/berlin/neighbourhoods" },
        { label: "Berlin for Digital Nomads: 2026 Guide to Coworking — betahaus", url: "https://www.betahaus.com/magazine/berlin-for-digital-nomads-the-ultimate-2026-guide-to-coworking-cafes-and-community" },
      ],
    },
  },
  florencia: {
    visaFiscal: {
      content: "Los ciudadanos de la Unión Europea no necesitan ningún visado para vivir y trabajar en Florencia gracias a la libre circulación, y solo deben registrarse en el municipio si permanecen más de tres meses. Los ciudadanos de fuera de la UE pueden optar al visto per nomadi digitali, el visado de nómada digital italiano, que exige acreditar ingresos anuales por trabajo remoto de al menos tres veces el umbral de exención sanitaria (entre 24.789 € y 25.500 € aproximadamente según el consulado), cualificación profesional y un mínimo de seis meses de experiencia previa demostrable.\n\nEs obligatorio contratar un seguro médico privado que cubra tratamiento y hospitalización en Italia durante todo el periodo solicitado, y la solicitud se tramita en el consulado italiano correspondiente, con un plazo de resolución habitual de 30 a 90 días. En materia fiscal, quien traslada su residencia a Italia y permanece más de 183 días al año en el país puede acogerse al régimen de trabajadores impatriados, que ofrece una exención del 50% sobre la renta imponible durante hasta cinco años para quienes cumplan los requisitos de cualificación y traslado efectivo de residencia.",
      sources: [
        { label: "Italy Digital Nomad Visa — Citizen Remote", url: "https://citizenremote.com/visas/italy-digital-nomad-visa/" },
        { label: "Requisitos Visto Nomadi Digitali Italia 2026 — Future Italian", url: "https://www.futureitalian.com/blog/italy-digital-nomad-visa-requirements-2026-official-rules-and-updates" },
      ],
    },
    sanidad: {
      content: "Italia cuenta con un sistema público de salud, el Servizio Sanitario Nazionale, al que los ciudadanos extracomunitarios con permiso de residencia tienen derecho a inscribirse ante la ASL de su distrito, con acceso a médico de cabecera y atención hospitalaria en las mismas condiciones que los residentes italianos. Sin embargo, para obtener el visado de nómada digital es obligatorio presentar previamente un seguro médico privado válido en todo el territorio italiano que cubra tratamiento y hospitalización durante el periodo de estancia solicitado.\n\nEl coste de un seguro internacional privado adecuado suele partir de unos 50 € mensuales para coberturas básicas, aunque las pólizas más completas pueden superar los 100-150 € al mes según la edad y el nivel de cobertura. La sanidad privada en Florencia, con clínicas como Villa Donatello, es de calidad alta y se usa habitualmente como complemento del sistema público.",
      sources: [
        { label: "Iscrizione degli stranieri extra-UE al SSN — AUSL Romagna", url: "https://www.auslromagna.it/servizi/assistenza-sanitaria-agli-stranieri/iscrizione-degli-stranieri-extra-ue-al-servizio-sanitario-nazionale" },
        { label: "Italy Digital Nomad Visa Requirements 2026 — Future Italian", url: "https://www.futureitalian.com/blog/italy-digital-nomad-visa-requirements-2026-official-rules-and-updates" },
      ],
    },
    barrios: {
      content: "Santo Spirito, en el barrio del Oltrarno al otro lado del río Arno, es la zona favorita de nómadas digitales y expatriados por su ambiente artesanal y menos turístico, con alquileres de un dormitorio entre 900 € y 1.500 € mensuales. San Niccolò-Porta Romana, también en el Oltrarno, ofrece un ambiente similar con vistas a las colinas de Fiesole, entre 1.100 € y 2.200 €. El centro histórico tiene los precios más altos de la ciudad, mientras que Campo di Marte, más residencial y con mejor conexión al aeropuerto, resulta más asequible para quienes buscan tranquilidad.\n\nEntre los coworkings, Nana Bianca, junto al río a pocos minutos de la estación de Santa Maria Novella, es el más grande de la ciudad con 6.500 m² orientados a creadores digitales y startups. Impact Hub Florence, cerca de la estación de Rifredi, destaca por su diseño con mobiliario reciclado y membresías flexibles. The Social Hub Coworking Lavagnini combina espacio de trabajo con alojamiento y azotea con vistas al Duomo.",
      sources: [
        { label: "Updated Rents in Florence 2026 — Investropa", url: "https://investropa.com/blogs/news/florence-rents" },
        { label: "Top coworking spaces in Florence 2024 — Remotely Serious", url: "https://www.remotelyserious.com/coworking-spaces-florence/" },
        { label: "Nana Bianca", url: "https://www.nanabianca.it/en" },
      ],
    },
  },
  colombo: {
    visaFiscal: {
      content: "Un ciudadano español puede entrar en Sri Lanka con la autorización electrónica de viaje (ETA), gratuita desde 2026 para más de 40 nacionalidades entre las que se incluye España, y que permite una estancia inicial de hasta 30 días con dos entradas dentro de ese periodo. Esta autorización turística se puede ampliar sucesivamente hasta acumular un máximo teórico de 270 días, tramitando cada extensión de forma online en el portal eta.gov.lk o presencialmente en el Departamento de Inmigración de Colombo, aunque no está pensada legalmente para ejercer trabajo remoto de forma continuada. Para una estancia más estable, Sri Lanka introdujo en 2026 un visado de nómada digital que exige ingresos mínimos de 2.000 dólares mensuales procedentes de fuentes extranjeras, certificado de antecedentes penales, seguro médico internacional y una tasa de 500 dólares por persona; concede un año de residencia legal renovable, aunque su renovación exige acreditar el registro fiscal ante el Departamento de Rentas Internas de Sri Lanka. En materia fiscal, ni la ETA ni el visado de nómada digital eximen de tributar en España: quien pasa más de 183 días al año en territorio español, o mantiene allí el centro de sus intereses económicos, sigue siendo considerado residente fiscal español y debe declarar su renta mundial en la Agencia Tributaria con independencia de dónde trabaje físicamente.",
      sources: [
        { label: "Sri Lanka Digital Nomad Visa 2026 – Citizen Remote", url: "https://citizenremote.com/visas/sri-lanka-digital-nomad-visa/" },
        { label: "Sri Lanka ETA: Visa Fees Waived for 40 Nationalities en 2026 – VisaMundi", url: "https://www.visamundi.co/en/blog/sri-lanka-eta-visa-fees-waived-2026/" },
        { label: "Guía completa del visado de turista de Sri Lanka 2026 – Sithiyam Travel", url: "https://www.sithiyam.com/post/sri-lanka-tourist-visa-guide-2026" },
      ],
    },
    sanidad: {
      content: "El sistema público de Sri Lanka ofrece atención gratuita a sus ciudadanos pero presenta largas listas de espera para servicios especializados, por lo que los extranjeros residentes recurren de forma casi generalizada a la sanidad privada, concentrada sobre todo en Colombo. Hospitales como Nawaloka Hospital, Asiri Health y Lanka Hospitals cuentan con personal que habla inglés, especialistas formados en el extranjero y estándares de atención comparables a los occidentales en las principales especialidades, aunque la calidad se reduce notablemente fuera de la capital y de las grandes ciudades. Se recomienda encarecidamente contratar un seguro médico internacional antes de instalarse, tanto porque el visado de nómada digital lo exige como requisito de entrada como por la posibilidad de necesitar una evacuación médica, un gasto que sin cobertura puede alcanzar varios miles de dólares. Antes del viaje conviene revisar el calendario de vacunación (hepatitis A y B, fiebre tifoidea y, según la zona, profilaxis antipalúdica) y durante la estancia extremar precauciones frente al dengue, transmitido por mosquitos y presente de forma habitual en la isla, además de evitar el agua del grifo y optar por agua embotellada.",
      sources: [
        { label: "Sri Lanka Health Insurance for Expats – Pacific Prime", url: "https://www.pacificprime.com/country/asia/sri-lanka-health-insurance/" },
        { label: "Sri Lanka Healthcare System & Medical Insurance Options – Expat Financial", url: "https://expatfinancial.com/healthcare-information-by-region/asian-healthcare-system/sri-lanka-healthcare-system/" },
        { label: "Nawaloka Hospital – Wikipedia", url: "https://en.wikipedia.org/wiki/Nawaloka_Hospital" },
      ],
    },
    barrios: {
      content: "Colombo 7 (Cinnamon Gardens) es el barrio más prestigioso de la ciudad, con calles arboladas, mansiones de época colonial, los mejores colegios y hospitales privados y coworkings como Catalyst by Hub9 o The Office Colombo, aunque también los alquileres más elevados. Colombo 5 (Havelock Town) es la zona preferida por buena parte de la comunidad expatriada por su ubicación central, su mezcla de apartamentos modernos y casas coloniales, sus parques y colegios internacionales, y alberga espacios como Worx Jawatte House o CO-LABs, con cuotas de coworking que van desde unos 90 hasta más de 200 dólares al mes según los servicios incluidos. Colombo 3 (Kollupitiya), junto al frente marítimo de Galle Face Green, es la opción más cosmopolita y con más vida nocturna, mientras que Colombo 6 (Wellawatte) ofrece una alternativa más asequible con ambiente costero y buena oferta de restaurantes. Los alquileres de un apartamento de un dormitorio en estas zonas suelen moverse aproximadamente entre 300 y 600 dólares mensuales en Havelock Town o Wellawatte, y pueden superar los 1.000 dólares en los edificios más nuevos de Cinnamon Gardens o junto a Galle Face.",
      sources: [
        { label: "Exploring 9 Neighborhoods of Colombo – Luxe Nautilus Realty", url: "https://luxenautilusrealty.com/neighborhoods-of-colombo/" },
        { label: "Best Coworking Spaces in Colombo (2026) – Geronimo AI", url: "https://geronimo-ai.com/best-coworking/colombo" },
        { label: "Apartments for rent in Colombo 5 & suburbs – LankaPropertyWeb", url: "https://www.lankapropertyweb.com/rentals/lease-Colombo+All_Colombo+5-Apartment.html" },
      ],
    },
  },
  londres: {
    visaFiscal: {
      content: "Desde el Brexit, un ciudadano español ya no tiene libertad de movimiento en el Reino Unido y debe entrar como visitante estándar (Standard Visitor), lo que permite estancias de hasta seis meses sin necesidad de visado previo, pero con una prohibición general de trabajar para una empresa británica o como autónomo en el país. Desde enero de 2024, el Gobierno británico admite el llamado 'trabajo remoto incidental': responder correos, asistir a reuniones online o realizar tareas administrativas puntuales para un empleador extranjero mientras el propósito principal de la visita es turístico o de negocios, pero esta tolerancia no permite convertir el Reino Unido en base habitual de trabajo remoto ni encadenar visitas sucesivas con ese fin, algo que el Border Force vigila activamente. No existe un visado específico de nómada digital en el Reino Unido, por lo que quien quiera residir allí de forma prolongada y trabajar debe optar por rutas migratorias formales. A efectos fiscales españoles, mientras la estancia en el Reino Unido no supere los 183 días naturales en el año y no se traslade el centro de intereses económicos, el trabajador remoto sigue siendo residente fiscal en España y debe declarar sus ingresos allí; superar ese umbral o instalarse de facto puede abrir un conflicto de doble residencia entre ambas administraciones.",
      sources: [
        { label: "Standard Visitor visa – reglas de trabajo y estancia – GOV.UK", url: "https://www.gov.uk/standard-visitor-visa" },
        { label: "Remote Working in the UK 2026: Visa & Immigration Rules – DavidsonMorris", url: "https://www.davidsonmorris.com/remote-work-immigration-visa-rules/" },
        { label: "Spain tax residency: 183-day rule explained – Wise", url: "https://wise.com/us/blog/spain-tax-residency-183-days-rule" },
      ],
    },
    sanidad: {
      content: "Un visitante español en el Reino Unido no tiene acceso gratuito al NHS salvo en supuestos muy concretos: la atención de urgencias en A&E es gratuita, igual que el tratamiento de determinadas enfermedades infecciosas, pero la mayoría de la atención hospitalaria, las recetas, el dentista y el óptico se cobran aparte. La Tarjeta Sanitaria Europea (EHIC) española sigue siendo aceptada en el Reino Unido gracias al acuerdo de reciprocidad post-Brexit, lo que cubre parte de la atención médica necesaria durante la estancia, aunque no sustituye a un seguro de viaje completo. El NHS recomienda expresamente a los visitantes contratar un seguro médico privado, ya que quien no acredite cobertura puede enfrentarse a facturas equivalentes al 150% de la tarifa nacional del NHS por tratamientos no exentos. Un seguro de viaje o salud privado con cobertura médica de calidad en el Reino Unido suele costar entre 30 y 80 GBP al mes según edad y cobertura, una cifra que conviene sumar al presupuesto mensual de cualquier nómada digital que se instale temporalmente en Londres.",
      sources: [
        { label: "How to access NHS services in England if you are visiting from abroad – NHS", url: "https://www.nhs.uk/nhs-services/visiting-or-moving-to-england/how-to-access-nhs-services-in-england-if-you-are-visiting-from-abroad/" },
        { label: "UK Global Health Insurance Card – Wikipedia", url: "https://en.wikipedia.org/wiki/UK_Global_Health_Insurance_Card" },
        { label: "Overseas visitors and charges – British Medical Association", url: "https://www.bma.org.uk/advice-and-support/ethics/refugees-overseas-visitors-and-vulnerable-migrants/access-to-healthcare-for-overseas-visitors/overseas-visitors-and-charges" },
      ],
    },
    barrios: {
      content: "Shoreditch y Hoxton, en el este de Londres, son el epicentro histórico de la escena creativa y tecnológica, con una altísima densidad de cafeterías aptas para trabajar y coworkings como WeWork, Huckletree o Uncommon; los alquileres de un dormitorio en la zona suelen moverse entre 1.600 y 2.700 GBP al mes. Hackney, justo al norte, ofrece un ambiente más residencial y asequible sin perder la cercanía a la vida nocturna y los espacios de trabajo compartido del este londinense. Canary Wharf, el distrito financiero, concentra oficinas corporativas y coworkings orientados a finanzas y consultoría, con conexiones rápidas en metro al centro, aunque el ambiente es más corporativo que bohemio. Para quien busca un ritmo más tranquilo y verde sin renunciar a buena conexión de transporte, Clapham y Crystal Palace combinan parques, cafés con buen wifi y trenes de 20-35 minutos hasta el centro; el alquiler medio de un piso de un dormitorio en Londres en su conjunto ronda las 1.750 GBP mensuales, con un rango habitual de 1.350 a 2.700 GBP según la zona.",
      sources: [
        { label: "London's Top Neighbourhoods for Digital Nomads – Coworking London", url: "https://www.coworkinglondon.com/londons-top-neighbourhoods-for-digital-nomads/" },
        { label: "10 Awesome Yet Affordable Coworking Spaces in London – Coworking Mag", url: "https://coworkingmag.com/united-kingdom/coworking-space-london/" },
        { label: "Updated Rents in London (2026) – Investropa", url: "https://investropa.com/blogs/news/london-rents" },
      ],
    },
  },
  seattle: {
    visaFiscal: {
      content: "Estados Unidos no ofrece ningún visado de nómada digital, a diferencia de países como España o Portugal. Los ciudadanos españoles pueden entrar sin visado previo mediante el Programa de Exención de Visado (ESTA), válido para estancias de hasta 90 días con fines de turismo o negocios, pero la normativa migratoria estadounidense es explícita: trabajar en remoto para un empleador extranjero mientras se está físicamente en el país no está autorizado bajo el estatus de visitante B-2 ni bajo ESTA. No se trata de una zona gris real, sino de una infracción técnica que en la práctica rara vez se detecta pero que expone a riesgos serios: denegación de entrada, cancelación del ESTA o inadmisibilidad futura si un oficial de aduanas considera que la actividad constituye 'trabajo'. El visado B-1 de visitante de negocios permite asistir a reuniones o negociar contratos, pero tampoco cubre el trabajo remoto continuado. Además, quien pase largas temporadas en Estados Unidos debe vigilar su residencia fiscal en España: estancias prolongadas en EE. UU. pueden activar el 'Substantial Presence Test' del IRS, generando una posible doble obligación tributaria que conviene consultar con un asesor fiscal antes de planificar estancias largas.",
      sources: [
        { label: "¿Pueden los nómadas digitales trabajar legalmente en EE. UU.? – RJ Immigration Law", url: "https://rjimmigrationlaw.com/resources/can-digital-nomads-legally-work-in-the-u-s/" },
        { label: "Working Remotely in the US: Visas, Taxes and Legal Rules – Expatica", url: "https://www.expatica.com/us/working/employment-basics/working-remotely-in-the-us-2174135/" },
        { label: "USA Digital Nomad Visa 2026 – Citizen Remote", url: "https://citizenremote.com/visas/digital-nomad-visa-usa/" },
      ],
    },
    sanidad: {
      content: "La sanidad en Estados Unidos es privada y notoriamente cara para cualquier visitante que no cuente con un seguro médico adecuado, ya que el sistema público no cubre a extranjeros de paso. Una simple consulta con un médico general sin seguro puede costar entre 150 y 400 dólares, mientras que una visita a urgencias por algo tan común como una deshidratación o una infección puede fácilmente superar los 1.000 a 3.000 dólares, y las cifras se disparan si hace falta hospitalización o cirugía. Por ello es imprescindible contratar un seguro de viaje o salud internacional con cobertura específica para EE. UU. antes de llegar a Seattle, revisando que incluya evacuación médica y una cobertura mínima de 50.000 a 100.000 dólares. La tarjeta sanitaria europea no tiene validez en territorio estadounidense, por lo que quienes viajen desde España deben tratar el seguro médico como un gasto obligatorio, no opcional, dentro del presupuesto mensual.",
      sources: [
        { label: "¿Qué pasa si un turista enferma en EE. UU. sin seguro? – Visitor Guard", url: "https://www.visitorguard.com/tourist-gets-sick-in-the-us-without-insurance/" },
        { label: "Coste del seguro médico de viaje para visitantes a EE. UU. 2026 – Visitor Guard", url: "https://www.visitorguard.com/travel-medical-insurance-cost-visitors-us/" },
        { label: "¿Necesitas seguro de viaje para visitar EE. UU.? – MoneyGeek", url: "https://www.moneygeek.com/insurance/travel/usa-visitors/" },
      ],
    },
    barrios: {
      content: "Capitol Hill es el barrio favorito de la comunidad creativa y tecnológica joven, con una vida nocturna intensa, cafeterías con buen wifi y el coworking boutique The Cloud Room, con bonos de día desde unos 40 dólares y membresías mensuales entre 160 y 590 dólares; el alquiler de un estudio en la zona ronda los 1.600 dólares al mes. Fremont y Ballard, al norte del canal, ofrecen un ambiente más tranquilo y residencial con mercados de artesanos, cervecerías y el espacio comunitario Collective Chemistry en Fremont, orientado a autónomos y creativos. Belltown y el centro concentran las opciones más profesionales, como el histórico The Pioneer Collective o el WeWork de Hawk Tower, con vistas al skyline; los alquileres de un apartamento de un dormitorio en el centro rondan los 2.200 dólares mensuales, cifra representativa del conjunto de la ciudad. Para quienes buscan algo más económico, Wallingford ofrece el espacio cooperativo Works Progress Cooperative desde 225 dólares al mes, y Lake Union cuenta con Thinkspace, un coworking junto al lago muy popular entre startups.",
      sources: [
        { label: "6 mejores coworkings en Seattle para trabajadores remotos – The Nomad Cloud", url: "https://thenomadcloud.com/6-best-coworking-spaces-in-seattle-for-remote-workers/" },
        { label: "Dónde alojarse en Seattle: 12 mejores zonas para nómadas digitales – Hello Landing", url: "https://www.hellolanding.com/blog/where-to-stay-in-seattle/" },
        { label: "Alquiler medio en Seattle, WA por barrio 2026 – RentCafe", url: "https://www.rentcafe.com/average-rent-market-trends/us/wa/seattle/" },
      ],
    },
  },
  toronto: {
    visaFiscal: {
      content: "Los ciudadanos españoles pueden entrar en Canadá como visitantes sin necesidad de visado tradicional, pero sí deben solicitar una autorización electrónica de viaje (eTA) antes de volar, un trámite online rápido y de bajo coste. Como visitantes, pueden permanecer en el país hasta seis meses por estancia, aunque el oficial de fronteras tiene la última palabra sobre la duración exacta autorizada en cada entrada. El problema es que Canadá no dispone, a día de hoy, de un visado de nómada digital: la práctica habitual de trabajar remotamente para un empleador o clientes extranjeros mientras se está de visita se tolera de facto en la frontera, pero no está regulada explícitamente por Immigration, Refugees and Citizenship Canada (IRCC), lo que la sitúa en una zona gris legal que exige discreción y honestidad si se pregunta en el control migratorio. En materia fiscal, quien mantenga su residencia habitual en España (pasando más de 183 días al año en territorio español o teniendo allí el centro de sus intereses económicos) seguirá siendo residente fiscal español y deberá declarar sus ingresos globales a la Agencia Tributaria, independientemente del tiempo que pase trabajando desde Toronto.",
      sources: [
        { label: "eTA: datos básicos – Gobierno de Canadá (IRCC)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/facts.html" },
        { label: "Canada Digital Nomad Visa: Requirements and program – Saily", url: "https://saily.com/blog/canada-digital-nomad-visa/" },
        { label: "Residencia fiscal en España: la regla de los 183 días – Infohispanos", url: "https://infohispanos.com/residencia-fiscal-espana-183-dias/" },
      ],
    },
    sanidad: {
      content: "El sistema público de salud de Ontario (OHIP) no está disponible para visitantes temporales ni para no residentes: solo cubre a quienes cumplen requisitos de residencia permanente en la provincia, por lo que ningún nómada digital extranjero puede acceder a él durante una estancia turística. Esto convierte la contratación de un seguro médico de viaje privado en un requisito prácticamente obligatorio, ya que la atención médica de urgencia en Canadá sin cobertura puede resultar extremadamente cara. El coste de un seguro de viajero para Canadá ronda entre 50 y 400 dólares canadienses al mes según la edad y la cobertura elegida; para una persona de entre 30 y 45 años con una cobertura estándar de 100.000 dólares canadienses, el coste habitual se sitúa en torno a 90-105 CAD mensuales. Es recomendable contratar una póliza que cubra específicamente urgencias, hospitalización y repatriación antes de viajar, y revisar bien las exclusiones por condiciones preexistentes.",
      sources: [
        { label: "OHIP coverage while outside Canada – Government of Ontario", url: "https://www.ontario.ca/page/ohip-coverage-while-outside-canada" },
        { label: "Cost of Visitor Insurance to Canada in 2026 – PolicyAdvisor", url: "https://www.policyadvisor.com/visitor-insurance-canada/cost-of-visitors-insurance-to-canada/" },
      ],
    },
    barrios: {
      content: "Para quienes trabajan en remoto, los barrios más recomendables de Toronto combinan buena conexión de transporte, ambiente joven y oferta de cafeterías y espacios de coworking. The Annex, cerca de la Universidad de Toronto, ofrece precios algo más asequibles y gran vida universitaria; Queen West y Liberty Village son zonas muy populares entre profesionales jóvenes, con antiguos edificios industriales convertidos en lofts, bares y estudios; y Kensington Market aporta un ambiente bohemio y multicultural con mercados y cafés independientes ideales para trabajar por horas. En cuanto a coworkings, destacan WeWork (varias sedes, desde unos 370 CAD al mes por escritorio compartido), East Room en Riverside (desde 245 CAD/mes) y WorkHaus, con membresías flexibles mes a mes. Los alquileres varían mucho según la zona: un apartamento de una habitación en pleno centro ronda los 1.800 CAD al mes, mientras que compartir piso en barrios como Annex, Queen West o Danforth puede bajar el coste a unos 800 CAD por persona.",
      sources: [
        { label: "The Full Digital Nomad Guide to Toronto – Digital Nomads World", url: "https://digitalnomads.world/city-guide/toronto/" },
        { label: "51 Best Coworking Spaces in Toronto – DropDesk Blog", url: "https://drop-desk.com/blog/best/coworking-spaces-toronto/" },
        { label: "Cost of Living in Toronto – Numbeo", url: "https://www.numbeo.com/cost-of-living/in/Toronto" },
      ],
    },
  },
  shanghai: {
    visaFiscal: {
      content: "China no dispone de un visado de nómada digital. Los ciudadanos españoles pueden entrar sin visado gracias a la política unilateral de exención que China aplica desde diciembre de 2023, prorrogada hasta el 31 de diciembre de 2026, que permite estancias de hasta 30 días consecutivos por turismo, negocios, visitas familiares o tránsito. Superar los 30 días, o realizar cualquier actividad laboral remunerada o de estudios, exige tramitar un visado específico (normalmente tipo L o Z) en el consulado chino en España, con un plazo de gestión de entre 4 y 10 días hábiles. Trabajar de forma remota para una empresa extranjera durante una estancia de turista no está expresamente autorizado por la legislación china y se realiza en una zona gris legal tolerada de facto pero sin cobertura formal. A efectos fiscales españoles, quien pase más de 183 días al año en España sigue siendo residente fiscal allí; solo estancias en China superiores a 183 días en un año natural (con el correspondiente visado de residencia o trabajo) podrían alterar esa residencia, algo poco habitual para un nómada digital que entra y sale cada 30 días.",
      sources: [
        { label: "China prolongs visa-free entry for Spaniards but tightens 30-day stay limit – VisaHQ", url: "https://www.visahq.com/news/2026-03-01/es/china-prolongs-visa-free-entry-for-spaniards-but-tightens-30-day-stay-limit/" },
        { label: "China visa-free travel policies: complete guide – China Briefing", url: "https://www.china-briefing.com/news/china-visa-free-travel-policies-complete-guide/" },
      ],
    },
    sanidad: {
      content: "La sanidad pública china es asequible pero suele presentar barrera idiomática y tiempos de espera largos, por lo que la mayoría de los expatriados en Shanghái recurre a hospitales y clínicas internacionales privadas. Entre los más recomendados están Shanghai United Family Hospital (con varias sedes y personal formado en EE. UU., Europa y Asia), Jiahui International Hospital (acreditación JCI, colaboración con Massachusetts General Hospital), Parkway Health (siete centros en la ciudad) y Raffles Hospital Shanghai, todos con atención en inglés. Estas clínicas privadas tienen costes considerablemente más altos que el sistema público chino, por lo que contratar un seguro médico internacional privado antes de llegar es prácticamente indispensable para cubrir consultas, urgencias y una eventual repatriación médica.",
      sources: [
        { label: "Shanghai's Best Hospitals for Expats – Pacific Prime", url: "https://www.pacificprime.com/blog/shanghai-best-hospitals-expats-china.html" },
        { label: "International Hospitals for Expats in Shanghai – China Expat Health", url: "https://chinaexpathealth.com/international-hospitals-for-expats-in-shanghai/" },
      ],
    },
    barrios: {
      content: "Los barrios más recomendados para nómadas digitales en Shanghái son la antigua Concesión Francesa (French Concession), con calles arboladas, cafés y ambiente cosmopolita, y Jing'an, un distrito céntrico y bien conectado con vida nocturna y oferta gastronómica internacional; Pudong, al otro lado del río, ofrece el distrito financiero y rascacielos icónicos pero resulta más aislado del ambiente de calle. Un estudio de una habitación en el centro ronda los 950-1.000 dólares al mes, y hay coworkings como Sandbox3 o Agora Space con escritorios flexibles desde unos 150 dólares al mes. El obstáculo práctico diario más relevante es el Gran Cortafuegos: Google (búsqueda, Gmail, Drive, Maps), WhatsApp, Instagram, Facebook, Twitter/X, Telegram y YouTube están bloqueados, así que herramientas cotidianas de trabajo remoto (videollamadas, calendario, comunicación con clientes) dejan de funcionar sin una VPN. Es imprescindible instalar la VPN antes de entrar al país, ya que dentro de China las webs de los principales proveedores y sus apps en las tiendas quedan bloqueadas; servicios como Astrill o ExpressVPN son opciones habituales entre expatriados, aunque su fiabilidad varía tras las actualizaciones periódicas del cortafuegos y conviene tener un plan B.",
      sources: [
        { label: "Shanghai – guía para nómadas digitales – Nomads.com", url: "https://nomads.com/shanghai" },
        { label: "VPN China 2026: qué sigue funcionando – Michele Ponte", url: "https://micheleponte.com/vpn-china-2026-what-still-works/" },
        { label: "Cost of Living in Shanghai – Numbeo", url: "https://www.numbeo.com/cost-of-living/in/Shanghai" },
      ],
    },
  },
  "ciudad-del-cabo": {
    "visaFiscal": {
      "content": "Los ciudadanos españoles pueden entrar en Sudáfrica sin visado como turistas o visitantes de negocios durante una estancia de hasta 90 días, según la lista de países exentos de visado del Departamento de Home Affairs sudafricano. Para estancias más largas orientadas al trabajo remoto, Sudáfrica introdujo un 'Remote Work Visa' (bajo la sección 11(1)(b)(iv) de la Immigration Act), publicado en el reglamento en octubre de 2024 y con solicitudes operativas desde marzo de 2025. Exige demostrar unos ingresos anuales superiores a 650.976 ZAR procedentes de un empleador o clientes extranjeros (no se permite que la fuente de ingresos sea sudafricana), concede una estancia inicial de hasta 12 meses y puede renovarse hasta un total de 3 años mientras se mantengan los requisitos de ingresos. Las tasas son moderadas (tasa base de 425 ZAR más gastos del centro de visados de entre 900 y 2.000 ZAR, con un coste total estimado de 2.500 a 6.000 ZAR), y la solicitud se presenta en persona en una embajada, consulado o centro VFS, con un plazo de tramitación habitual de 6 a 8 semanas. Para efectos fiscales, quien permanece más de 183 días al año en España o mantiene allí el centro de sus intereses económicos, sigue siendo considerado residente fiscal español y debe declarar su renta mundial a la Agencia Tributaria con independencia de dónde trabaje físicamente.",
      "sources": [
        { "label": "Lista de países exentos de visado para Sudáfrica", "url": "https://www.southafrica-newyork.net/visa-exempt-countries/" },
        { "label": "Requisitos del Remote Work Visa de Sudáfrica (xpatweb.com)", "url": "https://www.xpatweb.com/remote-work-visa-south-africa/" },
        { "label": "Guía del Remote Work Visa 2026 (citizenremote.com)", "url": "https://citizenremote.com/visas/south-africa-digital-nomad-visa/" }
      ]
    },
    "sanidad": {
      "content": "Sudáfrica tiene un sistema sanitario claramente dividido: la sanidad pública está infrafinanciada y saturada, con centros masificados y largas listas de espera, mientras que el sector privado —usado solo por en torno al 16% de la población pero que concentra alrededor del 60% de los médicos del país— ofrece tiempos de espera mucho más cortos e instalaciones más modernas. Por ello, se recomienda encarecidamente contratar un seguro médico privado o internacional antes de instalarse en Ciudad del Cabo. Las primas mensuales varían mucho según cobertura: desde planes básicos de 500 a 2.000 ZAR al mes hasta pólizas integrales de 3.000 a 15.000 ZAR al mes, en función de la edad, el estado de salud y el nivel de cobertura contratado.",
      "sources": [
        { "label": "Guía de seguros de salud en Sudáfrica (Expatica)", "url": "https://www.expatica.com/za/healthcare/healthcare-basics/guide-to-health-insurance-in-south-africa-105895/" }
      ]
    },
    "barrios": {
      "content": "Entre los barrios más habituales para nómadas digitales en Ciudad del Cabo destacan Sea Point, un área muy caminable junto al paseo marítimo con alquileres de un dormitorio de entre 8.000 y 10.000 ZAR al mes; el City Bowl/CBD, la zona central con la mayor concentración de coworkings y vida nocturna, con pisos de un dormitorio entre 7.000 y 9.000 ZAR al mes; Woodstock, un barrio más creativo y local con alquileres desde unos 8.000 ZAR al mes para un dormitorio; y Green Point, cerca del Waterfront, con pisos de un dormitorio en torno a 8.500 ZAR al mes. Camps Bay y Clifton ofrecen el entorno más panorámico junto al mar, aunque a precios más altos y con un enfoque más turístico que práctico. Como referencia general, Numbeo sitúa el alquiler medio de un piso de un dormitorio en el centro de la ciudad en unos 17.235 ZAR al mes, y fuera del centro en unos 11.788 ZAR al mes. En cuanto a coworkings, la cadena Workshop17 (con varias sedes, entre ellas V&A Waterfront y Kloof Street) ofrece puestos desde unos 2.180 ZAR al mes; otras opciones con precios similares son Cube Workspace (desde 2.100 ZAR/mes), Craft+Graft (desde 2.100 ZAR/mes) y Neighbourgood Bree Street (desde 3.000 ZAR/mes).",
      "sources": [
        { "label": "Precios medios de alquiler en Ciudad del Cabo (Seeff Property Group)", "url": "https://www.seeff.com/news/average-rental-prices-in-cape-town/" },
        { "label": "Coste de vida en Ciudad del Cabo (Numbeo)", "url": "https://www.numbeo.com/cost-of-living/in/Cape-Town" },
        { "label": "Coworking spaces en Ciudad del Cabo con precios", "url": "https://coworkingers.com/location/cape-town/" },
        { "label": "Guía de barrios para nómadas digitales en Ciudad del Cabo", "url": "https://www.coworkingsafari.com/blog/digital-nomad-guides/cape-town-digital-nomad-guide-1" }
      ]
    }
  },
  "taipei": {
    "visaFiscal": {
      "content": "Los ciudadanos españoles pueden entrar en Taiwán sin visado y permanecer hasta 90 días como turistas. En la práctica, esta autorización se puede prorrogar una vez, por otros 90 días adicionales, solicitándolo en persona en una oficina de la Agencia Nacional de Inmigración (National Immigration Agency) durante los últimos 7 días de la estancia autorizada, con una tasa aproximada de 1.000 NTD; en total, hasta 180 días sin necesidad de un visado de trabajo, aunque las prórrogas para fines turísticos quedan a discreción de la autoridad migratoria y no se admite una segunda prórroga. Para quienes quieran quedarse más tiempo trabajando de forma remota, Taiwán introdujo en enero de 2025 un visado específico para nómadas digitales: exige ingresos mínimos de 40.000 USD anuales (o 20.000 USD si se tienen entre 20 y 29 años) declarados en los últimos dos años, y concede una estancia inicial de 3 meses ampliable hasta un máximo de 6 meses; no permite trabajar para empresas taiwanesas ni traer dependientes. La otra vía habitual para instalarse de forma más estable es el Employment Gold Card (tarjeta dorada de empleo), pensado para profesionales de sectores como tecnología, finanzas, educación o cultura: exige acreditar un salario mensual de unos 160.000 NTD (aprox. 5.000 USD) durante cualquier periodo de 12 meses de los últimos tres años, tiene una tasa de solicitud de entre 7.400 y 9.400 NTD según nacionalidad, y se emite por 1, 2 o 3 años renovables; incluye además una deducción del 50% en el impuesto sobre la renta para la parte del salario que supere los 3 millones de NTD anuales durante los primeros cinco años. En materia fiscal, como para cualquier otro destino, un español que pase más de 183 días al año en Taiwán o traslade allí el centro de sus intereses económicos puede llegar a ser considerado residente fiscal en Taiwán, lo que le obligaría a tributar allí por su renta mundial; por debajo de ese umbral, y salvo que se acredite lo contrario, se sigue considerando residente fiscal en España y debe declarar sus ingresos globales a la Agencia Tributaria española.",
      "sources": [
        { "label": "Peninsula Visa – Requisitos de visado España-Taiwán", "url": "https://www.peninsulavisa.com/visa-requirements/spain-to-taiwan" },
        { "label": "Taipei Escape – Guía de visados y entrada a Taiwán 2026", "url": "https://www.taipei-escape.com/guides/taiwan-visa-and-entry/" },
        { "label": "Fragomen – Introducción del visado de nómada digital de Taiwán", "url": "https://www.fragomen.com/insights/taiwan-digital-nomad-visa-introduced.html" },
        { "label": "Nomad Tax Guide – Guía del Employment Gold Card de Taiwán", "url": "https://nomadtaxguide.com/blog/taiwan-gold-card-remote-professional-guide/" }
      ]
    },
    "sanidad": {
      "content": "Taiwán cuenta con un sistema de Seguro Nacional de Salud (National Health Insurance, NHI) considerado uno de los más eficientes y baratos del mundo, con copagos muy reducidos (alrededor de 100 NTD, unos 3 euros, por consulta ambulatoria). Sin embargo, el acceso para extranjeros no es inmediato: quienes residen con un Alien Resident Certificate (ARC) por motivos distintos a un contrato de trabajo local deben acreditar 6 meses continuados de residencia en Taiwán (se permite un viaje al extranjero de hasta 30 días sin romper la continuidad) antes de poder inscribirse en el NHI; en cambio, quienes llegan con un contrato de trabajo local quedan afiliados de forma inmediata a través de su empleador. Esto significa que la mayoría de nómadas digitales y titulares de Gold Card que trabajan para empresas extranjeras deben cubrir ese primer semestre —y a menudo toda su estancia— con un seguro médico internacional privado, ya que no trabajan para un empleador taiwanés. Mientras tanto, la sanidad privada y los grandes hospitales de Taipéi (como el National Taiwan University Hospital o el Taipei Veterans General Hospital) tienen muy buena reputación, con estándares similares a los de Japón o Europa Occidental y precios notablemente más bajos que en Estados Unidos.",
      "sources": [
        { "label": "NHIA – Inscripción de extranjeros con ARC", "url": "https://www.nhi.gov.tw/en/np-24-2.html" },
        { "label": "Alea Care – Seguro médico para expatriados en Taiwán (2026)", "url": "https://alea.care/resources/taiwan-expat-health-insurance" }
      ]
    },
    "barrios": {
      "content": "Da'an es el barrio favorito de muchos nómadas digitales: residencial, lleno de universidades, cafeterías y la famosa calle gastronómica de Yongkang, cerca del gran parque forestal de Da'an; un estudio de 15-20 m² ronda los 24.000 NTD/mes. Xinyi es el distrito financiero y de negocios, con el Taipei 101, centros comerciales y vida nocturna, más orientado a perfiles con mayor presupuesto (estudios desde unos 28.000 NTD/mes) y buena oferta de oficinas y coworkings. Zhongshan es probablemente la opción más equilibrada para nómadas con presupuesto ajustado: conecta con cuatro líneas de metro, llega al aeropuerto de Taoyuan en unos 36 minutos y combina zonas históricas como Dihua Street con un ambiente moderno; los estudios rondan los 21.000 NTD/mes, en torno a un 20% menos que en Xinyi. Entre los coworkings más conocidos de la ciudad están The Hive (en Zhongzheng, cerca de Ximending, con hot desk desde 3.000 NTD/mes), Center for Innovation Taipei (en Zhongshan, hot desk desde 4.000 NTD/mes), FutureWard (en Songshan, hot desk desde 5.000 NTD/mes) y Skyco (con sedes en Songshan y Da'an, hot desk desde 5.000 NTD/mes).",
      "sources": [
        { "label": "Comparativa de barrios de Taipéi: Da'an, Xinyi y Zhongshan (2026)", "url": "https://migaku.com/blog/language-fun/best-neighborhoods-in-taipei-daan-xinyi-and-zhongshan-compared" },
        { "label": "Hive Life – Los 7 mejores coworkings de Taipéi", "url": "https://hivelife.com/top-7-coworking-spaces-taipei/" }
      ]
    }
  },
  "sofia": {
    "visaFiscal": {
      "content": "Como ciudadano español, no necesitas visado para vivir en Bulgaria: ambos países son miembros de la Unión Europea y el derecho de libre circulación se aplica directamente. Puedes entrar con el DNI o el pasaporte y residir libremente hasta tres meses. Si tu estancia va a superar ese plazo, la normativa búlgara exige registrarte ante la Dirección de Migración (parte del Ministerio del Interior, MVR) para obtener un certificado de registro como ciudadano de la UE, acreditando alguno de estos supuestos: trabajo por cuenta ajena o propia, medios económicos suficientes junto con seguro médico, o estudios. Tras cinco años de residencia legal continuada se puede solicitar la residencia permanente.\n\nDesde el 1 de enero de 2025, Bulgaria forma parte de pleno derecho del espacio Schengen, incluidas las fronteras terrestres (antes, desde marzo de 2024, solo se habían suprimido los controles en las fronteras aéreas y marítimas). En la práctica, esto significa que un viajero español puede entrar en Bulgaria sin controles de pasaporte al hacerlo desde otro país Schengen, tanto en vuelo directo como por tierra a través de países vecinos que también sean miembros.\n\nEn materia fiscal, la regla general para un ciudadano español que se traslada a vivir al extranjero es que Hacienda considera residente fiscal en España a quien permanece más de 183 días naturales en territorio español durante el año natural, o a quien tiene en España el núcleo principal de sus intereses económicos (directa o indirectamente), salvo que acredite su residencia fiscal en otro país. Si te instalas en Sofía de forma estable y pasas allí la mayor parte del año, deberás valorar tu situación fiscal en Bulgaria (donde el IRPF es un tipo fijo del 10%) y, en su caso, comunicar el cambio de residencia a la Agencia Tributaria española, así como revisar el convenio de doble imposición entre España y Bulgaria.",
      "sources": [
        { "label": "Ministerio del Interior de Bulgaria (MVR) – Ciudadanos de la UE", "url": "https://www.mvr.bg/migration/en/legislation/citizens-of-eu" },
        { "label": "Comisión Europea – Declaración sobre la adhesión plena de Bulgaria y Rumanía a Schengen", "url": "https://ec.europa.eu/commission/presscorner/detail/en/statement_24_6401" },
        { "label": "Consejo de la UE – Decisión sobre la supresión de controles fronterizos terrestres", "url": "https://www.consilium.europa.eu/en/press/press-releases/2024/12/12/schengen-council-decides-to-lift-land-border-controls-with-bulgaria-and-romania/" }
      ]
    },
    "sanidad": {
      "content": "Como ciudadano de la UE, la Tarjeta Sanitaria Europea (TSE/EHIC) te permite recibir asistencia médica necesaria en la red pública búlgara durante estancias temporales, cubriendo por ejemplo consultas con médicos concertados (con un pequeño copago) y hospitalización en centros públicos (también con una tasa diaria reducida). Sin embargo, la TSE está pensada para estancias puntuales, no para una residencia estable: en cuanto te registras como residente en Bulgaria, tu país de origen puede dar de baja la validez de la tarjeta para ese uso.\n\nPara una residencia de larga duración, lo habitual es darse de alta en el Fondo Nacional del Seguro de Salud búlgaro (NHIF), un sistema público obligatorio financiado con una cotización del 8% sobre la renta asegurable (para autónomos, la base mínima mensual ronda los 620 euros de renta, lo que supone una cotización aproximada de unos 50 euros al mes). El NHIF cubre consultas de atención primaria y especialista (con derivación), hospitalización, medicamentos subvencionados y atención materno-infantil.\n\nMuchos nómadas digitales y expatriados optan, alternativamente o de forma complementaria, por un seguro médico privado. Los planes básicos rondan entre 200 y 400 euros al año (unos 17-33 euros al mes), mientras que las coberturas más completas, con dental y óptica incluidos, se sitúan entre 450 y 1.200 euros anuales (unos 37-100 euros al mes). Aseguradoras como DZI, Bulstrad Health, Allianz Bulgaria o Generali operan en el mercado búlgaro, con precios que varían según la edad y el nivel de cobertura.",
      "sources": [
        { "label": "Comisión Europea – La TSE en Bulgaria", "url": "https://employment-social-affairs.ec.europa.eu/policies-and-activities/moving-working-europe/eu-social-security-coordination/european-health-insurance-card/how-use-card/bulgaria-european-health-insurance-card_en" },
        { "label": "Guía de seguro médico para ciudadanos de la UE en Bulgaria (NHIF vs. privado)", "url": "https://innovires.com/tax-residency/blog/health-insurance-eu-citizens-bulgaria.html" }
      ]
    },
    "barrios": {
      "content": "Lozenets es el barrio favorito de muchos nómadas digitales: una zona residencial de calles arboladas cerca del centro, con buena oferta de cafeterías y espacios de trabajo, donde un piso de un dormitorio ronda entre 600 y 900 euros al mes. Oborishte, también céntrico, tiene un ambiente más artístico y cultural, con galerías y cafés, y alquileres algo más contenidos, entre 500 y 800 euros. Para quienes buscan opciones más económicas, Studentski Grad (la 'Ciudad Estudiantil') ofrece pisos desde 350-550 euros al mes en un ambiente joven y animado, mientras que Mladost, un distrito residencial algo más alejado pero bien conectado por metro, tiene alquileres similares, entre 350 y 600 euros.\n\nEn cuanto a espacios de coworking, Betahaus Sofía es la red más consolidada, con cuatro sedes repartidas por la ciudad (Shipka, Slaveykov Square, ABC y Sofia Tower): ofrece bono de día por 20 euros, un plan 'Light' de escritorio compartido con acceso 24/5 por 85 euros al mes, puesto fijo ('Open Space') desde 200 euros al mes y oficina privada desde 250 euros al mes por persona (precios sin IVA). También destaca Sofia Tech Park, un polo tecnológico con espacios de trabajo y eventos de networking orientados a startups e ingenieros.",
      "sources": [
        { "label": "Betahaus Sofía – Planes y precios de coworking", "url": "https://betahaus.bg/en/" },
        { "label": "Guía de nómadas digitales en Sofía (Flatio)", "url": "https://www.flatio.com/blog/digital-nomad-guide-to-sofia-bulgaria" }
      ]
    }
  },
  "belgrado": {
    "visaFiscal": {
      "content": "Los ciudadanos españoles pueden entrar y permanecer en Serbia sin visado durante un máximo de 90 días dentro de cualquier período de 180 días, ya sea con pasaporte o con DNI, según confirma el Ministerio de Asuntos Exteriores serbio. Esta norma funciona de forma similar al conocido '90/180' del espacio Schengen, pero es un régimen propio de Serbia, ya que el país no forma parte de la UE ni del espacio Schengen. Superado ese plazo sin un permiso, la estancia pasa a ser irregular.\n\nSerbia no tiene un 'visado de nómada digital' oficial, pero existe una vía práctica y ampliamente utilizada por freelancers extranjeros: darse de alta como 'preduzetnik paušalac' (empresario individual con tributación a tanto alzado) ante la Agencia de Registros Comerciales (APR), lo que permite después solicitar un permiso de residencia temporal renovable anualmente (hasta 3 años de residencia continua antes de poder optar a la residencia permanente). Este régimen fiscal simplificado tiene un techo de ingresos de aproximadamente 6.000.000 RSD al año (unos 51.000 €) y una cuota fiscal/de contribuciones mensual habitual de entre 200 y 500 € para actividades de IT, con una reducción del 50% durante el primer año de alta para nuevos registrados. El proceso completo, desde la primera gestión hasta tener el permiso en mano, suele tardar entre 2 y 3 meses.\n\nA efectos fiscales españoles, conviene recordar la regla general: se considera que una persona es residente fiscal en España si permanece más de 183 días dentro del año natural en territorio español, o si en España radica el núcleo principal o la base de sus actividades o intereses económicos, de forma directa o indirecta. Quien pase la mayor parte del año en Serbia y rompa ambos vínculos puede dejar de ser residente fiscal en España, pero conviene analizar cada caso con un asesor fiscal antes de dar el paso, especialmente si se mantienen ingresos, inmuebles o vínculos familiares en España.",
      "sources": [
        { "label": "Ministry of Foreign Affairs of Serbia - Visa Requirements", "url": "https://www.mfa.gov.rs/en/citizens/travel-serbia/visa-requirements" },
        { "label": "Lawyer Serbia - Serbia Digital Nomad / Preduzetnik Paušalac", "url": "https://lawyerserbia.com/en/serbia-digital-nomad/" },
        { "label": "Garrigues - Residencia fiscal en España: 183 días y centro de intereses económicos", "url": "https://www.garrigues.com/es_ES/noticia/residencia-fiscal-en-espana-como-se-cuentan-los-183-dias-y-que-significa-centro-de-intereses" }
      ]
    },
    "sanidad": {
      "content": "El sistema público de salud serbio (RFZO) solo es accesible de forma completa para ciudadanos, residentes legales y personas que cotizan al fondo de seguro de salud (por ejemplo, a través del régimen de 'preduzetnik paušalac', que incluye una cuota de seguro médico dentro de la contribución fija mensual). Un turista o alguien sin residencia legal no puede, en general, acceder gratuitamente al sistema público, por lo que se recomienda encarecidamente contratar un seguro médico privado internacional antes de viajar o instalarse en Belgrado.\n\nLa sanidad privada en Belgrado tiene buena reputación, con hospitales y clínicas como Bel Medic o los centros del grupo MediGroup, que ofrecen atención en inglés, tiempos de espera cortos y estándares similares a los de Europa Occidental, a precios considerablemente más bajos. Los seguros privados internacionales para expatriados en Serbia parten de unos 500 €/año para coberturas básicas (en torno a 40-50 €/mes), aunque pólizas más completas con hospitalización, evacuación médica o cobertura fuera de Serbia pueden costar bastante más según la edad, el alcance de la cobertura y la aseguradora elegida. Para quienes tramitan la residencia temporal por cuenta propia, tener un seguro médico privado (o estar dado de alta en el sistema de contribuciones) es, además, un requisito habitual del proceso.",
      "sources": [
        { "label": "Global Citizen Solutions - Healthcare in Serbia", "url": "https://www.globalcitizensolutions.com/healthcare-in-serbia/" },
        { "label": "Pacific Prime - Serbia Health Insurance for Expats", "url": "https://www.pacificprime.com/country/europe/serbia-health-insurance-pacific-prime-international/" }
      ]
    },
    "barrios": {
      "content": "Vračar es el barrio residencial 'de toda la vida' para expatriados y diplomáticos: calles tranquilas, buena oferta gastronómica y cercanía al centro, con alquileres de un dormitorio que suelen moverse entre 500 y 1.100 € al mes, y hasta más en las calles más solicitadas. Dorćol y Stari Grad (centro histórico, junto a la peatonal Knez Mihailova) combinan ambiente cultural, cafés y vida nocturna con una ubicación totalmente caminable, en un rango de precios similar o algo superior. Savamala, la antigua zona portuaria reconvertida en barrio creativo con naves industriales, galerías y cervecerías artesanales, es de las zonas favoritas de la comunidad nómada por su ambiente joven y sus coworkings. Para quien busca precios más bajos, Novi Beograd (Nueva Belgrado) ofrece pisos más nuevos, buena conexión de metro/autobús y alquileres desde unos 300-400 €/mes fuera del centro; Zemun, la antigua localidad ribereña de herencia austrohúngara, es otra alternativa tranquila y algo más económica.\n\nEn coworkings, Belgrado tiene una oferta sólida y en crecimiento: Nova Iskra Workspace (con sedes en Dorćol, Savamala y Zemun) es probablemente el más conocido entre la comunidad creativa y de startups; Impact Hub Belgrade ronda los 12 €/día o unos 120 €/mes; Startit Centre, muy popular entre desarrolladores, ofrece bonos desde unos 10 €/día o 100 €/mes; y BIOS Coworking se sitúa entre las opciones más económicas, desde unos 8 €/día o 90 €/mes. Los precios de hot desk en la ciudad, en general, se mueven en una horquilla de 10-20 €/día y 120-250 €/mes para un puesto fijo.",
      "sources": [
        { "label": "Investropa - Updated Rents in Belgrade (2026)", "url": "https://investropa.com/blogs/news/belgrade-rents" },
        { "label": "ExpatLife - Living in Belgrade: Neighborhoods & Coworking", "url": "https://expatlife.ai/serbia/cities/belgrade" },
        { "label": "Nova Iskra Workspace", "url": "https://novaiskraworkspace.com/" },
        { "label": "Belgrade Coworking Guide 2026", "url": "https://belgradecoworking.com/coworking-belgrade-guide" }
      ]
    }
  },
  "braga": {
    "visaFiscal": {
      "content": "Como ciudadano español, Braga —y Portugal en general— no exige visado: la libre circulación de la UE permite entrar y residir sin trámites previos. Si la estancia supera los 3 meses, es obligatorio inscribirse como residente comunitario en la Câmara Municipal de Braga para obtener el 'Certificado de Registo de Cidadão da União Europeia', el equivalente al NIE español. Para nómadas no comunitarios, Portugal ofrece el visado D8 (visado de nómada digital), que en 2026 exige acreditar unos ingresos mensuales mínimos de 3.680 € (cuatro veces el salario mínimo portugués, fijado en 920 €/mes desde enero de 2026); el requisito se actualiza automáticamente cada vez que sube el salario mínimo. En materia fiscal, el antiguo régimen de Residente No Habitual (RNH) fue sustituido en 2024 por el IFICI (Incentivo Fiscal à Investigação Científica e Inovação), que ofrece un tipo fijo del 20% sobre rentas de trabajo y actividad profesional de alto valor añadido obtenidas en Portugal durante hasta 10 años, siempre que el solicitante no haya sido residente fiscal portugués en los 5 años anteriores y trabaje en actividades reconocidas (I+D, TIC, ingeniería, docencia universitaria, startups certificadas, entre otras).",
      "sources": [
        { "label": "GrowIN Portugal – Requisito de ingresos del D8 en 2026", "url": "https://www.growinportugal.com/news/digital-nomad-visa-income-bar-jumps-to-3-680-a-month-2026-07-21" },
        { "label": "Global Citizen Solutions – Guía del régimen IFICI (NHR 2.0)", "url": "https://www.globalcitizensolutions.com/new-nhr/" },
        { "label": "Governo de Portugal – Salario mínimo 2026 (920 €)", "url": "https://portugal.gov.pt/gc25/comunicacao/noticias/governo-aumenta-salario-minimo-para-920-euros-em-2026" }
      ]
    },
    "sanidad": {
      "content": "Una vez inscrito como residente (con el Certificado de Registo para comunitarios, o el permiso de residencia para titulares del D8), es posible darse de alta en el Serviço Nacional de Saúde (SNS) acudiendo al centro de salud correspondiente y solicitando el 'número de utente', que da acceso a la sanidad pública portuguesa en condiciones similares a un residente nacional. Los solicitantes del visado D8 deben además contratar, antes de la cita consular, un seguro médico privado con una cobertura mínima de 30.000 € válido en la UE/Espacio Schengen (incluyendo evacuación médica y repatriación); este requisito desaparece una vez obtenida la residencia y el acceso al SNS, aunque muchos residentes optan por mantener un seguro privado complementario. Los precios de seguro privado en Portugal para un adulto suelen rondar entre 40 y 80 €/mes según cobertura y aseguradora (no se encontraron cifras específicas para Braga; se usan datos a nivel nacional).",
      "sources": [
        { "label": "gov.pt – Cuidados de salud para migrantes en Portugal", "url": "https://www2.gov.pt/en/migrantes-viver-e-trabalhar-em-portugal/migrantes-cuidados-de-saude-em-portugal" },
        { "label": "Feather – Seguro de salud para el visado D8", "url": "https://feather-insurance.com/en-pt/health-insurance/expat/D8" }
      ]
    },
    "barrios": {
      "content": "El centro histórico, la zona civil conocida como Sé e Cividade (alrededor de la Catedral de Braga), es la opción más cómoda para nómadas: todo se hace a pie, hay buena oferta de cafés y fibra óptica, y los pisos de 1 habitación en el centro rondan los 550 €/mes (frente a unos 442 €/mes en zonas algo más alejadas del centro, según datos de coste de vida basados en Numbeo). Maximinos, colindante con el casco histórico y muy próxima a la universidad, es una zona popular entre estudiantes y nómadas por su ambiente joven y sus precios algo más ajustados. Quien prefiera estar cerca del campus de Gualtar de la Universidade do Minho encuentra alquileres más económicos y buena conexión en transporte urbano hacia el centro. En coworkings, Braga cuenta con varias opciones: Regus (Avenida da Liberdade), con coworking desde 159 €/mes y oficina privada desde 195 €/mes; Braga Business Center, con puestos desde 140 €/mes; Liberty Hub Coworking, desde 110 €/mes; y Factory Braga, con coworking desde 102 €/mes y oficina privada desde 274 €/mes.",
      "sources": [
        { "label": "Global Citizen Solutions – Coste de vida y alquileres en Braga", "url": "https://www.globalcitizensolutions.com/cost-of-living-in-braga/" },
        { "label": "workin.space – Coworkings en Braga (precios)", "url": "https://workin.space/en/coworking/portugal/northern-portugal/braga" }
      ]
    }
  },
  "munich": {
    "visaFiscal": {
      "content": "Como ciudadano de la UE, un español puede entrar y residir en Alemania sin visado, amparado por la libre circulación comunitaria; basta con el DNI o pasaporte en vigor. No existe límite de 90 días para ciudadanos UE, pero si la estancia supera los 90 días es obligatorio registrar la residencia mediante el trámite de 'Anmeldung' en la Bürgeramt/Einwohnermeldeamt del municipio, dentro de los 14 días siguientes a la mudanza; se obtiene la 'Anmeldebestätigung', documento necesario para casi todo trámite posterior (banco, seguro médico, contrato de trabajo). Para trabajar por cuenta propia, el trámite es el 'Gewerbeanmeldung' (actividad comercial) o darse de alta como 'Freiberufler' (profesión liberal, más habitual para consultores, programadores y creativos) ante el Finanzamt, obteniendo un número de identificación fiscal (Steuer-ID). Alemania ofrece el régimen simplificado 'Kleinunternehmerregelung' para pequeños negocios: exime de repercutir IVA si los ingresos del año anterior no superaron los 25.000 € y no se prevé superar los 100.000 € en el año en curso (cifras vigentes en 2026). Los residentes fiscales (más de 183 días/año) tributan por renta mundial en el IRPF alemán (Einkommensteuer), con tipos progresivos de hasta el 45%. España y Alemania tienen convenio de doble imposición.",
      "sources": [
        { "label": "iamexpat.de – Registro de residencia en Alemania (Anmeldung)", "url": "https://www.iamexpat.de/expat-info/immigration-residency/registration-germany-anmeldung" },
        { "label": "accountable.de – Régimen Kleinunternehmer 2026", "url": "https://www.accountable.de/en/help-center/kleinunternehmer-in-2025-everything-you-need-to-know/" },
        { "label": "expatica.com – Fiscalidad para autónomos en Alemania", "url": "https://www.expatica.com/de/finance/taxes/tax-and-freelancers-in-germany-100950/" }
      ]
    },
    "sanidad": {
      "content": "En Alemania el seguro médico es obligatorio para todos los residentes, ya sea a través del sistema público (GKV) o privado (PKV). Un ciudadano español que se traslade por poco tiempo puede usar la Tarjeta Sanitaria Europea (TSE), que cubre atención médica necesaria durante los primeros 90 días, pero en cuanto se establece como residente (Anmeldung) debe darse de alta en el sistema alemán. Para trabajadores por cuenta ajena, la cuota es del 14,6% del salario bruto repartida entre empresa y trabajador, mientras que autónomos y freelancers negocian su cuota directamente con la caja pública (TK, AOK, Barmer) o pueden optar por un seguro privado si superan cierto umbral de ingresos. La sanidad pública alemana es de alta calidad, con acceso a especialistas y hospitales de primer nivel, aunque las listas de espera para especialistas no urgentes pueden ser más largas que la atención primaria. El seguro privado ofrece habitaciones individuales y citas más rápidas, pero conviene valorarlo con cuidado porque salir del sistema privado para volver al público después no siempre es sencillo.",
      "sources": [
        { "label": "expatica.com – Guía del seguro médico alemán", "url": "https://www.expatica.com/de/healthcare/healthcare-basics/a-guide-to-german-health-insurance-693463/" },
        { "label": "iamexpat.de – Seguro médico para expatriados en Alemania", "url": "https://www.iamexpat.de/expat-info/german-health-insurance" }
      ]
    },
    "barrios": {
      "content": "Schwabing: barrio bohemio y universitario al norte del centro, junto al Englischer Garten; ambiente joven, muchas cafeterías con wifi y buena vida nocturna moderada; alquileres medio-altos. Maxvorstadt: el distrito de los museos y la universidad (LMU, TU München); gran densidad de bibliotecas, cafés para trabajar y una comunidad estudiantil e intelectual activa; muy céntrico y bien conectado. Glockenbachviertel: zona trendy al sur del centro, con ambiente creativo, bares de especialidad, mercados y una de las escenas gastronómicas más vivas de la ciudad; popular entre freelancers y diseñadores; precios altos pero compensados por la vida social. Haidhausen: barrio más tranquilo y 'de pueblo' al este del río Isar, con encanto bávaro tradicional, buena relación calidad-precio frente a Schwabing o Glockenbachviertel, y fácil acceso en S-Bahn/tranvía al centro; ideal para quien busca calma sin alejarse demasiado.",
      "sources": [
        { "label": "iamexpat.de – Guías de barrios en Múnich", "url": "https://www.iamexpat.de/expat-info" },
        { "label": "Migaku – Dónde vivir en Múnich, guía de barrios", "url": "https://migaku.com/blog/language-fun/where-to-live-in-munich-a-neighborhood-guide-for-foreigners" }
      ]
    }
  },
  "sevilla": {
    "visaFiscal": {
      "content": "Para un ciudadano español no existe trámite de visado: instalarse en Sevilla es simplemente un cambio de residencia dentro del país. Los dos trámites clave son el empadronamiento municipal y, si se trabaja por cuenta propia, el alta en el Régimen Especial de Trabajadores Autónomos (RETA). El empadronamiento se gestiona en el Ayuntamiento de Sevilla (Servicio de Estadística - Padrón Municipal), con cita previa, y certifica la residencia en la ciudad; es necesario para acceder a la sanidad pública andaluza, escolarización y otros trámites locales. Quien se dé de alta como autónomo puede acogerse en 2026 a la tarifa plana: 80 €/mes de cuota fija durante los primeros 12 meses, ampliable a un segundo año si los rendimientos netos quedan por debajo del SMI; después se pasa al sistema de cotización por tramos de ingresos reales del RETA. Requisitos: no haber estado de alta como autónomo en los 2 años anteriores, no ser autónomo colaborador y no tener deudas con la Seguridad Social o Hacienda. El trámite se hace en Importass (Seguridad Social) junto con el alta censal en la Agencia Tributaria (modelo 036/037). A efectos de IRPF, Andalucía tiene competencia sobre el tramo autonómico del impuesto, con su propia escala de tipos y deducciones.",
      "sources": [
        { "label": "Ayuntamiento de Sevilla – Empadronamiento", "url": "https://www.sevilla.org/servicios/empadronamiento" },
        { "label": "InfoAutonomos – Tarifa plana de autónomos", "url": "https://www.infoautonomos.com/seguridad-social/tarifa-plana-autonomos/" },
        { "label": "Seguridad Social – Alta de autónomos", "url": "https://www.seg-social.es/wps/portal/wss/internet/HerramientasWeb/9d2fd4f1-ab0f-42a6-8d10-2e74b378ee24" }
      ]
    },
    "sanidad": {
      "content": "En Sevilla, la sanidad pública depende del Servicio Andaluz de Salud (SAS), el sistema regional que gestiona atención primaria, hospitales, urgencias y programas de prevención en toda Andalucía, dentro del marco del Sistema Nacional de Salud. Para acceder a él como residente hay que estar empadronado en la ciudad y solicitar la Tarjeta Sanitaria de Andalucía a través del portal del SAS o de la app 'Salud Andalucía'. Con la tarjeta se asigna un centro de salud y médico de familia de referencia según el domicilio, y se habilita el acceso a ClicSalud+ para pedir citas, consultar el historial clínico y gestionar trámites online. A diferencia de otras comunidades autónomas, cada una gestiona su propio servicio de salud (SAS en Andalucía, SERMAS en Madrid, ICS en Cataluña, etc.), por lo que quien se traslada desde otra región debe volver a tramitar la tarjeta sanitaria local tras empadronarse. Como complemento, hay una oferta amplia de seguros de salud privados en Sevilla (Sanitas, Adeslas, DKV, Asisa), útiles para quien busca listas de espera más cortas.",
      "sources": [
        { "label": "SAS – Tarjeta Sanitaria de Andalucía", "url": "https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/ciudadania/tarjeta-sanitaria-de-andalucia" },
        { "label": "Junta de Andalucía – Tarjeta sanitaria", "url": "https://www.juntadeandalucia.es/temas/salud/servicios/tarjeta.html" }
      ]
    },
    "barrios": {
      "content": "Triana: al otro lado del Guadalquivir, es el barrio con más tradición flamenca y alfarera de Sevilla, con un ambiente auténtico y muy vivo. Los alquileres rondan los 700-750 € para un piso de una o dos habitaciones, y ofrece buena conexión a pie con el centro cruzando el puente de Triana. Alameda de Hércules: el barrio más bohemio y alternativo de la ciudad, con gran densidad de bares, terrazas y restaurantes; es una de las zonas favoritas de expats y nómadas digitales jóvenes por su vida social nocturna y su cercanía al centro y a varios coworkings. Nervión: zona moderna, comercial y de negocios, con buena oferta de oficinas y coworkings; los precios son más altos (850-1.385 € para 2-3 habitaciones), pero ofrece más servicios y comodidad. Los Remedios: barrio residencial y familiar, tranquilo, de avenidas amplias; los precios son medio-altos (575-750 € para 1-2 habitaciones) y es una opción sólida para quien busca tranquilidad sin alejarse del centro.",
      "sources": [
        { "label": "Holafly – Mejores barrios de Sevilla", "url": "https://esim.holafly.com/es/blog/expatriados/mejores-barrios-sevilla/" },
        { "label": "Holafly – Coworking en Sevilla", "url": "https://esim.holafly.com/es/blog/nomada-digital/coworking-sevilla/" }
      ]
    }
  },
  "paris": {
    "visaFiscal": {
      "content": "Como ciudadano de la UE, un español puede entrar, residir y trabajar en Francia sin visado ni permiso de residencia, amparado por la libre circulación de personas. A diferencia de Alemania, Francia no exige un registro obligatorio tipo 'Anmeldung' al llegar. Sin embargo, si la estancia supera los 3 meses, conviene poder acreditar medios de vida, seguro médico o actividad económica, y se recomienda solicitar el Certificat d'Immatriculation en la prefectura si se va a trabajar o estudiar de forma prolongada. Quien trabaje deberá tramitar un numéro de sécurité sociale (a través de la Assurance Maladie/CPAM) para acceder a la sanidad pública y cotizar. Para autónomos, el régimen más habitual es el de auto-entrepreneur (micro-entrepreneur), que permite darse de alta online en autoentrepreneur.urssaf.fr, con cotizaciones sociales simplificadas calculadas como porcentaje de la facturación (aprox. 21,1-24,6% para servicios) y sin necesidad de facturar IVA hasta ciertos umbrales (en 2026, en torno a 39.100 € para servicios). Fiscalmente, un residente fiscal en Francia (más de 183 días/año) tributa por el IRPF francés, con tipos progresivos hasta el 45%, y existe convenio de doble imposición España-Francia.",
      "sources": [
        { "label": "Europa.eu – Registro de residencia en la UE", "url": "https://europa.eu/youreurope/citizens/residence/documents-formalities/registering-residence/index_es.htm" },
        { "label": "Ministerio de Trabajo – Españoles en Francia", "url": "https://www.mites.gob.es/mundo/consejerias/francia/es/al-llegar/index.html" },
        { "label": "URSSAF – Régimen auto-entrepreneur", "url": "https://www.autoentrepreneur.urssaf.fr" }
      ]
    },
    "sanidad": {
      "content": "Francia cuenta con un sistema de sanidad pública universal gestionado por la Assurance Maladie, bajo el marco de la Protection Universelle Maladie (PUMA). PUMA garantiza cobertura sanitaria a cualquier persona que resida en Francia de forma estable (más de 3 meses) y regular, cubriendo consultas, hospitalización y medicamentos con un porcentaje de reembolso (normalmente 70% en consultas, 80% en hospitalización). Un ciudadano español residente debe darse de alta en la Caisse Primaire d'Assurance Maladie (CPAM) de su zona aportando pasaporte/DNI y justificante de residencia estable, para obtener su numéro de sécurité sociale y, posteriormente, la Carte Vitale —la tarjeta sanitaria que permite el reembolso automático de gastos médicos—. Dado que la Sécurité Sociale no cubre el 100% del gasto médico, la mayoría de residentes contrata una mutuelle (seguro complementario privado), que cubre el copago restante y prestaciones no cubiertas como dental u óptica; su coste varía según edad y cobertura, desde unos 30-50 €/mes.",
      "sources": [
        { "label": "French-Property.com – Guía de PUMA", "url": "https://www.french-property.com/guides/france/public-services/health/puma" },
        { "label": "Service-Public.fr – Protección universal de enfermedad", "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F32824" }
      ]
    },
    "barrios": {
      "content": "Le Marais (III y IV distrito): histórico, elegante y muy vivo, con museos, galerías de arte, cafés y tiendas de diseño. Precios altos, pero céntrico y muy bien conectado; ambiente cosmopolita. Canal Saint-Martin (X y XI distrito): barrio creativo y menos turístico, con ambiente bohemio junto al canal, terrazas y tiendas independientes; precios más asequibles que el centro, con coworkings como Le Tank. Bastille (XI distrito): energía joven y cultural, buena vida nocturna, precios moderados, con coworkings como Remix Coworking Bastille. Montmartre (XVIII distrito): ambiente bohemio y artístico, con teatros, cabarets y cafés con encanto; precios en rango medio, algo alejado del centro de negocios pero muy bien comunicado por metro.",
      "sources": [
        { "label": "Holafly – Mejores barrios de París para expats", "url": "https://esim.holafly.com/expats/best-neighborhood-stay-paris/" }
      ]
    }
  },
  "milan": {
    "visaFiscal": {
      "content": "Como ciudadano español, gozas de libre circulación dentro de la UE y puedes entrar, residir y trabajar en Italia sin visado. Si tu estancia supera los 3 meses, debes registrarte como residente comunitario mediante la iscrizione anagrafica en el Comune correspondiente, presentando pasaporte/DNI, prueba de alojamiento y, si no trabajas por cuenta ajena, justificación de recursos económicos suficientes y seguro de salud. El Comune tiene 2 días hábiles para registrar la solicitud y hasta 45 días para verificar la residencia efectiva. Es imprescindible además solicitar el codice fiscale (equivalente al NIE/NIF italiano), necesario para casi cualquier trámite. Para trabajar como autónomo, se debe abrir una partita IVA. Muchos nómadas digitales optan por el regime forfettario, un régimen fiscal simplificado con tipo impositivo reducido del 5% durante los primeros 5 años de actividad (15% después), aplicable hasta un umbral de ingresos anuales de 85.000 € (límite vigente también en 2026). Existen límites adicionales, como un máximo de 35.000 € en ingresos por trabajo dependiente/pensión del año anterior para poder acceder.",
      "sources": [
        { "label": "Anagrafe Nazionale – Registro para ciudadanos europeos", "url": "https://www.anagrafenazionale.interno.it/area-cittadino/servizi-per-cittadini-europei/" },
        { "label": "WaitAly – Iscrizione anagrafica, cómo se hace", "url": "https://www.waitaly.net/iscrizione-allanagrafe-cose-chi-la-puo-fare-come-si-fa/" },
        { "label": "Quickfisco – Régimen forfettario 2026", "url": "https://quickfisco.it/blog/regime-forfettario/regime-forfettario-2026-cosa-cambia-e-cosa-rimane-invariato/" }
      ]
    },
    "sanidad": {
      "content": "Italia cuenta con el Servizio Sanitario Nazionale (SSN), un sistema público universal financiado por impuestos. Los ciudadanos de la UE, incluidos los españoles, pueden inscribirse gratuitamente al SSN si acreditan residencia y encajan en categorías reconocidas: trabajador por cuenta ajena o propia, familiar de trabajador o de ciudadano italiano, o residente permanente tras 5 años. La inscripción se tramita en la ASL (Azienda Sanitaria Locale) de tu zona de residencia, presentando codice fiscale, iscrizione anagrafica y documentación laboral o de recursos suficientes. Una vez inscrito, se recibe la tessera sanitaria, que da acceso a la atención pública y permite elegir un medico di base (médico de cabecera), quien gestiona consultas, recetas y derivaciones a especialistas de forma gratuita o con copago reducido (ticket sanitario). Para quienes aún no cumplen los requisitos de inscripción obligatoria, existe la opción de inscripción voluntaria pagando una cuota anual, o contratar un seguro privado complementario.",
      "sources": [
        { "label": "AUSL Modena – Acceso al SSN", "url": "https://www.ausl.mo.it/servizi-e-prestazioni/percorsi-di-cura-e-assistenza/accesso-ssn/" },
        { "label": "ASL Napoli 1 Centro – Asistencia sanitaria a ciudadanos UE", "url": "https://www.aslnapoli1centro.it/assistenza-sanitaria-in-italia-ai-cittadini-u.e.-e-s.e.e." }
      ]
    },
    "barrios": {
      "content": "Navigli, con sus icónicos canales, es el barrio más popular entre expatriados y nómadas digitales: ambiente tranquilo de día, vida nocturna intensa al atardecer, terrazas y mercado de antigüedades. Estudios de unos 45 m² rondan los 650-800 €/mes más gastos. Isola es el polo creativo e innovador de Milán, con boutiques, tiendas de segunda mano y el espacio cultural Santeria; habitaciones en piso compartido desde 500 €, estudios desde 690 €. Porta Venezia destaca por su ambiente artístico, parques y una consolidada comunidad LGBTQ+, con galerías y eventos culturales frecuentes. Città Studi, zona universitaria, ofrece precios algo más bajos (estudios desde 600 €) y ambiente joven y multicultural gracias a la proximidad del Politecnico di Milano.",
      "sources": [
        { "label": "Digital Nomads World – Guía de Milán", "url": "https://digitalnomads.world/city-guide/milan/" }
      ]
    }
  },
  "manila": {
    "visaFiscal": {
      "content": "Los ciudadanos españoles pueden entrar en Filipinas sin visado y permanecer 30 días, ampliables en la Bureau of Immigration hasta un máximo acumulado de aproximadamente 36 meses mediante extensiones sucesivas, con tasas de entre PHP 6.000-9.000 en la primera extensión. Desde 2025, Filipinas cuenta con un visado de nómada digital oficial creado por la Orden Ejecutiva (EO) 86 de 2025, dirigido a trabajadores remotos con ingresos extranjeros de al menos 24.000 USD/año (~2.000 USD/mes). Ofrece una validez inicial de 12 meses, renovable una vez por otros 12 (máximo 2 años), entradas y salidas múltiples, y solicitud online. Requiere prueba de trabajo remoto, documentación de ingresos, seguro de salud internacional válido, certificado de antecedentes penales y pasaporte con validez de al menos 6 meses. El requisito más restrictivo es la reciprocidad: el país del solicitante debe ofrecer un visado equivalente a ciudadanos filipinos — a mediados de 2026 el gobierno filipino aún no ha publicado la lista oficial de países elegibles, por lo que conviene confirmar si España está incluida antes de aplicar. En cuanto a fiscalidad, Filipinas generalmente no grava los ingresos de fuente extranjera a menos que la persona supere los 183 días de estancia y se convierta en residente fiscal filipino; España seguirá exigiendo declarar la renta mundial mientras el nómada mantenga su residencia fiscal española.",
      "sources": [
        { "label": "InCorp Philippines – Extensión de visado turístico", "url": "https://philippines.incorp.asia/guides/tourist-visa-extension/" },
        { "label": "Emerhub – Visado de nómada digital filipino", "url": "https://emerhub.com/philippines/visas/digital-nomad-visa/" },
        { "label": "Divina Law – Análisis del visado de nómada digital", "url": "https://www.divinalaw.com/dose-of-law/digital-nomad-visa/" }
      ]
    },
    "sanidad": {
      "content": "Filipinas tiene un sistema sanitario dual: PhilHealth, el seguro público obligatorio para trabajadores locales, cubre solo centros acreditados dentro del país mediante tarifas fijas por patología muy por debajo del coste real en hospitales privados de gama alta — la diferencia corre a cargo del paciente (el llamado 'balance billing'). Para nómadas digitales y expatriados, la vía habitual es la sanidad privada, de muy buena calidad en Metro Manila: hospitales como Makati Medical Center, St. Luke's Medical Center, The Medical City y Asian Hospital cuentan con acreditación internacional, equipamiento moderno y personal que habla inglés con fluidez. Estos centros suelen exigir prueba de seguro o un depósito por adelantado antes de admitir al paciente. Dado que PhilHealth no cubre a extranjeros no residentes ni evacuaciones médicas, es imprescindible contratar un seguro de salud/viaje internacional antes de instalarse en Manila — una evacuación médica sin cobertura puede costar entre 15.000 y 50.000 USD.",
      "sources": [
        { "label": "Feather Insurance – Guía del seguro de salud en Filipinas", "url": "https://feather-insurance.com/en-ph/blog/health-insurance-philippines-guide" }
      ]
    },
    "barrios": {
      "content": "Makati es el distrito financiero y el más popular entre nómadas: muy caminable, con numerosos coworkings, cafeterías y centros comerciales, y percibido como una de las zonas más seguras de Manila. Bonifacio Global City (BGC), en Taguig, es la zona más moderna e internacional: calles amplias, edificios nuevos, buena vida de restaurantes y ambiente limpio y ordenado — probablemente la opción más segura y cómoda, aunque también la más cara. Poblacion (dentro de Makati) es el barrio creativo y de vida nocturna, con cafés independientes y espacios de arte, aunque más ruidoso y menos tranquilo para trabajar. Ortigas Center (Pasig) es una alternativa de negocios más asequible que Makati/BGC; Quezon City ofrece un ambiente más local y universitario, con buena escena de cafés a precios más bajos.",
      "sources": [
        { "label": "My Nomad Space – Mejores zonas de Manila para nómadas", "url": "https://www.mynomadspace.com/articles/best-areas-in-manila-for-digital-nomads/" }
      ]
    }
  },
  "a-coruna": {
    visaFiscal: {
      content: "Los ciudadanos de la Unión Europea y del Espacio Económico Europeo no necesitan visado para instalarse en A Coruña: basta con empadronarse y solicitar el certificado de registro de ciudadano de la UE. Para nómadas digitales de fuera de la UE, España ofrece el visado para teletrabajadores de carácter internacional, con un requisito de ingresos mensuales en torno a 2.849 €/mes en 2026 y una validez inicial de hasta tres años, prorrogable por periodos de dos.\n\nQuienes obtienen este visado pueden acogerse al régimen especial para trabajadores desplazados o Ley Beckham, que fija un tipo fijo del 24% en el IRPF sobre los primeros 600.000 € de renta durante seis ejercicios fiscales. Para el resto de contribuyentes rige la regla general de residencia fiscal: más de 183 días al año en España.",
      sources: [
        { label: "Visado para nómadas digitales — Legalitas", url: "https://www.legalitas.com/actualidad/visado-nomada-digital" },
        { label: "La ley Beckham en España 2026 — Raisin", url: "https://www.raisin.com/es-es/tributacion/ley-beckham/" },
      ],
    },
    sanidad: {
      content: "Los residentes legales en A Coruña tienen acceso al Sistema Nacional de Salud una vez formalizada el alta en la Seguridad Social o el empadronamiento, con el Complejo Hospitalario Universitario de A Coruña (CHUAC) como principal centro de referencia público de Galicia. Para tramitar el visado de teletrabajador es obligatorio un seguro médico privado sin copagos ni carencias, contratado con una aseguradora autorizada por la Dirección General de Seguros.\n\nEl coste de una póliza de este tipo para un adulto joven sin patologías previas ronda entre 45 € y 85 € al mes, algo por debajo de la media de las grandes ciudades españolas, con Sanitas, Adeslas y Asisa entre las aseguradoras con más presencia en la ciudad.",
      sources: [
        { label: "Seguro médico para el visado de nómada digital — Cohen y Aguirre", url: "https://cohenyaguirre.es/seguro-medico-para-visa-nomada-digital" },
        { label: "Servizo Galego de Saúde (Sergas)", url: "https://www.sergas.es" },
      ],
    },
    barrios: {
      content: "El Ensanche y Cuatro Caminos son las zonas más habituales para vivir, céntricas y bien comunicadas; María Pita y la Ciudad Vieja ofrecen encanto histórico junto al puerto. Riazor y Orzán, con sus playas urbanas a pie de paseo marítimo, son la zona preferida por quienes buscan surf y aire libre sin salir de la ciudad, con alquileres algo por encima de la media local.\n\nEn coworking, Cooworking opera dos espacios: uno céntrico en Avenida del Ejército, a cinco minutos del centro, y otro en el polígono de A Grela orientado a equipos más grandes. Es una oferta todavía reducida comparada con Madrid o Barcelona, pero suficiente para quien trabaja en remoto de forma habitual.",
      sources: [
        { label: "Cooworking A Coruña", url: "https://cooworking.net/" },
        { label: "Cost of Living in A Coruña — Numbeo", url: "https://www.numbeo.com/cost-of-living/in/A-Coruna-Corunna-Spain" },
      ],
    },
  },
  bilbao: {
    visaFiscal: {
      content: "Los ciudadanos de la Unión Europea y del Espacio Económico Europeo no necesitan visado para instalarse en Bilbao: la libre circulación les permite residir y trabajar sin más trámite que empadronarse y solicitar el certificado de registro de ciudadano de la UE. Para los nómadas digitales de fuera de la UE, España ofrece el mismo visado para teletrabajadores de carácter internacional que en el resto del país, con un requisito de ingresos mensuales en torno a 2.849 €/mes en 2026 y una validez inicial de hasta tres años.\n\nQuienes obtienen este visado pueden acogerse a la Ley Beckham, con un tipo fijo del 24% en el IRPF sobre los primeros 600.000 € de renta durante seis ejercicios fiscales. Para el resto de contribuyentes rige la regla general de residencia fiscal: más de 183 días al año en el país.",
      sources: [
        { label: "Visado para nómadas digitales — Legalitas", url: "https://www.legalitas.com/actualidad/visado-nomada-digital" },
        { label: "La ley Beckham en España 2026 — Raisin", url: "https://www.raisin.com/es-es/tributacion/ley-beckham/" },
      ],
    },
    sanidad: {
      content: "Los residentes legales en Bilbao tienen acceso a la sanidad pública vasca (Osakidetza) una vez formalizada el alta en la Seguridad Social, con el Hospital Universitario de Cruces como principal centro de referencia del área metropolitana. Para el visado de teletrabajador es obligatorio un seguro médico privado sin copagos ni carencias.\n\nEl coste de una póliza de este tipo para un adulto joven sin patologías previas ronda entre 55 € y 95 € al mes, en línea con la media de las grandes ciudades españolas, con Sanitas, Adeslas y DKV entre las aseguradoras más presentes en el País Vasco.",
      sources: [
        { label: "Seguro médico para el visado de nómada digital — Cohen y Aguirre", url: "https://cohenyaguirre.es/seguro-medico-para-visa-nomada-digital" },
        { label: "Osakidetza — Servicio Vasco de Salud", url: "https://www.osakidetza.euskadi.eus" },
      ],
    },
    barrios: {
      content: "El Ensanche y Abando, en torno al Guggenheim y la ría, son las zonas más buscadas por nómadas digitales por su cercanía a cafeterías, restaurantes y coworkings; Indautxu ofrece un ambiente similar a precios algo más asequibles. Deusto, al otro lado de la ría, combina ambiente universitario con alquileres más bajos.\n\nEntre los coworkings, Spaces Abando (Calle Buenos Aires 12) es la opción internacional más consolidada en pleno centro; Bilbo Lab Coworking y Alzola Coworking, ambos cerca del Ensanche, ofrecen puestos flexibles desde unos 200-250 €/mes; BC Coworking, junto al río en dirección a Deusto, es otra alternativa activa con oficinas privadas desde 230 €/mes.",
      sources: [
        { label: "Los 5 principales espacios coworking en Bilbao — Holafly", url: "https://esim.holafly.com/es/blog/nomada-digital/coworking-bilbao/" },
        { label: "Cost of Living in Bilbao — Numbeo", url: "https://www.numbeo.com/cost-of-living/in/Bilbao" },
      ],
    },
  },
  toulouse: {
    visaFiscal: {
      content: "Francia no tiene un visado de nómada digital específico. La vía habitual para una estancia larga trabajando en remoto para un empleador extranjero es el visado de larga estancia de visitante (VLS-TS visiteur): tras una aclaración del Ministerio del Interior francés en 2026, se tolera el teletrabajo desde Francia siempre que el empleo, el contrato y el pago sigan vinculados por completo a una empresa fuera de Francia, sin clientes ni actividad económica francesa. Cada solicitud se evalúa de forma individual en el consulado, y exige acreditar solvencia económica, alojamiento y un seguro médico con cobertura mínima de 30.000 €.\n\nQuienes prefieren una vía más sólida pueden optar al Pasaporte Talento (Passeport Talent), pensado para autónomos o trabajadores cualificados con ingresos anuales de entre 22.000 € y 35.000 € aproximadamente según la modalidad. En materia fiscal, trabajar físicamente desde suelo francés puede considerarse actividad realizada en Francia a efectos tributarios, independientemente de dónde esté el empleador, así que conviene planificar el convenio de doble imposición aplicable antes de instalarse.",
      sources: [
        { label: "France Clarifies Remote Working Rules for Visitor Visa Holders — IAS", url: "https://iasservices.org.uk/france-clarifies-remote-working-rules-for-visitor-visa-holders/" },
        { label: "Visa de larga estancia (más de 3 meses) — Service-Public.fr", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16162?lang=en" },
      ],
    },
    sanidad: {
      content: "Tras tres meses de residencia estable y regular en Francia, es posible solicitar la Protection Universelle Maladie (PUMa), que da acceso al sistema público de salud. Mientras se tramita esa cobertura, o para el propio visado de visitante, es obligatorio un seguro médico privado internacional con una cobertura mínima de 30.000 €. El Centre Hospitalier Universitaire (CHU) de Toulouse es el principal hospital público de referencia de la región.\n\nLa sanidad privada en Toulouse es de buena calidad, con clínicas y especialistas concentrados en el centro y en el barrio de Rangueil, cerca del propio CHU.",
      sources: [
        { label: "France Clarifies Remote Working Rules for Visitor Visa Holders — IAS", url: "https://iasservices.org.uk/france-clarifies-remote-working-rules-for-visitor-visa-holders/" },
        { label: "CHU de Toulouse", url: "https://www.chu-toulouse.fr" },
      ],
    },
    barrios: {
      content: "El centro histórico en torno al Capitole concentra cafeterías con wifi y buena parte de la vida social; Saint-Cyprien, al otro lado del Garona, es más tranquilo y algo más económico. Compans-Caffarelli, cerca del canal, es la zona de negocios con más oficinas y coworkings.\n\nEntre los coworkings, HarryCow (Rue Sainte-Ursule, junto al Capitole) ofrece acceso desde 4 €/hora hasta 220 €/mes; Ô Local, cerca del Château du Canal, tiene una membresía base de unos 239 €/mes; Lab'Oïkos, en el barrio de Saint-Aubin, ofrece acceso flexible desde 99 €/mes.",
      sources: [
        { label: "Top 5 coworking spaces in Toulouse — Colivys", url: "https://colivys.com/en/blog/coworking-toulouse/" },
      ],
    },
  },
  estrasburgo: {
    visaFiscal: {
      content: "Al igual que en el resto de Francia, no existe un visado de nómada digital específico para Estrasburgo. La opción más usada para trabajar en remoto de forma prolongada es el visado de larga estancia de visitante (VLS-TS visiteur), tolerado desde la aclaración del Ministerio del Interior de 2026 siempre que el empleo, el contrato y el pago permanezcan íntegramente fuera de Francia, sin clientes ni vínculo económico con el país. La aprobación no es automática: cada solicitud se valora caso por caso en el consulado correspondiente.\n\nComo capital europea con sede del Parlamento Europeo, Estrasburgo tiene además una comunidad relativamente amplia de trabajadores internacionales con Pasaporte Talento, la vía más sólida para quien busca autorización de trabajo remoto a medio plazo. La residencia fiscal en Francia se fija a partir de 183 días de estancia en el país durante el año.",
      sources: [
        { label: "France Clarifies Remote Working Rules for Visitor Visa Holders — IAS", url: "https://iasservices.org.uk/france-clarifies-remote-working-rules-for-visitor-visa-holders/" },
        { label: "Visa de larga estancia (más de 3 meses) — Service-Public.fr", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16162?lang=en" },
      ],
    },
    sanidad: {
      content: "Tras tres meses de residencia estable es posible acceder a la Protection Universelle Maladie (PUMa) del sistema público francés; hasta entonces, o para el propio visado de visitante, se exige un seguro médico privado internacional con cobertura mínima de 30.000 €. Los Hôpitaux Universitaires de Strasbourg (HUS) son el principal centro público de referencia de la región de Alsacia.\n\nLa cercanía con Alemania y Suiza hace que también sea habitual comparar precios de sanidad privada transfronteriza, aunque para un residente en Francia lo más práctico es contratar la cobertura localmente.",
      sources: [
        { label: "France Clarifies Remote Working Rules for Visitor Visa Holders — IAS", url: "https://iasservices.org.uk/france-clarifies-remote-working-rules-for-visitor-visa-holders/" },
        { label: "Hôpitaux Universitaires de Strasbourg", url: "https://www.chru-strasbourg.fr" },
      ],
    },
    barrios: {
      content: "Petite France, el barrio histórico de canales y casas de entramado de madera, es el más turístico y también el más caro; Krutenau, junto al centro, tiene ambiente estudiantil y buena vida nocturna a precios más moderados. Neudorf, al sur, es una zona residencial tranquila y más económica, bien conectada en tranvía.\n\nEntre los coworkings, La Place Digitale, en pleno centro, ofrece puestos fijos desde 210-300 €/mes; Anticafé, cerca de Petite France, cobra por tiempo de uso desde 6 €/hora hasta 260 €/mes; Les Compotes, en Neudorf, es la opción más económica del grupo, entre 90 € y 300 € según los días de uso.",
      sources: [
        { label: "Top 5 coworking spaces in Strasbourg — Colivys", url: "https://colivys.com/en/blog/coworking-space-strasbourg/" },
      ],
    },
  },
  "nueva-york": {
    visaFiscal: {
      content: "Estados Unidos no ofrece ningún visado de nómada digital. Entrar como turista, ya sea con ESTA (Programa de Exención de Visado) o con un visado B-1/B-2, no permite legalmente trabajar en remoto de forma continuada para un empleador o clientes extranjeros: la normativa migratoria estadounidense considera esa actividad como trabajo aunque se cobre desde fuera del país, y hacerlo puede acarrear la cancelación del visado, la denegación de entrada en un futuro viaje o problemas de inadmisibilidad.\n\nPara quien quiere quedarse más tiempo trabajando de forma legal, las únicas vías reales pasan por visados de trabajo tradicionales: O-1 (para personas con habilidades extraordinarias), L-1 (traslados dentro de la misma empresa), E-2 (inversores) o H-1B (con patrocinio de un empleador estadounidense). No existe ninguna categoría pensada específicamente para nómadas digitales.",
      sources: [
        { label: "Can Digital Nomads Legally Work in the U.S.? — RJ Immigration Law", url: "https://rjimmigrationlaw.com/resources/can-digital-nomads-legally-work-in-the-u-s/" },
        { label: "Visa Waiver Program — U.S. Department of State", url: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visa-waiver-program.html" },
      ],
    },
    sanidad: {
      content: "Estados Unidos no tiene un sistema de salud público universal, y la atención médica privada está entre las más caras del mundo: una visita a urgencias sin seguro puede costar varios miles de dólares. Para cualquier estancia, ya sea de turismo o de trabajo, es imprescindible contratar un seguro médico internacional con cobertura amplia (Cigna Global, IMG o similares) antes de viajar, ya que ni ESTA ni ningún visado de estancia corta la incluyen de forma obligatoria ni automática.\n\nLos hospitales privados de Nueva York (Mount Sinai, NYU Langone, NewYork-Presbyterian, entre otros) son de primer nivel mundial, pero los precios sin seguro son proporcionalmente altos incluso para consultas rutinarias.",
      sources: [
        { label: "Can Digital Nomads Legally Work in the U.S.? — RJ Immigration Law", url: "https://rjimmigrationlaw.com/resources/can-digital-nomads-legally-work-in-the-u-s/" },
        { label: "Health Costs — KFF (Kaiser Family Foundation)", url: "https://www.kff.org/health-costs/" },
      ],
    },
    barrios: {
      content: "Williamsburg, en Brooklyn, es el barrio más asociado a la comunidad creativa y de nómadas digitales, con buena oferta de cafeterías y coworkings a precios algo más bajos que Manhattan. El Distrito Financiero (FiDi), en el sur de Manhattan, concentra la mayor densidad de coworkings orientados a negocios; Midtown, cerca de Bryant Park, es la opción más céntrica y mejor conectada en metro.\n\nEntre los coworkings, Cubico (433 Broadway, Tribeca/SoHo) ofrece un espacio de estilo industrial con terraza; The Yard, en Williamsburg, combina diseño y precios más accesibles que Manhattan; Jay Suites, en la Quinta Avenida cerca de Bryant Park, es una opción céntrica orientada a profesionales y pequeñas empresas.",
      sources: [
        { label: "The Best 13 Coworking Spaces in New York City — Hubble HQ", url: "https://hubblehq.com/blog/best-coworking-spaces-nyc" },
      ],
    },
  },
  "amsterdam": {
    visaFiscal: {
      content: "Países Bajos no ofrece ningún visado de nómada digital: el gobierno ha optado deliberadamente por no crear esa figura, citando la escasez de vivienda y el encarecimiento del coste de vida. Los ciudadanos de la UE/EEE pueden vivir y trabajar sin visado, solo empadronándose en el municipio; el resto de nacionalidades depende de vías indirectas, como el tratado DAFT para estadounidenses (inversión de 4.500 € en un negocio propio) o el permiso de autónomo, que exige demostrar valor económico para el país neerlandés.\n\nCualquier persona empadronada más de 4 meses se convierte en residente fiscal neerlandés y debe declarar su renta mundial, sin excepciones por cobrar de un empleador extranjero: es un error común pensar que basta con estar por debajo del umbral fiscal del país de origen.",
      sources: [
        { label: "Remote work in the Netherlands: no nomad visa, tax reality — NL Compass", url: "https://www.nlcompass.com/guides/remote-work-digital-nomads-netherlands" },
        { label: "Immigration and Naturalisation Service (IND)", url: "https://ind.nl/en" },
      ],
    },
    sanidad: {
      content: "Los Países Bajos exigen un seguro médico obligatorio (basisverzekering) a cualquier persona que resida y trabaje en el país, incluidos autónomos y trabajadores con DAFT; los visitantes de la UE pueden usar la Tarjeta Sanitaria Europea (TSE) solo para estancias temporales. El sistema está gestionado por aseguradoras privadas bajo regulación pública, con copagos moderados y buena calidad asistencial.\n\nÁmsterdam cuenta con centros de referencia como el Amsterdam UMC, con dos sedes (AMC y VUmc) que ofrecen atención de urgencias las 24 horas.",
      sources: [
        { label: "Expat health insurance in the Netherlands — Zorgwijzer", url: "https://www.zorgwijzer.nl/faq/expats" },
        { label: "The Netherlands Healthcare System & Insurance Options for Expats", url: "https://expatfinancial.com/healthcare-information-by-region/european-healthcare-system/the-netherlands-healthcare-system/" },
      ],
    },
    barrios: {
      content: "De Pijp y Jordaan son los barrios más buscados por nómadas digitales por su ambiente de cafeterías y proximidad al centro, aunque también los más caros; Amsterdam Oost, algo más económico, ofrece buena conexión en bici y tranvía. La red de bicicletas y transporte público hace que la ubicación exacta importe menos que en otras ciudades.\n\nEntre los coworkings, Fosbury & Sons (Prinsengracht), en pleno canal belt, ocupa un antiguo hospital del siglo XIX reconvertido; Spaces Vijzelstraat, en una antigua sede bancaria cerca del Rijksmuseum, tiene puestos desde 295 €/mes; StartDock, repartido en varias casas de canal históricas, ofrece un puesto flexible desde 80 €/mes.",
      sources: [
        { label: "How to find the best coworking in Amsterdam? — Holafly", url: "https://esim.holafly.com/digital-nomad/coworking-amsterdam/" },
      ],
    },
  },
  "atenas": {
    visaFiscal: {
      content: "Grecia ofrece un visado de nómada digital real, con un ingreso mínimo de 3.500 €/mes (un 20% más con pareja y un 15% adicional por cada hijo a cargo). El proceso tiene dos fases: primero un visado tipo D válido 12 meses, tramitado en un consulado griego antes de viajar, y después un permiso de residencia de 2 años renovable una vez ya en el país.\n\nGrecia también ofrece un régimen fiscal atractivo para quien se convierte en residente fiscal: una exención del 50% sobre el IRPF durante hasta 7 años, siempre que no se haya sido residente fiscal griego en 5 de los últimos 6 años. Es un beneficio complejo que conviene revisar con un asesor fiscal transfronterizo antes de dar por hecho que aplica.",
      sources: [
        { label: "Greece Digital Nomad Visa 2026 — Remote Work Europe", url: "https://remoteworkeurope.eu/insights/greece-digital-nomad-visa/" },
        { label: "Greece Digital Nomad Visa: Income Requirements and How to Apply — Global Citizen Solutions", url: "https://www.globalcitizensolutions.com/greece-digital-nomad-visa/" },
      ],
    },
    sanidad: {
      content: "Grecia tiene un sistema público de salud (ΕΣΥ) al que los residentes fiscales pueden acceder cotizando a la seguridad social griega (ΕΦΚΑ); los visitantes de la UE pueden usar la Tarjeta Sanitaria Europea para atención de urgencia. En la práctica, la mayoría de nómadas digitales combina el sistema público con un seguro privado internacional, ya que la sanidad pública griega tiene largas listas de espera fuera de las urgencias.\n\nAtenas cuenta con hospitales públicos de referencia como el Evangelismos, el mayor hospital general del país, además de una amplia red de clínicas privadas de calidad.",
      sources: [
        { label: "Guide to Healthcare in Greece — Allianz Care", url: "https://www.allianzcare.com/en/support/health-and-wellness/national-healthcare-systems/healthcare-in-greece.html" },
        { label: "Accessing health services in Greece for EU citizens", url: "https://eu-healthcare.eopyy.gov.gr/en/healthcare-in-greece/accessing-health-services-in-greece-for-eu-citizens/" },
      ],
    },
    barrios: {
      content: "Koukaki, junto a la Acrópolis, es el barrio favorito de la comunidad de nómadas digitales por su ambiente tranquilo y buena oferta de cafeterías; Exarchia, más bohemio y económico, concentra gran parte de la vida cultural alternativa. Kolonaki, en cambio, es la zona más cara y elegante, cerca del centro de negocios.\n\nEntre los coworkings, WHEN Hub, en el centro (Sokratous 29), tiene muy buena valoración de sus usuarios; Ubuntu, en la zona de Petralona, es otra opción muy bien valorada; Regus Athens City Centre ofrece oficinas flexibles en un rascacielos cerca del distrito financiero de Mesogeion.",
      sources: [
        { label: "Best Coworking Spaces in Athens — Nomax", url: "https://nomax.app/athens/coworking/" },
      ],
    },
  },
  "copenhague": {
    visaFiscal: {
      content: "Dinamarca no ofrece ningún visado de nómada digital. Los ciudadanos de fuera de la UE dependen de alternativas indirectas: el visado de turista Schengen permite estar hasta 90 días en un periodo de 180, pero trabajar en remoto durante esa estancia es ilegal aunque el cliente sea extranjero; el visado de vacaciones-trabajo (Working Holiday), disponible para nacionalidades como Australia, Canadá o Japón entre 18 y 36 años (18-31 en algunos casos), sí permite trabajar hasta un año; y el visado de startup, pensado para quien monta una empresa propia con potencial de crecimiento, tiene una duración de 2 años renovable.\n\nQuien trabaja localmente en Dinamarca paga entre un 12,09% y un 15% de impuesto estatal más un impuesto municipal de alrededor del 25%; el país tiene acuerdos de doble imposición con más de 70 países que pueden evitar pagar dos veces por la misma renta.",
      sources: [
        { label: "Denmark Digital Nomad Visa — Citizen Remote", url: "https://citizenremote.com/visas/denmark-digital-nomad-visa/" },
      ],
    },
    sanidad: {
      content: "Dinamarca tiene un sistema de salud público universal financiado con impuestos, al que se accede con la llamada 'tarjeta amarilla' (sundhedskort) tras registrarse como residente; los visitantes de la UE de corta estancia pueden usar la Tarjeta Sanitaria Europea. Quien no llega a residir oficialmente (por ejemplo, con un visado de turista) no tiene acceso al sistema público y necesita un seguro privado internacional.\n\nCopenhague cuenta con el Rigshospitalet, el mayor hospital universitario del país y uno de los centros de referencia médica del norte de Europa.",
      sources: [
        { label: "Healthcare and health insurance for expats in Denmark — Expat Arrivals", url: "https://www.expatarrivals.com/europe/denmark/healthcare-denmark" },
      ],
    },
    barrios: {
      content: "Vesterbro y Nørrebro son los barrios más populares entre nómadas digitales por su ambiente joven, buena oferta de cafeterías y precios algo más moderados que el centro; Østerbro, más residencial y familiar, es una alternativa tranquila bien conectada en bici.\n\nEntre los coworkings, Talent Garden, en el antiguo barrio naval de Holmen, ha sido premiado como uno de los mejores espacios de coworking de Europa; Matrikel 1, en pleno centro histórico junto a Højbro Plads, ofrece un ambiente moderno; Symbion, en Copenhague Ø, es un hub más establecido con salas de reuniones y oficinas compartidas.",
      sources: [
        { label: "Top 10 Best Coworking Spaces in Copenhagen — The Hub", url: "https://insights.thehub.io/insight/top-10-best-coworking-spaces-in-copenhagen/" },
      ],
    },
  },
  "cracovia": {
    visaFiscal: {
      content: "Polonia no ofrece ningún visado de nómada digital. La opción más cercana es el visado nacional tipo D para autónomos (Freelance Type D), que se concede inicialmente por dos años pero exige registrarse como autónomo en Polonia y pagar impuestos allí, con un umbral de ingresos mínimo muy bajo (unos 190 $/mes). El visado de turista Schengen, de hasta 90 días, no permite establecer residencia ni trabajar en remoto de forma continuada, aunque en la práctica es la vía que usa la mayoría de nómadas de corta estancia.\n\nQuien supera los 183 días de estancia o se registra como autónomo pasa a tributar en Polonia, con un tipo del 20% sobre los ingresos para no residentes.",
      sources: [
        { label: "Poland Digital Nomad Visa — Citizen Remote", url: "https://citizenremote.com/visas/poland-digital-nomad-visa/" },
      ],
    },
    sanidad: {
      content: "Polonia tiene un sistema público de salud (NFZ) financiado mediante cotizaciones sociales, al que solo se accede si se cotiza en el país (por ejemplo, registrado como autónomo); los visitantes de la UE pueden usar la Tarjeta Sanitaria Europea para urgencias. La mayoría de nómadas digitales opta por un seguro privado internacional, ya que da acceso a clínicas privadas con tiempos de espera mucho más cortos que el sistema público.\n\nCracovia cuenta con varios hospitales universitarios públicos, además de una red creciente de clínicas privadas orientadas a pacientes internacionales en el centro de la ciudad.",
      sources: [
        { label: "Healthcare and health insurance for expats in Krakow — Expat Arrivals", url: "https://www.expatarrivals.com/europe/poland/krakow/healthcare-krakow" },
      ],
    },
    barrios: {
      content: "Kazimierz, el antiguo barrio judío, es la zona favorita de la comunidad de nómadas digitales por su ambiente bohemio, buena oferta de cafeterías y coste de vida bajo; el Casco Antiguo (Stare Miasto) concentra la mayor densidad de coworkings, aunque a precios algo más altos.\n\nEntre los coworkings, Yolk Workspace, en el Casco Antiguo, ofrece internet de fibra de alta velocidad desde 175 $/mes; Kalafiornia, también en el centro histórico, tiene una terraza panorámica y cuesta desde 148 $/mes; iTechcloud, en Kazimierz, es la opción más económica del grupo, desde 118 $/mes.",
      sources: [
        { label: "Best Coworking Spaces in Kraków for Digital Nomads — Geronimo", url: "https://geronimo-ai.com/best-coworking/krakow" },
      ],
    },
  },
  "dublin": {
    visaFiscal: {
      content: "Irlanda no tiene ningún visado de nómada digital ni un permiso específico para trabajadores remotos. La opción más cercana para no comunitarios es el Stamp 0, pensado para personas con medios económicos propios (en torno a 50.000 €/año de ingresos extranjeros y 100.000 € en ahorros, más seguro médico privado), pero que en general prohíbe trabajar para empleadores irlandeses y no autoriza de forma explícita el trabajo remoto, lo que genera cierta ambigüedad legal. El visado de turista de 90 días, disponible para muchas nacionalidades sin necesidad de visado previo, prohíbe cualquier tipo de trabajo, incluido el remoto.\n\nLos ciudadanos de la UE/EEE tienen libertad de movimiento y trabajo, y los británicos se benefician del Área de Viaje Común (Common Travel Area), que les permite vivir y trabajar sin visado.",
      sources: [
        { label: "Why Ireland Has No Digital Nomad Visa — Remote Work Europe", url: "https://remoteworkeurope.eu/insights/ireland-no-digital-nomad-visa/" },
      ],
    },
    sanidad: {
      content: "Irlanda tiene un sistema público de salud (HSE) al que se accede con la tarjeta médica (medical card) para residentes con bajos ingresos o pagando tasas reducidas el resto; en la práctica, la mayoría de residentes complementa el sistema público con un seguro privado (VHI, Laya Healthcare, Irish Life Health) para evitar las largas listas de espera en consultas no urgentes. Los visitantes de la UE pueden usar la Tarjeta Sanitaria Europea para urgencias.\n\nDublín cuenta con hospitales públicos de referencia como el St. James's Hospital, uno de los mayores del país, junto con una amplia oferta de clínicas privadas.",
      sources: [
        { label: "Healthcare and health insurance for expats in Dublin — Expat Arrivals", url: "https://www.expatarrivals.com/europe/ireland/dublin/healthcare-dublin" },
      ],
    },
    barrios: {
      content: "El área de Silicon Docks (Dublín 2, junto al Grand Canal Dock) es el centro tecnológico de la ciudad, con sedes de Google y Meta y buena oferta de coworkings; Portobello y Ranelagh, más residenciales, ofrecen un ambiente tranquilo con buenas cafeterías a precios algo más moderados.\n\nEntre los coworkings, Dogpatch Labs, en Custom House Quay, es el mayor hub de startups de Irlanda con más de 3.000 m²; Huckletree D2, en Pearse Street, ofrece bonos de día desde 35 € y membresías desde 260 €/mes; CoCreate, con sedes en O'Connell Street y Camden Street, tiene puestos privados desde 299 €/mes.",
      sources: [
        { label: "How to find the best coworking in Dublin? — Holafly", url: "https://esim.holafly.com/digital-nomad/coworking-dublin/" },
      ],
    },
  },
  "ljubljana": {
    visaFiscal: {
      content: "Eslovenia ofrece un visado de nómada digital real, con un ingreso mínimo equivalente al doble del salario medio neto esloveno (unos 3.098 €/mes a mediados de 2026, cifra que se recalcula periódicamente). El visado tiene una validez de un año, no renovable, aunque se puede volver a solicitar uno nuevo seis meses después de que caduque el anterior. La solicitud se puede tramitar en un consulado esloveno en el extranjero o, si ya se está en el país de forma legal, en una oficina administrativa local, con un proceso de 30-60 días y una tasa de unos 167,50 €.\n\nTodos los ingresos deben proceder de fuera de Eslovenia, y se exige seguro médico internacional, alojamiento acreditado y certificado de antecedentes penales.",
      sources: [
        { label: "Slovenia digital nomad visa 2026 — Remote Work Europe", url: "https://remoteworkeurope.eu/insights/slovenia-digital-nomad-visa/" },
      ],
    },
    sanidad: {
      content: "Eslovenia tiene un sistema de salud público gestionado por el Instituto de Seguros de Salud (ZZZS), al que solo acceden quienes cotizan en el país; los nómadas digitales con el visado esloveno deben contratar un seguro médico privado internacional, ya que el visado no da acceso automático al sistema público. Los visitantes de la UE pueden usar la Tarjeta Sanitaria Europea para atención de urgencia.\n\nLiubliana cuenta con el Centro Clínico Universitario (UKC Ljubljana), el mayor hospital del país y centro de referencia para toda Eslovenia.",
      sources: [
        { label: "Accessing Healthcare in Slovenia — ZZZS", url: "https://www.zzzs.si/en/accessing-healthcare-in-slovenia/" },
      ],
    },
    barrios: {
      content: "El centro histórico, junto al río Ljubljanica, es compacto, peatonal y muy seguro, ideal para nómadas digitales aunque algo más caro; Trnovo y Tabor, algo más alejados del centro, ofrecen un ambiente más local y tranquilo a precios más moderados.\n\nEntre los coworkings, Impact Hub Ljubljana, en Eslovenska cesta, en pleno centro, es el más conocido y con más comunidad; ABC Hub, en Letališka cesta, tiene buena zona de descanso y cocina compartida; Aurora Coworking, en Dunajska cesta, ofrece un ambiente más corporativo cerca del centro de negocios.",
      sources: [
        { label: "Best Coworking Spaces in Ljubljana — Freaking Nomads", url: "https://freakingnomads.com/workspaces/coworking/ljubljana" },
      ],
    },
  },
  "oslo": {
    visaFiscal: {
      content: "Noruega no ofrece un visado de nómada digital como tal, pero sí un Visado de Contratista Independiente (Independent Contractor Visa) pensado para autónomos y freelancers que trabajan para clientes en el extranjero, siempre que tengan al menos un cliente noruego. Exige un ingreso anual mínimo de unos 36.000 € y seguro médico que cubra toda la estancia; tiene una validez de hasta 2 años renovable. Los ciudadanos de la UE/EEE no lo necesitan, ya que pueden vivir y trabajar libremente en Noruega.\n\nNoruega tiene uno de los niveles de vida y de fiscalidad más altos de Europa, con tipos de IRPF que pueden superar el 45% para rentas medias-altas una vez se es residente fiscal.",
      sources: [
        { label: "Norway Digital Nomad Visa: How to Apply and Costs — Freaking Nomads", url: "https://freakingnomads.com/norway-digital-nomad-visa/" },
      ],
    },
    sanidad: {
      content: "Noruega tiene un sistema de salud público universal (financiado por el Folketrygden, la seguridad social noruega), al que se accede tras registrarse como residente y obtener un número de identidad nacional; hasta entonces, es imprescindible un seguro privado internacional. Los visitantes de la UE pueden usar la Tarjeta Sanitaria Europea para urgencias de corta estancia.\n\nOslo cuenta con el Oslo University Hospital (que incluye el Rikshospitalet), el mayor centro hospitalario del país y uno de los hospitales universitarios de referencia del norte de Europa.",
      sources: [
        { label: "Healthcare and health insurance for expats in Norway — Expat Arrivals", url: "https://www.expatarrivals.com/europe/norway/healthcare-norway" },
      ],
    },
    barrios: {
      content: "Grünerløkka es el barrio favorito de la comunidad creativa y de nómadas digitales, con ambiente bohemio y buena oferta de cafeterías; Frogner, más elegante y caro, es una zona residencial tranquila cerca del centro. Oslo es una de las ciudades más caras de Europa en cualquier barrio.\n\nEntre los coworkings, Mesh Youngstorget, en el centro, es la mayor comunidad de startups de Noruega en un edificio histórico restaurado; Rebel, en St. Olavs plass, combina coworking con estudios de pódcast y microcervecería propia; Factory Tøyen, en el barrio de Tøyen, ocupa una antigua fábrica textil de 6.000 m².",
      sources: [
        { label: "Oslo Digital Nomad Guide: Cost of Living, WiFi & Visa — The Nomad HQ", url: "https://thenomadhq.com/cities/oslo" },
      ],
    },
  },
  "riga": {
    visaFiscal: {
      content: "Letonia ofrece un visado de nómada digital real, con un ingreso mínimo de unos 3.400 €/mes (aproximadamente 2,5 veces el salario medio bruto letón), acreditado con los últimos seis meses de ingresos. Tiene una validez inicial de un año, ampliable a un segundo año (máximo 2 años seguidos), tras los cuales hay que estar fuera del país al menos 6 meses antes de volver a solicitarlo. El trámite se hace a través del portal PMLP o en un consulado letón, con una tasa de 60 € y un plazo de resolución de 10-15 días.\n\nLetonia forma parte de la UE y del espacio Schengen, lo que facilita bastante la movilidad dentro de Europa una vez concedido el visado.",
      sources: [
        { label: "Latvia Digital Nomad Visa — Citizen Remote", url: "https://citizenremote.com/visas/latvia-digital-nomad-visa/" },
      ],
    },
    sanidad: {
      content: "Letonia tiene un sistema de salud público financiado por impuestos, pero con una cobertura limitada y listas de espera largas fuera de las urgencias; la mayoría de expatriados y nómadas digitales contrata un seguro privado internacional, que además es obligatorio para obtener el visado de nómada digital. Los visitantes de la UE pueden usar la Tarjeta Sanitaria Europea para atención de urgencia.\n\nRiga cuenta con el Hospital Clínico Universitario Pauls Stradiņš, el mayor centro hospitalario multidisciplinar del país.",
      sources: [
        { label: "Latvia Healthcare System & Insurance Options for Expats", url: "https://expatfinancial.com/healthcare-information-by-region/european-healthcare-system/latvia-healthcare-system/" },
      ],
    },
    barrios: {
      content: "El Casco Antiguo (Vecrīga) es la zona más turística y con más ambiente, aunque también la más cara; Āgenskalns, al otro lado del río, es un barrio residencial más tranquilo y económico con buena oferta de coworking; el centro Art Nouveau, famoso por su arquitectura, combina oficinas y vida cultural.\n\nEntre los coworkings, Magnēts Coworking, en Āgenskalns, ofrece acceso 24/7 desde 171 $/mes; Double9 Coworking, en una antigua fábrica de cerveza del siglo XIX en el distrito Art Nouveau, cuesta desde 181 $/mes; en el Casco Antiguo, justo en la Plaza de la Catedral, hay opciones de bono de día desde 19 $.",
      sources: [
        { label: "Best Coworking Spaces in Riga — Geronimo", url: "https://geronimo-ai.com/best-coworking/riga" },
      ],
    },
  },
  "roma": {
    visaFiscal: {
      content: "Italia ofrece uno de los visados de nómada digital con el umbral de ingresos más bajo de Europa: 28.000 €/año (unos 2.333 €/mes) procedentes de fuera del país, con un incremento de unos 9.900 €/año por cónyuge y 4.950 €/año por hijo a cargo. El permiso de residencia se concede por un año y es renovable anualmente hasta un máximo de cinco.\n\nItalia también ofrece el régimen fiscal de 'impatriados', que exime del IRPF el 50% de los ingresos cualificados durante 5 años (60% con un hijo menor a cargo), siempre que se resida fiscalmente en Italia al menos 183 días al año y se cumpla un compromiso de permanencia fiscal de al menos 4 años, con un tope de renta de 600.000 €/año.",
      sources: [
        { label: "Italy digital nomad visa 2026: the complete guide — Remote Work Europe", url: "https://remoteworkeurope.eu/insights/italy-digital-nomad-visa-complete-guide/" },
      ],
    },
    sanidad: {
      content: "Italia tiene un sistema de salud público universal (Servizio Sanitario Nazionale, SSN), al que los residentes fiscales pueden inscribirse y obtener la tessera sanitaria, la tarjeta sanitaria que da acceso a médico de cabecera y atención hospitalaria. Los visitantes de la UE pueden usar la Tarjeta Sanitaria Europea para urgencias; quien todavía no es residente fiscal necesita un seguro privado internacional.\n\nRoma cuenta con el Policlinico Umberto I, uno de los mayores hospitales públicos universitarios de Europa.",
      sources: [
        { label: "How the Italian public healthcare system (SSN) works — Feather", url: "https://feather-insurance.com/en-it/blog/public-health-insurance-ssn-guide" },
      ],
    },
    barrios: {
      content: "Trastevere es el barrio favorito de la comunidad de nómadas digitales por su ambiente bohemio y sus calles peatonales, aunque también uno de los más turísticos y caros; Ostiense, más industrial y en plena transformación, concentra buena parte de la oferta de coworking a precios más moderados; Monti, junto al Coliseo, combina encanto histórico con buena vida de cafeterías.\n\nEntre los coworkings, Impact Hub Roma, en Ostiense, ofrece planes desde 120 €/mes; Talent Garden Ostiense, cerca de la estación de Piramide, tiene puestos flexibles desde 100 €/mes; Coaster, junto a San Giovanni in Laterano, cobra bonos de día desde 20 € y membresías desde 180 €/mes.",
      sources: [
        { label: "How to find the best coworking in Rome? — Holafly", url: "https://esim.holafly.com/digital-nomad/coworking-rome/" },
      ],
    },
  },
  "viena": {
    visaFiscal: {
      content: "Austria no ofrece ningún visado de nómada digital. El marco principal para trabajadores cualificados de fuera de la UE es la Tarjeta Roja-Blanca-Roja (Rot-Weiß-Rot-Karte), un permiso combinado de residencia y trabajo de 24 meses (ampliable a la versión Plus de 3 años), pero pensado para empleos con patrocinio de empresa o inversión de capital, no para autónomos con clientes extranjeros: la categoría de 'trabajador clave autónomo' exige 100.000 € de inversión o demostrar un beneficio macroeconómico para el país, algo poco realista para un diseñador o consultor freelance.\n\nLos ciudadanos de la UE/EEE pueden residir y trabajar libremente solo con el registro administrativo (Meldezettel), lo que hace de Austria una opción mucho más sencilla para comunitarios que para el resto de nacionalidades.",
      sources: [
        { label: "Working remotely from Austria in 2026 — Remote Work Europe", url: "https://remoteworkeurope.eu/insights/austria-red-white-red-card-remote-work/" },
      ],
    },
    sanidad: {
      content: "Austria tiene un sistema de salud público de alta calidad, gestionado por la Caja de Seguridad Social Austríaca (ÖGK), al que se accede cotizando como empleado o autónomo registrado en el país; quien no cotiza en Austria necesita un seguro privado internacional. Los visitantes de la UE pueden usar la Tarjeta Sanitaria Europea para atención de urgencia.\n\nViena cuenta con el Hospital General de Viena (AKH Wien), uno de los mayores hospitales universitarios de Europa y centro de referencia médica del país.",
      sources: [
        { label: "Healthcare and health insurance for expats in Austria — Expat Arrivals", url: "https://www.expatarrivals.com/europe/austria/healthcare-austria" },
      ],
    },
    barrios: {
      content: "Neubau, con su mezcla de tiendas de diseño y cafeterías, es uno de los barrios favoritos de la comunidad creativa; Mariahilf, contiguo, combina buena vida de calle con coworkings orientados a bienestar; Rudolfsheim-Fünfhaus, más al oeste, es una opción más económica y en plena renovación urbana.\n\nEntre los coworkings, The Collaboratory, en Neubau, ofrece puestos desde 125 €/mes; Brains and Bodies, en Mariahilf, cuesta desde 399 €/mes e incluye zonas de bienestar; STOCKWERK, en Rudolfsheim-Fünfhaus, es la opción más económica, desde 80 €/mes + IVA, orientada a startups tecnológicas.",
      sources: [
        { label: "Coworking Spaces Vienna: 30 Best Places to Work — Faraway Lucy", url: "https://www.farawaylucy.com/coworking-spaces-vienna/" },
      ],
    },
  },
  "las-palmas": {
    visaFiscal: {
      content: "Los ciudadanos de la Unión Europea y del Espacio Económico Europeo no necesitan visado para instalarse en Las Palmas de Gran Canaria: basta con empadronarse y solicitar el certificado de registro de ciudadano de la UE. Para nómadas digitales de fuera de la UE, España ofrece el visado para teletrabajadores de carácter internacional, con un requisito de ingresos mensuales en torno a 2.849 €/mes en 2026 y una validez inicial de hasta tres años, prorrogable por periodos de dos.\n\nQuienes obtienen este visado pueden acogerse al régimen especial para trabajadores desplazados o Ley Beckham, que fija un tipo fijo del 24% en el IRPF sobre los primeros 600.000 € de renta durante seis ejercicios fiscales. Canarias, además, aplica el IGIC en lugar del IVA general, con tipos generalmente más bajos, lo que abarata algo el consumo diario respecto a la Península.",
      sources: [
        { label: "Visado para nómadas digitales — Legalitas", url: "https://www.legalitas.com/actualidad/visado-nomada-digital" },
        { label: "La ley Beckham en España 2026 — Raisin", url: "https://www.raisin.com/es-es/tributacion/ley-beckham/" },
      ],
    },
    sanidad: {
      content: "Los residentes legales en Las Palmas tienen acceso al Sistema Nacional de Salud a través del Servicio Canario de Salud, con el Complejo Hospitalario Universitario Insular-Materno Infantil como principal centro de referencia público de la isla. Para tramitar el visado de teletrabajador es obligatorio un seguro médico privado sin copagos ni carencias, contratado con una aseguradora autorizada por la Dirección General de Seguros.\n\nEl coste de una póliza de este tipo para un adulto joven sin patologías previas ronda entre 40 € y 80 € al mes, en línea con la media española, con Sanitas, Adeslas y Asisa entre las aseguradoras con más presencia en la isla.",
      sources: [
        { label: "Servicio Canario de Salud", url: "https://www3.gobiernodecanarias.org/sanidad/scs/" },
        { label: "Seguro médico para el visado de nómada digital — Cohen y Aguirre", url: "https://cohenyaguirre.es/seguro-medico-para-visa-nomada-digital" },
      ],
    },
    barrios: {
      content: "Guanarteme y el entorno de Las Canteras, la playa urbana más conocida de la ciudad, concentran la mayor parte de la comunidad de nómadas digitales, con buen ambiente de cafeterías y alquileres algo por encima de la media local. Vegueta y Triana, el casco histórico, ofrecen encanto colonial y buena vida cultural a precios más moderados.\n\nEntre los coworkings, White Forest, a 200 metros de Las Canteras en Guanarteme, es uno de los más conocidos; Sky Coworking, también cerca de la playa, destaca por su terraza de trabajo al aire libre; Fico Coworking, en el barrio de La Isleta, apuesta por la sostenibilidad (energía solar, mobiliario reciclado). Los bonos de día rondan 12-20 € y las membresías mensuales entre 100 € y 250 €.",
      sources: [
        { label: "Best Coworking Spaces in Las Palmas — repeople", url: "https://www.repeople.co/blog/best-coworking-spaces-las-palmas-gran-canaria/" },
      ],
    },
  },
  "malaga": {
    visaFiscal: {
      content: "Los ciudadanos de la Unión Europea y del Espacio Económico Europeo no necesitan visado para instalarse en Málaga: basta con empadronarse y solicitar el certificado de registro de ciudadano de la UE. Para nómadas digitales de fuera de la UE, España ofrece el visado para teletrabajadores de carácter internacional, con un requisito de ingresos mensuales en torno a 2.849 €/mes en 2026 y una validez inicial de hasta tres años, prorrogable por periodos de dos.\n\nQuienes obtienen este visado pueden acogerse al régimen especial para trabajadores desplazados o Ley Beckham, que fija un tipo fijo del 24% en el IRPF sobre los primeros 600.000 € de renta durante seis ejercicios fiscales. Para el resto de contribuyentes rige la regla general de residencia fiscal: más de 183 días al año en España.",
      sources: [
        { label: "Visado para nómadas digitales — Legalitas", url: "https://www.legalitas.com/actualidad/visado-nomada-digital" },
        { label: "La ley Beckham en España 2026 — Raisin", url: "https://www.raisin.com/es-es/tributacion/ley-beckham/" },
      ],
    },
    sanidad: {
      content: "En Málaga, la sanidad pública depende del Servicio Andaluz de Salud (SAS), el mismo sistema regional que gestiona Sevilla y el resto de Andalucía. Para acceder a él como residente hay que estar empadronado y solicitar la Tarjeta Sanitaria de Andalucía a través del portal del SAS o de la app 'Salud Andalucía', que asigna un centro de salud y médico de familia de referencia según el domicilio.\n\nComo complemento, hay una amplia oferta de seguros de salud privados en Málaga (Sanitas, Adeslas, DKV, Asisa), muy utilizados por la creciente comunidad de expatriados y nómadas digitales para acortar los tiempos de espera.",
      sources: [
        { label: "SAS – Tarjeta Sanitaria de Andalucía", url: "https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/ciudadania/tarjeta-sanitaria-de-andalucia" },
      ],
    },
    barrios: {
      content: "El Soho, el barrio de las artes junto al puerto, es la zona favorita de la comunidad creativa y de nómadas digitales, con gran densidad de murales, galerías y cafeterías; el Centro Histórico, junto a la Catedral, combina encanto y buena vida social, aunque con alquileres al alza por la presión turística y de nómadas. Pedregalejo y El Palo, junto al mar, ofrecen un ambiente más local y tranquilo, con chiringuitos y menor coste.\n\nEntre los coworkings, Nido, considerado uno de los mejores de la ciudad, ofrece un ambiente cuidado en pleno centro; la oferta de Málaga incluye más de 60 espacios de coworking en total, con bonos de día desde 6 $ en los espacios más básicos.",
      sources: [
        { label: "Top Coworking Spaces in Malaga — Nomads.com", url: "https://nomads.com/coworking/malaga" },
      ],
    },
  },
  "phuket": {
    visaFiscal: {
      content: "Tailandia ofrece la Destination Thailand Visa (DTV), pensada específicamente para nómadas digitales y freelancers: exige demostrar unos 500.000 baht (unos 14.000 $) en la cuenta bancaria, con al menos tres meses de antigüedad ('maduración') antes de solicitarla, ya que un ingreso reciente en la cuenta es motivo frecuente de denegación. Es un visado de entradas múltiples válido 5 años, con estancias de hasta 180 días por entrada, ampliables una vez a 360 días consecutivos en una oficina de inmigración tailandesa.\n\nNo permite trabajar para empresas tailandesas, solo para clientes o empleadores en el extranjero. Quienes cobran únicamente desde fuera de Tailandia y no superan los 180 días de estancia por año no suelen generar obligación fiscal tailandesa, aunque conviene revisar cada caso con un asesor si se supera ese umbral.",
      sources: [
        { label: "Destination Thailand Visa (DTV): 2026 Requirements Guide", url: "https://www.thailandstarterkit.com/visas/destination-thailand-visa-dtv/" },
      ],
    },
    sanidad: {
      content: "Tailandia no tiene un sistema de salud público accesible para extranjeros no residentes fiscales: la práctica habitual es contratar un seguro médico internacional privado antes de viajar, ya que el propio visado DTV puede exigir acreditar cobertura sanitaria según el consulado. La sanidad privada tailandesa tiene fama de buena calidad y precios más bajos que en Europa o Estados Unidos para la mayoría de tratamientos.\n\nPhuket cuenta con hospitales privados de referencia internacional como el Bangkok Hospital Phuket y el Phuket International Hospital, ambos acostumbrados a atender a pacientes extranjeros y con servicios de urgencias 24 horas.",
      sources: [
        { label: "Destination Thailand Visa (DTV): 2026 Requirements Guide", url: "https://www.thailandstarterkit.com/visas/destination-thailand-visa-dtv/" },
      ],
    },
    barrios: {
      content: "Patong es la zona más turística y con más vida nocturna, con buena oferta de coworkings pero también más ruido y masificación; Rawai y Chalong, al sur de la isla, son más tranquilos y populares entre la comunidad de nómadas digitales de larga estancia; Phuket Town, el casco histórico sino-portugués, combina cultura, cafeterías y precios más moderados.\n\nEntre los coworkings, Lub d Coworking, en Patong, forma parte de un hub con restaurante, bar y piscina; BAYACO Coworking, en Phuket Town, es de los más grandes de la isla para trabajo en grupo; Grind Time, con sedes en Rawai y Chalong, ofrece espacios tranquilos con cabinas telefónicas. Los precios van desde 3 $/día hasta 300-600 $/mes por una oficina privada.",
      sources: [
        { label: "Top 15 Phuket Coworking Spaces — NowPhuket", url: "https://nowphuket.com/phuket-coworking-spaces/" },
      ],
    },
  },
  "cancun": {
    visaFiscal: {
      content: "México ofrece la Visa de Residente Temporal, la vía más habitual para nómadas digitales que quieren quedarse más de 180 días: exige acreditar unos ingresos mensuales de 2.500-4.000 $ durante los últimos 6-12 meses, o unos ahorros de 40.000-70.000 $ mantenidos en el mismo periodo, procedentes de fuera de México. Se solicita en un consulado mexicano en el país de residencia (con cita con al menos 2 meses de antelación) y se concede inicialmente por un año, renovable hasta un máximo de cuatro.\n\nMuchas nacionalidades pueden entrar como turistas hasta 180 días sin visado, lo que en la práctica cubre a buena parte de los nómadas de estancia corta, aunque esa condición no autoriza a trabajar para empresas mexicanas ni a residir de forma permanente.",
      sources: [
        { label: "Mexico Digital Nomad Visa (2026): Temporary Resident Visa Guide — Citizen Remote", url: "https://citizenremote.com/visas/mexico/" },
      ],
    },
    sanidad: {
      content: "México no ofrece acceso al sistema público de salud (IMSS) a quienes no cotizan como trabajadores o residentes formalmente dados de alta, por lo que la práctica habitual entre nómadas digitales es contratar un seguro médico internacional privado antes de viajar. La sanidad privada en Cancún, orientada en gran parte al turismo internacional, tiene buena reputación, aunque los precios sin seguro pueden ser elevados en zonas turísticas como la Zona Hotelera.\n\nCancún cuenta con hospitales privados de referencia como Hospital Galenia y Grupo Christus Muguerza, ambos con servicios de urgencias 24 horas y personal acostumbrado a pacientes extranjeros.",
      sources: [
        { label: "Mexico Digital Nomad Visa (2026): Temporary Resident Visa Guide — Citizen Remote", url: "https://citizenremote.com/visas/mexico/" },
      ],
    },
    barrios: {
      content: "La Zona Hotelera, la franja costera con las playas más conocidas, concentra hoteles y resorts, con precios altos y menos vida de barrio; el centro de Cancún (Supermanzanas 22-24), donde vive la mayoría de la población local, ofrece alquileres más bajos, buena oferta gastronómica y mejor relación calidad-precio para estancias largas.\n\nEntre los coworkings, beNuk Coworking, en el centro, ofrece bono de día desde 9 $ y membresía mensual desde 133 $; Kolmena Lab, en Plaza Fontana, cobra 17 $ el día y 150 $ + IVA el mes con acceso ilimitado; La Casa del Árbol es la opción más económica, con acceso diario desde 4-5 $ y membresías desde 50-97 $ al mes.",
      sources: [
        { label: "How to find the best coworking in Cancún? — Holafly", url: "https://esim.holafly.com/digital-nomad/coworking-cancun/" },
      ],
    },
  },
  "antalya": {
    visaFiscal: {
      content: "Turquía ofrece desde 2023 un Certificado de Identificación de Nómada Digital, un documento previo que facilita el acceso a un permiso de residencia de corta duración: exige ingresos de al menos 3.000 $/mes (36.000 $/año) procedentes del extranjero, tener entre 21 y 55 años, contar con titulación universitaria y ser ciudadano de uno de los 36 países elegibles (incluida la UE, Reino Unido, Estados Unidos y Canadá). El trámite se solicita a través de la plataforma GoTürkiye y, una vez aprobado, permite pedir el permiso de residencia en un centro de visados o consulado turco.\n\nEl certificado en sí no concede derechos de residencia: es un documento que agiliza el acceso al permiso de residencia estándar dentro del marco migratorio turco, cuya duración se revisa caso por caso.",
      sources: [
        { label: "Turkey Digital Nomad Visa 2026: Ages 21-55, USD 3,000/Month — Serka Law Firm", url: "https://serkalaw.com/digital-nomad-visa/" },
      ],
    },
    sanidad: {
      content: "Turquía no tiene un acuerdo de sanidad recíproca con la mayoría de países occidentales, por lo que quien no cotiza al sistema público turco (SGK) necesita un seguro médico privado internacional, a menudo exigido también para tramitar el permiso de residencia. La sanidad privada turca tiene buena reputación y precios notablemente más bajos que en Europa occidental para consultas y pruebas habituales.\n\nAntalya cuenta con hospitales privados de referencia como Medical Park Antalya y Memorial Antalya, ambos acostumbrados a pacientes internacionales y con servicios de urgencias 24 horas.",
      sources: [
        { label: "Guide Healthcare in Turkey — Allianz Care", url: "https://www.allianzcare.com/en/support/health-and-wellness/national-healthcare-systems/healthcare-in-turkey.html" },
      ],
    },
    barrios: {
      content: "Kaleiçi, el casco histórico junto al puerto, es la zona con más encanto y vida turística, con calles empedradas y buena oferta de cafeterías, aunque también la más cara; Lara y Konyaaltı, con sus largas playas, son zonas residenciales más tranquilas y populares entre la comunidad de expatriados y nómadas digitales.\n\nEntre los coworkings, Coworking Antalya, en pleno centro con vistas al mar, tiene una valoración de 4,9 en Google Maps; Creawork, cerca de zonas comerciales y culturales, ofrece internet de alta velocidad y café ilimitado; Coworking Mozaik combina trabajo con zonas de bienestar (yoga, pilates, rocódromo). Las membresías mensuales rondan entre 50 $ y 300 $.",
      sources: [
        { label: "8 Best Coworking Spaces in Antalya, Türkiye", url: "https://www.xyzlab.com/post/coworking-spaces-in-antalya" },
      ],
    },
  },
  "goa": {
    "visaFiscal": { "content": "India no ofrece un visado de nómada digital. La vía habitual para quedarse en el país es el e-Visa turístico, tramitable online, con validez de hasta 1 o 5 años según nacionalidad y una estancia continuada máxima de 90 días (180 días para ciudadanos de EE. UU. y Japón). El coste ronda los 50-80 $ según nacionalidad y no admite prórrogas: al agotar el plazo hay que salir del país y volver a entrar con una nueva autorización, lo que en la práctica lleva a muchos nómadas a hacer \"visa runs\" a Sri Lanka o Nepal cada 2-3 meses.\n\nBajo este visado no está permitido trabajar para clientes ni empleadores indios: solo se puede facturar a clientes fuera de India. En materia fiscal, quien supera los 182 días en India durante un año fiscal (abril-marzo) puede ser considerado residente fiscal indio y tributar por su renta mundial, con tramos del 5% al 30% (más recargo para rentas altas); en la práctica, la mayoría de nómadas con e-Visa evitan superar ese umbral precisamente por el límite de 90 días continuados que impone el propio visado. Conviene revisar el convenio de doble imposición entre España e India antes de facturar desde el país.", "sources": [{ "label": "India e-Visa – official Indian government portal", "url": "https://indianvisaonline.gov.in/evisa/tvoa.html" }, { "label": "Digital Nomad Visa for India – Citizen Remote", "url": "https://citizenremote.com/visas/india/" }] },
    "sanidad": { "content": "Entre los hospitales privados de referencia en Goa están Manipal Hospital (Panjim/Dona Paula), Apollo Victor Hospital y Vintage Hospital, todos con atención en inglés. El seguro privado es imprescindible: pólizas internacionales tipo SafetyWing rondan los 45 $ cada 4 semanas para menores de 39 años.\n\nPrecios de bolsillo orientativos: consulta de médico general, 10-20 €; especialista, 20-40 €; urgencias, 40-100 €; hospitalización, 60-150 €/noche en hospitales privados de gama media. Se recomienda vacunación frente a hepatitis A y B, fiebre tifoidea y encefalitis japonesa, y llevar repelente por el riesgo de dengue, presente todo el año.", "sources": [{ "label": "Manipal Hospitals Goa", "url": "https://www.manipalhospitals.com/goa/" }, { "label": "Insurance for Nomads, by Nomads – SafetyWing", "url": "https://safetywing.com/nomad-insurance" }] },
    "barrios": { "content": "Los pueblos de referencia para nómadas digitales están en el norte de Goa:\n1. **Assagao** — el más consolidado, con cafés de especialidad y coworkings, alquileres entre 400 y 900 €/mes.\n2. **Anjuna** — ambiente joven y vida nocturna, alquileres entre 350 y 800 €/mes.\n3. **Arambol** — más bohemio y económico, ideal para presupuestos ajustados, desde 250 €/mes.\n4. **Panjim (Panaji)** — la capital administrativa, más urbana y con mejor infraestructura, entre 300 y 700 €/mes.\n\nEntre los coworkings, NomadGao (en Assagao) combina coworking y coliving; Coworking Goa y Mojo Coworking, en Anjuna/Vagator, ofrecen bono de día desde 8-12 € y tarifas mensuales desde 80-120 € — de las más bajas de todo el catálogo de Roavio.", "sources": [{ "label": "Best Neighborhoods in Goa – Nomads.com", "url": "https://nomads.com/neighborhoods/goa" }, { "label": "NomadGao – Coworking & Coliving Community", "url": "https://nomadgao.com/" }] },
  },
  "erevan": {
    "visaFiscal": { "content": "Armenia permite la entrada sin visado hasta 180 días al año a ciudadanos de más de 100 países, incluida España, lo que la convierte en uno de los destinos con menos fricción burocrática de todo el catálogo de Roavio. Para estancias más largas, la vía habitual entre nómadas es registrarse como emprendedor individual, sin requisito formal de ingresos mínimos, lo que da acceso a una autorización de residencia temporal de 1 año renovable (o hasta 5 años para quienes ya operan un negocio en el país).\n\nEl proceso consiste en registrar la actividad como autónomo, reunir la documentación (pasaporte con traducción, certificado de registro, fotografías, carta de actividad) y presentar la solicitud ante el Servicio de Migración y Ciudadanía. En materia fiscal, Armenia aplica un régimen simplificado para autónomos con un tipo del 5% sobre la facturación hasta un umbral anual, muy inferior a los tramos progresivos europeos, aunque conviene confirmar la cifra vigente y el convenio de doble imposición con España antes de tributar en el país.", "sources": [{ "label": "Visa Options for Digital Nomads in Armenia – Armenian Lawyer", "url": "https://armenian-lawyer.com/business-immigration/digital-nomad-visa-armenia/" }, { "label": "Armenia Digital Nomad Visa – Requirements & Process", "url": "https://nomadgirl.co/armenia-digital-nomad-visa-requirements-process/" }] },
    "sanidad": { "content": "Entre los centros privados de referencia en Ereván están Erebuni Medical Center, Astghik Medical Center y Nairi Medical Center, con atención en inglés y ruso. Un seguro privado básico cuesta entre 30 y 50 €/mes; SafetyWing es una alternativa más económica, desde unos 40 $ cada 4 semanas.\n\nPrecios de bolsillo: consulta de médico general, 15-30 €; especialista, 25-60 €; urgencias sin seguro, 150-400 €; atención hospitalaria pública urgente, 100-300 € de bolsillo. No se exige ninguna vacuna obligatoria para viajeros procedentes de España.", "sources": [{ "label": "Yerevan Healthcare for Expats: Insurance, Public vs Private, Real Costs 2026 – ReloMap", "url": "https://relomap.app/blog/yerevan-armenia-healthcare-guide" }, { "label": "Insurance for Nomads, by Nomads – SafetyWing", "url": "https://safetywing.com/nomad-insurance" }] },
    "barrios": { "content": "1. **Kentron** (centro) — el barrio de referencia para nómadas, con cafés de especialidad, coworkings y vida nocturna, a poca distancia a pie del Cascade y la plaza de la República.\n2. **Barekamutyun** — residencial y tranquilo, con vistas al monte Ararat, algo más económico que Kentron.\n3. **Aygestan** — zona universitaria bien conectada, a diez minutos a pie del centro.\n4. **Nor Kilikia** — más económico, a 10-15 minutos andando de la plaza de la República.\n\nEntre los coworkings, Yerevan Coworking ofrece tarifa por hora desde 2,60 $ y bono de día desde 10,40 $; The Area CoWorking cobra 13 $/día; y Loft, en Kentron, unos 11,65 $/día — precios entre los más bajos de todo el catálogo de Roavio.", "sources": [{ "label": "Digital Nomad Guide to Living in Yerevan – Goats on the Road", "url": "https://www.goatsontheroad.com/digital-nomad-living-in-yerevan/" }, { "label": "Best Neighborhoods to Live in Yerevan for Expats and Digital Nomads – EVN Coworking", "url": "https://evncoworking.com/best-neighborhoods-to-live-in-yerevan-for-expats-and-digital-nomads/" }] },
  },
  "montreal": {
    "visaFiscal": { "content": "Canadá aún no cuenta con un visado específico de nómada digital, aunque lleva años anunciándose uno. La vía legal actual es entrar como visitante —con eTA para españoles, o visado de visitante según nacionalidad—, lo que permite permanecer y trabajar remotamente para clientes o empleadores fuera de Canadá hasta 6 meses por entrada, sin poder aceptar bajo ningún concepto clientes ni empleo canadienses.\n\nEn materia fiscal, Canadá solo grava a los no residentes por la renta de fuente canadiense: un visitante que factura a clientes extranjeros durante su estancia no genera, en principio, obligación fiscal en Canadá, siempre que no supere los 183 días en el país, umbral a partir del cual puede considerarse residente fiscal de facto. Quebec añade impuesto provincial propio, aplicable únicamente a rentas de fuente canadiense en el caso de no residentes.", "sources": [{ "label": "Canada Digital Nomad Visa 2026: Remote Work in Montreal – 2727 Coworking", "url": "https://2727coworking.com/articles/canada-digital-nomad-visa-2026-remote-work-montreal" }, { "label": "Digital Nomad Visa Canada 2026 — Requirements, Income & How to Apply – RemoteTaxCalc", "url": "https://remotetaxcalc.com/visa/canada" }] },
    "sanidad": { "content": "Los visitantes no tienen acceso a la RAMQ (la sanidad pública de Quebec), por lo que un seguro médico privado es obligatorio de facto. Los planes básicos para adultos rondan los 120-150 $CAD/mes (unos 80-100 €).\n\nEntre los hospitales de referencia en Montreal están el Royal Victoria Hospital (McGill University Health Centre) y el CHUM, ambos de primer nivel, aunque la atención de urgencias sin seguro puede superar fácilmente los 1.000-2.000 $CAD por episodio. No se exige ninguna vacuna obligatoria para viajeros procedentes de España.", "sources": [{ "label": "Health Insurance in Quebec: Best Plans & RAMQ Guide – PolicyMe", "url": "https://www.policyme.com/health-insurance/health-insurance-by-province/health-insurance-quebec" }, { "label": "Information on private plans – RAMQ", "url": "https://www.ramq.gouv.qc.ca/en/citizens/prescription-drug-insurance/information-private-plans" }] },
    "barrios": { "content": "1. **Le Plateau-Mont-Royal** — el barrio nómada por excelencia, con cafés, vida cultural y varios coworkings; alquileres entre 1.100 y 1.700 $CAD/mes (750-1.150 €) para un piso de una habitación.\n2. **Mile End** — ambiente creativo y bohemio, con galerías y estudios musicales; precios similares al Plateau.\n3. **Centro / Old Montreal** — máxima conectividad de transporte y ambiente profesional, algo más caro.\n4. **Griffintown** — moderno y en plena expansión, cerca de Old Montreal.\n\nEntre los coworkings, 2727 Coworking (Griffintown) cobra 40 $CAD/día o 300 $CAD/mes por puesto flexible; Crew Collective, en un edificio histórico de Old Montreal, desde 20 $CAD/día; y ECTO, en el Plateau, desde 15 $CAD/día o 250 $CAD/mes, con un modelo cooperativo.", "sources": [{ "label": "Best Coworking Spaces in Montreal 2026 – 2727 Coworking", "url": "https://2727coworking.com/guides/best-coworking-spaces-montreal-2026/" }, { "label": "Affordable Housing & Shared Spaces in Montreal's Best Neighborhoods – StartColiving", "url": "https://startcoliving.com/city-guides/coliving-in-montreal/" }] },
  },
  "la-valeta": {
    "visaFiscal": { "content": "Malta ofrece el Nomad Residence Permit, dirigido específicamente a trabajadores remotos con cliente o empleador fuera de Malta. Requiere unos ingresos brutos anuales mínimos de 42.000 € (unos 3.500 €/mes), pasaporte en vigor, contrato o carta que acredite el trabajo remoto, seguro médico privado, prueba de alojamiento y certificado de antecedentes penales. La tasa de solicitud es de 300 € (no reembolsable) más 100 € por la tarjeta de residencia.\n\nEl permiso tiene una validez inicial de 1 año, renovable hasta un máximo de 4 años, y exige pasar al menos 5 meses al año en Malta para renovarlo. En materia fiscal, los primeros 12 meses están exentos de tributación sobre la renta del teletrabajo, y a partir del segundo año se aplica un tipo fijo del 10% — uno de los regímenes más favorables de todo el catálogo de Roavio para nómadas con ingresos medios-altos.", "sources": [{ "label": "Malta Digital Nomad Visa: The Ultimate Guide 2026 – Global Citizen Solutions", "url": "https://www.globalcitizensolutions.com/malta-digital-nomad-visa/" }, { "label": "Malta Nomad Residence Permit – Tax Treatment And 2026 Guidance Update – Mondaq", "url": "https://www.mondaq.com/corporate-tax/1758992/malta-nomad-residence-permit-tax-treatment-and-2026-guidance-update" }] },
    "sanidad": { "content": "El sistema público (Mater Dei Hospital) es gratuito para residentes, pero los titulares del Nomad Residence Permit deben acreditar seguro privado para la solicitud. Entre los proveedores privados están St James Hospital y St Thomas Hospital. Un seguro básico local cuesta entre 25 y 60 €/mes; coberturas internacionales más completas, entre 50 y 200 €/mes.\n\nPrecios de bolsillo: consulta de médico general, 15-50 €; especialista, 50-120 €; cirugía mayor privada, desde 3.000 €. No se exige ninguna vacuna obligatoria para viajeros procedentes de España.", "sources": [{ "label": "Malta Healthcare 2026: From €25/mo Insurance & Hospitals – Expat Life", "url": "https://expatlife.ai/malta/healthcare" }, { "label": "Guide to Healthcare in Malta – International Living", "url": "https://internationalliving.com/countries/malta/healthcare-in-malta/" }] },
    "barrios": { "content": "1. **Sliema** — el más cosmopolita, con paseo marítimo peatonal y gran oferta de cafés y coworkings; alquileres en torno a 1.200-1.400 €/mes.\n2. **St Julian's** — animado, con coworkings frente al mar y ambiente internacional; precios similares a Sliema.\n3. **La Valeta** (casco histórico) — Patrimonio de la Humanidad, con varios coworkings instalados en edificios históricos; alquileres algo más bajos, entre 1.100 y 1.300 €/mes.\n4. **Gżira** — alternativa más económica, a un paseo de Sliema.\n\nLa oferta de coworkings es amplia para el tamaño de la isla, con horarios flexibles y buena conexión a internet en casi toda la zona urbana del Gran Puerto.", "sources": [{ "label": "The 5 Best Cities for Digital Nomads in Malta – Holafly", "url": "https://esim.holafly.com/digital-nomad/best-cities-malta-nomads/" }, { "label": "The 14 Best Places to Live in Malta for Expats and Digital Nomads – Pacific Prime", "url": "https://www.pacificprime.com/blog/best-places-to-live-in-malta.html" }] },
  },
  "florianopolis": {
    "visaFiscal": { "content": "Brasil ofrece el visado de nómada digital VITEM XIV, que exige unos ingresos mínimos de 1.500 $/mes de fuente extranjera (o un depósito de 18.000 $), pasaporte con más de 6 meses de validez, certificado de antecedentes penales apostillado, seguro médico válido en Brasil y prueba de alojamiento. Puede tramitarse en el consulado brasileño de origen (proceso de 2 a 8 semanas, tasa de 80-150 $) o, ya en el país, convirtiendo un visado de turista (8-16 semanas, no disponible en todas las oficinas de la Policía Federal).\n\nEl visado tiene una validez de 1 año, renovable una vez por otro año más (máximo 2 años en total, sin más prórrogas posibles). Aunque el visado en sí no otorga ninguna exención fiscal, superar los 183 días de estancia en un periodo de 12 meses activa la residencia fiscal brasileña, con obligación de declarar la renta mundial mediante el carné-leão mensual y la declaración anual (DIRPF), con tipos del 7,5% al 27,5%.", "sources": [{ "label": "Brazil Digital Nomad Visa (VITEM XIV): Complete Guide – ZS Advogados", "url": "https://zsassociados.com/guides/digital-nomad-visa-brazil-complete-guide/" }, { "label": "Brazil Digital Nomad Visa: Requirements, Application and Tax Rules in 2026 – BrasilTax", "url": "https://brasiltax.com/blog/en-digital-nomad-visa-brazil/" }] },
    "sanidad": { "content": "El sistema público brasileño (SUS) es gratuito y accesible a residentes legales, aunque la atención privada es la opción habitual entre nómadas por rapidez y disponibilidad de inglés. Un seguro privado básico cuesta entre 55 y 150 $/mes (300-800 R$); los planes premium con acceso a los mejores hospitales llegan a 185-370 $/mes.\n\nPrecios de bolsillo: consulta de médico general privada, 35-70 $; hospitalización privada, entre 90 y 370 $/noche según el centro. Se recomienda vacunación frente a fiebre amarilla si se viaja a otras regiones de Brasil, aunque no es obligatoria en Florianópolis.", "sources": [{ "label": "Brazil Healthcare 2026: R$300-R$800/mo Insurance & Hospitals – Expat Life", "url": "https://expatlife.ai/brazil/healthcare" }, { "label": "Health Insurance in Brazil for Expats & Foreigners – Feather", "url": "https://feather-insurance.com/en-br/blog/health-insurance-brazil-guide" }] },
    "barrios": { "content": "1. **Lagoa da Conceição** — el barrio nómada por excelencia, con lago, playas cercanas, cafés y gran vida social; base habitual de la comunidad internacional.\n2. **Centro** — el más práctico para gestiones, gimnasios y citas, con buena conexión al resto de la isla.\n3. **Jurerê Internacional** — la zona más exclusiva y cara, orientada a quienes buscan playa de lujo y ambiente selecto.\n\nEntre los coworkings, Cubo Floripa (Centro) ofrece bono de día desde 80 R$ y tarifa mensual desde 700 R$; Hub Lagoa, en Lagoa da Conceição, desde 60 R$/día o 500 R$/mes; y BeachCo Jurerê, orientado al ritmo playa-trabajo, desde 80 R$/día.", "sources": [{ "label": "Best Coworking Florianopolis: 2026 Nomad Guide – Digital Nomads Brasil", "url": "https://digitalnomadsbrasil.com/stories/best-coworking-florianopolis" }, { "label": "The Complete Digital Nomad's Guide to Florianópolis – Howdy", "url": "https://www.howdy.com/blog/how-to-be-a-digital-nomad-in-florianopolis" }] },
  },
  "sidney": {
    "visaFiscal": { "content": "Australia no tiene un visado de nómada digital propiamente dicho. La vía más habitual para un ciudadano español es la eVisitor (subclase 651), gratuita y válida durante 12 meses con estancias de hasta 3 meses por entrada, o la Visitor visa (subclase 600, hasta 12 meses, 150 $AUD). El trabajo remoto para clientes o empleadores extranjeros está permitido con estos visados; lo que no se permite bajo ningún concepto es trabajar para una empresa australiana. Quienes tienen entre 18 y 30 años (35 para algunas nacionalidades) pueden optar además por la Working Holiday Visa, que sí autoriza trabajar en Australia.\n\nEn materia fiscal, quien entra con eVisitor o Visitor visa no se convierte en residente fiscal australiano y no tributa allí por su renta extranjera. Los residentes fiscales australianos pagan un impuesto progresivo que va del 0% (hasta 18.200 $AUD/año) al 45% (por encima de 190.000 $AUD/año), con un tipo del 30% para los primeros tramos de renta de los no residentes.", "sources": [{ "label": "Australia Digital Nomad Visa Guide 2026 – Citizen Remote", "url": "https://citizenremote.com/visas/australia-digital-nomad-visa/" }, { "label": "Australian Tax Brackets 2026-27 – Sleek", "url": "https://sleek.com/au/resources/tax-brackets-australia/" }] },
    "sanidad": { "content": "Australia no da acceso gratuito a Medicare a los visitantes con eVisitor o Visitor visa, por lo que un seguro médico privado de viaje es imprescindible. Entre los hospitales privados de referencia en Sídney están el North Shore Private Hospital, en St Leonards, y el St Vincent's Private Hospital, en Darlinghurst.\n\nUn seguro internacional básico tipo SafetyWing ronda los 45-90 $/mes; los seguros de viaje australianos específicos (Bupa, Medibank) cuestan cifras similares según cobertura y edad.", "sources": [{ "label": "Hospitals in Australia for Expatriates – Pacific Prime", "url": "https://www.pacificprime.com/blog/hospitals-in-australia-for-expatriates.html" }] },
    "barrios": { "content": "1. **Inner West** (Surry Hills, Newtown, Summer Hill) — el barrio creativo, con casas adosadas reconvertidas, bares y mercados; alquileres que suben cuanto más cerca del centro.\n2. **Eastern Suburbs** (Bondi, Bronte, Maroubra) — la zona más asociada a la comunidad expatriada, con playas icónicas; un piso de un dormitorio en el centro ronda 1.885 $AUD/mes.\n3. **Northern Beaches** (Manly) — ambiente relajado de playa con bares en azotea, aunque exige coche o ferry para moverse.\n\nEntre los coworkings, WeWork tiene varias sedes en el CBD desde 550 $AUD/mes; Tank Stream Labs, en el CBD y Circular Quay, desde 350 $AUD/mes; y Wotso, con siete sedes incluidas varias junto a la playa (Manly, Bondi Junction), ofrece bono de día desde 55 $AUD.", "sources": [{ "label": "The Full Digital Nomad Guide to Sydney", "url": "https://digitalnomads.world/city-guide/sydney/" }] },
  },
  "hong-kong": {
    "visaFiscal": { "content": "Hong Kong no ofrece ningún visado de nómada digital. Un ciudadano español puede entrar como visitante sin visado durante hasta 90 días, periodo en el que no está autorizado a trabajar para una empresa de Hong Kong, aunque en la práctica el territorio no persigue el teletrabajo puntual para clientes extranjeros.\n\nHong Kong aplica un sistema fiscal territorial: solo tributa la renta que se origina o deriva de Hong Kong, y existe además una exención específica para estancias cortas —los ingresos por servicios prestados durante visitas de no más de 60 días en un año fiscal quedan exentos del impuesto sobre salarios (Salaries Tax)—, lo que en la práctica deja fuera de tributación a la mayoría de nómadas de paso. Quien sí tribute en Hong Kong paga tipos progresivos del 2% al 17%, o alternativamente un tipo estándar del 15% sobre el conjunto de la renta, aplicándose el que resulte más bajo.", "sources": [{ "label": "Digital Nomads Taxes Hong Kong 2026 – Air Corporate", "url": "https://air-corporate.com/hk/blog/digital-nomads-taxes-in-hong-kong" }] },
    "sanidad": { "content": "Entre los hospitales privados de referencia están el Matilda International Hospital, en The Peak, muy popular entre familias expatriadas; el Hong Kong Sanatorium & Hospital, en Happy Valley, el mayor centro privado del territorio; y el Gleneagles Hong Kong, de apertura más reciente.\n\nUn seguro privado internacional (Cigna, Bupa, AXA) cuesta entre 15.000 y 60.000 HKD al año según edad y cobertura; los seguros locales (AIA, Manulife) resultan entre un 20% y un 30% más baratos. Precios de bolsillo: consulta de médico general privada, 300-600 HKD; urgencias en centros públicos, una tasa plana de 180 HKD para residentes, de las más económicas del mundo desarrollado.", "sources": [{ "label": "Hong Kong Healthcare 2026 – ExpatLife", "url": "https://expatlife.ai/hong-kong/healthcare" }] },
    "barrios": { "content": "1. **Central** — el corazón financiero y de negocios, con vida nocturna intensa y cafeterías de moda.\n2. **Sheung Wan** — arte urbano y mercados de antigüedades, con alquileres más asequibles y opciones de coliving.\n3. **Kennedy Town** — en el oeste de la isla, ambiente más relajado y zonas junto al mar.\n\nEl alquiler medio de un piso de un dormitorio en el centro ronda entre 14.000 y 20.000 HKD/mes (1.650-2.400 €). Entre los coworkings, The Hive tiene varias sedes (Kennedy Town, Wan Chai, Central, Sai Kung) con membresía de puesto flexible desde unos 260 €/mes; Blueprint, en Sheung Wan, es una opción boutique con planes flexibles; y Garage Society, en Central y Sai Ying Pun, ofrece oficinas privadas y puestos compartidos.", "sources": [{ "label": "Hong Kong for Nomads – Genki Guide", "url": "https://guide.genki.world/hongkong/" }] },
  },
  "singapur": {
    "visaFiscal": { "content": "Singapur no tiene ningún visado de nómada digital. Un ciudadano español puede entrar sin visado durante un máximo de 90 días, periodo durante el cual no está permitido ejercer ninguna actividad profesional, de negocios o remunerada dentro de Singapur, aunque el teletrabajo puntual para clientes extranjeros no suele generar problemas en la práctica.\n\nSingapur considera residente fiscal a quien permanece 183 días o más en el país durante el año, momento en el que pasaría a tributar bajo el sistema progresivo local, que va del 0% (hasta 20.000 $SGD/año) al 24% (por encima de 1.000.000 $SGD/año). Un visitante de estancia corta que no llega a esos 183 días no tributa en Singapur por su renta extranjera.", "sources": [{ "label": "Singapore Digital Nomad Visa – Citizen Remote", "url": "https://citizenremote.com/visas/singapore-digital-nomad-visa/" }, { "label": "2026 Singapore Personal Tax for Residents", "url": "https://www.corporateservices.com/singapore/singapore-individual-tax/" }] },
    "sanidad": { "content": "Los visitantes extranjeros no tienen acceso al sistema público subvencionado de Singapur, por lo que un seguro privado internacional es imprescindible. Entre los hospitales privados de referencia están el Mount Elizabeth Hospital, el mayor y más conocido, con Centro de Asistencia al Paciente para extranjeros; el Gleneagles Hospital, uno de los mejores de Asia; y el Raffles Hospital, en pleno centro, con un Centro de Pacientes Internacionales propio.\n\nNo hay cifras públicas homogéneas de coste de seguro, pero los proveedores internacionales (Cigna, AXA) suelen recomendarse antes de instalarse, ya que la sanidad privada singapurense es de las más caras de Asia.", "sources": [{ "label": "Best Private Hospitals in Singapore for Expats", "url": "https://www.expatarrivals.com/asia-pacific/singapore/hospitals-singapore" }] },
    "barrios": { "content": "1. **Marina Bay** — la zona más buscada por su cercanía a los rascacielos y su vida nocturna; entre 2.100 y 2.800 €/mes.\n2. **Little India** — opción más económica con hostales y pisos de presupuesto ajustado cerca de Chinatown; entre 1.800 y 2.400 €/mes.\n\nEntre los coworkings, The Hive Carpenter, en Marina Bay, con vistas a la bahía, ofrece bono de día desde 20 € o membresía mensual desde 275 €; JustCo, en Marina Square, desde 270 €/mes; Co.@Duxton, en Little India, desde 32 €/día o 250 €/mes; y WeWork, con 14 sedes en la ciudad, desde 350 €/mes.", "sources": [{ "label": "Singapore for Nomads – Genki Guide", "url": "https://guide.genki.world/singapore/" }] },
  },
  "rio-de-janeiro": {
    "visaFiscal": { "content": "Brasil ofrece el visado de nómada digital VITEM XIV, con ingresos mínimos de 1.500 $/mes de fuente extranjera (o un depósito de 18.000 $), contrato de trabajo con un empleador extranjero, pasaporte con más de 6 meses de validez, antecedentes penales apostillados y seguro médico válido en Brasil si se tramita en consulado. La autorización inicial es de 1 año, renovable una vez por otro año (en la práctica, algunos solicitantes logran un tercer año, aunque no está garantizado). Trabajar para un cliente o empleador brasileño invalida el visado.\n\nSuperar los 183 días de estancia en un periodo de 12 meses activa la residencia fiscal brasileña, con obligación de declarar la renta mundial mediante el carné-leão mensual y la declaración anual (DIRPF), con tipos del 7,5% al 27,5%.", "sources": [{ "label": "Brazil Digital Nomad Visa (VITEM XIV) – Oliveira Lawyers", "url": "https://oliveiralawyers.com/services/immigration/digital-nomad-visa/" }] },
    "sanidad": { "content": "El sistema público brasileño (SUS) es gratuito y accesible a residentes legales, aunque la atención privada es la opción habitual entre nómadas por rapidez y disponibilidad de inglés. Entre los hospitales privados de referencia en Río están el Hospital Barra D'Or, en Barra da Tijuca; el Hospital Copa D'Or, en Copacabana; y la Casa de Saúde São José, en Humaitá, todos con secciones específicas para pacientes internacionales.\n\nUn seguro privado básico cuesta entre 55 y 150 $/mes (300-800 R$); los planes premium con acceso a los mejores hospitales llegan a 185-370 $/mes. Se recomienda vacunación frente a fiebre amarilla si se viaja a otras regiones de Brasil.", "sources": [{ "label": "Healthcare in Rio de Janeiro – Expat Arrivals", "url": "https://www.expatarrivals.com/americas/brazil/rio-de-janeiro/healthcare-rio-de-janeiro" }] },
    "barrios": { "content": "1. **Ipanema** — el barrio más elegante y con mejor infraestructura de coworking, wifi fiable en cafeterías y equilibrio entre playa y productividad; el más caro de los cuatro.\n2. **Botafogo** — ambiente hipster con alquileres notablemente más bajos que la Zona Sur de playa, cafeterías artesanales y coworkings, buena opción para perfiles creativos.\n3. **Copacabana** — opción más económica junto al mar, con cafeterías y hostales con coworking, aunque exige más precaución.\n4. **Barra da Tijuca** — la más segura y tranquila, con internet fiable y pisos más espaciosos a precios más bajos; cuenta con WeWork y otras opciones de coworking.", "sources": [{ "label": "Best Neighborhoods in Rio de Janeiro for Digital Nomads", "url": "https://geronimo-ai.com/best-neighborhoods/rio-de-janeiro" }] },
  },
  "miami": {
    "visaFiscal": { "content": "Estados Unidos no ofrece ningún visado de nómada digital. Entrar bajo el Programa de Exención de Visado (ESTA) permite un máximo de 90 días, exclusivamente para turismo o negocios puntuales, sin autorización para trabajar. La normativa estadounidense atiende a dónde se realiza físicamente el trabajo, no a dónde está el cliente: trabajar de forma habitual para clientes extranjeros mientras se está en EE. UU. puede considerarse empleo no autorizado.\n\nExiste una excepción fiscal muy concreta: quien permanece 90 días o menos al año y factura menos de 3.000 $ a clientes extranjeros puede quedar exento de tributar en EE. UU. por esa renta, aunque esto no legaliza el trabajo en sí a efectos migratorios. Las únicas vías reales para trabajar más tiempo pasan por visados tradicionales (O-1, L-1, E-2, H-1B).", "sources": [{ "label": "Remote Work Visa 2026 – NNU Immigration", "url": "https://www.nnuimmigration.com/remote-work-visa/" }] },
    "sanidad": { "content": "Estados Unidos no tiene sanidad pública universal y los precios sin seguro pueden ser muy altos. Entre los hospitales de referencia en Miami están el Baptist Health South Miami Hospital, el Jackson Memorial Hospital y el Mount Sinai Medical Center, en Miami Beach. Es imprescindible contratar un seguro médico internacional (Cigna Global, SafetyWing o similar) antes de viajar.\n\nSin seguro, una visita a urgencias puede superar fácilmente los 1.000-3.000 $, y una consulta de médico general privada ronda los 150-300 $.", "sources": [{ "label": "Healthcare in Miami – Expat Arrivals", "url": "https://www.expatarrivals.com/americas/usa/miami/healthcare-miami" }] },
    "barrios": { "content": "1. **Brickell** — el distrito financiero, con rascacielos, buena conexión de Metromover y perfil orientado a finanzas y startups; estudios desde 1.800 $/mes y pisos de un dormitorio entre 2.200 y 3.200 $/mes.\n2. **Wynwood** — el barrio creativo, con arte urbano y cafeterías independientes; estudios desde 1.500 $/mes y de un dormitorio entre 1.800 y 2.600 $/mes.\n3. **Edgewater** — opción más económica junto al agua, entre un 10% y un 20% más barata que Brickell; pisos de un dormitorio entre 1.900 y 2.500 $/mes.\n\nEntre los coworkings, The LAB Miami, en Wynwood, ofrece puesto flexible desde unos 250 $/mes; Pipeline Workspaces, con varias sedes, puesto fijo desde 400-600 $/mes; y WeWork, puesto flexible desde unos 300 $/mes.", "sources": [{ "label": "Miami for Digital Nomads: Complete 2026 Guide", "url": "https://wemiami.com/miami-for-digital-nomads/" }] },
  },
  "san-francisco": {
    "visaFiscal": { "content": "Al igual que en el resto de Estados Unidos, no existe ningún visado de nómada digital. La entrada bajo ESTA permite hasta 90 días de turismo o negocios puntuales, sin autorización para trabajar, y la normativa se fija en dónde se realiza físicamente el trabajo, no en la ubicación del cliente. La excepción fiscal de 90 días y 3.000 $ de facturación a clientes extranjeros aplica igual que en el resto del país, sin legalizar el trabajo a efectos migratorios.\n\nPara estancias más largas, las únicas vías reales son los visados de trabajo tradicionales (O-1, L-1, E-2, H-1B), especialmente relevantes en San Francisco por su alta concentración de empresas tecnológicas.", "sources": [{ "label": "Remote Work Visa 2026 – NNU Immigration", "url": "https://www.nnuimmigration.com/remote-work-visa/" }] },
    "sanidad": { "content": "Entre los hospitales de referencia están el San Francisco Medical Centre (Universidad de California), el California Pacific Medical Centre y el Zuckerberg San Francisco General Hospital. El programa municipal Healthy San Francisco (HSF) ofrece inscripción gratuita para quien gana menos de 10.830 $/año y cuotas mensuales de 20 a 150 $ para el resto, muy por debajo de una aseguradora privada estándar en la ciudad, con consultas desde 10 $ y hospitalización desde 200 $, aunque su acceso depende de residencia y elegibilidad, no está pensado para visitantes de paso.\n\nPara quien no cumple esos requisitos, un seguro internacional de viaje (SafetyWing o similar) es la opción práctica, con visitas de urgencias sin seguro que pueden superar los 1.000-3.000 $.", "sources": [{ "label": "Healthcare in San Francisco – ExpatFinder", "url": "https://www.expatfinder.com/usa/expat-guides/article/healthcare-in-san-francisco/472" }] },
    "barrios": { "content": "1. **Financial District** — máxima conectividad, con BART, Muni, el ferri y todas las líneas de autobús convergiendo en pocas manzanas.\n2. **SoMa** — orientado a startups, con plantas más grandes y cercanía a las principales tecnológicas.\n3. **Hayes Valley/Mid-Market** — barrio de diseño, caminable y algo más asequible.\n4. **Marina/Mission** — zonas de menor densidad con más luz natural, para quien prioriza el ambiente de barrio sobre la cercanía al centro.\n\nEntre los coworkings, Mindspace, en el Financial District, ofrece puesto flexible desde 450 $/mes y puesto fijo desde 900 $/mes; Canopy, con sedes en Jackson Square y Pacific Heights, desde unos 550 $/mes; WeWork, desde 350-450 $/mes; y Spaces/Regus, en FiDi y SoMa, desde 300-400 $/mes.", "sources": [{ "label": "10 Best Coworking Spaces in San Francisco for 2026 – Mindspace", "url": "https://www.mindspace.me/blog/best-coworking-spaces-san-francisco/" }] },
  },
  "el-cairo": {
    "visaFiscal": { "content": "Egipto no tiene todavía un visado de nómada digital, aunque el país ha anunciado el desarrollo de un visado turístico de larga duración (5 años, unos 700 $) que incluiría a España entre los países aprobados, sin fecha de lanzamiento confirmada. Actualmente, un ciudadano español puede entrar con un e-Visa turístico de 30 días de entrada única (25 $) o de entradas múltiples (60 $), sin que el trabajo remoto para clientes extranjeros esté explícitamente regulado.\n\nEgipto aplica un impuesto sobre la renta progresivo del 0% (hasta 40.000 EGP/año) al 27,5% (por encima de 1.200.000 EGP/año), aunque no existe un umbral de días claramente publicado para la residencia fiscal de extranjeros; en la práctica, quien no reside de forma continuada no llega a generar obligación fiscal egipcia sobre su renta extranjera.", "sources": [{ "label": "Egypt Digital Nomad Visa – Citizen Remote", "url": "https://citizenremote.com/visas/egypt-digital-nomad-visa/" }, { "label": "Egypt's Personal Income Tax in 2026 – Andersen", "url": "https://eg.andersen.com/personal-income-tax/" }] },
    "sanidad": { "content": "Entre los hospitales privados de referencia para extranjeros está el As-Salam International Hospital, con un departamento específico de relaciones internacionales que ofrece coordinación médica, ayuda con visados y comparación de costes de tratamiento las 24 horas.\n\nUn seguro médico internacional es imprescindible, ya que la sanidad pública egipcia no está pensada para visitantes extranjeros; los precios de bolsillo son bajos para estándares europeos, con una consulta médica corta en torno a los 50 € (unos 2.800 EGP), aunque conviene contrastar cifras directamente con el centro elegido.", "sources": [{ "label": "As-Salam International Hospital – International Patients", "url": "https://www.assih.com/en/international-patients" }] },
    "barrios": { "content": "1. **Maadi** — el barrio con mayor densidad de expatriados, con zonas verdes y oferta gastronómica internacional; piso sin amueblar de dos habitaciones desde 2.000 EGP (127 $), amueblado de tres habitaciones hasta 25.000 EGP (1.600 $).\n2. **Zamalek** — isla en el Nilo con restauración de calidad, cafés y galerías de arte; estudio desde 5.500 EGP (350 $), piso de dos habitaciones amueblado hasta 30.000 EGP (1.900 $).\n3. **New Cairo** — zona suburbana con menos congestión, orientada a familias.\n\nEntre los espacios de trabajo, Road 9 Coworking Space, en Maadi, está pensado específicamente para nómadas digitales; Espresso Lab, también en Maadi, es muy popular entre freelancers por sus enchufes en cada mesa; y Two Spoons, en New Cairo, ofrece un ambiente tranquilo con internet de alta velocidad.", "sources": [{ "label": "The Full Digital Nomad Guide to Cairo", "url": "https://digitalnomads.world/city-guide/cairo/" }] },
  },
  "melbourne": {
    "visaFiscal": { "content": "Igual que en el resto de Australia, no existe un visado de nómada digital. Un ciudadano español puede entrar con la eVisitor (subclase 651), gratuita y con estancias de hasta 3 meses por entrada dentro de una validez de 12 meses, o la Visitor visa (subclase 600, hasta 12 meses). El teletrabajo para clientes o empleadores extranjeros está permitido; trabajar para una empresa australiana, no.\n\nQuien entra con estos visados no se convierte en residente fiscal australiano ni tributa allí por su renta extranjera. Los residentes fiscales pagan un impuesto progresivo del 0% (hasta 18.200 $AUD/año) al 45% (por encima de 190.000 $AUD/año).", "sources": [{ "label": "Australia Digital Nomad Visa Guide 2026 – Citizen Remote", "url": "https://citizenremote.com/visas/australia-digital-nomad-visa/" }] },
    "sanidad": { "content": "Los visitantes no tienen acceso gratuito a Medicare, por lo que conviene contratar un seguro médico privado de viaje antes de llegar. Entre los hospitales privados de referencia en Melbourne están el Cabrini Malvern Hospital, el Melbourne Private Hospital, en Parkville, y el St Vincent's Private Hospital, en Fitzroy.\n\nUn seguro internacional básico tipo SafetyWing ronda los 45-90 $/mes; los seguros de viaje específicos para Australia (Bupa, Medibank) tienen precios similares según edad y cobertura.", "sources": [{ "label": "Hospitals in Australia for Expatriates – Pacific Prime", "url": "https://www.pacificprime.com/blog/hospitals-in-australia-for-expatriates.html" }] },
    "barrios": { "content": "1. **CBD** — máxima conveniencia y conexión de transporte, con acceso directo a servicios y tranvías.\n2. **Richmond** — energía creativa y buena oferta de cafeterías, ideal para emprendedores y freelancers.\n3. **Collingwood** — ambiente vibrante con espacios de diseño y cultura startup.\n\nEntre los coworkings, WeWork, en 120 Spencer Street, ofrece bono de día de 60 $AUD y membresía mensual de 289-339 $AUD; Inspire9, en Richmond, ronda los 495 $AUD/mes; The Commons, en Collingwood, unos 640 $AUD/mes; y JustCo, en Flinders Street, desde 340 $AUD/mes. Los bonos de día en general van de 25 a 60 $AUD y las membresías mensuales suelen empezar en torno a los 300 $AUD.", "sources": [{ "label": "Coworking Spaces in Melbourne – Holafly", "url": "https://esim.holafly.com/digital-nomad/coworking-space-melbourne/" }] },
  },
  "pekin": {
    "visaFiscal": { "content": "China no tiene ningún visado de nómada digital y trabajar de forma remota para clientes extranjeros no está legalmente autorizado bajo un visado turístico, aunque en la práctica se tolera responder correos o asistir a reuniones puntuales. Un ciudadano español puede entrar sin visado durante hasta 30 días bajo la política de exención ampliada vigente hasta 2026; para estancias algo más largas, el visado L (turista) suele conceder entre 30 y 60 días por entrada según el consulado. China ofrece también tránsitos sin visado de 144 y 240 horas en aeropuertos como Pekín, útiles para escalas.\n\nEn materia fiscal, superar los 183 días en un año natural activa la residencia fiscal china; existe además la llamada regla de los seis años, que permite reiniciar ese cómputo saliendo del país más de 30 días consecutivos al año, evitando así la tributación sobre la renta mundial. China aplica un impuesto progresivo sobre la renta que va del 3% al 45%.", "sources": [{ "label": "China Digital Nomad Visa Guide 2026 – Stamped Nomad", "url": "https://www.stampednomad.com/guides/china" }, { "label": "The 6-Year Rule in China for Foreign Individuals", "url": "https://www.china-briefing.com/doing-business-guide/china/taxation-and-accounting/the-6-year-rule-in-china-for-foreign-individuals-a-comprehensive-guide" }] },
    "sanidad": { "content": "Entre los hospitales privados e internacionales de referencia en Pekín están el Beijing United Family Hospital, el primer hospital de estándar internacional del país, con urgencias 24 horas; el Oasis International Hospital, con más de 30 departamentos; y el Amcare Women's and Children's Hospital, especializado en maternidad y pediatría.\n\nUn seguro internacional (MSH, Cigna) es imprescindible para acceder a estos centros, ya que sus precios sin cobertura son considerablemente más altos que los del sistema público chino, pensado sobre todo para residentes.", "sources": [{ "label": "The Best Hospitals in Beijing for Expats – Pacific Prime", "url": "https://www.pacificprime.com/blog/best-hospitals-in-beijing-for-expats.html" }] },
    "barrios": { "content": "1. **Dongcheng** — barrio histórico con hutongs y pisos modernos; un piso de dos habitaciones fuera de la 3ª carretera de circunvalación ronda los 650 $/mes.\n2. **Chaoyang** — distrito de negocios y embajadas, con parques y colegios internacionales; un estudio en el centro parte de unos 1.100 $/mes.\n3. **Sanlitun** — el barrio expatriado por excelencia, con bares y vida nocturna, de los más caros.\n4. **Wudaokou** (Haidian) — zona universitaria con vivienda compartida asequible, la opción más económica.\n\nEntre los coworkings, Thinkool ofrece puesto flexible desde unos 217 $/mes; Wu Jie Space, con 450 puestos, desde 285 $/mes; Spaceyun Beijing, con gimnasio incluido, desde 386 $/mes; y Soho 3Q, de diseño futurista y 20.000 m², desde 465 $/mes.", "sources": [{ "label": "The Full Digital Nomad Guide to Beijing", "url": "https://digitalnomads.world/city-guide/asia/beijing/" }] },
  },
  "bogota": {
    "visaFiscal": { "content": "Colombia ofrece la Visa V de Nómadas Digitales, con un ingreso mínimo exigido de unas tres veces el salario mínimo legal colombiano (unos 4.270.500 COP/mes, unos 1.100 $), verificado mediante extractos bancarios recientes. El visado tiene una validez de hasta 2 años, renovable si se sigue cumpliendo el requisito de ingresos. El trámite es totalmente online a través del Ministerio de Relaciones Exteriores, con una tasa de estudio de unos 230.000 COP y, si se aprueba, una tasa de expedición de unos 800.000 COP (en total, unos 225-235 $), tras lo cual hay que registrarse ante Migración Colombia.\n\nColombia considera residente fiscal a quien supera los 183 días de estancia en un periodo de 12 meses, momento en que debe tributar por su renta mundial bajo un sistema progresivo que llega hasta el 39% para las rentas más altas (por encima de 31.000 UVT, unos 1.622 millones de COP en 2026); quien no supera ese umbral solo tributa, en su caso, por renta de fuente colombiana.", "sources": [{ "label": "Colombia Digital Nomad Visa 2026 – Citizen Remote", "url": "https://citizenremote.com/visas/colombia/" }] },
    "sanidad": { "content": "Entre los hospitales de referencia para extranjeros en Bogotá están la Fundación Santa Fe de Bogotá, reconocida por sus estrictos estándares clínicos; el Hospital Universitario San Ignacio, con especialistas bilingües; y la Clínica del Country, popular para maternidad, pediatría y urgencias.\n\nLa sanidad colombiana es notablemente más barata que la de Norteamérica o Europa Occidental; se recomienda contratar una póliza internacional (tipo SafetyWing o similar) antes de llegar, ya que el acceso al sistema público (EPS) está pensado para residentes cotizantes, no para visitantes de paso.", "sources": [{ "label": "Top Colombia Hospitals for Expats – Medellin Guru", "url": "https://medellinguru.com/top-colombia-hospitals-for-expats-a-guide/" }] },
    "barrios": { "content": "1. **Chapinero** — ambiente bohemio, cerca de universidades, restaurantes y cafeterías; uno de los barrios favoritos de la comunidad nómada.\n2. **Usaquén** — zona elegante y tranquila, con mercado de pulgas y ambiente relajado.\n3. **Zona Rosa** (Calle 82) — restaurantes, tiendas de lujo y vida nocturna intensa.\n4. **La Candelaria** — centro histórico junto a los principales atractivos turísticos, como el Museo del Oro.\n\nEntre los coworkings, Impact Hub Bogotá, en Chapinero, va de 40 a 197 $/mes; WeWork, en Usaquén, desde 244 $/mes con acceso 24/7; Co-Work Latam, también en Usaquén, desde 140 $/mes; y Selina Cowork, en La Candelaria, desde 11 hasta 118 $/mes, con actividades sociales incluidas.", "sources": [{ "label": "Best Coworking Spaces in Bogotá – Holafly", "url": "https://esim.holafly.com/digital-nomad/coworking-bogota/" }] },
  },
  "sao-paulo": {
    "visaFiscal": { "content": "Brasil ofrece el visado de nómada digital VITEM XIV, con ingresos mínimos de 1.500 $/mes de fuente extranjera (o un depósito de 18.000 $, más unos 500 $/mes adicionales por cada familiar dependiente), pasaporte con más de 6 meses de validez, antecedentes penales y seguro médico válido en Brasil. La autorización inicial es de 1 año, renovable una vez más (hasta 2 años en total). Desde 2026, ciudadanos de EE. UU., Canadá y Australia necesitan además un eVisa para entrar; los españoles siguen sin necesitar visado de turista para estancias cortas.\n\nSuperar los 183 días de estancia en un periodo de 12 meses activa la residencia fiscal brasileña, con obligación de declarar la renta mundial mediante el carné-leão mensual y la declaración anual (DIRPF), con tipos del 7,5% al 27,5%.", "sources": [{ "label": "Brazil Digital Nomad Visa (2026 Guide) – Citizen Remote", "url": "https://citizenremote.com/visas/brazil-digital-nomad-visa/" }] },
    "sanidad": { "content": "Entre los hospitales privados de referencia en São Paulo están el Hospital Albert Einstein, con departamento específico para pacientes internacionales y cirugía robótica Da Vinci; el Hospital Sírio-Libanês, con atención multilingüe y acuerdos con más de 60 aseguradoras internacionales; y el Hospital Alemão Oswaldo Cruz.\n\nLos hospitales privados suelen exigir un depósito al ingresar si no se presenta un seguro internacional reconocido, por lo que contratar una póliza (SafetyWing, Cigna Global) antes de llegar simplifica mucho el acceso. Un seguro privado básico cuesta entre 55 y 150 $/mes.", "sources": [{ "label": "Hospitals in Brazil for Expatriates – Pacific Prime", "url": "https://www.pacificprime.com/blog/hospitals-in-brazil-for-expatriates.html" }] },
    "barrios": { "content": "1. **Pinheiros** — creativo, caminable y con buena vida nocturna; piso de un dormitorio entre 580 y 870 $/mes.\n2. **Vila Madalena** — el barrio bohemio por excelencia, epicentro cultural; entre 540 y 810 $/mes.\n3. **Jardins** — la opción más elegante y arbolada, la más segura; entre 770 y 1.350 $/mes.\n4. **Vila Mariana** — más económico y tranquilo; entre 480 y 735 $/mes.\n\nEntre los coworkings, WeWork tiene varias sedes desde unos 165 $/mes; Spaces, en Paulista e Itaim, desde 145 $/mes; Civi-co, en Pinheiros, desde 115 $/mes; y Grama Coworking, en Vila Madalena, desde 106 $/mes.", "sources": [{ "label": "São Paulo for Digital Nomads – AluguelSP", "url": "https://aluguelsp.com.br/en/sao-paulo-digital-nomad-guide/" }] },
  },
  "san-jose": {
    "visaFiscal": { "content": "Costa Rica ofrece un visado de nómada digital con un ingreso mínimo exigido de 3.000 $/mes para el solicitante individual (4.000 $/mes con dependientes), verificado con extractos bancarios de al menos 12 meses y una declaración notarial. El visado tiene una validez de 1 año, renovable por otro año más si se cumplen los requisitos de ingresos y se ha permanecido en el país al menos 180 días durante el primer año.\n\nLa gran ventaja fiscal es que Costa Rica exime totalmente del impuesto sobre la renta a los ingresos de fuente extranjera de quienes tienen este visado, sin obligación de presentar declaración local por esa renta. Costa Rica aplica además un sistema fiscal territorial: la renta de fuente extranjera no tributa en el país incluso al margen del visado, salvo para quien se convierte en residente fiscal ordinario.", "sources": [{ "label": "Costa Rica Digital Nomad Visa Guide 2026 – Citizen Remote", "url": "https://citizenremote.com/visas/costa-rica-digital-nomad-visa/" }] },
    "sanidad": { "content": "Entre los hospitales privados de referencia en San José están el Hospital CIMA, acreditado por la JCI y considerado el mayor centro de alta complejidad de Centroamérica; el Hospital Clínica Bíblica, el hospital privado más grande de Costa Rica y el primero del país en obtener la acreditación JCI; y el Hospital La Católica.\n\nLos precios médicos en Costa Rica son, en general, un 65% más bajos que en Estados Unidos o Canadá para procedimientos equivalentes, lo que ha convertido al país en un destino de turismo médico consolidado.", "sources": [{ "label": "Top Hospitals in San José, Costa Rica – FlyHospital", "url": "https://www.flyhospital.com/costa-rica/san-jose/hospitals-san-jose" }] },
    "barrios": { "content": "1. **Barrio Escalante** — el corazón cultural y gastronómico de San José, con cafeterías de buen wifi y ambiente caminable.\n2. **Santa Ana** — zona tranquila en las afueras, segura y con un número creciente de coworkings y cafés pensados para nómadas.\n3. **San Pedro** — barrio joven junto a la Universidad de Costa Rica, económico y con buena oferta de cafés.\n4. **Escazú** — la opción más exclusiva, con vistas a la montaña, centros comerciales de alto nivel y coworkings elegantes.\n\nEntre los coworkings, Santa Ana y Escazú concentran la mayor oferta orientada a nómadas digitales, con opciones desde cafeterías con wifi de calidad hasta espacios profesionales de coworking.", "sources": [{ "label": "Top Areas to Live in San José – Punta", "url": "https://punta.app/digital-nomad-guides/san-jose-costa-rica/top-areas-to-live" }] },
  },
  "los-angeles": {
    "visaFiscal": { "content": "Al igual que en el resto de Estados Unidos, Los Ángeles no ofrece ningún visado de nómada digital. La entrada bajo ESTA permite hasta 90 días de turismo o negocios puntuales, sin autorización para trabajar, y la normativa se fija en dónde se realiza físicamente el trabajo, no en la ubicación del cliente. La excepción fiscal de 90 días y 3.000 $ de facturación a clientes extranjeros aplica igual que en el resto del país, sin legalizar el trabajo a efectos migratorios.\n\nPara estancias más largas, las únicas vías reales son los visados de trabajo tradicionales (O-1, L-1, E-2, H-1B), especialmente habituales en Los Ángeles por su concentración de industria audiovisual y tecnológica.", "sources": [{ "label": "Remote Work Visa 2026 – NNU Immigration", "url": "https://www.nnuimmigration.com/remote-work-visa/" }] },
    "sanidad": { "content": "Estados Unidos no tiene sanidad pública universal y los precios sin seguro pueden ser muy altos. Entre los hospitales de referencia en Los Ángeles están el Cedars-Sinai Medical Center, el UCLA Medical Center y el Keck Hospital of USC. Es imprescindible contratar un seguro médico internacional (Cigna Global, SafetyWing o similar) antes de viajar.\n\nSin seguro, una visita a urgencias puede superar fácilmente los 1.000-3.000 $, y una consulta de médico general privada ronda los 150-300 $.", "sources": [{ "label": "Healthcare and Health Insurance for Expats in the USA – Expat Arrivals", "url": "https://www.expatarrivals.com/americas/usa/miami/healthcare-miami" }] },
    "barrios": { "content": "1. **Santa Mónica** — junto a la playa, ambiente relajado y gran oferta de cafeterías con wifi; de las zonas más caras.\n2. **Venice** — bohemio y creativo, con playa y un ecosistema tech/startup creciente (\"Silicon Beach\").\n3. **Downtown LA (DTLA)** — el distrito de negocios, con lofts reconvertidos y buena conexión de metro.\n4. **Silver Lake/Echo Park** — ambiente creativo e independiente, algo más asequible que la costa.\n\nEntre los coworkings, WeWork tiene varias sedes por toda la ciudad; Cross Campus, con sedes en Santa Mónica y Pasadena, es muy popular entre startups; y The Wing e Industrious ofrecen espacios boutique en Venice y DTLA.", "sources": [{ "label": "Digital Nomad Guide to Los Angeles – Digital Nomad World", "url": "https://digitalnomads.world/city-guide/" }] },
  },
  "reikiavik": {
    "visaFiscal": { "content": "Islandia ofrece un Visado de Larga Duración para Trabajo Remoto, con un ingreso mínimo de 1.000.000 ISK/mes para el solicitante individual (1.300.000 ISK/mes con pareja), procedente de fuentes fuera de Islandia. Permite una estancia de hasta 180 días, no se puede prorrogar una vez dentro del país y no da acceso a la residencia permanente; la tasa es de unos 12.200 ISK.\n\nComo el visado limita la estancia a 180 días, quien lo usa no suele superar el umbral de los 183 días que activaría la residencia fiscal islandesa, por lo que la mayoría de nómadas siguen tributando en su país de origen sobre esa renta.", "sources": [{ "label": "Iceland Digital Nomad Visa – Citizen Remote", "url": "https://citizenremote.com/visas/iceland-digital-nomad-visa/" }] },
    "sanidad": { "content": "El hospital de referencia es el Landspítali, el hospital universitario público de Reikiavik, que concentra la atención de urgencias y las especialidades más complejas del país.\n\nMientras no se accede al sistema público (tras 6 meses de residencia), conviene contratar un seguro privado internacional, con primas de entre 15.000 y 35.000 ISK/mes según edad y cobertura; para solicitar ciertos permisos de residencia se exige una cobertura mínima de 2.000.000 ISK. Precios de bolsillo: consulta de médico general, 500-900 ISK; especialista privado, 15.000-30.000 ISK por visita.", "sources": [{ "label": "Healthcare in Iceland for Expats 2026 – ExpatLife", "url": "https://expatlife.ai/iceland/healthcare" }] },
    "barrios": { "content": "1. **Miðborg** (centro) — la zona con más oferta de ocio y restauración, aunque también la más cara.\n2. **Hlíðar** — alojamiento algo más económico que el centro, buena opción para presupuestos ajustados.\n3. **Vesturbær** — zona emergente al norte que combina acceso a la ciudad con entorno natural, ambiente tranquilo.\n4. **Laugardalur** — barrio residencial con buena conexión de transporte público, más orientado a familias.\n\nUn piso de un dormitorio en el centro ronda de media 1.506 $/mes. Entre los coworkings, Regus, en Kalkofnsvegur, ofrece 48 oficinas privadas y espacios de hot-desking desde unos 500 $/mes; Innovation House y Hitt Húsið son otras opciones orientadas a startups y perfiles creativos.", "sources": [{ "label": "The Full Digital Nomad Guide to Reykjavik", "url": "https://digitalnomads.world/city-guide/reykjavik/" }] },
  },
  "katmandu": {
    "visaFiscal": { "content": "Nepal ha anunciado un visado de nómada digital de 5 años (renovable anualmente hasta ese límite), con un ingreso mínimo exigido de 1.500 $/mes o 20.000 $ en ahorros, seguro médico internacional de 100.000 $ y antecedentes penales, pero a mediados de 2026 el portal de solicitud seguía sin estar operativo. Mientras tanto, la práctica habitual es entrar con el visado de turista a la llegada, en una zona legal ambigua para el teletrabajo que no se persigue activamente pero tampoco está formalmente autorizada.\n\nCuando el visado de nómada digital entre en vigor, se prevé un tipo fijo del 5% sobre la renta extranjera solo para quien supere los 186 días de estancia bajo ese estatus; instalarse en Nepal no elimina, en cualquier caso, las obligaciones fiscales en el país de origen.", "sources": [{ "label": "Nepal Digital Nomad Visa 2026 – Shareuhack", "url": "https://www.shareuhack.com/en/posts/nepal-digital-nomad-visa-2026" }] },
    "sanidad": { "content": "El hospital de referencia para extranjeros es el CIWEC Hospital, fundado en 1982 específicamente para atender a diplomáticos y cooperantes, con más de 80 especialistas, décadas de experiencia en medicina del viajero y pacientes de más de 170 nacionalidades. El Norvic International Hospital es otra opción bien valorada para atención internacional.\n\nUn seguro internacional de viaje es imprescindible, ya que la sanidad pública nepalí está pensada para residentes locales y no cubre a visitantes extranjeros.", "sources": [{ "label": "CIWEC Hospital – About Us", "url": "https://ciwechospital.com/about-us/" }] },
    "barrios": { "content": "1. **Thamel** — el barrio más animado y turístico, con cafés populares entre nómadas como Himalayan Java.\n2. **Naxal** — alternativa más tranquila, con The Learning Centre como coworking de referencia.\n3. **Patan/Lalitpur** — ambiente más relajado, con Kausimaa Coworking y su patio exterior para trabajar.\n\nOtros barrios habituales entre la comunidad extranjera son Baneshwor, Sankhamul, Jawlakhel y Baluwatar. Entre los coworkings, The Learning Centre, en Naxal, destaca por su ambiente tranquilo; Raya Space ofrece zonas verdes; The 100 Spaces, en Baneshwor, es una opción silenciosa y profesional; y Regus, en Trade Tower, da acceso 24/7 a un precio más elevado que el resto.", "sources": [{ "label": "Kathmandu Digital Nomad Coworking Guide – Roampads", "url": "https://www.roampads.com/blog/kathmandu-digital-nomad-coworking-guide" }] },
  },
  "tulum": {
    "visaFiscal": { "content": "México no cuenta con una figura oficial de \"visa de nómada digital\"; el trámite aplicable es la Visa de Residente Temporal, que se solicita en el consulado mexicano correspondiente (a través del sistema SRE/MiConsulado) y que, una vez obtenida, se canjea ante el Instituto Nacional de Migración (INM). Como alternativa más simple, la mayoría de nacionalidades (incluida la española) puede entrar como turista hasta 180 días sin visado previo, suficiente para estancias cortas en Tulum.\n\nLos documentos requeridos para la residencia temporal son el pasaporte, el formulario de solicitud, una fotografía y la prueba de solvencia económica, cuyos requisitos concretos varían según el consulado. Para 2026, la visa consular cuesta 56 dólares, el canje por un año cuesta MXN $11.141, y la validez puede llegar hasta 4 años.\n\nEn el plano fiscal, se es residente si se permanece 183 días en México o si el centro de intereses vitales se encuentra en el país. La tabla del ISR 2026 arranca en 1,92% y sube progresivamente hasta el 35% para las rentas más altas.", "sources": [{ "label": "Visa de residencia temporal – Secretaría de Relaciones Exteriores (gob.mx)", "url": "https://www.gob.mx/sre/acciones-y-programas/visa-de-residencia-temporal" }] },
    "sanidad": { "content": "Tulum en sí tiene una oferta hospitalaria limitada; para atención privada de mayor nivel, la mayoría de expatriados y nómadas acude a Playa del Carmen (a 45 minutos), donde está el Hospiten Riviera Maya, o a Cancún, con el Hospital Galenia y el Hospital Amerimed. Para urgencias menores, Tulum cuenta con clínicas privadas como Hospiten Tulum y Médica Tulum.\n\nLos precios sin seguro son razonables comparados con EE. UU., pero conviene contratar un seguro internacional (SafetyWing, Cigna Global) antes de llegar: una póliza básica cuesta entre 45 y 120 $/mes, y agiliza mucho el acceso a la atención privada.", "sources": [{ "label": "Hospiten Riviera Maya – About", "url": "https://www.hospiten.com/en/hospitals/hospiten-riviera-maya" }] },
    "barrios": { "content": "1. **Aldea Zama** — la zona más nueva y orientada a nómadas, con cafés de buen wifi y edificios modernos; piso de un dormitorio entre 650 y 1.100 $/mes.\n2. **La Veleta** — más local y asequible, a poca distancia en bici del centro; entre 450 y 750 $/mes.\n3. **Centro** — el pueblo tradicional, con más vida de barrio y precios más bajos; entre 400 y 650 $/mes.\n4. **Zona Hotelera (la playa)** — frente al mar, la opción más cara y con menos infraestructura eléctrica estable; desde 900 $/mes.\n\nEntre los coworkings, Selina Tulum combina alojamiento y espacio de trabajo con eventos para nómadas; Dharma Coworking, en el centro, es más tranquilo y económico; y Atypical Tulum ofrece un espacio boutique cerca de Aldea Zama.", "sources": [{ "label": "Tulum Digital Nomad Guide – Nomads.com", "url": "https://nomads.com/guide/tulum" }] },
  },
  "austin": {
    "visaFiscal": { "content": "Al igual que en el resto de Estados Unidos, Austin no ofrece ningún visado de nómada digital. La entrada bajo ESTA permite hasta 90 días de turismo o negocios puntuales, sin autorización para trabajar, y la normativa se fija en dónde se realiza físicamente el trabajo, no en la ubicación del cliente. La excepción fiscal de 90 días y 3.000 $ de facturación a clientes extranjeros aplica igual que en el resto del país, sin legalizar el trabajo a efectos migratorios.\n\nPara estancias más largas, las únicas vías reales son los visados de trabajo tradicionales (O-1, L-1, E-2, H-1B), muy habituales en Austin por su concentración de startups tecnológicas. Texas no tiene impuesto estatal sobre la renta, lo que reduce la carga fiscal para quien sí logra residencia legal de trabajo.", "sources": [{ "label": "Remote Work Visa 2026 – NNU Immigration", "url": "https://www.nnuimmigration.com/remote-work-visa/" }] },
    "sanidad": { "content": "Estados Unidos no tiene sanidad pública universal y los precios sin seguro pueden ser muy altos. Entre los hospitales de referencia en Austin están el St. David's Medical Center, el Ascension Seton Medical Center Austin y el Dell Seton Medical Center at The University of Texas. Es imprescindible contratar un seguro médico internacional (Cigna Global, SafetyWing o similar) antes de viajar.\n\nSin seguro, una visita a urgencias puede superar fácilmente los 1.000-3.000 $, y una consulta de médico general privada ronda los 150-300 $.", "sources": [{ "label": "St. David's Medical Center – About", "url": "https://stdavids.com/locations/st-davids-medical-center" }] },
    "barrios": { "content": "1. **Downtown** — el centro financiero y de ocio, con rascacielos y vida nocturna; de las zonas más caras.\n2. **South Congress (SoCo)** — bohemio, con tiendas vintage, murales y buena oferta de cafés con wifi.\n3. **East Austin** — el barrio creativo de moda, con food trucks, arte urbano y precios algo más asequibles.\n4. **The Domain** — zona residencial y de oficinas al norte, con gran concentración de empresas tech.\n\nEntre los coworkings, Capital Factory es el hub de referencia para startups en el centro de Texas; WeWork tiene varias sedes por la ciudad; y Native Coworking Space ofrece un ambiente más boutique en el centro.", "sources": [{ "label": "Capital Factory – About", "url": "https://www.capitalfactory.com/about/" }] },
  },
  "bucarest": {
    "visaFiscal": { "content": "Rumanía ofrece un visado de nómada digital (Long-Stay Visa for Remote Activity) que exige unos ingresos mínimos de aproximadamente 5.600 €/mes (el equivalente a tres veces el salario medio bruto rumano), mantenidos durante los 6 meses previos a la solicitud. El visado inicial permite una estancia de 90 días; dentro de los 30 días siguientes a la llegada hay que solicitar el permiso de residencia, con una duración inicial de 6 meses ampliable hasta un total de 36 meses si se sigue acreditando el ingreso mínimo ante la agencia tributaria (ANAF).\n\nEntre los documentos exigidos están el contrato de trabajo remoto o la actividad freelance, extractos bancarios de los últimos 6 meses, antecedentes penales apostillados, seguro médico con cobertura mínima de 30.000 €, y prueba de alojamiento.\n\nLa gran ventaja fiscal es que, durante los primeros 6 meses (o mientras no se superen los 183 días de estancia anual), los ingresos de fuente extranjera están exentos de IRPF y de cotizaciones sociales en Rumanía. Al superar los 183 días en un periodo de 12 meses se activa la residencia fiscal y la obligación de registrarse ante ANAF en un plazo de 30 días, aunque la exención suele seguir aplicando a las rentas de origen extranjero.", "sources": [{ "label": "Romania Digital Nomad Visa 2026 – Romania Experience", "url": "https://www.romaniaexperience.com/romania-digital-nomad-visa-full-guide/" }] },
    "sanidad": { "content": "Entre los hospitales privados de referencia en Bucarest están el Regina Maria, la mayor red hospitalaria privada de Rumanía con atención en varios idiomas; Medicover Hospital, con estándares occidentales y buena reputación entre expatriados; y el Sanador Hospital, especializado en cirugía y diagnóstico de alta gama.\n\nUn seguro internacional (SafetyWing, Cigna Global) sigue siendo recomendable pese al coste moderado de la sanidad privada rumana: una consulta con especialista privado ronda los 40-80 €, muy por debajo de la media de Europa occidental.", "sources": [{ "label": "Regina Maria Private Healthcare Network – About", "url": "https://www.reginamaria.ro/en/about-us" }] },
    "barrios": { "content": "1. **Centrul Vechi (Casco Antiguo)** — el corazón histórico y turístico, con la mayor vida nocturna; alquiler de un dormitorio entre 400 y 650 €/mes.\n2. **Herăstrău/Aviatorilor** — junto al parque más grande de la ciudad, zona residencial tranquila y segura; entre 500 y 800 €/mes.\n3. **Dorobanți** — elegante y céntrico, con buena oferta de cafés y restaurantes; entre 450 y 700 €/mes.\n4. **Floreasca** — barrio de oficinas y ocio en auge, popular entre profesionales jóvenes; entre 420 y 680 €/mes.\n\nEntre los coworkings, Mindspace e Impact Hub Bucharest tienen sedes bien conectadas en el centro; Spaces cuenta con varias ubicaciones por la ciudad; y Regus ofrece oficinas flexibles en los principales distritos de negocio.", "sources": [{ "label": "Impact Hub Bucharest – About", "url": "https://bucharest.impacthub.net/" }] },
  },
  "aman": {
    "visaFiscal": { "content": "Jordania no cuenta con ningún visado específico de nómada digital. La vía habitual es el visado de turista, con una validez de hasta 3 meses según nacionalidad (los españoles pueden obtenerlo a la llegada o mediante el Jordan Pass, que incluye la entrada a Petra), pero las prórrogas más allá de ese periodo son complicadas y no existe una vía formal para estancias largas sin patrocinio de un empleador local.\n\nEn la práctica, quien quiere quedarse más de 3 meses trabajando en remoto suele optar por salir del país periódicamente (\"visa runs\") o tramitar un visado de trabajo tradicional si consigue un contrato con una empresa jordana, algo poco habitual entre nómadas digitales. No existe un régimen fiscal específico para nómadas, y la residencia fiscal jordana se activa principalmente al superar los 183 días de estancia.", "sources": [{ "label": "Jordan Work Permits & Visas – Playroll", "url": "https://www.playroll.com/work-permit-visas/jordan" }] },
    "sanidad": { "content": "Entre los hospitales privados de referencia en Amán están el Istishari Hospital, uno de los más modernos de Oriente Medio y con departamento internacional; el Jordan Hospital, con más de 30 años de trayectoria y acreditación internacional; y el King Hussein Cancer Center, referencia regional en oncología.\n\nJordania es un destino consolidado de turismo médico, con precios notablemente más bajos que en Europa occidental o EE. UU. para procedimientos equivalentes. Aun así, conviene contratar un seguro internacional (SafetyWing, Cigna Global) antes de llegar, ya que los hospitales privados suelen exigir depósito o prueba de cobertura al ingresar.", "sources": [{ "label": "Istishari Hospital – About", "url": "https://www.istishari.com/en/about-us" }] },
    "barrios": { "content": "1. **Abdoun** — el barrio más exclusivo y diplomático, con restaurantes internacionales y buena infraestructura; el más caro de la ciudad.\n2. **Jabal Amman/Rainbow Street** — el corazón cultural e histórico, peatonal en parte, con cafés y galerías; ambiente muy popular entre extranjeros.\n3. **Sweifieh** — zona comercial y residencial de nivel medio-alto, con centros comerciales y buena conexión.\n4. **Shmeisani** — distrito de negocios con oficinas, bancos y hoteles, bien conectado con el resto de la ciudad.\n\nLa comunidad nómada digital en Amán es todavía pequeña, pero crecen los espacios como The Bunker, Zinc Coworking Space y Cube, concentrados sobre todo en Abdoun y Shmeisani.", "sources": [{ "label": "Amman Digital Nomad Guide – Nomads.com", "url": "https://nomads.com/guide/amman" }] },
  },
  "dakar": {
    "visaFiscal": { "content": "Senegal ofrece un visado específico para nómadas digitales que permite trabajar online desde el país durante hasta 6 meses, ampliable por otros 6 (hasta 1 año en total). Cuesta unos 250.000 CFA (aproximadamente 450 $) y exige justificar la actividad como empleado o autónomo de una empresa extranjera; este visado no permite trabajar para una empresa senegalesa ni facturar a clientes locales.\n\nComo alternativa más simple para estancias cortas, el visado de turista cuesta unos 50.000 CFA (90 $), tiene una validez de 90 días y puede ampliarse otros 90 a través de la Direction Générale de la Police Nationale en Dakar. No existe un régimen fiscal específico para nómadas digitales: la residencia fiscal senegalesa se activa principalmente al superar los 183 días de estancia en el país.", "sources": [{ "label": "Digital Nomads in Senegal – Expat.com", "url": "https://www.expat.com/en/guide/africa/senegal/37428-working-remotely-from-senegal.html" }] },
    "sanidad": { "content": "Entre los centros privados de referencia en Dakar están el Hôpital Principal de Dakar, el más grande y mejor equipado del país; la Clinique Pasteur, con buena reputación entre la comunidad expatriada; y la Clinique de la Madeleine, orientada a atención internacional.\n\nUn seguro internacional (SafetyWing, Cigna Global) es prácticamente imprescindible: la sanidad pública tiene recursos limitados, y los hospitales privados de nivel internacional exigen normalmente depósito o prueba de cobertura al ingresar.", "sources": [{ "label": "Hôpital Principal de Dakar – Présentation", "url": "https://www.hopitalprincipal.sn/" }] },
    "barrios": { "content": "1. **Plateau** — el centro administrativo y de negocios, con la mayor concentración de oficinas y bancos.\n2. **Almadies** — la zona más exclusiva junto al mar, con restaurantes internacionales, playas y la mejor infraestructura de la ciudad.\n3. **Ngor** — barrio pesquero junto a la playa, ambiente más relajado y popular entre surfistas y nómadas.\n4. **Mermoz** — zona residencial de nivel medio, tranquila y bien conectada con Almadies y el centro.\n\nLa comunidad nómada digital en Dakar es pequeña pero activa, con espacios como Jokkolabs Dakar (uno de los hubs tech pioneros de África occidental) y CTIC Dakar, ambos orientados a startups y trabajo remoto.", "sources": [{ "label": "Senegal Digital Nomad Guide – Digital Nomads in Africa", "url": "https://digitalnomadsinafrica.com/destinations/senegal-digital-nomad-guide/" }] },
  },
};

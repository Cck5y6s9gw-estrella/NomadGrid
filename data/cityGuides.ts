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
  }
};

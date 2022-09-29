export default {
  global: {
    componenteFormativo: 'Pronóstico de necesidades',
    descripcionCurso:
      'Determinar los actores de la cadena logística e identificar necesidades del cliente, de acuerdo con mercancías y actividades económicas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Oferta y demanda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos básicos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principios, pronósticos y métodos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Actividades económicas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Métodos de compra de mercancías',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clases, participación y evolución del sector',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Plan de mercadeo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Comportamiento del producto en el mercado',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de consumidores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Comportamientos, motivos y hábitos de compra',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Diagnóstico',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Análisis factores de oferta y demanda, de acuerdo con productos y actividad empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Factores determinantes de la oferta y la demanda',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Técnicas para determinar la oferta y la demanda',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Matriz DOFA',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Análisis de la matriz',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Estudio de casos',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Enciclopedia Económica. (2020). Demanda de mercado.',
      link: 'https://enciclopediaeconomica.com/demanda-de-mercado/',
    },
    {
      referencia: 'Enciclopedia Económica. (2021). Oferta de mercado',
      link: 'https://enciclopediaeconomica.com/oferta-de-mercado/',
    },
    {
      referencia:
        'Martínez, J. (2020). Resumen cambios de oferta y demanda y efectos en el equilibrio de mercado. Econosublime.',
      link:
        'http://www.econosublime.com/2018/09/cambios-simultaneos-demanda-oferta.html',
    },
    {
      referencia:
        'Martínez, J. (2021). Cuadro resumen tipos de mercado. Econosublime.',
      link:
        'http://www.econosublime.com/2018/09/cuadro-resumen-tipos-mercado.html',
    },
    {
      referencia:
        'Montagud, N. (2021). Los 18 tipos de mercados y sus características. Psicología y Mente.',
      link: 'https://psicologiaymente.com/cultura/tipos-mercados',
    },
    {
      referencia:
        'Moreno, M. (2010). ¿Qué es la Elasticidad de la Demanda? El Blog Salmón',
      link:
        'https://www.elblogsalmon.com/conceptos-de-economia/que-es-la-elasticidad-de-la-demanda',
    },
    {
      referencia:
        'Solomon, M. (2021). Comportamiento del Consumidor (7.a ed.). Pearson Educación.',
      link:
        'https://www.academia.edu/34920368/Comportamiento_del_consumidor_7ed_Michael_R_Solomon',
    },
    {
      referencia:
        'Yirepa. (s. f.). La elasticidad de la oferta. Yirepa. Economía y Finanzas.',
      link: 'https://yirepa.es/la%20elasticidad%20de%20la%20oferta.html',
    },
  ],
  glosario: [
    {
      termino: 'Correlación',
      significado:
        'Es el vínculo entre dos variables que se modifican en forma directamente proporcional.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'Es el reconocimiento que se realiza a una situación en particular para determinar su tendencia.',
    },
    {
      termino: 'Desviación',
      significado:
        'En estadística, es la diferencia entre el valor de una variable y los valores de la media de esa variable.',
    },
    {
      termino: 'Dispersión',
      significado:
        'En estadística, las medidas de dispersión son el grado en que una distribución se estira o encoge.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Recolección de información sobre preguntas de un cuestionario, sin modificar el medio ambiente ni los sujetos de estudio, para consignar los datos en forma gráfica o numérica.',
    },
    {
      termino: 'Estadística',
      significado:
        'Rama de las matemáticas basada en las leyes de probabilidad, por medio de la cual se analizan las variables y factores de los datos, con el fin de organizarlos, interpretarlos y entregarlos.',
    },
    {
      termino: 'Logística',
      significado:
        'Conjunto de modos y medios que se emplean para organizar los procesos, especialmente, de recibo y entrega de bienes o suministros.',
    },
    {
      termino: 'Mercado',
      significado:
        'Interacción entre productores y consumidores donde se intercambian bienes o servicios.',
    },
    {
      termino: 'Método',
      significado:
        'Procedimiento sistemático y en orden para obtener un fin específico.',
    },
    {
      termino: 'Pronóstico',
      significado:
        'Anticipación del desarrollo de un proceso o de un hecho futuro a partir de indicios.',
    },
    {
      termino: 'Rango',
      significado:
        'Intervalo entre valor máximo y valor mínimo, siendo indicador de la dispersión de los datos, que en forma directamente proporcional revelan que, a mayor dispersión, mayor rango.',
    },
    {
      termino: 'Variables',
      significado:
        'Medición u observación de características que asumen rangos diferentes y que al oscilar generan valores numéricos. ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Regulo Castro Barón',
        cargo: 'Experto Temático',
        centro:
          'Complejo Tecnológico Agroindustrial, Pecuario y Turístico – CTAPT – Regional Antioquia',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñador Instruccional',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Regional Tolima – Centro Agropecuario La Granja',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Marcela Perez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Gómez Delgado',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez ',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

export default {
  global: {
    componenteFormativo:
      'La explotación acuícola criterios técnicos y normas vigentes',
    descripcionCurso:
      'El componente formativo sobre bioseguridad en acuicultura abarca normas, riesgos y buenas prácticas para prevenir enfermedades en especies acuáticas. Incluye manejo adecuado de instalaciones, uso responsable de medicamentos, control de plagas, cuarentena, y selección de semillas. También se menciona la importancia de condiciones sanitarias y de personal capacitado para garantizar una producción acuícola sostenible y segura.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Bioseguridad',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plan de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Área de explotación acuícola',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Instalaciones, equipos y utensilios',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Selección de semilla',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Prácticas rutinarias en bioseguridad',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Condiciones sanitarias en la producción acuícola',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Bioseguridad',
      referencia:
        'TvAgro. (2021). Como es un proyecto acuicola bioseguro y rentable - TvAgro por Juan Gonzalo Angel Restrepo. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6lgoLJgwz5A',
    },
    {
      tema: 'Plan de producción',
      referencia:
        'La Finca de Hoy. (2022). Pasos para iniciar una piscicultura a pequeña escala. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1tn3b4Cpnxg',
    },
    {
      tema: 'Área de explotación acuícola',
      referencia:
        'Sin Ruta Al Campo. (2022). Mojarras o camarón que es más rentable | Cosecharemos 15 toneladas | Equipamiento y asesorías [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6XAJKSWtTyw',
    },
    {
      tema: 'Selección de semilla',
      referencia:
        'AGRONEGOCIOS. (2021). COMO CALCULAR EL ALIMENTO DIARIO DE LOS PECES [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_vyef3bw5cc',
    },
    {
      tema: 'Condiciones sanitarias en la producción acuícola',
      referencia:
        'aTech ES (2021). El Futuro de la Acuicultura y sus Nuevas Tecnologías.  [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZD2VTgW52Lc',
    },
  ],
  glosario: [
    {
      termino: 'Alevinos',
      significado: 'etapa temprana de desarrollo de peces en acuicultura.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'estrategias y medidas para prevenir riesgos sanitarios en la acuicultura.',
    },
    {
      termino: 'Cuarentena',
      significado:
        'aislamiento temporal de animales nuevos para evitar la propagación de enfermedades.',
    },
    {
      termino: 'Enfermedades zoonóticas',
      significado: 'enfermedades que se transmiten de animales a humanos.',
    },
    {
      termino: 'Especies invasoras',
      significado:
        'organismos no nativos que se introducen en un ecosistema, afectando negativamente la biodiversidad.',
    },
    {
      termino: 'Instalaciones',
      significado:
        'infraestructura y equipo necesario para la producción acuícola.',
    },
    {
      termino: 'Medicamentos veterinarios',
      significado:
        'sustancias utilizadas para prevenir o tratar enfermedades en animales acuáticos.',
    },
    {
      termino: 'Patógenos',
      significado: 'organismos que causan enfermedades en animales.',
    },
    {
      termino: 'Plagas',
      significado:
        'organismos no deseados que pueden afectar negativamente la producción acuícola.',
    },
    {
      termino: 'Tratamiento a estanques',
      significado:
        'conjunto de acciones como limpieza y desinfección para mantener la salud de los organismos acuáticos.',
    },
  ],
  referencias: [
    {
      referencia: 'FAO. (2011). <i>Manual básico de sanidad piscícola</i>. ',
      link: 'http://www.fao.org/3/a-as830s.pdf',
    },
    {
      referencia:
        'Departamento de Agricultura de Estados Unidos, Programa Nacional de Acreditación Veterinaria. (2011). <i>Módulo 15: Bioseguridad y prevención de enfermedades en la acuicultura</i>. ',
      link:
        'http://www.cfsph.iastate.edu/pdf-library/Acreditacion-Veterinaria/NVAP-Mod-15-AQBIO.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Frank Esquivel Acosta',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y servicios - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
         nombre: 'Nombre',
         cargo: 'Animador y productor audiovisual',
         centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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

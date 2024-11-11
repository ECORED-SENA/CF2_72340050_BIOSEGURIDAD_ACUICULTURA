<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Reconocer los principios, prácticas y normativas relacionadas con la bioseguridad en acuicultura, incluyendo la prevención de riesgos sanitarios, el manejo de instalaciones y la selección de semillas.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo de la bioseguridad en acuicultura? Proteger la salud de los animales acuáticos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Prevenir riesgos sanitarios y proteger la salud de los animales, el ambiente y las personas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Garantizar la calidad del agua en las instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evitar la introducción de especies invasoras en los estanques.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                '¿Cuál es el principal objetivo de la bioseguridad en acuicultura? Proteger la salud de los animales acuáticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué factor es crucial para seleccionar el área de explotación acuícola?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La disponibilidad de instalaciones adecuadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La calidad físico-química del agua.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'El clima de la región.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La cantidad de personal disponible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes no es un riesgo relacionado con el transporte de animales acuáticos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora de la salud de los animales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aparición de nuevos patógenos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Traslado de organismos sin síntomas de enfermedad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Falta de información sobre las características biológicas de las especies.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de explotación se utiliza principalmente para el repoblamiento?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Superintensiva.', esCorrecta: false },
            { id: 'b', texto: 'Extensiva.', esCorrecta: true },
            { id: 'c', texto: 'Semi-intensiva.', esCorrecta: false },
            { id: 'd', texto: 'Intensiva.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué práctica es fundamental para evitar la contaminación en la producción acuícola?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar productos veterinarios sin restricciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar el control de plagas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Instalar sistemas de desinfección para vehículos y personas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar el número de visitantes a las instalaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué es lo más importante al seleccionar semillas para la producción acuícola?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que las semillas sean de buen tamaño.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Que los alevinos estén libres de enfermedades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que las semillas sean de varias especies diferentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que las semillas sean baratas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes no es un aspecto clave en las prácticas rutinarias de bioseguridad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la vigilancia de la salud animal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cuarentena de nuevos animales.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Control de visitas.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Desinfección de utensilios de pesca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué debe hacerse con los medicamentos veterinarios vencidos en una explotación acuícola?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Desecharlos adecuadamente.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Usarlos en pequeñas cantidades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mezclarlos con los medicamentos actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenarlos junto a los medicamentos no vencidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Todas las explotaciones acuícolas en Colombia deben estar registradas ante el ICA.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'El agua puede actuar como un vector para transportar enfermedades en las explotaciones acuícolas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

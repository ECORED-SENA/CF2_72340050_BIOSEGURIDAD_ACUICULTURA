<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Plan de producción
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El plan de producción es un conjunto de actividades técnicas y conocimientos diseñados por la empresa a partir de su misión y visión, cuyo objetivo es la producción de organismos acuáticos con fines de alimentación, repoblamiento u ornamentación (acuariofilia).
    .row.bg-c9
      .col-12
        .px-5
          .row.mb-4
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Tipos de explotaciones
          p.mb-4(data-aos="fade-right") Las explotaciones acuícolas se dividen según el tipo de producción y la especie a cultivar.
          .row.justify-content-center
            .col-lg-10(data-aos="fade-left")
              .row.justify-content-center
                .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img3.png', alt='', style='width: 660px')
                .col-10.col-lg.bg-c10
                  .p-4
                    .row.mb-3
                      .col-12
                        .p-3.bg-c11
                          p #[b Según la producción.]
                          ul.lista-ul.ms-2
                            li.d-flex.mb-0
                              i.fas.fa-check-circle(style="color: #00455A")
                              |
                              p.mb-0 Repoblamiento.
                            li.d-flex.mb-0
                              i.fas.fa-check-circle(style="color: #00455A")
                              |
                              p.mb-0 Extensivas.
                            li.d-flex.mb-0
                              i.fas.fa-check-circle(style="color: #00455A")
                              |
                              p.mb-0 Semi-intensivas.
                            li.d-flex.mb-0
                              i.fas.fa-check-circle(style="color: #00455A")
                              |
                              p.mb-0 Intensivas.
                            li.d-flex.mb-0
                              i.fas.fa-check-circle(style="color: #00455A")
                              |
                              p.mb-0 Superintensivas.
                    .row
                      .col-12
                        .p-3.bg-c11
                          p #[b Según la especie.]
                          ul.lista-ul.ms-2
                            li.d-flex.mb-0
                              i.fas.fa-check-circle(style="color: #00455A")
                              |
                              p.mb-0 Peces (tilapia, bocachico, cachama).
                            li.d-flex.mb-0
                              i.fas.fa-check-circle(style="color: #00455A")
                              |
                              p.mb-0 Crustáceos (camarón y langostinos).
    Separador
    #t_2_1
    .titulo-segundo.color-secundario
      h2 2.1 Área de explotación acuícola
    .row.mb-4
      .col.bg-c12.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12
            .p-3
              .row.align-items-center
                .col-md-auto
                  figure
                    img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 120px').m-auto
                .col
                  p.mb-0 Antes de decidir la ubicación del sitio, es necesario investigar su uso previo, realizar pruebas para confirmar o descartar la presencia de contaminantes químicos que puedan afectar el desarrollo y la salud de las especies a cultivar, y cumplir con la legislación local vigente.
      .col-lg-auto.ps-lg-0.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img4.png', alt='', style='width: 350px').m-auto
    p.mb-4(data-aos="fade-right") #[b El agua], como recurso principal para #[b la producción], debe tener #[b óptimas características físico químicas] para garantizar el desarrollo adecuado de los organismos #[b cultivados], y no estar contaminada con residuos agrícolas, mineros, industriales o domésticos. Para asegurar el éxito del proyecto, es importante seguir las siguientes pautas:
    TabsA.color-acento-botones(data-aos="fade-down")
      .tarjeta.color-acento-botones.p-4(titulo="Instalar sistema")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p #[b Instalar sistema]
            p.mb-0 Verificar que no haya contaminación del suelo o el agua.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img5.png', alt='', style='width: 400px').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Área sin riesgos")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p #[b Área sin riesgos]
            p.mb-0 Garantizar que el área circundante no presente riesgos potenciales.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img6.png', alt='', style='width: 400px').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Diseño producción")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p #[b Diseño producción]
            p.mb-0 Implementar medidas preventivas para evitar la contaminación.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img7.png', alt='', style='width: 400px').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Respeto ambiente")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p #[b Respeto ambiente]
            p.mb-0 La explotación acuícola debe ser amigable con el medio ambiente.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img8.png', alt='', style='width: 400px').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Pruebas pre-construcción")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p #[b Pruebas pre-construcción]
            p.mb-0 Analizar plaguicidas, herbicidas y metales pesados en laboratorios certificados.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img9.png', alt='', style='width: 400px').m-auto
    Separador
    #t_2_2
    .titulo-segundo.color-secundario
      h2 2.2 Instalaciones, equipos y utensilios
    p.mb-4(data-aos="fade-right") Toda explotación acuícola debe contar con instalaciones, equipos y utensilios adecuados para el correcto desarrollo de las actividades productivas, y disponer de áreas suficientes para los procesos de producción. Se deben considerar los siguientes aspectos:
    TabsB.color-acento-contenido.mb-5(data-aos="fade-down")
      .py-4.py-md-5.bg-c13.p-4(titulo="Definir entrada" :icono="require('@/assets/curso/tema2/img2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Definir entrada]
            p.mb-0 Controlar el acceso de vehículos, personas, equipos y materiales con cercado perimetral.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img10.png', alt='', style='width: 500px').m-auto
      .py-4.py-md-5.bg-c13.p-4(titulo="Restringir visitas" :icono="require('@/assets/curso/tema2/img3.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Restringir visitas]
            p.mb-0 Implementar un vaciado sanitario y evaluar el nivel de riesgo.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img11.png', alt='', style='width: 500px').m-auto
      .py-4.py-md-5.bg-c13.p-4(titulo="Separar áreas" :icono="require('@/assets/curso/tema2/img4.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Separar áreas]
            p.mb-0 Reducir el riesgo de contaminación biológica y química.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img12.png', alt='', style='width: 500px').m-auto
      .py-4.py-md-5.bg-c13.p-4(titulo="Espacio suficiente" :icono="require('@/assets/curso/tema2/img5.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Espacio suficiente]
            p.mb-0 Facilitar el uso de equipos y garantizar actividades y limpieza adecuadas.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img13.png', alt='', style='width: 500px').m-auto
      .py-4.py-md-5.bg-c13.p-4(titulo="Asegurar tránsito" :icono="require('@/assets/curso/tema2/img6.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Asegurar tránsito]
            p.mb-0 Facilitar el movimiento de trabajadores, equipos y materiales entre las áreas.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img14.png', alt='', style='width: 500px').m-auto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Bioseguridad
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p La bioseguridad es una estrategia integral que abarca la normatividad vigente y los reglamentos para el análisis y gestión de riesgos relacionados con la salud de los animales cultivados, el medio ambiente y la salud humana.
        .row.justify-content-center
          .col-10.col-md-6.mb-4.mb-lg-0
            .p-3.bg-c2.h-100
              figure.mb-3
                img(src="@/assets/curso/tema1/img1.svg", alt="alt", style="width: 110px")
              p #[b Objetivo]
              p.mb-0 Su objetivo es prevenir, enfrentar y detectar riesgos para la salud y la vida, lo que convierte a la bioseguridad en un elemento fundamental para el desarrollo del sector acuícola.
          .col-10.col-md-6
            .p-3.bg-c2
              figure.mb-3
                img(src="@/assets/curso/tema1/img2.svg", alt="alt", style="width: 110px")
              p #[b Importancia]
              p.mb-0 La bioseguridad es esencial para cumplir con las expectativas sobre la inocuidad de los alimentos producidos, garantizar la sostenibilidad del sector acuícola, desarrollar estrategias que prevengan la transmisión de enfermedades zoonóticas y proteger el medio ambiente cercano a las explotaciones acuícolas.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img1.png", alt="alt", style="width: 360px").m-auto
    .row.mb-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Enfermedades por transporte de animales acuáticos
    .row.mb-4
      .col-lg-8.bg-c4.order-2.order-lg-1(data-aos="fade-right")
        .p-3
          .row
            .col-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/intro/img1.svg", alt="", style="width: 80px").m-auto
            .col
              p.mb-0 Las enfermedades pueden propagarse fácilmente a través de fronteras internacionales, causando importantes consecuencias económicas y sociales. El aumento del comercio nacional e internacional facilita la introducción de nuevas enfermedades, especialmente si este comercio se realiza de manera desorganizada.
      .col-lg-4.ps-lg-0.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img2.png", alt="", style="width: 450px").m-auto
    p.mb-4(data-aos="fade-down") El incremento en el transporte de animales acuáticos genera riesgos como:
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-10.col-md-8.col-lg.m-2
        .row.h-100
          .col-md-auto.bg-c5
            .p-3
              figure
                img(src="@/assets/curso/tema1/img5.svg", alt="", style="width: 60px").m-auto
          .col.bg-c6
            .p-3.h-100
              .row.align-items-center.h-100
                .col-12
                  p.mb-0 Aparición de nuevos patógenos.
      .col-10.col-md-8.col-lg.m-2
        .row
          .col-md-auto.bg-c5
            .p-3
              figure
                img(src="@/assets/curso/tema1/img6.svg", alt="", style="width: 60px").m-auto
          .col.bg-c6
            .p-3.h-100
              .row.align-items-center.h-100
                .col-12
                  p.mb-0 Transferencia de organismos que aún no presentan síntomas ni signos de enfermedad.
      .col-10.col-md-8.col-lg.m-2
        .row
          .col-md-auto.bg-c5
            .p-3
              figure
                img(src="@/assets/curso/tema1/img7.svg", alt="", style="width: 60px").m-auto
          .col.bg-c6
            .p-3.h-100
              .row.align-items-center.h-100
                .col-12
                  p.mb-0 Falta de información sobre las características biológicas y sanitarias de las especies.
    .row.bg-c7
      .col-12
        .px-5
          .row.mb-4
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Medicamentos veterinarios
          .row.mb-5
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              p Los medicamentos veterinarios utilizados en acuicultura son sustancias empleadas para tratar o prevenir enfermedades y se aplican a los organismos con el fin de restablecer o corregir sus funciones fisiológicas. Estos productos se usan tanto en las etapas de producción como en el procesamiento, ya sea para prevenir enfermedades o tratarlas, con el objetivo de asegurar una producción de alta calidad.
              .row
                .col-12
                  .p-3.bg-c8
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src="@/assets/curso/tema1/img8.svg", alt="", style="width: 120px").m-auto
                      .col
                        p.mb-0 El uso inadecuado de estos medicamentos puede generar resistencia en bacterias y hongos. Por lo tanto, debe ser un especialista quien prescriba los medicamentos y establezca los protocolos de aplicación.
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema1/img3.png", alt="", style="width: 450px").m-auto
          .row.mb-4
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Introducción de especies invasoras
          .row
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 La globalización ha sido un factor clave en la #[b pérdida de biodiversidad], favoreciendo la introducción de #[b especies invasoras], generalmente debido a la intervención humana. Estas #[b especies exóticas], que rara vez tienen control biológico, se adaptan fácilmente al nuevo ambiente, se reproducen rápidamente y son tolerantes a factores críticos de calidad del agua.
            .col-lg-8(data-aos="fade-left")
              .row
                .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema1/img5.png", alt="", style="width: 450px").m-auto
                .col.bg-c4
                  .p-4
                    figure.mb-3
                      img(src="@/assets/curso/tema1/img9.svg", alt="", style="width: 70px")
                    p.mb-0 El plan de producción es un conjunto de actividades técnicas y conocimientos diseñados por la empresa, basados en su misión y visión, con el objetivo de producir organismos acuáticos para alimentación, repoblamiento u ornamentación (acuariofilia).
      
</template>

<script>
export default {
  name: 'Tema1',
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

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-4
      .col-lg-8.bg-c1.order-2.order-lg-1(data-aos="fade-right")
        .p-3
          .row
            .col-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/intro/img1.svg", alt="", style="width: 80px").m-auto
            .col
              p.mb-0 #[b La bioseguridad en la acuicultura] es fundamental para garantizar #[b la sostenibilidad y seguridad en la producción de organismos acuáticos]. Este conjunto de medidas y prácticas tiene como objetivo #[b prevenir la propagación de enfermedades], proteger la salud de los animales y minimizar los impactos negativos en el medio ambiente. Su correcta implementación es clave para mantener la calidad y seguridad de los productos acuícolas.
      .col-lg-4.ps-lg-0.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img1.png", alt="", style="width: 450px").m-auto
    .row.align-items-center.mb-4
      .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/intro/img2.png", alt="", style="width: 320px").m-auto
      .col-lg(data-aos="fade-left")
        .p-4.p-lg-5.bg-c2
          .row.align-items-center
            .col-md-auto
              figure
                img(src="@/assets/curso/intro/img2.svg", alt="", style="width: 110px").m-auto
            .col
              p.mb-0 Cada #[b explotación acuícola] presenta condiciones únicas, lo que hace necesario desarrollar programas de bioseguridad específicos para cada empresa. Estos programas deben ser diseñados considerando factores como el tipo de producción, la especie cultivada, la ubicación geográfica y las normativas vigentes. La participación de expertos en bioseguridad es crucial para garantizar que estos planes se adapten a las particularidades de cada explotación.
    p.mb-0(data-aos="fade-right") Además, #[b la implementación de prácticas rutinarias como el control del transporte de animales], la cuarentena, el manejo adecuado de medicamentos y el control de plagas son indispensables para #[b prevenir la introducción de patógenos y asegurar un ambiente saludable en las instalaciones]. La capacitación continua del personal y el cumplimiento de las normativas sanitarias son también componentes esenciales para el éxito de la bioseguridad en el sector acuícola.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

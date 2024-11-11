<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.
    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis presenta  las estrategias de bioseguridad para prevenir riesgos sanitarios en la acuicultura. Se destacan los riesgos en acuicultura, como enfermedades por transporte de animales, uso de medicamentos y especies invasoras. El plan de producción incluye tipos de explotaciones (extensiva e intensiva), el área de explotación, la evaluación del sitio y la calidad del agua. Las prácticas de bioseguridad abarcan cuarentena, control de plagas y uso responsable de medicamentos. Finalmente, las condiciones sanitarias se enfocan en el monitoreo de enfermedades, tratamiento de estanques y capacitación del personal.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

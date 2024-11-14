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
    Separador
    #t_2_3
    .titulo-segundo.color-secundario
      h2 2.3 Instalaciones, equipos y utensilios
    .row.bg-c14.mb-4
      .col-12
        .px-5
          p(data-aos="fade-right") Para garantizar una producción acuícola exitosa, es imprescindible seguir procedimientos clave que aseguren la calidad de la semilla:
          .row.mb-5
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              .p-4.bg-c15
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema2/img7.svg', alt='', style='width: 245px').m-auto
                  .col
                    p #[b Pódcast]
                    p Lo invitamos a escuchar el siguiente Pódcast:
                    TarjetaAudio.color-primario(
                      texto="Selección de semilla"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img16.png', alt='', style='width: 450px').m-auto
          .row.mb-4
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 El proveedor de semilla
          p.mb-4(data-aos="fade-right") El proveedor debe cumplir con todas las normativas sanitarias vigentes y garantizar la calidad y sanidad de la semilla.
          .row.justify-content-center
            .col-lg-7(data-aos="fade-right")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
                .row(titulo="Procedimientos de bioseguridad")
                  .col-12
                    p.mb-0 Asegurar su correcta implementación.
                .row(titulo="Instalar cercado")
                  .col-12
                    p.mb-0 Impedir el acceso de animales, personas y vehículos.
                .row(titulo="Agua de alta calidad")
                  .col-12
                    p.mb-0 Preferiblemente filtrada con sistemas como filtros de arena, UV, carbón activado y ozono.
                .row(titulo="Gestionar estadio larval")
                  .col-12
                    p.mb-0 Mejorar el control y minimizar la presencia de patógenos.
            .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img17.png', alt='', style='width: 350px').m-auto
            .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img18.png', alt='', style='width: 350px').m-auto
            .col-lg-7(data-aos="fade-left")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
                .row(titulo="Historial clínico")
                  .col-12
                    p.mb-0 Reducir riesgos de patógenos mediante seguimiento a los reproductores.
                .row(titulo="Restringir padrotes")
                  .col-12
                    p.mb-0 Limitar la introducción de especies externas.
                .row(titulo="Transporte óptimo")
                  .col-12
                    p.mb-0 Minimizar estrés, garantizar supervivencia y prevenir contaminación.
          Separador
          #t_2_4
          .titulo-segundo.color-secundario
            h2 2.4 Prácticas rutinarias en bioseguridad
          p.mb-4(data-aos="fade-right") A continuación, se enumeran algunas de las prácticas más comunes en las explotaciones acuícolas:
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img19.png', alt='', style='width: 300px').m-auto
            .col-lg-8(data-aos="fade-left")
              SlyderF(columnas="col-md-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img8.svg' alt='AvatarTop')
                  .row.mb-3
                    .col-12
                      .p-2.bg-c12
                        p.text-center.mb-0 #[b Cuarentena nuevos animales]
                  p.text-center.mb-0 Realizar cuarentena para los nuevos animales que ingresan a la explotación acuícola.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
                  .row.mb-3
                    .col-12
                      .p-2.bg-c12
                        p.text-center.mb-0 #[b Área aislada cuarentena]
                  p.text-center.mb-0 El área de cuarentena debe estar aislada del resto de la producción, y el personal debe estar adecuadamente capacitado.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
                  .row.mb-3
                    .col-12
                      .p-2.bg-c12
                        p.text-center.mb-0 #[b Desechar cajas bolsas]
                  p.text-center.mb-0 Las cajas y bolsas utilizadas para recibir a los nuevos animales deben ser desechadas de manera adecuada.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
                  .row.mb-3
                    .col-12
                      .p-2.bg-c12
                        p.text-center.mb-0 #[b Ropa exclusiva cuarentena]
                  p.text-center.mb-0 El personal debe usar ropa exclusiva para esta zona, con lavamanos y pediluvios para desinfectarse al entrar y salir.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
                  .row.mb-3
                    .col-12
                      .p-2.bg-c12
                        p.text-center.mb-0 #[b Agua filtrada estéril]
                  p.text-center.mb-0 El agua debe ser filtrada y, de ser posible, estéril para reducir la presencia de patógenos.
    p.mb-4(data-aos="fade-right") Otras prácticas son:
    .row.bg-c16
      .col-12
        .p-5
          .tarjeta.bg-white(data-aos="fade-down")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Seguimiento organismos]
                    p.mb-0 Llevar un seguimiento constante para detectar casos de morbilidad y mortalidad.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img21.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Informar autoridades]
                    p.mb-0 Informar a las autoridades en caso de morbilidad o mortalidad.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img22.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Separar lotes cuarentena]
                    p.mb-0 Si hay varios lotes en cuarentena, deben estar separados y no compartir utensilios ni equipos.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img23.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Limitar visitantes]
                    p.mb-0 Limitar el número de visitantes y controlar su contacto con los animales. Indagar sobre visitas previas a otras explotaciones.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img24.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Intervalo entre visitas]
                    p.mb-0 Respetar un intervalo de 72 horas entre las visitas a diferentes explotaciones acuícolas.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img25.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Prohibir entrada personal]
                    p.mb-0 Prohibir la entrada de conductores, ayudantes o motoristas, y asegurar limpieza de vehículos que ingresen.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img26.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Área de estacionamiento]
                    p.mb-0 Definir un área de estacionamiento para vehículos de pasajeros y carga, sin contacto con la zona de producción.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img27.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Equipos individuales]
                    p.mb-0 Cada estanque, piscina o tanque debe tener sus propios equipos y utensilios individuales.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img28.png', alt='', style='width: 400px').m-auto
    Separador
    #t_2_5
    .titulo-segundo.color-secundario
      h2 2.5 Condiciones sanitarias en la producción acuícola
    p.mb-4(data-aos="fade-right") Todas las explotaciones acuícolas en Colombia deben estar registradas ante el ICA, conforme a lo establecido en la Resolución 1414 de 2006. A continuación, se detallan las recomendaciones que deben seguir:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-10.col-md-6.col-lg-3.mb-4
        .p-4.bg-c17
          figure.mb-3
            img(src='@/assets/curso/tema2/img13.svg', alt='', style='width: 140px').m-auto
          p.text-center.mb-0 Realizar un monitoreo y control constante para minimizar los riesgos de enfermedades.
      .col-10.col-md-6.col-lg-3.mb-4
        .p-4.bg-c17
          figure.mb-3
            img(src='@/assets/curso/tema2/img14.svg', alt='', style='width: 140px').m-auto
          p.text-center.mb-0 Diseñar un programa sanitario elaborado por un profesional universitario con competencias y experiencia en producciones acuícolas.
      .col-10.col-md-6.col-lg-3.mb-4
        .p-4.bg-c17
          figure.mb-3
            img(src='@/assets/curso/tema2/img15.svg', alt='', style='width: 140px').m-auto
          p.text-center.mb-0 Tener conocimiento de los lotes de organismos que han sido sometidos a tratamiento médico veterinario.
      .col-10.col-md-6.col-lg-3.mb-4
        .p-4.bg-c17
          figure.mb-3
            img(src='@/assets/curso/tema2/img16.svg', alt='', style='width: 140px').m-auto
          p.text-center.mb-0 Exigir el salvoconducto expedido por el ICA al ingresar organismos acuáticos al predio y someterlos a cuarentena.
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c17
          figure.mb-3
            img(src='@/assets/curso/tema2/img17.svg', alt='', style='width: 140px').m-auto
          p.text-center.mb-0 Disponer de un formato de registro para la entrada y salida de visitantes, vehículos y animales.
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c17
          figure.mb-3
            img(src='@/assets/curso/tema2/img18.svg', alt='', style='width: 140px').m-auto
          p.text-center.mb-0 En caso de que el ICA adopte medidas sanitarias, todos los vehículos, implementos y equipos que ingresen o salgan del cercado perimetral de la explotación acuícola deben ser lavados y desinfectados con un producto adecuado para ese propósito.
      .col-10.col-md-6.col-lg-3
        .p-4.bg-c17
          figure.mb-3
            img(src='@/assets/curso/tema2/img19.svg', alt='', style='width: 140px').m-auto
          p.text-center.mb-0 Capacitar de manera continua al personal de la explotación acuícola en normas de bioseguridad y manejo sanitario.
    .row.mb-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Tratamiento a estanques
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 El drenado, secado, limpieza y encalado de los estanques de tierra son actividades esenciales para prevenir enfermedades en los organismos de cultivo. Estas acciones permiten eliminar la materia orgánica descompuesta, mejorar la aireación del estanque y utilizar cal como desinfectante del suelo, lo que también ayuda a evitar la contaminación del medio ambiente.
      .col-lg-8(data-aos="fade-left")
        .row.justify-content-center
          .col-10.col-md-7.col-lg-auto.pe-lg-0
            figure
              img(src='@/assets/curso/tema2/img29.png', alt='', style='width: 412px').m-auto
          .col-10.col-md-7.col-lg.ps-lg-0
            .p-3.bg-c18
              figure.mb-3
                img(src='@/assets/curso/tema2/img20.svg', alt='', style='width: 140px').m-auto
              p.mb-0 Este tratamiento debe realizarse después de cada cosecha, ya que un fondo limpio y oxigenado proporciona mejores condiciones de bienestar para los organismos en cultivo.
    .row.bg-c19.mb-4
      .col-12
        .px-5
          .row.mb-4
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Control de plagas
          p.mb-4(data-aos="fade-right") El control de plagas es fundamental, ya que estas pueden ser vectores de diversas enfermedades tanto para los organismos cultivados como para el personal que trabaja en la explotación acuícola. Se recomienda seguir estas pautas:
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-down")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
                .row(titulo="Mantener la bodega de alimentos limpia y organizada")
                  .col-lg-8.mb-4.mb-lg-0
                    p.mb-0 Almacenar los bultos sobre estibas, sin contacto con paredes, a temperaturas y humedad adecuadas.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img31.png', alt='', style='width: 350px').m-auto
                .row(titulo="Sistema adecuado para disposición de basuras")
                  .col-lg-8.mb-4.mb-lg-0
                    p.mb-0 Reducir el riesgo de proliferación de plagas.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img32.png', alt='', style='width: 350px').m-auto
                .row(titulo="Implementar control de plagas de inmediato")
                  .col-lg-8.mb-4.mb-lg-0
                    p.mb-0 Si se detecta proliferación, aplicar medidas necesarias para su control.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img33.png', alt='', style='width: 350px').m-auto
          .row.mb-4
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Uso de medicamentos veterinarios
          p.mb-4(data-aos="fade-right") Las explotaciones acuícolas deben seguir ciertas directrices en cuanto al uso de medicamentos:
          .row.justify-content-center.mb-5
            .col-lg-auto.d-none.d-lg-block.pe-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img34.png', alt='', style='width: 420px').m-auto
            .col-lg.bg-c8(data-aos="fade-left")
              .p-3
                .row.mb-3
                  .col-12
                    .p-3.bg-c11
                      ul.lista-ul.mb-0
                        li.d-flex.mb-0
                          i.fas.fa-check-circle(style="color: #00455A")
                          |
                          p.mb-0 Utilizar solo productos veterinarios que cuenten con registro del ICA.
                .row.mb-3
                  .col-12
                    .p-3.bg-c11
                      ul.lista-ul.mb-0
                        li.d-flex.mb-0
                          i.fas.fa-check-circle(style="color: #00455A")
                          |
                          p.mb-0 Todos los medicamentos que incluyan antibióticos, narcóticos, tranquilizantes o productos hormonales deben estar referenciados en un protocolo diseñado por un médico veterinario.
                .row.mb-3
                  .col-12
                    .p-3.bg-c11
                      ul.lista-ul.mb-0
                        li.d-flex.mb-0
                          i.fas.fa-check-circle(style="color: #00455A")
                          |
                          p.mb-0 Retirar de circulación cualquier medicamento vencido.
                .row.mb-3
                  .col-12
                    .p-3.bg-c11
                      ul.lista-ul.mb-0
                        li.d-flex.mb-0
                          i.fas.fa-check-circle(style="color: #00455A")
                          |
                          p.mb-0 Almacenar los medicamentos veterinarios en lugares destinados para tal fin, respetando las indicaciones específicas de cada producto en cuanto a temperatura, exposición a la luz solar, tiempo de uso después de abiertos, entre otros.
                .row.mb-3
                  .col-12
                    .p-3.bg-c11
                      ul.lista-ul.mb-0
                        li.d-flex.mb-0
                          i.fas.fa-check-circle(style="color: #00455A")
                          |
                          p.mb-0 Mantener un inventario actualizado de los medicamentos disponibles.
                .row.mb-3
                  .col-12
                    .p-3.bg-c11
                      ul.lista-ul.mb-0
                        li.d-flex.mb-0
                          i.fas.fa-check-circle(style="color: #00455A")
                          |
                          p.mb-0 Asegurarse de que el equipo utilizado para la aplicación de medicamentos esté limpio, desinfectado y calibrado.
                .row
                  .col-12
                    .p-3.bg-c11
                      ul.lista-ul.mb-0
                        li.d-flex.mb-0
                          i.fas.fa-check-circle(style="color: #00455A")
                          |
                          p.mb-0 Disponer de manera adecuada los medicamentos vencidos, envases vacíos y los elementos desechables utilizados, como jeringas.
    .row.mb-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Personal
    p.mb-4(data-aos="fade-right") El manejo adecuado del personal en las explotaciones acuícolas es crucial para el éxito de la actividad productiva. Se recomienda:
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-6.mb-4
        .p-3.bg-c20
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img21.svg', alt='', style='width: 100px').m-auto
            .col-md
              p.mb-0 Verificar la salud de los empleados mediante exámenes médicos anuales.
      .col-lg-6.mb-4
        .p-3.bg-c20
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img22.svg', alt='', style='width: 100px').m-auto
            .col-md
              p.mb-0 Tener un botiquín de primeros auxilios en un lugar accesible y conocido por todo el personal.
      .col-lg-6.mb-4
        .p-3.bg-c20
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img23.svg', alt='', style='width: 100px').m-auto
            .col-md
              p.mb-0 Capacitar al personal de forma continua en temas clave como higiene, seguridad, riesgos ocupacionales, sanidad animal y bioseguridad.
      .col-lg-6.mb-4
        .p-3.bg-c20
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img24.svg', alt='', style='width: 100px').m-auto
            .col-md
              p.mb-0 Disponer de áreas adecuadas para el uso del personal, como baños, duchas y comedor.
      .col-lg-6.mb-4.mb-lg-0
        .p-3.bg-c20
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img25.svg', alt='', style='width: 100px').m-auto
            .col-md
              p.mb-0 Proveer a los empleados con la indumentaria necesaria para realizar sus actividades, minimizando los riesgos laborales.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema2/img35.png', alt='', style='width: 600px').m-auto

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

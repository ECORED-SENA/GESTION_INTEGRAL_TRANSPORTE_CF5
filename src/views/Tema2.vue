<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1  Tipos de mercados

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-md-3
        h5 Los mercados se pueden distinguir según cuatro variables: 
      .col-md-9
        .row.justify-content-center
          .col-lg-12.mb-5
            .row.justify-content-center(@mouseover="mostrarIndicador = false")
              .col-md-4.col-xl.mb-5.mb-xl-0.mb-5
                .tarjeta-avatar1
                  img(src='@/assets/curso/tema2/avatar1.png' alt='AvatarTop')
                  .tarjeta-numerada1.text-center.tarjeta_t5.p-4.shadow.ind--click_tarjetas(data-aos="fade-right")
                    .indicador--click(v-if="mostrarIndicador")
                    p En función del tipo de producto que se oferte o se compre.
                    .tarjeta-numerada1__contenido

              .col-md-4.col-xl.mb-5.mb-xl-0.mb-5
                .tarjeta-avatar1
                  img(src='@/assets/curso/tema2/avatar2.png' alt='AvatarTop')
                  .tarjeta-numerada1.text-center.tarjeta_t5.p-4.shadow.ind--click_tarjetas(data-aos="fade-right")
                    .indicador--click(v-if="mostrarIndicador")
                    p El perfil del comprador.
                    .tarjeta-numerada1__contenido

              .col-md-4.col-xl.mb-5.mb-xl-0.mb-5
                .tarjeta-avatar1
                  img(src='@/assets/curso/tema2/avatar3.png' alt='AvatarTop')
                  .tarjeta-numerada1.text-center.tarjeta_t5.p-4.shadow.ind--click_tarjetas(data-aos="fade-right")
                    .indicador--click(v-if="mostrarIndicador")
                    p La competencia que puede haber.
                    .tarjeta-numerada1__contenido

              .col-md-4.col-xl.mb-5.mb-xl-0.mb-5
                .tarjeta-avatar1
                  img(src='@/assets/curso/tema2/avatar4.png' alt='AvatarTop')
                  .tarjeta-numerada1.text-center.tarjeta_t5.p-4.shadow.ind--click_tarjetas(data-aos="fade-right")
                    .indicador--click(v-if="mostrarIndicador")
                    p El área geográfica en la que una empresa distribuye sus bienes y servicios.
                    .tarjeta-numerada1__contenido
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.1	Clases, participación y evolución del sector
    
    p.mb-4(data-aos="fade-right") La participación del mercado y su distribución está conformada por la clase de competencia existente y los factores que lo determinan, tal como se puede observar en la siguiente imagen.

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      h5 Figura 6
      span - Clases de mercado  

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-md-10
        figure
          img(src='@/assets/curso/tema2/tabla1.jpg', alt='Señal de bien con la mano')
    separador


    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.2	Plan de mercadeo

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-11
        .bloque-texto-a.color-secundario2.mb-5.p-4.py-0
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              .wrap-ap
                figure.pos1
                  img(src='@/assets/curso/tema2/img1.jpg', alt='Un pasaporte abierto')
            .col-lg-9
              .bloque-texto-a__texto.p-4.lila-color 
                p.mb-3 Llamado también estrategias de comercialización o plan de <i>Marketing,</i> tiene por objetivo ofrecer los bienes o servicios producidos en un tiempo determinado y a una población específica. El SENA ha incursionado en la estructuración de documentos para el emprendimiento y en ellos pueden verse ejemplos de planes de mercadeo y comercialización.

    .tarjeta.color-fondo.p-3.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-1.col-sm-1.col-lg-1
          span
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/1.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Ser empresario 
              p.text-small Anexo. Ser empresario en seis pasos. PDF – Ser empresario
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/serempresario.pdf')" target="_blank")
                span Descargar
                i.fas.fa-link
        .col-1
          span
    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.3	Comportamiento del producto en el mercado

    p.mb-5(data-aos="fade-right") Este acápite hace referencia al ciclo de vida del producto, que indica que todo producto aparece en el mercado, se desarrolla de diversas formas y termina desapareciendo cuando aparece un nuevo producto que satisface mejor las necesidades del consumidor o porque los consumidores cambian de gustos. Estos cuatro periodos son: 

    .row.mb-5(data-aos="fade")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada3.color-primario3.p-4
          .tarjeta-numerada3__numero
            .h2.text-white 1
          p.text-center 
            b Introducción:
          p.text-center Es el periodo de lanzamiento o presentación del producto y su crecimiento es lento.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada4.color-primario4.p-4
          .tarjeta-numerada4__numero
            .h2 2
          p.text-center.mb-4
            b Crecimiento:
          p.text-center.mb-2 Es el periodo o etapa en que mejoran las ventas en forma considerable.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada5.color-primario5.p-4
          .tarjeta-numerada5__numero
            .h2 3
          p.text-center 
            b Madurez: 
          p.text-center Es el periodo en que, sin variar los volúmenes, las ventas se mantienen altas.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada6.color-primario6.p-4
          .tarjeta-numerada6__numero
            .h2 4
          p.text-center 
            b Declive:
          p.text-center Última etapa del producto, que llega cuando ya no se venda.


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

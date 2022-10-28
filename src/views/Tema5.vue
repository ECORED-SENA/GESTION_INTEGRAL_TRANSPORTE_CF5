<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  Matriz DOFA

    p.mb-4(data-aos="fade-right") Es una herramienta de administración y planificación que permite analizar las interrelaciones entre lo bueno y lo malo de una empresa, equipo o actividad de negocio para determinar estrategias que permitan una mejora progresiva. Existen cuatro variables a considerar en la matriz: Debilidades – Oportunidades – Fortalezas – Amenazas, como se observa a continuación.

    .row.mb-5(data-aos="fade")
      .col-md-3.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada7.color-primario7.p-4
          .tarjeta-numerada7__numero
            .h2
          figure.p-2.mb-3
            img(src='@/assets/curso/tema5/1.png', alt='Cadena rota' style="width: 90px")
          p
            b Debilidades:
          p es el análisis de los factores de los que carece la organización y cuya ausencia no permite el desarrollo de todas sus potencialidades, con lo cual se genera una desventaja frente a los competidores.


      .col-md-3.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada8.color-primario8.p-4
          .tarjeta-numerada8__numero
            .h2
          figure.p-2.mb-3
            img(src='@/assets/curso/tema5/2.png', alt='Cadena rota' style="width: 90px")
          p
            b Oportunidades:
          p factores positivos de la organización que resultan claves para potencializar sus recursos, objetivos y metas, los cuales generan ventajas frente a la competencia.

      .col-md-3.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada7.color-primario7.p-4
          .tarjeta-numerada7__numero
            .h2
          figure.p-2.mb-3
            img(src='@/assets/curso/tema5/3.png', alt='Cadena rota' style="width: 90px")
          p
            b Fortalezas: 
          p generalmente se definen como el potencial del recurso humano, las capacidades, habilidades, nivel de competencia y adaptación al cambio. Estos recursos generan grandes ventajas frente a la competencia.

      .col-md-3.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada8.color-primario8.p-4
          .tarjeta-numerada8__numero
            .h2
          figure.p-2.mb-3
            img(src='@/assets/curso/tema5/4.png', alt='Cadena rota' style="width: 90px")
          p
            b Amenazas:
          p situaciones que no provienen del interior de la organización, sino del medio en que desarrolla sus operaciones, siendo muy importante detectarlas y dominarlas pues su persistencia puede acabar con su vida jurídica. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-4(data-aos="fade-right")
        p De las cuatro variables a considerar en una matriz DOFA, dos de ellas son internas (Fortalezas y Debilidades), las cuales se pueden intervenir directamente, y dos son externas (Oportunidades y Amenazas), que solo se pueden intervenir alterando internamente los aspectos detectados. 
      .col-md-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h5 Figura 9
          span - Matriz DOFA
        figure
          img(src='@/assets/curso/tema5/tabla1.svg', alt='Tipos de elasticidad de la oferta')
          figcaption Nota. Tomada de SENA (2021).
    separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 5.1	Análisis de la matriz
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-4(data-aos="fade-right")
        p La matriz se construye a partir del diagnóstico del análisis de los factores, logrando generar estrategias, las cuales se obtienen de combinar puntos positivos (fortalezas) con factores internos (oportunidades) y factores externos (amenazas) (FO y FA) y de la combinación de los puntos negativos (debilidades) con factores internos (oportunidades) y factores externos (amenazas) (DO y DA, respectivamente).
      .col-md-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h5 Figura 10
          span - Indicadores para construir la matriz DOFA
        figure
          img(src='@/assets/curso/tema5/tabla2.svg', alt='Tipos de elasticidad de la oferta')
          figcaption Nota. Tomada de SENA (2021).
    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 5.2	Estudio de casos

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-11
        .bloque-texto-a.color-secundario2.mb-5.p-3.py-0
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              .wrap-ap
                figure.pos1
                  img(src='@/assets/curso/tema5/img1.jpg', alt='hombre carga Cajas')
            .col-lg-9
              .bloque-texto-a__texto.p-4.lila-color 
                p.mb-0 A continuación, se enuncia una situación práctica que resulta en una actividad didáctica como estudio de casos, con el fin de fortalecer la comprensión de las leyes del mercado y afianzar el manejo de simulaciones de escenarios de gestión integral de transporte. Por favor, analice el caso y aporte soluciones a la situación planteada. El material puede consultarlo en el anexo correspondiente.
</template>

<script>
export default {
  name: 'Tema5',
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

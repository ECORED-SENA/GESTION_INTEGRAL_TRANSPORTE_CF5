<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1  Tipos de consumidores

    p.mb-4(data-aos="fade-right") Todo consumidor necesita algo y está en su búsqueda, por lo tanto, es preciso que se conozca cómo se clasifican, cuáles son sus comportamientos, gustos y hábitos de compra.
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h4 3.1	Comportamientos, motivos y hábitos de compra
    
    p.mb-4(data-aos="fade-right") Los consumidores han sido catalogados de muchas maneras, pero todos poseen unas características que los diferencian claramente.

    SlyderB.mb-5(:datos="datosSlyder")(data-aos="fade")
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h4 3.2	Diagnóstico

    p.mb-4(data-aos="fade-right") El comportamiento de los compradores o consumidores, la identificación de sus necesidades y deseos, es el centro de atención del análisis. Esto tiene que ver con el tipo de consumidor y su análisis de conducta como comprador. De eso depende la gran importancia que se da a identificar y perfilar el tipo de consumidor, según el producto y el precio.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-11
        .bloque-texto-a.color-secundario2.mb-5.p-4.py-0
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              .wrap-ap
                figure.pos1
                  img(src='@/assets/curso/tema3/img1.jpg', alt='Un pasaporte abierto')
            .col-lg-9
              .bloque-texto-a__texto.p-4.lila-color 
                p.mb-3 Según Solomon (2021), el comportamiento del consumidor “es el estudio de los procesos que intervienen cuando una persona o grupo de personas selecciona, compra, usa o desecha productos, servicios, ideas o experiencias para satisfacer necesidades y deseos”.

    .titulo-principal1.color-acento-contenido.mb-4(data-aos="fade-right")
      .titulo-principal1__numero
        span 
      h3.mb-0 Tipos

    p.mb-5(data-aos="fade-right") Los tipos o características de los consumidores están íntimamente ligados a su personalidad, específicamente en los aspectos culturales, sociales y psicológicos. 

    .row.mb-5(data-aos="fade")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario5.p-5
          .tarjeta-numerada__numero
            .h2 
          h5 Culturales:
          p incluyen aspectos de subcultura, inmersión social por preferencias o gustos aprendidos de su entorno familiar o comunitario.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario6.p-5
          .tarjeta-numerada__numero
            .h2
          h5 Sociales:
          p que afectan la elección de modelos o marcas por influencia de grupos sociales, académicos o profesionales.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario7.p-5
          .tarjeta-numerada__numero
            .h2
          h5 Personales:
          p son características que influyen en la elección de las compras, por factores de edad, sexo, profesión, estrato o capacidad económica. 

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario8.p-5
          .tarjeta-numerada__numero
            .h2
          h5 Psicológicos:
          p que incluyen los comportamientos actitudinales, motivacionales y hábitos o conductas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 6
          span - Clases de mercado  
        figure
          img(src='@/assets/curso/tema3/infografica.png', alt='consumidores')
          figcaption Nota. Tomada de SENA (2021).

    .titulo-principal1.color-acento-contenido.mb-5(data-aos="fade-right")
      .titulo-principal1__numero
        span 
      h3.mb-0 Oportunidades

    .row.justify-content-center.align-items-center.mb-5
      .col-md-6(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema3/icon1.png', alt='consumidores', style="width: 72px")
        p Una vez se han detectado y establecido las características del consumidor, se deberán verificar las oportunidades en que se halla el producto objeto de deseo de ese consumidor.
      .col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img2.jpg', alt='consumidores')

    .titulo-principal1.color-acento-contenido.mb-5(data-aos="fade-right")
      .titulo-principal1__numero
        span 
      h3.mb-0 Amenazas

    .row.justify-content-center.align-items-center.mb-5
      .col-md-6(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema3/icon2.png', alt='consumidores', style="width: 72px")
        p Igualmente, se deben analizar las amenazas en que puede incurrir el producto, dependiendo de los factores de comportamiento del consumidor.
      .col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img3.jpg', alt='consumidores')


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Impulsivo',
        texto:
          'Basan su inclinación en factores externos, como tendencia, moda, comparación con los demás.',
        imagen: require('@/assets/curso/tema3/1.jpg'),
      },
      {
        titulo: 'Escéptico',
        texto: 'Son compradores ocasionales y se muestran apáticos al comprar.',
        imagen: require('@/assets/curso/tema3/2.jpg'),
      },
      {
        titulo: 'Optimista',
        texto:
          'Analizan las opciones y consultan con otros al momento de comprar.',
        imagen: require('@/assets/curso/tema3/3.jpg'),
      },
      {
        titulo: 'Tradicional',
        texto: 'Al igual que el escéptico, sólo compran lo que necesitan.',
        imagen: require('@/assets/curso/tema3/4.jpg'),
      },
      {
        titulo: 'Emocional',
        texto:
          'Compra exactamente lo que quiere, pero algunas veces no lo que necesita.',
        imagen: require('@/assets/curso/tema3/5.jpg'),
      },
      {
        titulo: 'Práctico',
        texto: 'Es el personaje experimentado en compras por internet.',
        imagen: require('@/assets/curso/tema3/6.jpg'),
      },
      {
        titulo: 'Activo',
        texto:
          'No busca descuentos u ofertas, busca lo que necesita y lo adquiere sin problemas.',
        imagen: require('@/assets/curso/tema3/7.jpg'),
      },
      {
        titulo: '',
        texto:
          'Y los siguientes 3 comportamientos que no son los más inciertos: <br><br/> <b>Indeciso:</b> comparan mucho de lo que les preocupa, entre otros, la oferta, la rebaja, el precio, el tiempo de recibo y forma de pago. <br><br/> <b>Buscador de experiencias:</b> son prácticos en la búsqueda por Internet de productos que satisfagan sus necesidades. <br><br/> <b>Buscador de ofertas:</b> lánguidos, pacientes y poco fanáticos a la espera de descuentos u ofertas.',
        imagen: require('@/assets/curso/tema3/8.jpg'),
      },
    ],
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

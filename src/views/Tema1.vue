<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Oferta y Demanda

    p.mb-4 Llamar leyes de la oferta y demanda es llamar leyes del mercado de bienes y servicios, que están dadas por las cambiantes condiciones que inciden en variables de venta y compra. Hay características que inciden en ellas, que incluyen su definición, características, ley de la oferta, ley de la demanda y factores que intervienen en dichas relaciones.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido
      .h4 1.1. Conceptos básicos

    .row.mb-4
      .col-md-5
        .row.mb-4 
          .col-md-2
            figure
              img(src='@/assets/curso/tema1/icon1.png', alt='Paquetes de cajas para enviar')
          .col-md-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 1
              span - Pendiente positiva de oferta del mercado
        p.mb-4 La oferta puede definirse como un número determinado de bienes o servicios con características de calidad y precio, que un productor o vendedor pone a disposición del público para ser adquiridos o consumidos. Al graficar las cantidades versus los precios de un determinado bien, se puede observar que se genera una curva de izquierda a derecha, que va incrementándose, lo cual significa que es una pendiente positiva. Esta relación entre cantidades y precios nos confirma que, a mejores precios del bien o servicio, la producción se incrementará.
      .col-md-7
        figure.mb-5
          img(src='@/assets/curso/tema1/grafica1.png', alt='Gráfica explicativa')
          figcaption Nota. Tomada de Enciclopedia Económica (2020).
          
    .row.mb-4
      .col-md-5
        .row.mb-4 
          .col-md-2
            figure
              img(src='@/assets/curso/tema1/icon1.png', alt='Paquetes de cajas para enviar')
          .col-md-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 2
              span - Pendiente negativa de la demanda del mercado
        p.mb-4 Por su parte, la definición de demanda también está relacionada con el precio del bien y la cantidad del mismo. Al graficar estas dos variables, se observa que, al disminuir el precio de un bien o servicio, se aumenta la demanda del mismo y viceversa. Esta gráfica genera una curva descendente, que va de izquierda a derecha y se puede indicar que es una pendiente negativa.
      .col-md-7
        figure.mb-5
          img(src='@/assets/curso/tema1/grafica2.png', alt='Gráfica explicativa')
          figcaption Nota. Tomada de Enciclopedia Económica (2021).

    .row.mb-4
      .col-md-5
        .row.mb-4 
          .col-md-2
            figure
              img(src='@/assets/curso/tema1/icon1.png', alt='Paquetes de cajas para enviar')
          .col-md-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 3
              span - Pendientes positivas y negativas de oferta y demanda
        p.mb-4 La superposición de las dos gráficas, arroja un punto de intersección de las pendientes, al cual se le da el nombre de ‘punto de equilibrio’, siendo este el motivo de múltiples análisis para definir cuál es el precio ideal de venta de un producto según su cantidad y calidad. En este punto, tanto compradores como vendedores están de acuerdo en la cantidad que se compra o se vende, así como en el precio. Por encima del punto de equilibrio, los productores obtendrán ganancias o utilidades. Por debajo de éste, obtendrán pérdidas o muchos productos almacenados. (Enciclopedia Económica, 2020)
      .col-md-7
        figure.mb-5
          img(src='@/assets/curso/tema1/grafica3.png', alt='Gráfica explicativa')
          figcaption Nota. Tomada de Enciclopedia Económica (2021).
    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h4 1.2	Principios, pronósticos y métodos

    p.mb-0 El mercado está regido por unas características, leyes y factores, los cuales permiten realizar estudios y análisis a fin de comprender sus alcances, pronósticos y métodos de análisis.
    p.mb-4 A continuación, se presentan las características tanto de oferta como de demanda:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-4
        figure
          img(src='@/assets/curso/tema1/img1.png', alt='Señal de bien con la mano')
      .col-md-8
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo="Características de la oferta")
            .row.p-2
              .col-md-5
                figure
                  img(src='@/assets/curso/tema1/img2.png', alt='Hombre sonrriente')
              .col-md-7.mb-4.mb-md-0
                ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right
                    | Puede ser un bien o servicio.
                  li 
                    i.fas.fa-angle-right
                    | Tiene una cantidad finita del bien que el vendedor pone a la venta.
                  li 
                    i.fas.fa-angle-right
                    | La venta se realiza en un lapso de tiempo específico.
                  li 
                    i.fas.fa-angle-right
                    | Dependerá del precio de venta.
                  li 
                    i.fas.fa-angle-right
                    | Con el incremento de unidades en venta, se disminuyen los precios.

          .py-3.py-md-4(titulo="Nidales")
            .row.p-2
              .col-md-5
                figure
                  img(src='@/assets/curso/tema1/img3.png', alt='Mujer sonrriendo')
              .col-md-7.mb-4.mb-md-0
                ul.lista-ul--color.mb-5
                  li 
                    i.fas.fa-angle-right
                    | La demanda es analizada por el vendedor. 
                  li 
                    i.fas.fa-angle-right
                    | El consumidor establece la demanda. 
                  li 
                    i.fas.fa-angle-right
                    | Principal componente empresarial de fijación de precios.
                  li 
                    i.fas.fa-angle-right
                    | Tienen gran injerencia las características socioeconómicas de la población.
                  li 
                    i.fas.fa-angle-right
                    | Es directamente proporcional a la cantidad de productos o servicios.
                  li 
                    i.fas.fa-angle-right
                    | El cambio en las relaciones de precios y cantidades demandadas se denomina ‘elasticidad’ y puede considerarse como demanda elástica, demanda inelástica o demanda normal.
                .tarjeta.color-primario.p-3.mb-5
                  .row.justify-content-around.align-items-center
                    .col-4.col-sm-3.col-lg-2
                      img(src="@/assets/componentes/ej-02.svg")
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          h3.mb-1.text-white Figura 4
                          p.text-small.text-white Tipos de demandas
                        .col-auto
                          a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                            span Ver más
                            .indicador--click(v-if="mostrarIndicador")

                      ModalA(:abrir-modal.sync="modal1")
                        .row.align-items-center
                          .col-md-12.mb-4.mb-md-0
                            .titulo-sexto.color-acento-contenido
                              h5 Figura 4
                              span - Tipos de demandas
                            figure
                              img(src='@/assets/curso/tema1/grafica4.png', alt='gráfica')
                              figcaption Nota. Tomada de Moreno (2010).

    p.mb-4 A continuación, se presentan las diferentes leyes y factores de la oferta y la demanda:

    .row.mb-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-azul")
        .row.align-items-center(titulo="Factores de la oferta y la demanda")
          .col-md-5
            figure
              img(src='@/assets/curso/tema1/img1.jpg', alt='Hombre escribiendo')

          .col-md-7.mb-4.mb-md-0
            h5.mb-4 Oferta:
            p.mb-4 Siempre que todas las demás variables estén constantes, cuando se mejora el precio, se incrementan las cantidades o se producen más bienes.
            h5.mb-4 Demanda:
            p.mb-4 Siempre que todas las demás variables estén constantes, es inversamente proporcional entre el aumento del precio y la disminución de la cantidad demandada y, de la misma manera, inversamente proporcional entre la disminución del precio y el aumento de la cantidad demandada.


        .row.align-items-center(titulo="Leyes de la oferta y la demanda")
          .col-md-5
            figure
              img(src='@/assets/curso/tema1/img2.jpg', alt='gráfica')

          .col-md-7.mb-4.mb-md-0
            p.mb-4 La oferta y la demanda de bienes o servicios contemplan unos factores o condiciones que se comparan en la siguiente matriz:
            
    .titulo-principal1.color-acento-contenido.mb-5
      .titulo-principal1__numero
        span 
      h3.mb-0 Principios de la Oferta y la Demanda

    p.mb-4 A partir de las leyes de oferta y demanda, se conciben ocho principios que se describen como cambios en el equilibrio del mercado, de la siguiente manera:

    .row.mb-0
      .col-md-3
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 
            .col-lg-8

      .col-md-3
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 
            .col-lg-8

      .col-md-3
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 
            .col-lg-8

      .col-md-3
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 
            .col-lg-8
      
    .row.mb-4
      .col-md-3
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 
            .col-lg-8

      .col-md-3
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 
            .col-lg-8

      .col-md-3
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 
            .col-lg-8

      .col-md-3
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 
            .col-lg-8


    #t_1_3.titulo-segundo.color-acento-contenido
      .h4 1.3	Actividades económicas

    #t_1_4.titulo-segundo.color-acento-contenido
      .h4 1.4	Métodos de compra de mercancías
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    modal1: false,
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

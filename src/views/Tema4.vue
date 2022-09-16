<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido.mb-5
      .titulo-principal__numero
        span 4
      h1  Análisis factores de oferta y demanda, de acuerdo con productos y actividad empresarial
    
    #t_4_1.titulo-segundo.color-acento-contenido
      .h4 4.1 Factores determinantes de la oferta
    
    p.mb-4 Elasticidad de la oferta: en economía se utiliza este factor como la razón existente ante un cambio en el precio del bien o servicio y la respuesta en la variación a la cantidad ofrecida. Existen cinco variaciones de esta medida

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-11
        .bloque-texto-a.color-secundario2.mb-5.p-3.py-0
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              .wrap-ap
                figure.pos1
                  img(src='@/assets/curso/tema4/img1.jpg', alt='Cajas')
            .col-lg-10
              .bloque-texto-a__texto.p-4.blanco-color 
                ul.lista-ul--color.mb-0
                  li 
                    i.fas.fa-angle-right
                    | Se denomina oferta inelástica cuando la razón es menor que uno. 
                  li 
                    i.fas.fa-angle-right
                    | Se denomina oferta elástica cuando la razón es mayor que uno. 
                  li 
                    i.fas.fa-angle-right
                    | Es perfectamente inelástica cuando su razón es cero lo que indica que la cantidad no cambia con la variación en el precio.
                  li 
                    i.fas.fa-angle-right
                    | Unitaria cuando la razón es uno.
                  li 
                    i.fas.fa-angle-right
                    | Perfectamente elástica cuando la razón tiende al infinito, lo que significa que, ante un incremento pequeño en el precio, se genera una disminución infinitamente grande en la cantidad ofrecida.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 8
          span - Tipos de elasticidad de la oferta
        figure
          img(src='@/assets/curso/tema4/tabla1.svg', alt='consumidores')
          figcaption Nota. Tomada de Yirepa (s.f.)
    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h4 4.2	Técnicas para determinar la oferta y la demanda

    p.mb-0 Para determinar el nivel de competitividad de las empresas, se deben estudiar las tendencias de la demanda, es decir, cómo los usuarios o consumidores realizan la adquisición de bienes o servicios.
    p.mb-4 Para lograrlo, se pueden emplear dos métodos, que son: métodos cuantitativos y métodos cualitativos, como se puede apreciar a continuación.

    .row 
      .col-md-4
        figure
          img(src='@/assets/curso/tema4/img2.jpg', alt='Hombre con computadora')
      .col-md-8
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo="Cuantitativos")
            .row.p-2
              .col-md-12.mb-4.mb-md-0
                p.mb-4 Los que utilizan datos recolectados y, mediante un análisis y fórmulas estadísticas, se generan estimaciones. Entre éstos están:
                ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right
                    | <b>Investigación de mercados:</b> se utiliza mediante cuestionarios para pronosticar mercados. Método de derivación directa: se basa en factores específicos del mercado actual para predecir la demanda futura.
                  li 
                    i.fas.fa-angle-right
                    | <b>Análisis de correlación:</b> es un método matemático de la razón existente entre el factor de mercado y las ventas proyectadas del producto.
                  li 
                    i.fas.fa-angle-right
                    | <b>Análisis de factores del mercado:</b> se basa en el análisis de los factores que intervienen en el mercado y su variación estimada. 
                  li 
                    i.fas.fa-angle-right
                    | <b>Análisis de históricos de ventas y preferencias:</b> se basa en el estudio de los mínimos y máximos de ventas y las preferencias de los consumidores.
                  li 
                    i.fas.fa-angle-right
                    | <b>Prueba de mercado:</b> es el lanzamiento controlado de un producto en un mercado cerrado a fin de detectar las reacciones del público antes del lanzamiento formal.
                  li 
                    i.fas.fa-angle-right
                    | <b>Análisis de series de tiempos:</b> es la observación de la serie histórica de precios en un tiempo determinado, para predecir los comportamientos del mercado.
                  li 
                    i.fas.fa-angle-right
                    | <b>Método de ponderación:</b> se basa en hacer un análisis cuantitativo en el que se comparan varias alternativas de productos y servicios y así tomar la mejor decisión. Podemos ver este ejemplo de una ponderación de factores versus los modos de transporte.

          .py-3.py-md-4(titulo="Cualitativos")
            .row.p-2
              .col-md-12.mb-4.mb-md-0
                p.mb-4 Se basan en los juicios o estimaciones de las personas que realizan el proceso:
                ul.lista-ul--color.mb-5
                  li 
                    i.fas.fa-angle-right
                    | <b>Investigación de mercados:</b> se utiliza mediante cuestionarios para pronosticar mercados.
                  li 
                    i.fas.fa-angle-right
                    | <b>Método Delphi o Consenso de panel:</b> es un proceso en el cual expertos temáticos se reúnen para obtener información y opiniones cualitativas sobre pronósticos del mercado.
                  li 
                    i.fas.fa-angle-right
                    | <b>Analogía por ciclo de vida:</b> se utiliza para introducir a los mercados productos que tienen una vida específica. 
                  li 
                    i.fas.fa-angle-right
                    | <b>Valoración o juicio informado:</b> es el método de mayor uso, pero el menos confiable, ya que se basa en realizar proyección de ventas por parte de la fuerza de ventas de las empresas, pero estas pueden ser muy optimistas o muy pesimistas.
                  li 
                    i.fas.fa-angle-right
                    | <b>Juicio de los ejecutivos:</b> es un método que, al igual que el anterior, solo se basa en conjeturas de los ejecutivos.
                  li 
                    i.fas.fa-angle-right
                    | <b>Participación de la fuerza de ventas:</b> es el pronóstico de ventas que realiza el equipo de fuerza de ventas, incluyendo los vendedores, distribuidores, supervisores, etc.
                

</template>

<script>
export default {
  name: 'Tema4',
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

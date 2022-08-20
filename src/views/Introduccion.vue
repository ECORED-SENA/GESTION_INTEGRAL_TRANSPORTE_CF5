<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          i.fas.fa-info
      h1 Introducción

    p.mb-4 A continuación, presentaremos el video que hará una breve introducción del presente componente formativo.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-5 En toda negociación hay dos personas con bienes o gustos diferentes que desean intercambiarlos, es decir hay dos actores que interactúan necesariamente: quien vende un producto y quien lo compra. Este intercambio se denomina mercado. Al proceso entre los suministros, producción, traslado al punto de destino, el ofrecimiento a uno o varios compradores y la adquisición del producto o servicio por un comprador se le denomina cadena de suministro, gestión logística o cadena logística. 

    p.mb-5 Asimismo, en una cadena hay unos anillos o argollas, llamadas también ‘eslabones’, que son los elementos individuales que, articulados entre sí, forman la cadena que le confiere gran resistencia, fortaleza, pero también gran flexibilidad. Por lo tanto, podemos llamar cadena logística a la suma de eslabones que van desde la producción del bien o servicio hasta la adquisición del mismo por un usuario final o consumidor. 

    .row
      .col-md-4
        figure
          img(src='@/assets/curso/introduccion/img1.png', alt='Paquetes de cajas para enviar')
      .col-md-8
        .tarjeta.color-linea--borde.mb-0
            p.mb-2 Basados en el anterior concepto, se incursionará en eslabones como: 
            ul.lista-ul--color.mb-2
              li 
                i.fas.fa-angle-right
                | Tipos de mercado. 
              li 
                i.fas.fa-angle-right
                | Tipos de mercancías.
              li 
                i.fas.fa-angle-right
                | Suministros de producción de bienes o servicios, denominados oferta.
              li 
                i.fas.fa-angle-right
                | Y adquisición de estos bienes o servicios, lo que se denomina demanda de los mismos.

            p Es aquí donde confluyen los factores de la demanda y la oferta de bienes y servicios. 

               

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

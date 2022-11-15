<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade-right") A continuación, presentaremos el video que hará una breve introducción del presente componente formativo.

    figure.mb-5(data-aos="fade-up")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/0h8_t29WU8s" title="Pronóstico de necesidades: introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5(data-aos="fade-right") En toda negociación hay dos personas con bienes o gustos diferentes que desean intercambiarlos, es decir hay dos actores que interactúan necesariamente: quien vende un producto y quien lo compra. Este intercambio se denomina mercado. Al proceso entre los suministros, producción, traslado al punto de destino, el ofrecimiento a uno o varios compradores y la adquisición del producto o servicio por un comprador se le denomina cadena de suministro, gestión logística o cadena logística. 
    p.mb-5(data-aos="fade-right") Asimismo, en una cadena hay unos anillos o argollas, llamadas también ‘eslabones’, que son los elementos individuales que, articulados entre sí, forman la cadena que le confiere gran resistencia, fortaleza, pero también gran flexibilidad. Por lo tanto, podemos llamar cadena logística a la suma de eslabones que van desde la producción del bien o servicio hasta la adquisición del mismo por un usuario final o consumidor. 

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-4
        figure.mb-0
          img.img123(src='@/assets/curso/introduccion/img1.png', alt='Paquetes de cajas para enviar')
      .col-lg-8
        .tarjeta.color-linea--borde.mb-0
            p.mb-3 Basados en el anterior concepto, se incursionará en eslabones como: 
            ul.lista-ul--color.mb-2
              li.mb-0 
                i.fas.fa-angle-right
                | Tipos de mercado. 
              li.mb-0 
                i.fas.fa-angle-right
                | Tipos de mercancías.
              li.mb-0 
                i.fas.fa-angle-right
                | Suministros de producción de bienes o servicios, denominados oferta.
              li.mb-0 
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

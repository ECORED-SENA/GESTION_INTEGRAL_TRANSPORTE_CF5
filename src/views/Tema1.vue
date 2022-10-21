<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Oferta y Demanda

    p.mb-4(data-aos="fade-right") Llamar leyes de la oferta y demanda es llamar leyes del mercado de bienes y servicios, que están dadas por las cambiantes condiciones que inciden en variables de venta y compra. Hay características que inciden en ellas, que incluyen su definición, características, ley de la oferta, ley de la demanda y factores que intervienen en dichas relaciones.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h4 1.1. Conceptos básicos

    .row.mb-4(data-aos="fade")
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
          
    .row.mb-4(data-aos="fade")
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

    .row.mb-4(data-aos="fade")
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

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h4 1.2	Principios, pronósticos y métodos

    p.mb-0(data-aos="fade-right") El mercado está regido por unas características, leyes y factores, los cuales permiten realizar estudios y análisis a fin de comprender sus alcances, pronósticos y métodos de análisis.
    p.mb-4(data-aos="fade-right") A continuación, se presentan las características tanto de oferta como de demanda:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img1.png', alt='Señal de bien con la mano')
      .col-md-8(data-aos="fade-left")
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

          .py-3.py-md-4(titulo="Características de la demanda")
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

    p.mb-4(data-aos="fade-right") A continuación, se presentan las diferentes leyes y factores de la oferta y la demanda:

    .row.mb-5(data-aos="fade")
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
            .tabla-a.color-acento-botones.mb-5 
              table
                caption Leyenda de la tabla
                thead
                  tr
                    th Oferta
                    th Demanda
                tbody
                  tr
                    td Cambio tecnológico
                    td Valor de venta
                  tr
                    td Costos
                    td Poder adquisitivo de los consumidores
                  tr
                    td Expectativas
                    td El precio de bienes similares o semejantes
                  tr
                    td Bienes relacionados
                    td Los gustos de los consumidores
                  tr
                    td Medio ambiente
                    td El público
                  tr
                    td Competencia
                    td Los intereses del público
            
    .titulo-principal1.color-acento-contenido.mb-5(data-aos="fade-right")
      .titulo-principal1__numero
        span 
      h3.mb-0 Principios de la Oferta y la Demanda

    p.mb-4(data-aos="fade-right") A partir de las leyes de oferta y demanda, se conciben ocho principios que se describen como cambios en el equilibrio del mercado, de la siguiente manera:

    .row.mb-0(data-aos="fade")
      .col-md-3
        .bloque-texto-a.color-secundario.p-3.mb-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-2.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/icon5.png', alt='icono')
            .col-lg-8
              h5 Principio 1
              p Si la demanda aumenta (se desplaza hacia la derecha), entonces el precio sube y la cantidad sube.


      .col-md-3
        .bloque-texto-a.color-secundario.p-3.mb-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-2.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/icon2.png', alt='icono')
            .col-lg-8
              h5 Principio 2
              p Si la demanda disminuye (se desplaza hacia la izquierda), el precio baja y la cantidad baja.

      .col-md-3
        .bloque-texto-a.color-secundario.p-3.mb-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-2.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/icon3.png', alt='icono')
            .col-lg-8
              h5 Principio 3
              p Si la oferta disminuye (se desplaza hacia la izquierda), el precio sube y la cantidad baja.

      .col-md-3
        .bloque-texto-a.color-secundario.p-3.mb-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-2.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/icon4.png', alt='icono')
            .col-lg-8
              h5 Principio 4
              p Si la oferta aumenta (se desplaza hacia la derecha), el precio baja, la cantidad sube.
      
    .row.mb-4(data-aos="fade")
      .col-md-3
        .bloque-texto-a.color-secundario.p-3.mb-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-2.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/icon5.png', alt='icono')
            .col-lg-8
              h5 Principio 5
              p Si la demanda aumenta, la oferta disminuye, el precio sube, el cambio en la cantidad es indeterminado.

      .col-md-3
        .bloque-texto-a.color-secundario.p-3.mb-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-2.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/icon2.png', alt='icono')
            .col-lg-8
              h5 Principio 6
              p Si la demanda disminuye, la oferta aumenta, el precio baja y el cambio en la cantidad es indeterminado.

      .col-md-3
        .bloque-texto-a.color-secundario.p-3.mb-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-2.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/icon5.png', alt='icono')
            .col-lg-8
              h5 Principio 7
              p Si la demanda aumenta, la oferta aumenta, el cambio en el precio es indeterminado y la cantidad sube.

      .col-md-3
        .bloque-texto-a.color-secundario.p-3.mb-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-2.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/icon2.png', alt='icono')
            .col-lg-8
              h5 Principio 8
              p Si la demanda disminuye, la oferta disminuye, el cambio en el precio es indeterminado y la cantidad disminuye.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-md-9
        .tabla-a.color-acento-contenido.mb-5 
          table
            caption.mb-0 Nota. Tomada de Martínez (2020).
            thead
              tr
                th 
                th Misma Oferta
                th Aumento de Oferta
                th Descenso oferta
            tbody
              tr
                td.text-center Misma Demanda
                td.fond.text-center Mismo Precio <br><br/>Misma Cantidad
                td 
                  h5 Principio 4
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/baja.png', alt='icono')
                  .col-md-8 
                    p Precio
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/sube.png', alt='icono')
                  .col-md-8
                    p Cantidad
                td 
                  h5 Principio 3
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/sube.png', alt='icono')
                  .col-md-8 
                    p Precio
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/baja.png', alt='icono')
                  .col-md-8
                    p Cantidad
              tr
                td.text-center Aumento Demanda
                td 
                  h5 Principio 1
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/sube.png', alt='icono')
                  .col-md-8 
                    p Precio
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/sube.png', alt='icono')
                  .col-md-8
                    p Cantidad
                td 
                  h5 Principio 7
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/interrogante.png', alt='icono')
                  .col-md-8 
                    p Precio
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/sube.png', alt='icono')
                  .col-md-8
                    p Cantidad
                td 
                  h5 Principio 5
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/sube.png', alt='icono')
                  .col-md-8 
                    p Precio
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/interrogante.png', alt='icono')
                  .col-md-8
                    p Cantidad
              tr
                td.text-center Descenso Demanda
                td 
                  h5 Principio 2
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/baja.png', alt='icono')
                  .col-md-8 
                    p Precio
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/baja.png', alt='icono')
                  .col-md-8
                    p Cantidad
                td 
                  h5 Principio 6
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/baja.png', alt='icono')
                  .col-md-8 
                    p Precio
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/interrogante.png', alt='icono')
                  .col-md-8
                    p Cantidad
                td 
                  h5 Principio 8
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/interrogante.png', alt='icono')
                  .col-md-8 
                    p Precio
                  .col-md-4
                    figure  
                      img(src='@/assets/curso/tema1/baja.png', alt='icono')
                  .col-md-8
                    p Cantidad
    separador


    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h4 1.3	Actividades económicas

    p.mb-4(data-aos="fade-right") En este acápite, es preciso considerar las actividades económicas que son objeto de transporte, o sea las mercancías a transportar, los tipos, las condiciones y algunas características generales.
    p.mb-4(data-aos="fade-right") Para poder clasificar la mercancía, existen tres criterios, a saber:

    .titulo-principal1.color-acento-contenido.mb-5(data-aos="fade-left")
      .titulo-principal1__numero
        span 
      h3.mb-0 Primer criterio

    p.mb-4(data-aos="fade-right") Es el tipo de mercancía, según su clasificación en el sistema armonizado, el cual constituye una nomenclatura internacional elaborada por la <b>Organización Mundial de Aduanas y regido por el Sistema Armonizado de Designación y Codificación de Mercancías.</b>
    p.mb-4(data-aos="fade-right") Las mercancías se organizan en: 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-5(data-aos="fade-right")
        figure  
          img(src='@/assets/curso/tema1/criterio.png', alt='Productos')
      .col-md-7(data-aos="fade-left")
        p.mb-4 Se compone de 5.000 grupos, organizados en 21 secciones, 97 capítulos, títulos y subtítulos. El código numérico está compuesto de 8 dígitos.
        p.mb-4 A fin de convenir y codificar mundialmente los tipos de mercancías, se tiene el Convenio Internacional sobre el Sistema Armonizado de Designación y Codificación de Mercancías (Sistema Armonizado) del Consejo de Cooperación Aduanera, cuyo anexo comprende una nomenclatura destinada, entre otras finalidades, a constituir la nomenclatura de los Aranceles de Aduanas y de Estadísticas de Comercio Exterior, lo cual básicamente está llamado a facilitar la identificación y clasificación de las mercancías, las estadísticas de comercio exterior y otras medidas de política comercial de la Comunidad Andina relacionadas con la importación y exportación de mercancías.
        .row
          .col-md-9
            a.anexo.mb-4.mb-lg-0(href="http://www.sice.oas.org/trade/junac/decisiones/Dec570s.asp" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Enlace web.</b> Puede obtener los cinco anexos de codificación de mercancías de la Comunidad Andina, NANDINA, dando clic aquí
    
    p.mb-4(data-aos="fade-right") Como se puede advertir en el Sistema Armonizado de Designación y Codificación de Mercancías, existe una Unidad de Flete, que es el costo del transporte de una mercancía en un vehículo, el cual también se encuentra armonizado para los diferentes modos de transporte, de la siguiente manera:

    p.mb-5(data-aos="fade-right") <b>Relación de volúmenes por peso de flete en cada modo de transporte.</b>

    .row.mb-5(data-aos="fade")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 
          p.text-center Volumen peso Flete
          p.text-center <b>Flete Marítimo</b>
          p.text-center 1m3 = 1 Tonelada

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario2.p-5
          .tarjeta-numerada__numero
            .h2 
          p.text-center Volumen peso Flete
          p.text-center <b>Flete Aéreo</b>
          p.text-center 1m3 = 6 Toneladas

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario3.p-5
          .tarjeta-numerada__numero
            .h2 
          p.text-center Volumen peso Flete
          p.text-center <b>Flete Ferroviario</b>
          p.text-center 1m3 = 4 Toneladas

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario4.p-5
          .tarjeta-numerada__numero
            .h2 
          p.text-center Volumen peso Flete
          p.text-center <b>Flete Carretero</b>
          p.text-center 1m3 = 2.5 Toneladas

    .row.mb-4 
      .col-md-7(data-aos="fade-right")
        .titulo-principal1.color-acento-contenido.mb-5
          .titulo-principal1__numero
            span 
          h3.mb-0 Segundo criterio

        p.mb-4 La clasificación se realiza según el tipo de mercancía, organizada por tipos versus modos de transporte:

        .tarjeta.color-1.p-2.p-md-4.mb-5
          .row.justify-content-around.align-items-center
            .col-md-2
              img(src="@/assets/curso/tema1/icon6.png")
            .col-md-10
              a.anexo.mb-4(:href="obtenerLink('downloads/anexo.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Resumen de tipos más representativos de carga versus modos de transporte.

      .col-md-5(data-aos="fade-left")
        figure  
          img(src='@/assets/curso/tema1/img3.jpg', alt='icono')

    .titulo-principal1.color-acento-contenido.mb-5(data-aos="fade-right")
      .titulo-principal1__numero
        span 
      h3.mb-0 Tercer criterio

    p.mb-4(data-aos="fade-right") Es por la peligrosidad de la carga, lo cual se denomina transporte de mercancías peligrosas, y están codificadas más de 15.000 sustancias consideradas peligrosas. Para estandarizar su clasificación, la ONU ha codificado su peligrosidad en nueve clases

    .row.mb-2(data-aos="fade")
      .col-sm-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center
            .col-3
              figure
                img(src='@/assets/curso/tema1/1.png', alt='Texto que describa la imagen')
            .col-9
              h5 Clase 1:
              p Materias y objetos explosivos

      .col-sm-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center
            .col-3
              figure
                img(src='@/assets/curso/tema1/2.png', alt='Texto que describa la imagen')
            .col-9
              h5 Clase 2:
              p Gases

      .col-sm-8.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center
            .col-3
              figure
                img(src='@/assets/curso/tema1/3.png', alt='Texto que describa la imagen')
            .col-9
              h5 Clase 3:
              p Líquidos inflamables


    .row.mb-2(data-aos="fade")
      .col-sm-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-3
          .row.justify-content-center
            .col-3
              figure
                img(src='@/assets/curso/tema1/4.png', alt='Texto que describa la imagen')
            .col-9
              h5 Clase 4:
              p Sólidos inflamables, con subclasificaciones llamadas divisiones.

      .col-sm-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center
            .col-3
              figure
                img(src='@/assets/curso/tema1/5.png', alt='Texto que describa la imagen')
            .col-9
              h5 Clase 5:
              p Comburentes y peróxidos orgánicos

      .col-sm-8.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center
            .col-3
              figure
                img(src='@/assets/curso/tema1/6.png', alt='Texto que describa la imagen')
            .col-9
              h5 Clase 6:
              p Sustancias tóxicas e infecciosas

    .row.mb-4(data-aos="fade")
      .col-sm-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center
            .col-3
              figure
                img(src='@/assets/curso/tema1/7.png', alt='Texto que describa la imagen')
            .col-9
              h5 Clase 7:
              p Materiales radiactivos

      .col-sm-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center
            .col-3
              figure
                img(src='@/assets/curso/tema1/8.png', alt='Texto que describa la imagen')
            .col-9
              h5 Clase 8:
              p Sustancias corrosivas

      .col-sm-8.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-3
          .row.justify-content-center
            .col-3
              figure
                img(src='@/assets/curso/tema1/9.png', alt='Texto que describa la imagen')
            .col-9
              h5 Clase 9:
              p Sustancias y objetos peligrosos varios

    p.mb-4(data-aos="fade-right") Puede acceder al documento publicado por la ONU, denominado <b>Recomendaciones Relativas al Transporte de Mercancías Peligrosas</b>, del cual hay dos volúmenes, desde aquí.

    p.mb-4(data-aos="fade-right") Igualmente, la ONU ha publicado un documento titulado <b>Guía de Respuesta en Caso de Emergencia</b> que popularmente se denomina <b>“Libro Naranja”</b>, el cual es una guía destinada al uso de los primeros respondedores durante la fase inicial de un incidente en el transporte que involucre mercancías peligrosas/materiales peligrosos. Puede consultarlo aquí
    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h4 1.4	Métodos de compra de mercancías

    .row.mb-4
      .col-md-6(data-aos="fade-right")
        p Definir el control de compra y venta de mercancías es llevar una contabilidad de los inventarios, es colocarle un valor a los bienes, valorar los activos, y a esto se le denomina valuación de inventarios. Existen diversos métodos de valuación de inventarios, de acuerdo con la actividad de la empresa o de las mercancías, por ejemplo: mercancías perecederas.
      .col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img4.jpg', alt='Texto que describa la imagen')

    p.mb-4(data-aos="fade-right") Entre los métodos de valuación utilizados por las empresas están:

    TabsA.color-acento-contenido.mb-5(data-aos="fade")
      .tarjeta.color-acento-botones--borde.p-4(titulo="1. Costo (Precio) promedio (PP)")
        .row
          .col-md-2
            figure
              img(src='@/assets/curso/tema1/10.png', alt='Texto que describa la imagen')
          .col-md-10
            h4 Costo (Precio) promedio (PP): 
            p También llamado promedio ponderado, que consiste en valorar el promedio de la mercancía (los mismos artículos) comprada por la empresa y la que se mantiene en existencias, y dividirlo por el número de artículos. Este valor será el asignado como costo unitario en las ventas. 
            a.anexo.mb-4.mb-lg-0(href="https://actualicese.com/metodos-de-valuacion-de-inventarios/  " target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Enlace web.</b> Recuperado de: https://actualicese.com/metodos-de-valuacion-de-inventarios/ 
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="2. Primeras entradas, primeras salidas (PEPS)")
        .row
          .col-md-2
            figure
              img(src='@/assets/curso/tema1/11.png', alt='Texto que describa la imagen')
          .col-md-10
            h4 Primeras entradas, primeras salidas (PEPS): 
            p Opera bajo la presunción que la mercancía o materia prima que ingresa primero a la compañía es la primera en ser vendida (costo de ventas) o la primera en ser agotada en producción (costo de producción).  
            a.anexo.mb-4.mb-lg-0(href="https://actualicese.com/metodos-de-valuacion-de-inventarios" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Enlace web.</b> Recuperado de: https://actualicese.com/metodos-de-valuacion-de-inventarios
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="3. Últimas entradas, primeras salidas (UEPS)")
        .row
          .col-md-2
            figure
              img(src='@/assets/curso/tema1/12.png', alt='Texto que describa la imagen')
          .col-md-10
            h4 Últimas entradas, primeras salidas (UEPS): 
            p En esta técnica, la presunción es que la mercancía o materia prima que ingresa de última en la compañía es la primera en ser vendida (costo de ventas) o usada para la producción (costo de producción). 
            a.anexo.mb-4.mb-lg-0(href="https://actualicese.com/metodos-de-valuacion-de-inventarios " target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Enlace web.</b> Recuperado de: https://actualicese.com/metodos-de-valuacion-de-inventarios
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="4. Costo identificado")
        .row
          .col-md-2
            figure
              img(src='@/assets/curso/tema1/13.png', alt='Texto que describa la imagen')
          .col-md-10
            h4 Costo identificado:  
            p Se emplea cuando, por las características de ciertos artículos, es factible que se identifiquen específicamente con su costo de adquisición o producción.

      .tarjeta.color-acento-botones--borde.p-4(titulo="5. Detallistas")
        .row
          .col-md-2
            figure
              img(src='@/assets/curso/tema1/14.png', alt='Texto que describa la imagen')
          .col-md-10
            h4 Detallistas:  
            p Corresponde a valuar sus inventarios al precio de venta disminuido con el margen de utilidad bruta que tengan en el ejercicio.

     
  
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

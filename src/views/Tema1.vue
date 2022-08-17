<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Oferta y Demanda
    
    #t_1_1.titulo-segundo.color-acento-contenido
      .h4 1.1 Infografía Animada
    
    #t_1_2.titulo-segundo.color-acento-contenido
      .h4 1.2	Principios, pronósticos y métodos

    #t_1_3.titulo-segundo.color-acento-contenido
      .h4 1.3	Actividades económicas

    #t_1_4.titulo-segundo.color-acento-contenido
      .h4 1.4	Métodos de compra de mercancías
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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

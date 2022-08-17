<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1  Análisis factores de oferta y demanda, de acuerdo con productos y actividad empresarial
    
    #t_4_1.titulo-segundo.color-acento-contenido
      .h4 4.1	Factores determinantes de la oferta y la demanda
    
    #t_4_2.titulo-segundo.color-acento-contenido
      .h4 4.2	Técnicas para determinar la oferta y la demanda

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

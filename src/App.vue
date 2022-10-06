<template>
  <div id="app">

    <!-- Composizione pagina principale -->
    <HeaderSection />
    <MainSection />
    <FooterSection />

  </div>
</template>

<script>

// Importazione componenti principali del sito

import HeaderSection from './components/HeaderSection.vue';
import MainSection from './components/MainSection.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    HeaderSection,
    MainSection,
    FooterSection
}
}
</script>

<style lang="scss">

// Impostazioni generali dello stile tramite file dedicato

@import "./style/common.scss"; 

// GOOGLE FONTS
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap');

</style>

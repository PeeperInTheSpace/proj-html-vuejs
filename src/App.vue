<template>
  <div id="app">

    <HeaderSection />
    <MainSection />
    <FooterSection />

  </div>
</template>

<script>
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

</style>

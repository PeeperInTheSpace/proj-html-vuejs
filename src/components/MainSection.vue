<template>
  <main>

    <HeroSection />
    <EverythingOneSection />
    <HowWeWorkSection />
    <JoinSection />
    <TestimonialsSection />
    <EverythingTwoSection />
    <LatestNewsSection />
    <NewsletterSection />

  </main>
</template>

<script>
import HeroSection from './sub-components/HeroSection.vue';
import EverythingOneSection from './sub-components/EverythingOneSection.vue';
import HowWeWorkSection from './sub-components/HowWeWorkSection.vue';
import JoinSection from './sub-components/JoinSection.vue';
import TestimonialsSection from './sub-components/TestimonialsSection.vue';
import EverythingTwoSection from './sub-components/EverythingTwoSection.vue';
import LatestNewsSection from './sub-components/LatestNewsSection.vue';
import NewsletterSection from './sub-components/NewsletterSection.vue';

export default {
    components: { 
        HeroSection, 
        EverythingOneSection, 
        HowWeWorkSection, 
        JoinSection, 
        TestimonialsSection, 
        EverythingTwoSection, 
        LatestNewsSection, 
        NewsletterSection 
    }
}
</script>

<style lang="scss" scoped>

@import "../style/common.scss"; 

  main {
    padding-top: 8vh;
    overflow-x: hidden;
  }

</style>
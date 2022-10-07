<template>
  <main>
    <section class="container d-flex justify-content-center align-items-center w-100">
      <div class="w-50">
        <img src="../../assets/img/stock-full-hd-11-670x450.jpg" alt="background" class="fl-mainimg" >
      </div>
      <div class="d-flex justify-content-center w-50">
        <div class="fl-paragraph">
          <h5 class="mb-3">EVERYTHING IN <strong>MAXCOACH</strong></h5>
          <h1 class="mb-3">Learn about our <h1 class="fl-highlighted d-inline">Work Culture</h1> at MaxCoach</h1>
          <p class="mb-3">Spend some time to visit our website or head office and discover our current courses, enrollment procedure, and registration deadline. We're opening new classes every beginning of each month.</p>
          <p>Have questions? <span>Get Free Guide<i class="fa-solid fa-arrow-right-long"></i></span> </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import "../../style/common.scss"; 

main {
  // DEBUG
  border: $testBorder;
}

  section {
    height: 55vh;
    // DEBUG
    border: $testBorder;

    .fl-paragraph {
      width: 445px;
    }

    div {
      border: $testBorder;
    }
  }

</style>
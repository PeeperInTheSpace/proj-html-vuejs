<template>
  <section class="container d-flex justify-content-center align-items-center w-100">
    <div class="w-50">
      <div class="fl-paragraph">
        <img src="../../assets/img/brown-circle.png" alt="brown-circle" class="fl-browncircle">
        <h5 class="mb-3">EVERYTHING IN <strong>MAXCOACH</strong></h5>
        <h1 class="mb-3">Learn about our <h1 class="fl-highlighted d-inline">Work Culture</h1> at MaxCoach</h1>
        <p class="mb-3">Spend some time to visit our website or head office and discover our current courses, enrollment procedure, and registration deadline. We're opening new classes every beginning of each month.</p>
        <p>Have questions? <span>Get Free Guide<i class="fa-solid fa-arrow-right-long"></i></span> </p>
      </div>
    </div>
    <div class="w-50">
      <img src="../../assets/img/about-us-01-ohkia3qg98rq9vg3s0mn2hkflr1migdqdw370qnegc.jpg" alt="small-image" class="fl-smallimg">
      <img src="../../assets/img/maxcoach-shape-07-100x100.png" alt="dots" class="fl-dots">
      <img src="../../assets/img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg" alt="background" class="fl-mainimg" >
      <img src="../../assets/img/maxcoach-shape-02.png" alt="semicircles" class="fl-semicircles">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import "../../style/common.scss"; 

  section {
    // DEBUG
    height: 70vh;
    border: 2px solid blue;

    .fl-paragraph {
      width: 445px;

      p {
        font-size: 15px;
        color: $infoText;
        font-weight: 500;

        span {
          font-weight: 700;
          color: $primary;
        }

      }

    }

    div {
      height: 330px;

      .fl-mainimg {
        height: 330px;
        position: relative;
        z-index: 2;
      }

      .fl-smallimg {
        position: absolute;
        z-index: 3;
        bottom: -100px;
        right: 350px;
        height: 150px;
      }

      .fl-dots {
        position: absolute;
        z-index: 1;
        bottom: -60px;
        right: 450px;
      }

      .fl-browncircle {
        position: absolute;
        left: 780px;
        bottom: -80px;
      }

      .fl-semicircles {
        position: absolute;
        right: 450px;
        bottom: -450px;
        z-index: 3;
      }

    }

    h5 {
        color: $infoText;
      }

    h1 {
      font-weight: 600;

      .fl-highlighted {
        font-weight: 400;
        color: $primary;
      }

    }

  }


</style>
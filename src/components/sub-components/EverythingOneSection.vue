<template>
  <main>
    <section class="container d-flex justify-content-center align-items-center w-100">
      <div class="w-50">
        <div class="fl-paragraph position-relative">
          <img src="../../assets/img/brown-circle.png" alt="brown-circle" class="fl-browncircle">
          <h5 class="mb-3">EVERYTHING IN <strong>MAXCOACH</strong></h5>
          <h1 class="mb-3">Learn about our <h1 class="fl-highlighted d-inline">Work Culture</h1> at MaxCoach</h1>
          <p class="mb-3">Spend some time to visit our website or head office and discover our current courses, enrollment procedure, and registration deadline. We're opening new classes every beginning of each month.</p>
          <p>Have questions? <span>Get Free Guide<i class="fa-solid fa-arrow-right-long"></i></span> </p>
        </div>
      </div>
      <div class="w-50">
        <div class="position-relative">
          <img src="../../assets/img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg" alt="background" class="fl-mainimg rounded-2">
          <img src="../../assets/img/about-us-01-ohkia3qg98rq9vg3s0mn2hkflr1migdqdw370qnegc.jpg" alt="small-image" class="fl-smallimg rounded-2">
          <img src="../../assets/img/maxcoach-shape-07-100x100.png" alt="dots" class="fl-dots">
          <img src="../../assets/img/maxcoach-shape-02.png" alt="semicircles" class="fl-semicircles">
          <img src="../../assets/img/maxcoach-shape-08.png" alt="dots-big" class="fl-dots-big">
        </div>
      </div>
    </section>
    <section class="fl-numbers container d-flex text-center justify-content-evenly align-items-center">
      <div>
        <h1>129+</h1>
        <h5>ENROLLED LEARNERS</h5>
      </div>
      <div>
        <h1>80</h1>
        <h5>FINISHED SESSIONS</h5>
      </div>
      <div>
        <h1>94%</h1>
        <h5>SATISFACTION RATE</h5>
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
    background-color: $mainBackground;
    .fl-paragraph {
      width: 445px;

      p {
        font-size: 15px;
        color: $infoText;
        font-weight: 500;

        span {
          font-weight: 700;
          color: $primary;

          &:hover {
            cursor: pointer;
          }

        }

      }

    }

    section {
      height: 55vh;
      
      .fl-mainimg {
        height: 330px;
        position: relative;
        z-index: 2;
      }

      .fl-smallimg {
        position: absolute;
        z-index: 3;
        bottom: 250px;
        right: 50px;
        height: 150px;
      }

      .fl-dots {
        position: absolute;
        z-index: 1;
        bottom: 270px;
        right: 150px;
      }

      .fl-dots-big {
        position: absolute;
        z-index: 1;
        bottom: -50px;
        right: 480px;
      }

      .fl-browncircle {
        position: absolute;
        left: 480px;
        top: -50px;
      }

      .fl-semicircles {
        position: absolute;
        right: 150px;
        bottom: -50px;
        z-index: 3;
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

    .fl-numbers {
      height: 15vh;

      h1 {
        color: $primary;
        font-weight: 700;
      }

      h5 {
        color: $infoText;
        font-weight: 600;
      }

    }

  }


</style>
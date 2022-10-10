<template>
  <main>
    <section class="container d-flex justify-content-center align-items-center w-100">
      <div class="w-50 position-relative">
        <img src="../../assets/img/icon-youtube-play.png" alt="youtube-logo" class="fl-youtubelogo">
        <img src="../../assets/img/stock-full-hd-11-670x450.jpg" alt="background" class="fl-mainimg rounded-2">
        <img src="../../assets/img/maxcoach-shape-05-150x150.png" alt="circle-dots-150" class="fl-circledots">
        <img src="../../assets/img/grey-cloud.png" alt="grey-cloud" class="fl-greycloud">
        <img src="../../assets/img/maxcoach-shape-07-100x100.png" alt="square-dots-100" class="fl-squaredots">
      </div>
      <div class="w-50">
        <div class="fl-paragraph position-relative">
          <img src="../../assets/img/brown-circle.png" alt="brown-circle" class="fl-browncircle">
          <h5 class="mb-3">HOW WE WORK</h5>
          <h1 class="mb-3">Upgrade Your<br>Skills <h1 class="fl-highlighted d-inline">Upgrade<br>Your Life</h1></h1>
          <p class="mb-3">Opening up more opportunities in front of you to get the ticket to more enjoyable door in life. Getting equipped with new skills for new sets of insights into your career. MaxCoach accompany learners in every stage of learning.</p>
          <span>Have questions? Get Free Guide <i class="fa-solid fa-arrow-right-long"></i></span>
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
  background-color: $mainBackground;
}

  section {
    height: 55vh;

    .fl-paragraph {
      width: 445px;

      .fl-browncircle {
        position: absolute;
        bottom: 400px;
      }

      h5 {
        color: $infoText;
        position: relative;
      }

      
      h1 {
        font-weight: 600;

        .fl-highlighted {
          font-weight: 400;
          color: $primary;
        }

      }

      span {
        font-size: 15px;
        font-weight: 600;

        &:hover {
            cursor: pointer;
          }

      }

    }

    .fl-mainimg {
      width: 80%;
      position: relative;
      z-index: 3;
    }

    .fl-greycloud {
      position: absolute;
      top: -100px;
      right: 500px;
      z-index: 1;
    }

    .fl-circledots {
      position: absolute;
      top: 30px;
      right: 580px;
      z-index: 2;
    }

    .fl-squaredots {
      position: absolute;
      bottom: -30px;
      right: 100px;
      z-index: 1;
    }

    .fl-youtubelogo {
      position: absolute;
      top: 130px;
      left: 210px;
      z-index: 4;
    }

  }

</style>
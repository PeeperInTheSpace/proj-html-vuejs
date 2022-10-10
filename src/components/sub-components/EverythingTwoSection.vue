<template>
  <main>
    <section class="container d-flex justify-content-center align-items-center w-100 p-4">
      <div class="w-50 position-relative">
        <img src="../../assets/img/home-3-team-image.png" alt="avatars" class="fl-avatars">
        <img src="../../assets/img/maxcoach-shape-05-150x150.png" alt="circle-dots-150" class="fl-circledots">
        <img src="../../assets/img/green-cloud.png" alt="green-cloud" class="fl-greencloud">
        <img src="../../assets/img/maxcoach-shape-07-100x100.png" alt="square-dots-100" class="fl-squaredots">
        <img src="../../assets/img/maxcoach-shape-01.png" alt="lines" class="fl-lines">
      </div>
      <div class="w-50">
        <div class="fl-paragraph position-relative">
          <img src="../../assets/img/brown-circle.png" alt="brown-circle" class="fl-browncircle">
          <h5 class="mb-3">EVERYTHING IN <strong>MAX COACH</strong></h5>
          <h1 class="mb-3">We're Here To<br><h1 class="fl-highlighted d-inline">Transform </h1>You!</h1>
          <p class="mb-3">As learners, people can enjoy great companionship from MaxCoach mentors and educators. We can help you develop and grow at your best.</p>
          <button class="rounded-1 mt-4">Get Free Guidebook</button>
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

  section {
    height: 75vh;

    .fl-paragraph {
      width: 445px;

      .fl-browncircle {
        position: absolute;
        bottom: 400px;
        left: -50px;
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

      button {
      border: none;
      padding: 10px 20px;
      background-color: $primary;
      color: $blank;
      font-weight: 600;

      &:hover, span:hover{
        background-color: $blank;
        color: $primary;
      }

    }


    }

    .fl-avatars {
      z-index: 5;
      position: inherit;
    }
    .fl-greencloud {
      position: absolute;
      top: 50px;
      right: 400px;
      z-index: 2;
    }

    .fl-circledots {
      position: absolute;
      top: 150px;
      left: -70px;
      z-index: 3;
    }

    .fl-squaredots {
      position: absolute;
      bottom: -50px;
      left: 300px;
      z-index: 1;
    }

    .fl-lines {
      position: absolute;
      bottom: -30px;
      left: -150px;
      z-index: 1;
    }

  }

</style>
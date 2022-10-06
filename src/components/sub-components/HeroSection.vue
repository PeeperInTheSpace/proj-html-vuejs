<template>
  <section class="d-flex text-center align-items-center justify-content-center">
    <div>
      <div class="fl-herosidebuttons rounded-1 d-flex flex-column align-items-center gap-2 p-2">
        <img src="../../assets/img/ruler-triangle-icon.png" alt="ruler-triangle">
        <img src="../../assets/img/life-preserver.svg" alt="life-preserver">
        <img src="../../assets/img/book.svg" alt="book">
        <img src="../../assets/img/cart.svg" alt="logo" class="h-100">

      </div>
      <h4>Commence Business</h4>
      <h1>Distant Mentoring Program</h1>
      <button class="rounded-1 mt-4">Download free guidebook <i class="fa-solid fa-arrow-right-long"></i></button>
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
    height: 700px;
    background-image: url(../../assets/img/home-3-hero-bg.jpg);
    background-size: cover;
    color: white;
    position: relative;

    .fl-herosidebuttons {
      height: 105px;
      width: 30px;
      background-color: white;
      position: absolute;
      right: 0px;
      top: 200px;

      img {
        height: 15px;
        width: 15px;
      }

      .fl-blackicon {
        color: black;
      }

    }

    h1 {
      font-size: 55px;
      font-weight: 400;
    }

    h4 {
      font-size: 28px;
      font-weight: 600;
    }

    button {
      border: none;
      padding: 10px 20px;
      background-color: white;
      color: #1fad95;
      font-weight: 700;
    }

  }

</style>
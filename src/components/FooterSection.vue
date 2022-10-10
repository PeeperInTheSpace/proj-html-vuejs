<template>
  <footer>
    <section class="container"> 
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column">
          <h5>Address</h5>
          <p>382 NE 191st St #87394 Miami, FL 33179-3899</p>
          <p>+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
          <p>support@maxcoach.com</p>
          <div class="d-flex gap-3">
            <i class="fa-brands fa-twitter fl-icons"></i>
            <i class="fa-brands fa-facebook fl-icons"></i>
            <i class="fa-brands fa-instagram fl-icons"></i>
            <i class="fa-brands fa-linkedin fl-icons"></i>
          </div>
        </div>
        <div class="am-informations d-flex justify-content-between">
          <div class="d-flex flex-column">
            <h5>Explore</h5>
            <p>Start here</p>
            <p>Blog</p>
            <p>About us</p>
          </div>
          <div class="d-flex flex-column">
            <h5>&nbsp;</h5>
            <p>Success story</p>
            <p>Courses</p>
            <p>Contact us</p>
          </div>
          <div class="d-flex flex-column">
            <h5>Informations</h5>
            <p>Membership</p>
            <p>Purchase guida</p>
            <p>Privacy policy</p>
            <p>Terms of services</p>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import "../style/common.scss";


  footer {
    background-color: $footerBackground;
    color: $blank;

    section{
        padding-bottom: 5rem;
        padding-top: 5rem;
      }
      .am-informations{
        width: 30rem;
      }

      p:hover, .fl-icons:hover {
        cursor: pointer;
      }
  }



</style>
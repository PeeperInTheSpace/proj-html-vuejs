<template>
    <main class="main">
        <section class="container d-flex justify-content-center align-items-center w-100">
            <div class="w-50">
                <div class="fl-paragraph">
                <h5 class="mb-3">TESTIMONIALS</h5>
                <h1 class="mb-3">Why Do People <h1 class="fl-highlighted d-inline">*Hearts*</h1> Us?</h1>
                <p class="mb-3">Seeking for verbals of our service quality? Find them here. Everything is transparent and straightforward for your sense of jusitifcation.</p>
                <strong>View all <i class="fa-solid fa-arrow-right-long"></i></strong>
                </div>
            </div>
            <div class="w-50 position-relative">
                <div class="fl-mainbox shadow rounded-2 position-absolute p-5">
                    <h6>Professional team of specialists and passionate mentors at reach</h6>
                    <p>I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.</p>
                    <div class="d-flex w-100">
                        <div class="w-25">
                            <img src="../../assets/img/testimonial-avata-01.jpg" alt="testimonial-01">
                        </div>
                        <div class="w-50 pt-4">
                            <h6>MADLEY PONDOR</h6>
                            <p>/ IT Specialist</p>
                        </div>
                    </div>
                </div>
                <div class="fl-transparentboxtop position-absolute shadow p-4">
                    <h6>The MaxCoach team works really hard to ensure high level of quality</h6>
                    <p>I am happy with their arrangement of lessons and subjects. They</p>
                </div>
                <div class="fl-transparentboxbottom position-absolute shadow p-4 d-flex">
                    <div class="w-25">
                        <img src="../../assets/img/testimonial-avata-02.jpg" alt="testimonial-02">
                    </div>
                    <div class="w-50 pt-4">
                        <h6>MINA HOLLACE</h6>
                        <p>/ Freelancer</p>
                    </div>
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

    .main {
        margin-top: 10vh;
        height: 65vh;

            .fl-paragraph {
                width: 445px;

            p {
                font-size: 15px;
                font-weight: 500;

                &:hover {
                    cursor: pointer;
                }

                }

            }


        section {
        height: 55vh;

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

            .fl-mainbox {
                height: 300px;
                width: 700px;
                z-index: 3;
                top: -140px;
                background-color: $blank;

                
                img {
                    height: 100px;
                    width: 100px;
                    border-radius: 100%;;
                }
            }

            .fl-transparentboxtop {
                height: 150px;
                width: 580px;
                z-index: 2;
                filter: opacity(0.5);
                top: -240px;
                right: 20px;
            }

            .fl-transparentboxbottom {
                height: 150px;
                width: 600px;
                z-index: 2;
                top: 120px;
                left: 60px;
                filter: opacity(0.5);

                img {
                    height: 100px;
                    width: 100px;
                    border-radius: 100%;;
                }

            }


        }
    }

</style>
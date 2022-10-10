<template>
    <main>
        <section class="container d-flex flex-column align-items-center mb-5">
            <div class="d-flex flex-column align-items-center text-center fl-titles w-100">
                <h1 class="m-1">Subscribe <h1 class="d-inline-block fl-highlighted">Newsletter</h1></h1>
                <div class="w-50 mb-3 position-relative">
                    <img src="../../assets/img/green-circle.png" alt="green-circle" class="position-absolute fl-greencircle">
                    <img src="../../assets/img/maxcoach-shape-02.png" alt="green-circle" class="position-absolute fl-semicircles">
                    <p class="mb-3">Enter your email address to register to our newsletter subscription delivered on a regular basis!</p>
                </div>
            </div>
            <div class="input-group mb-3 fl-subscribe">
                <input type="text" class="form-control" placeholder="Enter your email">
                <button class="btn btn-outline-secondary fl-subscribebutton p-3" type="button" id="button-addon2">Subscribe</button>
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
        // border: $testBorder;
    }

    .fl-titles {


        h5 {
            color: $infoText;
        }

        
        h1 {
            font-weight: 600;
            margin-bottom: 30px;

            .fl-highlighted {
            font-weight: 400;
            color: $primary;
            }

        }

        .fl-greencircle {
            right: 900px;
        }

        .fl-semicircles {
            left: 900px;
        }

    }

    .fl-subscribe {
        width: 500px;

        .fl-subscribebutton {
            color: $blank;
            background-color: $primary;
            font-weight: 600;
        }
    }


</style>
<template>
    <main>
        <section class="fl-titles container d-flex justify-content-center">
            <div class="text-center">
                <h5 class="mb-3">JOIN MAXCOACH AT BEST</h5>
                <h1>Latest Online <h1 class="d-inline-block fl-highlighted">Courses</h1></h1>
            </div>
        </section>
        <section class="fl-cardsbox d-flex justify-content-center container gap-4 w-100">
            <div v-for="(item, index) in cardContent" :key="index" class="fl-card rounded-2 shadow">
                <img :src='require(`../../assets/img/${item.img}.jpg`)' alt="course-cover" class="rounded-top">
                <div class="p-4">
                    <h4 class="fl-prices">{{ item.price + item.priceCents }}</h4>
                    <p class="mb-4">{{ item.description }}</p>
                    <div class="d-flex">
                        <i class="fa-regular fa-file-lines fl-cardicons"></i> <span>{{ item.lessonsN }}</span>
                        <i class="fa-regular fa-user  fl-cardicons"></i> <span>{{ item.studentsN }}</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="fl-cardpages d-flex mt-4 gap-3 justify-content-center align-items-center">
            <div class="fl-bigdot"></div>
            <div class="fl-smalldot"></div>
            <div class="fl-smalldot"></div>
            <div class="fl-smalldot"></div>
            <div class="fl-smalldot"></div>
        </section>
        <section class="fl-cardsubtitle d-flex mt-4 justify-content-center align-items-center">
            <p class="w-25 text-center">Control your personal preference setting to get notified about appropriate courses. <strong>View all courses <i class="fa-solid fa-arrow-right-long"></i></strong> </p>
        </section>
        <div class="custom-shape-divider-top-1665351045">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
            </svg>
        </div>
    </main>
</template>

<script>

export default {

data () {
    return {

        cardContent: [

            {
                img: "course-02-480x298",
                price: "$40",
                priceCents: ".00",
                description: "Learning to Write as a Professional Author",
                lessonsN: "20 Lessons",
                studentsN: "50 Students"
            },
            {
                img: "stock-full-hd-03-480x298",
                price: "$0",
                priceCents: ".00",
                description: "Customer-centric Info-Tech Strategies",
                lessonsN: "24 Lessons",
                studentsN: "769 Students"
            },
            {
                img: "stock-full-hd-04-480x298",
                price: "$19",
                priceCents: ".00",
                description: "Open Programming Courses for Everyone: Phyton",
                lessonsN: "17 Lessons",
                studentsN: "62 Students"
            },
        ]
    }
}
}
</script>

<style lang="scss" scoped>

@import "../../style/common.scss"; 

    main {
        background-color: $mainBackground;
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

    }

    .fl-cardsbox {
        width: calc(100% / 3);
        height: 40vh;

        .fl-prices {
          font-weight: 700;
          color: $primary;
        }

        .fl-card {
            max-width: 300px;
            background-color: $blank;

            img {
                width: 300px;
            }

            p {
                font-weight: 600;
            }

            span {
                font-weight: 500;
                margin-right: 10px;
                color: $infoText;
            }
            .fl-cardicons {
                margin-right: 5px;
                color: $infoText;
            }
        }
    }

    .fl-cardpages {
        .fl-bigdot {
            border-radius: 100%;
            height: 15px;
            width: 15px;
            background-color: rgb(64, 64, 64);
        }

        .fl-smalldot {
            border-radius: 100%;
            height: 10px;
            width: 10px;
            background-color: white;
        }

    }

    .custom-shape-divider-top-1665351045 {
    position: absolute;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

    .custom-shape-divider-top-1665351045 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px;
    }

    .custom-shape-divider-top-1665351045 .shape-fill {
    fill: #e5e5e5;
    }

</style>
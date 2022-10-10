<template>
    <main>
        <section class="fl-titles container d-flex justify-content-center">
            <div class="text-center">
                <h5 class="mb-3">READ FOR MORE JOYMENT</h5>
                <h1>Latest From <h1 class="d-inline-block fl-highlighted">Our Blogs</h1></h1>
            </div>
        </section>
        <section class="fl-cardsbox d-flex justify-content-center container gap-4 w-100">
            <div v-for="(item, index) in cardContent" :key="index" class="fl-card rounded-2">
                <img :src='require(`../../assets/img/${item.img}.jpg`)' alt="course-cover" class="rounded-2">
                <div class="p-4">
                    <h6>ARTIST</h6>
                    <p class="mb-4">{{ item.description }}</p>
                    <div class="d-flex align-items-center">
                        <i class="fa-regular fa-calendar fl-cardicons"></i> <span>{{ item.lessonsDate }}</span>
                        <i class="fa-regular fa-eye  fl-cardicons"></i> <span>{{ item.viewsN }}</span>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {

    data () {
    return {

        cardContent: [

            {
                img: "artist-blog-03-480x325",
                description: "Brush Strokes Energize Trees in Paintings",
                lessonsDate: "May 15, 2020",
                viewsN: "688 Views"
            },
            {
                img: "artist-blog-01-480x325",
                description: "Pocket-Sized Notebooks Hold Miniature Paintings",
                lessonsDate: "May 15, 2020",
                viewsN: "603 Views"
            },
            {
                img: "artist-blog-02-480x325",
                description: "Connection Between Self-Portraits and Identity",
                lessonsDate: "May 15, 2020",
                viewsN: "397 Views"
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
        height: 75vh;
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
            max-width: 350px;

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

        h6 {
            color: $infoText;
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

</style>
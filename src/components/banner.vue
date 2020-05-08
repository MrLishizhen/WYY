<template>
	<div class="banner">
		<swiper :options="swiperOption" class="banner_swiper">
			<swiper-slide v-for="item in banners" :key="item.id">
				<router-link to="" class="banner_a">
					<img :src="item.imageUrl" :alt="item.typeTitle" class="banner_item">
					<i class="typeTitle" :style="{backgroundColor:`${item.titleColor}`}">{{item.typeTitle}}</i>
				</router-link>
			</swiper-slide>

			<div class="swiper-pagination" slot="pagination"></div>

		</swiper>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {
                data(){
                        return{
                                swiperOption: {//轮播图所用配置
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                        loop: true,
                                        autoplay: {
                                                disableOnInteraction: false,
                                        },
                                        pagination: {
                                                el: '.swiper-pagination',
                                                clickable: false,
                                        },

                                }
                        }
                },
	        props:['banners']
        };
</script>

<style scoped>
	.banner {
		box-sizing: border-box;
		margin-top: 0.66rem;
		background-color: #fff;
		min-height:1.6rem;
	}
	.banner_swiper{
		/*width:100%;*/
		padding:0.1rem 0.1rem 0 0.1rem;
		/*box-sizing: border-box;*/
	}
	.banner .banner_item {
		width: 100%;
		min-height: 1.6rem;
		border-radius: 10px;
	}
	.banner_a{
		display:block;
		font-size:0;
		position:relative;
	}
	.swiper-pagination-bullet-active {
		background: #fff !important;
	}
	.typeTitle{
		position:absolute;
		z-index:999999999;
		padding:0.03rem 0.05rem;
		font-size:0.12rem;
		right:0.05rem;
		bottom:0.05rem;
		color:#fff;
		font-style: normal;
		border-radius: 0.05rem;
	}
	.swiper-pagination-bullet-active{
		background-color: #fff!important;
	}
</style>
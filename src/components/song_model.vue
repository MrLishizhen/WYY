<template>
	<div class="song">
		<div class="song_top">
			<div class="title">{{title}}</div>
			<div class="btm">
				<router-link to="">更多推荐</router-link>
			</div>
		</div>
		<div class="song_btm">
			<div class="song_item" v-for="item in song_data" :key="item.id">
				<router-link :to="`/default/${item.id}`" class="song-item-a">
					<img v-lazy="item.picUrl" alt="" class="song-item-img">
					<div class="text" v-text="item.name">

					</div>
				</router-link>
			</div>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {
                props:['title','song_data']
        };
</script>

<style scoped>
	.song{
		/*margin-top:0.1rem;*/
		padding:0.2rem 0.1rem 0.1rem;
		background-color: #fff;
	}
	.song_top{
		display:flex;
		justify-content: space-between;
	}
	.song_btm{
		display:flex;
		flex-wrap: wrap;
	}
	.title{

	}
	.btm{

	}
	.song_item{
		width:33.333333%;
		padding:0.1rem;
		box-sizing: border-box;
	}
	.song-item-a{
		display:block;
		font-size:0;
		text-align: center;
	}
	.song-item-img{
		width:94%;
		border-radius: 0.1rem;

	}
	.text{
		font-size:0.12rem;
		overflow:hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
		line-height: 0.3rem;

	}
</style>
<template>
	<div class="tj_music">
		<div class="tj_music_top">
			<div class="title">{{title}}</div>
			<div class="btm">
				<router-link to="">更多推荐</router-link>
			</div>
		</div>
		<div class="tj_music_bom">
			<div class="box">
				<div class="song_item" v-for="item in song_data" :key="item.id">
					<router-link to="" class="song-item-a">
						<img v-lazy="item.picUrl" alt="" class="song-item-img">
						<div class="text" v-text="item.name">

						</div>
					</router-link>
				</div>
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
	.tj_music {
		padding:0.2rem 0.1rem 0.1rem;
		background-color: #fff;
	}

	.tj_music_top {
		display:flex;
		justify-content: space-between;
	}
	.tj_music_bom{
		overflow:auto;

	}

	.tj_music_bom::-webkit-scrollbar{width:0px;height:0px;}
	.song_item{
		width:20%;
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
	.box{
		width:150%;
		display:flex;
		flex-wrap: wrap;
	}
	.text{
		font-size:0.12rem;
		overflow:hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
		line-height: 0.3rem;

	}
</style>
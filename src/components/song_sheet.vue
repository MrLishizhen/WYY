<template>
	<div class="song">
		<div class="song-item" v-for="item in song_sheet" :key="item.id">
			<img v-lazy="item.coverImgUrl" alt="" class="song-img">
			<div class="song_right">
				<h3 class="song_name" v-text="item.name"></h3>
				<p class="song_default ellipsis2" v-text="item.description"></p>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {
                props:['song_sheet'],

        };
</script>

<style scoped>
	.song{
		height:100%;
		overflow:auto;
	}
	.song-item{
		display:flex;
		align-items: center;
		height:0.9rem;
		padding:0 0.1rem;
		box-shadow: 0 0.02rem 0.03rem #cecece;
		margin:0.05rem 0;
	}
	.song_right{
		flex-grow: 1;
		padding-left:0.1rem;
	}
	.song_name{
		font-size:0.14rem;
		text-align: left;
		color:#666;
	}
	.song_default{
		margin-top: 0.1rem;
		font-size:0.14rem;
		color:#e0e0e0;
	}
	.song-img{
		width:0.5rem;
		height:0.5rem;
		flex-shrink: 0;
	}
	.ellipsis2{
		text-overflow: -o-ellipsis-lastline;

		overflow: hidden;

		text-overflow: ellipsis;

		display: -webkit-box;

		-webkit-line-clamp: 2;

		line-clamp: 2;

		-webkit-box-orient: vertical;
	}

</style>
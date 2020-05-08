<template>
	<div class="">
		<div class="header-right">
			<router-link to='/home'>发现</router-link>
			<router-link to="/recommend">推荐</router-link>
			<div class="play" @click='show'>
				<i class="iconfont icon-yinleguangpan"></i>
			</div>
			<router-link to="/video">视频</router-link>
			<router-link to="/me">我的</router-link>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {
			methods:{
				show(){
					this.$store.state.show=true
				}
			}
		};
</script>

<style scoped>
	.footer{
		border-radius: 0.1rem;
		height:0.5rem;
		display:flex;
		line-height: 0.5rem;
		box-shadow: 0 -0.03rem 0.05rem #eee;
		overflow:hidden;
		background-color: #fff;
	}
	.header-left{
		width:0.5rem;
		flex-shrink: 0;
		display:flex;
	}

	.header-right{
		flex-grow: 1;
		display:flex;
	}
	.router-link-active{
		color:#dd001b;

	}
	.header-right>a{
		width:20%;
		font-size:0.14rem;
		display:inline-block;
		height:100%;
		box-sizing: border-box;

	}
	.play{
		flex-grow: 1;

	}
	.play>i{
		font-size:40px;

		display:inline-block;
	}
</style>
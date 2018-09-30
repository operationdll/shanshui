<template>
  <div id="app" style="height: 100%;">
      <div class="loading" v-show="loadFlag">
          <div class="loading_box"><img src="./assets/loading.svg"></div>
      </div>
            <!-- <div class="appStart" v-show="link">
          <div>
              <img :src="link" alt="" @click="goDetail">
              <div class="app-close" @click="closeApp"></div>
          </div>
      </div>  -->
      <router-view></router-view>
  </div>
</template>
<script>
	import { mapGetters } from 'vuex'
    import { mapState } from 'vuex'

    export default {
        name: 'app',
        data() {
            return {
            }
        },
        created() {
        },
	    computed:{
		    ...mapGetters([
			    'loadFlag',
			    'direction'
		    ])
	    }
    }

    
 


</script>
<style lang="less">
    @import '~vux/src/styles/reset.less';
    #app{background: #fff;}
    body,html{width: 100%;height: 100%;overflow-x: hidden; position: fixed;}
    .col-1{float: left;width: 10%;min-height: .1rem;}
    .col-2{float: left;width: 20%;min-height: .1rem;}
    .col-3{float: left;width: 30%;min-height: .1rem;}
    .col-4{float: left;width: 40%;min-height: .1rem;}
    .col-5{float: left;width: 50%;min-height: .1rem;}
    .col-6{float: left;width: 60%;min-height: .1rem;}
    .col-7{float: left;width: 70%;min-height: .1rem;}
    .col-8{float: left;width: 80%;min-height: .1rem;}
    .col-9{float: left;width: 90%;min-height: .1rem;}
    .m-navbar.navbar-fixed{top:20px!important;}
    .nav_mark{position: fixed;width: 100%;height: 22px;top:0;left:0;background: #fff;z-index: 100;}
    .back{display: block;width: .36rem;height: .36rem;background: url('assets/images/icon_back.png')center no-repeat;background-size: .2rem;}
    .menu{display: inline-block;width: .4rem;height: .5rem;background: url('assets/images/icon_menu.png')center no-repeat;background-size: .38rem;}
    .loading{position: fixed;width: 100%;height: 100%;top:0;left:0;z-index: 9999;}
    .loading>div{position:absolute;width: 2rem;height: 2rem;background: rgba(0,0,0,0.2);border-radius: .1rem;top:30%;left:50%;margin-left: -1.0rem;text-align: center;}
    .loading>div img{width: 0.8rem;margin: 0 auto;margin-top: 0.6rem;}
    .vux-pop-out-enter-active,
    .vux-pop-out-leave-active,
    .vux-pop-in-enter-active,
    .vux-pop-in-leave-active {
        will-change: transform;
        transition: all 500ms;
        backface-visibility: hidden;
        height: 100%;
        perspective: 1000;
    }
    .vux-pop-out-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    .vux-pop-out-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .vux-pop-in-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .vux-pop-in-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    [v-cloak] {
        display: none;
    }

    
</style>

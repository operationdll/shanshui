<template>
  <div class="menux">
      <h2>{{language.menu.title}}</h2>
      <ul>
		  <!-- 关闭物业选择功能，后期开发 -->
          <!-- <li @click="find">{{language.menu.find}}<i></i></li> -->
		  <!-- 新增客信功能，打开pdf -->
		  <!-- <li @click="toPDF">{{language.menu.info}}<i></i></li> -->
          <li @click="tabLanguage">{{language.menu.language}}<i></i></li>
          <li @click="help">{{language.menu.help}} <i></i></li>
          <li @click="aboutUs">{{language.menu.aboutus}}<i></i></li> 
		  <li @click="emSign">{{language.menu.emSign}} <i></i></li>
      </ul>
  </div>
</template>

<style>
    .menux{position:absolute;top:0;left:0;width:100%;height:100%;padding: 1rem .36rem;background: #fff;z-index: 1;}
    .menux h2{color: #4a4a4a;font-size: .48rem;padding-left: 40%;}
    .menux>ul{margin-top: 1.2rem;}
    .menux>ul li{height: 1rem;line-height: 1rem;padding-left: 40%; border-bottom: 1px solid #eee;font-size: .28rem;color: #404040;}
    .menux>ul li i{float: right;width:.2rem;height: .35rem;background: url("../../assets/images/icon_right.png")center no-repeat;background-size: .2rem; margin-top: .32rem;}
</style>

<script> 
	import { mapGetters } from 'vuex'
	import { mapState } from 'vuex'
	import facilities from '../apartment/facilities.vue'
	export default {
		data() {
			return {
				languageShow:false,
				menuFlag:'',
				versionData:{}

             };
		},
        created:function () {
			//切换语言菜单显示隐藏控制
	        if( localStorage.TOKEN ){
		        this.languageShow = true;
	        }
	        //获取标识
			this.menuFlag = localStorage.menuFlag
			
			// //获取facilities信息
			// this.info = facilities.$router.query.data.facilitiesList
			
        },
		methods: {


			
			tabLanguage:function (key) {
				
			    if (localStorage.stateFlag == '2') {
                    this.$store.dispatch('changeLanguage2');
                } else {
                    this.$store.dispatch('changeLanguage');
                }

		    },
            help:function () {
                this.$router.push({path:'/help',query:{menuFlag : this.menuFlag}})
            }, 
		 	emSign:function () {
                this.$router.push('loginForEmployee');
            },
            aboutUs: function () {
                this.$router.push({path:'/aboutUs',query:{menuFlag : this.menuFlag}})
			},
			// //新增客信功能，打开pdf
			// toPDF:function () { 
			// 	if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
			// 		openFile(this.info.pdf)
			// 	}else{
			// 		openPdf(this.info.pdf)
			// 	}
			// },


			//暂时关闭物业选择功能
            // find:function () {
	        //     switch (this.menuFlag){
		    //         //已登录首页
		    //         case 'home':
			//             this.$router.push({path:'/search',query:{searchFlag:'home'}})
			//             break;
		    //         //未登录首页
		    //         case 'unlogin':
			//             this.$router.push({path:'/search',query:{searchFlag:'unlogin'}})
			//             break;
		    //         //引导页
		    //         case 's_home':
			//             this.$router.push({path:'/search',query:{searchFlag:'s_home'}})
			//             break;
	        //     }
			// }
			
			

		},
		computed: {
			...mapState({
				language: state => state.language.language
			})
		},

	};
</script>

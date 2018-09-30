/**
 * 中英文翻译
 */import * as types from '../mutation-types'

const state = {
	tabLanShow:false,
	tabLanShow2:false,
 	language:{},
	en: {
		menu:{
			find:'Find a Property',
			language:'Language',
			info:'Info',
			help:'Help',
			aboutus:'About Us',
			emSign:'Staff Portal',
			title:'MORE'
		},
		interactiveService:{
			airConditioner:'Air-Conditioning',
			electrical:'Electrical',
			plumbing:'Plumbing ',
			furniture:'Furniture ',
			audio:'Audio & Visual',
			clean:'Cleaning',
			title:'Interactive Service',
			service:'Service',
			loan:'Loan Items',
			internet:'Internet',
			guestsupply:'Guest Supply',
			roomservice:'Room Service',
			shopping:'Shopping',
			maintain:'Maintenance',
			maintainList:'Maintenance List',
			myOrder:'My Order',
			rating:'Rating', 
			hint : 'Select problems and time',
			butlerList: 'Butler List',
			feedback: 'We appreciate your feedback',
		},
		promotion:{
			title:'Promotion',
            more:'more',
			porpertyProper:'Promotion by Properties',
			porpertyNews:'Property news',
			grounpNews:'Promotions by Group',
			grounpAc:'Group news'
		},
		raiders:{
			title:'Local Interest',
			more:'more'
		},
		community:{
			title:'Activities',
			propertyActivity:'Activities',
			opinionSurvey:'Notice',
			shopping:'Interactive Service',
			ascottLife:'Riverside Living',
			feedback:'Feedback',
			ssr:'RSS',
            more:'more',
			buy:'BUY',
			submit:'SUBMIT',
			signUp:'SIGN UP',
			life:'Life style',
            how:'Transportation',
			apply:'Apply Time',
			start:'Start Time',
            sign:'SIGN UP'
		},
		func:{
			translate:'TRANSLATE',
			tel:'PHONE',
			contact:'CONTACT',
			extension:'EXTENSION',
			service:'Service'
		},
		home:{
			findResidence:'Searching for Property',
            search:'Search',
			profile:'Property',
			virtual:'Panoramic',
			apartment:'Rooms',
			fire:'Fire Exit',
            how:'Transportation'
		},
		myCenter:{
			room_info:'Room Info',
			message:'Message',
			notice:'Collection',
			log_out:'Logout',
			oaId:'OA ID',
			gsm:'Staff system',
			bill:'Billing',
            invoices:'Invoices',
            order:'Order'
		},
		common:{
            screen:'SCREEN',
            more:'more',
			loginTxt:'Are you sure you want to quit the system?',
			cancel:'Cancel',
			sure:'Sure',
			noMoreData:'No more data~',
			total:'Total',
			shoppingCart:'Cart',
			num:'Amount',
			submit:'Submit',
			remove:'Remove',
			addToCart: 'Add',
			details:'Details'
		},
        msg:{
            empty_username:'Please enter one user name!',
            empty_pwd:'Please enter password!',
            empty_one:'The input information is incomplete!',
            info_err:'ERROR Incorrect username or password!',
			empty_name:'Please enter your name!',
			empty_phone:'Please enter your phone number!',
			empty_num_par:'Please enter number of participants!',
			empty_num_buy:'Please enter quantity purchased!',
			login_err:'Login information is incorrect',
			buy_info:'Your order has been successfully submitted, will contact you soon',
			lifeMsg:'The following services are provided by third parties and only support Chinese language. The relevant services and responsibilities will be borne by the third parties. If you have any questions, please contact the customer service of the company.',
			input:'Please type here',
			success:'Submit Success!',
			
        },
		login:{
			sign:'SIGN IN',
			residence:'Find Your Residence',
			room:'Room No.',
			name:'Last Name',
			login:'Guest sign in',
			empAccount:'Employee Account',
			password:'Password',
			isAd:'is Ad?',
			aLogin:'Employee sign in'
		},
		foot:{
			hotel:'Introduction',
			promotion:'Promotion',
			surrounding:'Local Interest',
			community:'Activities'
		},
		submitForm:{
			name:'Name',
			tel:'Tel',
			number:'Number',
			bz:'Remarks...',
			subBtn:'Submit',
			alertTxt:'Successful enrollment!',
			alertTxt2:'Booking success！'
		},
        apartment:{
            book:'Reservation',
            maxPerson:'Max',
            person:'person',
            fcount:'No if Units',
            size:'Apartment Size',
            photo:'View',
			title:'Room Type'
        },
		order:{
			title:'MY ORDER',
			user:'GUEST',
			roomid:'ROOM ID',
			time:'TIME',
            orderid:'ID'
		},
        lifeStyle:{
            food:'Food & Drink',
            movie:'Moive & TV Drama',
            phone:'Phone & Sim Card',
            express:'Expressage',
            trip:'Trip',
			title:'LIFE STYLE'
        },
		news:{
			title:'NEWS'
		},
        judge:{
            title:'Judge'
        }
	},
	cn:{
		menu:{
			find:'查找物业',
			language:'语言',
			help:'帮助',
			aboutus:'关于我们',
			info: '物业信息',
			emSign:'员工登录',
			title:'设置'
		},
		interactiveService:{
			airConditioner:'空调',
			electrical:'电器',
			plumbing:'冷热水',
			furniture:'家具',
			audio:'影像',
			clean:'清洁',
			title:'互动服务',
			service:'服务',
			loan:'借物',
			internet:'宽带',
			guestsupply:'客用品',
			roomservice:'送餐',
			shopping:'购物',
			maintain:'维修',
			maintainList:'维修列表',
			myOrder:'我的订单',
			rating:'评价',
			hint:'请选择故障和上门时间',
			butlerList: '管家列表',
			feedback: '我们期待您的反馈',
		},
		promotion:{
			title:'促销优惠',
            more:'更多',
			porpertyProper:'物业促销',
			porpertyNews:'物业新闻',
			grounpNews:'集团促销',
			grounpAc:'集团新闻'
		},
		raiders:{
			title:'本地攻略',
            more:'更多'
		},
        community:{
            title:'社区生活',
            propertyActivity:'物业活动',
            opinionSurvey:'物业通知',
            shopping:'互动服务',
            ascottLife:'山水生活',
            feedback:'意见反馈',
	        ssr:'RSS',
            more:'更多',
			buy:'购买',
            submit:'提交',
            signUp:'报名',
	        life:'生活服务',
            apply:'开始时间',
            start:'结束时间',
			sign:'报名'
        },
		func:{
			translate:'翻译',
			tel:'电话',
			contact:'联系方式',
			extension:'分机号',
			service:'服务热线'
		},
		home:{
			findResidence:'物业查询',
			search:'搜索',
			profile:'物业介绍',
			virtual:'全景',
			apartment:'房型列表',
			fire:'楼层消防',
            how:'交通信息'
		},
		myCenter:{
			room_info:'房间号',
			message:'消息',
			notice:'收藏',
			log_out:'退出',
			oaId:'员工ID',
			gsm:'员工系统',
			bill:'账单',
            invoices:'发票管理',
			order:'订单'
		},
        common:{
            screen:'筛选',
			more:'更多',
	        loginTxt:'确定退出?',
	        cancel:'取消',
	        sure:'确定',
			noMoreData:'没有更多数据了~',
			total:'总价',
			shoppingCart:'购物车',
			num:'数量',
			submit:'提交',
			remove:'移除',
			addToCart: '添加',
			details:'详情',

        },
		msg:{
			empty_username:'请输入用户名',
			empty_pwd:'请输入密码',
			empty_one:'输入信息不完整',
			info_err:'账号或密码错误',
            empty_name:'请输入姓名!',
            empty_phone:'请输入手机号!',
            empty_num_par:'请输入参与人数!',
            empty_num_buy:'请输入购买数量!',
            login_err:'登录信息错误',
            buy_info:'您提交的订单已成功，我们会尽快联系您',
			lifeMsg:'以下服务由第三方提供并只提供中文支持。相关服务和责任将由该第三方承担。如有问题请咨询该公司客服',
			input:'请输入信息',
			success:'提交成功！',
		},
		login:{
			sign:'登录',
			residence:'选择物业',
			room:'房间号',
			name:'姓名',
			login:'客户登录',
			empAccount:'员工账号',
			password:'密码',
			isAd:'是否为 Ad 账户?',
			aLogin:'员工登录'
		},
		foot:{
			hotel:'公寓介绍',
			promotion:'促销优惠',
			surrounding:'本地攻略',
			community:'社区生活'
		},
		submitForm:{
			name:'姓名',
			tel:'电话',
			number:'人数',
			bz:'备注',
			subBtn:'提交',
			alertTxt:'报名成功！',
			alertTxt2:'预约成功！'
		},
		apartment:{
			book:'预定',
			maxPerson:'最大入住',
			person:'人',
			fcount:'房间数',
			size:'房间面积',
			photo:'全景',
            title:'房型介绍'
		},
        order:{
            title:'我的订单',
            user:'客户',
            roomid:'房间号',
            time:'时间',
			orderid:'订单号'
        },
		lifeStyle:{
			food:'餐饮外卖',
			movie:'视频',
			phone:'话费&流量',
			express:'快递',
			trip:'出行',
			title:'生活服务'
		},
        news:{
            title:'消息'
        },
        judge:{
            title:'评论'
        }
	}
}
const actions = {
	updateLanguage: function ({commit},key) {
		commit(types.LANGUAGE,key)
	},
	firstLanguage:function ({commit}) {
		commit(types.FIRSTLANGUAGE)
	},
	changeLanguage:function ({commit}) {
		commit(types.TABLANGUAGE)
	},
    changeLanguage2:function ({commit}) {
        commit(types.TABLANGUAGE2)
    },
}
const mutations = {
	//切换语言，切换本地缓存
	[types.LANGUAGE] (state,key) {
		if(key == 'en'){
			state.language = state.en;
		}else{
			state.language = state.cn;
		}

	},
	[types.FIRSTLANGUAGE] (state) {
		if(localStorage.LANGUAGE == undefined){
			state.language = state.en;
			localStorage.LANGUAGE = 'en';
		}else{
			if(localStorage.LANGUAGE == 'en'){
				state.language = state.en;
			}else{
				state.language = state.cn;
			}
		}

	},
	//切换语言，弹出actionSheet
	[types.TABLANGUAGE] (state) {
		if(state.tabLanShow){
			state.tabLanShow = false;
		}else{
			state.tabLanShow = true;
		}
	},
    //切换语言，弹出actionSheet
    [types.TABLANGUAGE2] (state) {
        if(state.tabLanShow2){
            state.tabLanShow2 = false;
        }else{
            state.tabLanShow2= true;
        }
    },
}
const getters = {
	// language: state => state.language,
	tabLanShow: state => state.tabLanShow,
	tabLanShow2: state => state.tabLanShow2,
}

export default {
	state,
	actions,
	mutations,
	getters
}
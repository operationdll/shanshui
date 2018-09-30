import Vue from 'vue'
import Router from 'vue-router'

/**
 * 通用模块
 */
import guestCenter from '../components/common/menu/guestCenter.vue' //next
import error from '../components/404.vue' //next
import pc from '../components/pc.vue'

/**
 * 首页
 */
import home from '../components/home/home.vue'
import unlogin from '../components/home/n_home.vue'
import s_home from '../components/home/s_home.vue'
import guide from '../components/home/guide.vue'
import appartmentDetail from '../components/apartment/appartmentDetail.vue'
import virtual from '../components/apartment/virtual.vue'
import help from '../components/common/menu/help.vue'
import aboutUs from '../components/common/menu/aboutUs.vue'
import appartmentStyle from '../components/apartment/appartmentStyle.vue'
import photo from '../components/apartment/photo.vue'
import service from '../components/home/shortcut/service.vue'
import news from '../components/mycenter/news.vue'
import notice from '../components/mycenter/notice.vue'
import newsDetail from '../components/mycenter/newsDetail.vue'
import addShowingOrder from '../components/apartment/addShowingOrder.vue'
import article from '../components/apartment/article.vue'
import gsm from '../components/mycenter/gsm.vue'
import facilities from '../components/apartment/facilities.vue'
import booking from '../components/apartment/booking.vue'
import fireDetail from '../components/apartment/fireDetail.vue'
import homebooking from '../components/apartment/homebooking.vue'
import trafficDetail from '../components/apartment/trafficDetail.vue'
import invoices from '../components/mycenter/invoices.vue'
import invoicesHeader from '../components/mycenter/invoicesHeader.vue'
import invoicesManage from '../components/mycenter/invoicesManage.vue'
import helpDetail from '../components/common/menu/helpDetail.vue'
import order from '../components/mycenter/order.vue'



/**
 * 搜索
 */
import search from '../components/search/search.vue'
import searchResult from '../components/search/searchResult.vue'

/**
 * 登录模块
 */
import loginForGuest from '../components/login/loginForGuest.vue'
import loginForEmployee from '../components/login/loginForEmployee.vue'

/**
 * 快捷功能
 */
import phone from '../components/function/phone.vue'
import airport from '../components/function/airport.vue'
import airportInfo from '../components/function/airportInfo.vue'
import translate from '../components/function/translate.vue'
/**
 *社区生活
 */
import communityLife from '../components/communityLife/communityLife.vue'
import lifeDetail from '../components/communityLife/lifeDetail.vue'
import propertyActivity from '../components/communityLife/propertyActivity.vue'
import propertyDetail from '../components/communityLife/propertyDetail.vue'
import opinionSurvey from '../components/communityLife/opinionSurvey.vue'
import opinionDetail from '../components/communityLife/opinionDetail.vue'
import buy from '../components/communityLife/buy.vue'
import ascottLife from '../components/communityLife/ascottLife.vue'
import apply from '../components/communityLife/apply.vue'
import feedback from '../components/communityLife/feedbackList.vue'
import feedbackDetail from '../components/communityLife/feedbackDetail.vue'
import ssr from '../components/communityLife/ssr.vue'
import mybill from '../components/mycenter/mybil.vue'
import lifeStyle from '../components/communityLife/lifeStyle.vue'
import lifeStyleDetail from '../components/communityLife/lifeStyleDetail.vue'
import ssrDetail from '../components/communityLife/ssrDetail.vue'
/**
 *促销优惠
 */
import promotiom from '../components/promotiom/promotiom.vue'
import promotionDetail from '../components/promotiom/promotionDetail.vue'
/**
 * 本地攻略
 */
import raiders from '../components/localRaiders/raiders.vue'
import raidersDetail from '../components/localRaiders/raidersDetail.vue'

import pdf from '../components/common/pdf.vue'
import judge from '../components/judge/judge.vue'
import judgeInput from '../components/judge/judgeInput.vue'

/**
 * 互动服务
 */
import orderFood from '../components/interactiveService/orderFood.vue'
import serviceSubmit from '../components/interactiveService/serviceSubmit.vue'
import maintain from '../components/interactiveService/maintain.vue'
import interactiveService from '../components/interactiveService/interactiveService.vue'
import shopping from '../components/interactiveService/shopping.vue'
import shoppingDetail from '../components/interactiveService/shoppingDetail.vue'
import cleanDetail from '../components/interactiveService/cleanDetail.vue'
import shoppingCart from '../components/interactiveService/shoppingCart.vue'
import rating from '../components/interactiveService/rating.vue'
import myOrder from '../components/interactiveService/userOrder.vue'




Vue.use(Router)

export default new Router({
    routes: [
        { path: '/2', name: 'translate', component: translate }, //测试使用
        {
            path: '/',
            redirect: to => {
                var browser = {
                    versions: function () {
                        var u = navigator.userAgent, app = navigator.appVersion;
                        return {//移动终端浏览器版本信息   
                            trident: u.indexOf('Trident') > -1, //IE内核  
                            presto: u.indexOf('Presto') > -1, //opera内核  
                            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
                            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
                            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
                            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
                            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
                            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器  
                            iPad: u.indexOf('iPad') > -1, //是否iPad    
                            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部  
                            weixin: u.indexOf('MicroMessenger') > -1, //是否微信   
                            qq: u.match(/\sQQ/i) == " qq" //是否QQ  
                        };
                    }(),
                    language: (navigator.browserLanguage || navigator.language).toLowerCase()
                }

                if (!(browser.versions.mobile || browser.versions.ios || browser.versions.android ||
                    browser.versions.iPhone || browser.versions.iPad)) {
                    return { path: '/pc' };
                }
                if (localStorage.TOKEN) {
                    //如果已登录跳转至已登录首页
                    return { path: '/home' }
                } else {
                    //如果未登录跳转至未登录首页，由于只有一个物业，直接进入物业详情页面
                    return { path: '/s_home' }
                }
            }
        },//引导页
        { path: '/guide', name: 'guide', component: guide },//首次引导页
        { path: '/error', name: 'error', component: error },//首次引导页
        { path: '/pc', name: 'pc', component: pc },//首次引导页 
        { path: '/home', name: 'home', component: home, meta: { allowBack: false } },//首页
        { path: '/gsm', name: 'gsm', component: gsm },//gsm
        { path: '/home/trafficDetail', name: 'trafficDetail', component: trafficDetail },//交通信息
        { path: '/ssr', name: 'ssr', component: ssr },//定于
        { path: '/mybill', name: 'mybill', component: mybill },//账单
        { path: '/invoices', name: 'invoices', component: invoices },//发表管理
        { path: '/invoicesHeader', name: 'invoicesHeader', component: invoicesHeader },//发表抬头管理
        { path: '/invoicesManage', name: 'invoicesManage', component: invoicesManage },//发表管理
        { path: '/booking', name: 'booking', component: booking },//预定
        { path: '/facilities', name: 'facilities', component: facilities },//酒店设施
        { path: '/s_home', name: 's_home', component: s_home },//未登陆首页2
        { path: '/home/service', name: 'service', component: service },//服务
        { path: '/home/news', name: 'news', component: news },//消息
        { path: '/home/notice', name: 'notice', component: notice },//通知
        { path: '/home/article', name: 'article', component: article },//客房物品
        { path: '/home/news/newDetail', name: 'newsDetail', component: newsDetail },//消息
        { path: '/home/virtual', name: 'virtual', component: virtual },//全景图
        { path: '/home/homebooking', name: 'homebooking', component: homebooking },//全景图
        { path: '/addShowingOrder', name: 'addShowingOrder', component: addShowingOrder },//预约
        { path: '/appartmentDetail', name: 'appartmentDetail', component: appartmentDetail },//物业详情
        { path: '/appartmentStyle', name: 'appartmentStyle', component: appartmentStyle },//房型详情
        { path: '/fireDetail', name: 'fireDetail', component: fireDetail },//房型详情
        { path: '/photo', name: 'photo', component: photo },//物业详情
        { path: '/unlogin', name: 'unlogin', component: unlogin },//未登陆首页
        { path: '/search', name: 'search', component: search },//搜索
        { path: '/search/searchResult', name: 'searchResult', component: searchResult },//搜索结果
        { path: '/loginforguest', name: 'loginForGuest', component: loginForGuest },//用户登录
        { path: '/loginForEmployee', name: 'loginForEmployee', component: loginForEmployee },//员工登陆
        { path: '/phone', name: 'phone', component: phone },//常用电话
        { path: '/airport', name: 'airport', component: airport },//航班信息
        { path: '/airportInfo', name: 'airportInfo', component: airportInfo },//航班信息查询列表
        { path: '/translate', name: 'translate', component: translate },//翻译
        { path: '/communityLife', name: 'communityLife', component: communityLife, meta: { allowBack: false } },//社区生活
        { path: '/propertyDetail', name: 'propertyDetail', component: propertyDetail },//社区生活
        { path: '/lifeStyle', name: 'lifeStyle', component: lifeStyle },//生活服务
        { path: '/lifeStyleDetail', name: 'lifeStyleDetail', component: lifeStyleDetail },//生活服务详情
        { path: '/propertyActivity', name: 'propertyActivity', component: propertyActivity },//物业活动
        { path: '/opinionSurvey', name: 'opinionSurvey', component: opinionSurvey },//物业通知
        { path: '/opinionDetail', name: 'opinionDetail', component: opinionDetail },//物业通知详情
        { path: '/shopping', name: 'shopping', component: shopping },//体验式购物
        { path: '/shopping/shoppingDetail', name: 'shoppingDetail', component: shoppingDetail },//购物详情
        { path: '/buy', name: 'buy', component: buy },//购买
        { path: '/ascottLife', name: 'ascottLife', component: ascottLife },//雅诗阁生活
        { path: '/lifeDetail', name: 'lifeDetail', component: lifeDetail },//雅诗阁生活
        { path: '/promotion', name: 'promotiom', component: promotiom, meta: { allowBack: false } },//促销优惠
        { path: '/promotionDetail', name: 'promotionDetail', component: promotionDetail },//促销优惠详情
        { path: '/raiders', name: 'raiders', component: raiders, meta: { allowBack: false } },//本地攻略
        { path: '/raidersDetail', name: 'raidersDetail', component: raidersDetail },//本地攻略
        { path: '/apply', name: 'apply', component: apply },//物业活动报名
        { path: '/pdf', name: 'pdf', component: pdf },//物业活动报名
        { path: '/feedback', name: 'feedback', component: feedback },//物业调查问卷
        { path: '/feedbackDetail', name: 'feedbackDetail', component: feedbackDetail },//物业调查问卷详情
        { path: '/help', name: 'help', component: help },//help
        { path: '/aboutUs', name: 'aboutUs', component: aboutUs },//aboutUs
        { path: '/life/lifeStyleDetail', name: 'lifeStyleDetail', component: lifeStyleDetail },//生活详情
        { path: '/ssr/ssrDetail', name: 'ssrDetail', component: ssrDetail },//订阅详情
        { path: '/helpDetail', name: 'helpDetail', component: helpDetail },//帮助详情
        { path: '/order', name: 'order', component: order },//订单详情
        { path: '/judge', name: 'judge', component: judge },//评论列表
        { path: '/judgeInput', name: 'judgeInput', component: judgeInput },//评论
        { path: '/interactiveService', name: 'interactiveService', component: interactiveService },//互动服务
        { path: '/serviceSubmit', name: 'serviceSubmit', component: serviceSubmit },//互动服务提交表单
        { path: '/orderFood', name: 'orderFood', component: orderFood },//点餐
        { path: '/maintain', name: 'maintain', component:maintain},//维修
        { path: '/cleanDetail', name: 'cleanDetail', component:cleanDetail},//打扫
        { path: '/shoppingCart', name: 'shoppingCart', component:shoppingCart}, //购物车详情
        { path: '/rating', name: 'rating', component:rating}, //评价
        { path: '/userOrder', name: 'myOrder', component:myOrder}, //用户任务列表
    ]
})

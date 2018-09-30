<template>
  <div class="interactiveService">
        <div class="nav_mark"></div>
        <yd-navbar :title="language.interactiveService.title" fixed>
            <router-link to="/home" slot="left" >
                <span class="back"></span>
            </router-link> 
        </yd-navbar>
         <scroller>
           <section class="community-box">
               <!-- <div  class="community-list"> -->
              <div  v-if="shortcutList.length>0" class="community-list">
                  <ul >
                      <li v-for="item in shortcutList">
                      <!-- <li v-for="item in localshortcutList"   >  -->
                           <router-link :to="{path:item.linkTo, query:{categoryId:item.id}}">
                               <img :src="item.pic" alt=""> 
                                 <!-- <p v-if="langFlag == 'en'">{{item.key}}</p> -->
                                 <p >{{item.title_lang1}}</p> 
                          </router-link>
                      </li>
                      <li>
                         <router-link to="/userOrder">
                         <img src = "../../assets/images/myorder.png">
                         <p>{{language.interactiveService.myOrder}}</p> 
                          </router-link> 
                      </li>
                  </ul> 
              </div>  
          </section>
      </scroller>

   
  </div>
</template>
<style>
.community-box {
  width: 100%;
  background: #fff;
} 
.community-list {
  width: 100%;
  padding: 2rem 0.3rem 0 0.3rem;
  background: #fff;
  box-sizing: border-box;
  padding-bottom: 0.7rem;
}
.community-list ul {
  overflow: hidden;
}
.community-list li {
  width: 33.33%;
  padding-top: 0.6rem;
  box-sizing: border-box;
  float: left;
  cursor: pointer;
  border-bottom: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
}
.community-list li:nth-child(3n) {
  border-right: none;
}
.community-list li img {
  height: 1rem;
  margin: 0 auto;
}
.community-list li p {
  text-align: center;
  margin: 0.3rem 0 0.5rem;
  font-size: 0.28rem;
  width: 100%;
  color: #969696;
}
</style>

<script type="text/babel">
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import foot from "../foot.vue";
import menu from "../common/menu.vue";
import guestCenter from "../common/menu/guestCenter.vue";
export default {
  data() {
    return {
      menuFlag: false,
      centerFlag: false,
      shortcutList: [], //按钮组
      serviceList: {},
      localshortcutList:[],
      langFlag : localStorage.LANGUAGE,
      subList :[],
    };
  },
  created: function() {
    //激活菜单
    localStorage.footFlag = 4;
    localStorage.HOTELID = 3;

    this.localshortcutList = [
      {
        key: "orderFood",
        title: "Room Service",
        pic: require("../../assets/images/food.png"),
        linkTo: "/orderFood"
      },
      {
        key: "shopping",
        title: "Guest Supply",
        pic: require("../../assets/images/shopping.png"),
        linkTo: "/shopping"
      },
      {
        key: "maintain",
        title: "Maintenance",
        pic: require("../../assets/images/maintain.png"),
        linkTo: "/maintain"
      },
      {
        key: "clean",
        title: "Cleaning",
        pic: require("../../assets/images/clean.png"),
        linkTo: "/cleanDetail"
      },
      {
        key: "rating",
        title: "Survey",
        pic: require("../../assets/images/rating.png"),
        linkTo: "/rating"
      }
    ];

    //获取物业详情
    let params = {
      hotelid: 6,
      // lang: localStorage.LANGUAGE
    }; 
    this.$store.dispatch("getServiceList", params).then(res => {
      let dataList = res.data;  
      if (dataList.code == 0) {
        //全部数据    
        this.serviceList = dataList.data.list; 
        console.log(this.serviceList.length);
        //重组数据 
        for (var item in this.serviceList) {
          for (var i in this.localshortcutList) { 
            //通过英文title匹配显示模块
            if (
              this.serviceList[item].title_lang2.replace(/\s+/g,"").toLowerCase() ==
              this.localshortcutList[i].title.replace(/\s+/g,"").toLowerCase()
            ) { 
              this.serviceList[item].linkTo = this.localshortcutList[i].linkTo;
             this.serviceList[item].title_lang1 = (this.langFlag=="en")?this.serviceList[item].title_lang2:this.serviceList[item].title_lang1; 
              this.shortcutList.push(this.serviceList[item]); 
            }
          }
        } 
        // for(let i in this.shortcutList){ 
        //   for (let item in this.serviceList){
        //     if(this.serviceList[item].parentid == this.shortcutList[i].id){  
        //       tmpList.push(this.serviceList[item]);
        //     }
        //   } 
        // } 

        //   alert(JSON.stringify(this.subList));
        

      } else {
        this.$dialog.toast({ mes: res.msg, timeout: 1000 });
      }
    });
  },
  mounted: function() {
    //一级页面falg
    isHomePage(1);
  },
  components: {
    "v-foot": foot,
    "v-menu": menu,
    "v-guestCenter": guestCenter
  },
  computed: {
    ...mapState({
      language: state => state.language.language
    })
  }
};
</script>

<template>
  <div class="rating">
        <div class="nav_mark"></div>
        <yd-navbar :title="language.interactiveService.myOrder" fixed>
            <router-link to="/interactiveService" slot="left">
               <span class="back" ></span>
            </router-link>
        </yd-navbar>

 <!-- <section class="community-box"> -->
     <div class="community-list"> 
<template>
    <yd-list theme="1"> 
        <yd-list-item v-for="item in dataList"  >
            <img v-if="item.tasks_pic" slot="img" :src="item.tasks_pic">
            <img v-else slot="img" src="../../assets/images/noimage.png">
            <span slot="title">{{item.tasks_title_lang1}}</span>
            <yd-list-other slot="other">
                <div>
                    <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
                    <span class="demo-list-del-price">{{language.common.num}}:{{item.count}}</span>
                </div>  
            </yd-list-other>
        </yd-list-item>
    </yd-list>
</template>
           </div>
 <!-- </section> -->
    </div>
</template>
<<style>  
</style>

<script type="text/babel">
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  data() {
    return { 
      comment: "",
      dataList: [],
      langFlag: localStorage.LANGUAGE, 
    };
  },

  created: function() { 
    let params = {
      // hotelid: localStorage.HOTELID,
      hotelid: 6,
      userid: localStorage.TOKEN,
    }; 
 
    this.$store.dispatch("getServiceOrderList", params).then(res => {
      let data = res.data;
      if (data.code == 0) { 
        data = data.data.list;
        console.log(data);
        for (var item in data) {
            data[item].tasks_title_lang1 = (this.langFlag=='en')?data[item].tasks_title_lang2:data[item].tasks_title_lang1; 
            this.dataList.push(data[item]); 
        }
      } else {
        this.$dialog.toast({ mes: res.msg, timeout: 1000 });
      }
    });
  },
  methods: {
    goNext: function() {
      alert(this.title);
    }
  },
  computed: {
    ...mapState({
      language: state => state.language.language
    })
  }
};
</script>
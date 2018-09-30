<template>
  <div class="maintain">
        <div class="nav_mark"></div>
        <yd-navbar  :title="language.interactiveService.maintain" fixed>
            <router-link to="/interactiveService" slot="left">
               <span class="back" ></span>
            </router-link>
        </yd-navbar>

 <!-- <section class="community-box"> -->
     <div class="community-list" v-if="dataList.length>0"> 
        <yd-cell-group :title="language.interactiveService.maintainList" > 
             <yd-cell-item  arrow v-for="item in dataList" :href="{ name: 'serviceSubmit', params: { categoryId:item.id,titelzn:item.title_lang1,titleen:item.title_lang2 }}"  type="link" style="height:50pt"> 
                <img slot="icon" :src="item.pic">
                <span v-if="langFlag == 'en'" slot="left">{{item.title_lang2}}</span>
                <span v-else slot="left">{{item.title_lang1}}</span> 
                <span slot="right"></span> 
            </yd-cell-item> 
     
        </yd-cell-group>
           </div>
                  <div v-else  class="community-list">
                <p class="no_data">{{language.common.noMoreData}}</p>
            </div>
 <!-- </section> -->
    </div>
</template>
<<style>
.text{text-align:center}
.community-box {
  width: 100%;
  background: #fff;
}
.community-box div {
  overflow: hidden;
}
.community-list {
  width: 100%;
  height: 100%;
  padding: 1.5rem 0.3rem 0 0.3rem;
  background: #fff;
  box-sizing: border-box;
  padding-bottom: 0.7rem;
  text-align: center;
}
.community-list {
  overflow: hidden;
}
</style>

<script type="text/babel">
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  data() {
    return {
      page1: 1,
      categoryId: 0,
      page2: 1,
      pageSize: 10,
      dataList: [], 
       langFlag : localStorage.LANGUAGE,
    };
  },
  created: function() { 
    this.categoryId = this.$route.query.categoryId;  
    let params = {
      // hotelid: localStorage.HOTELID,
      hotelid : 6, 
    };
    this.$store.dispatch("getServiceList", params).then(res => {
      let data = res.data; 
      if (data.code == 0) {  
        data = data.data.list; 
        console.log(data);
        for(var item in data){
          if (data[item].parentid == this.categoryId){ 
            this.dataList.push(data[item]);
            console.log(JSON.stringify(this.dataList));
          }
        }
      } else {
        this.$dialog.toast({ mes: res.msg, timeout: 1000 });
      }
    });
  }, 
  computed: {
    ...mapState({
      language: state => state.language.language
    })
  }
};
</script>
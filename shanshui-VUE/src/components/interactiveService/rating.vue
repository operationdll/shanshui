<template>
  <div class="rating">
        <div class="nav_mark"></div>
        <yd-navbar :title="language.interactiveService.rating" fixed>
            <router-link to="/interactiveService" slot="left">
               <span class="back" ></span>
            </router-link>
        </yd-navbar>

 <!-- <section class="community-box"> -->
     <div class="community-list"> 
        <yd-cell-group :title="language.interactiveService.butlerList"> 
              <yd-accordion>
                  <yd-accordion-item style="margin-top:4px;border:2px solid #dddddd;" v-for="item in dataList" :title="item.title_lang1">  
                      <div class="accordionDetail" >
                      <img v-if="item.pic" src="" alt="">
                      <img v-else src="../../assets/images/staff.png" alt=""> 
                          <div style="text-align:center">
                          <yd-rate  style="display:block;margin-top:20px;" v-model="rate"></yd-rate>  
                          <yd-cell-group style="margin-top:10px" :title="language.judge.title">
                            <yd-cell-item>
                              <yd-textarea slot="right" :placeholder="language.interactiveService.feedback" maxlength="200" v-model="comment"></yd-textarea>
                            </yd-cell-item>
                          </yd-cell-group>
                          <yd-button size="large" bgcolor="#0099CC" style="color:white"  type="primary" @click.native="submit(item)">{{language.common.submit}}</yd-button>
                          </div>
                      </div>
                  </yd-accordion-item>
              </yd-accordion>
        </yd-cell-group>
           </div>
 <!-- </section> -->
    </div>
</template>
<<style> 
.accordionDetail{
  height:400px;
  width:94%;
  margin:auto;
  text-align:center; 
}
.accordionDetail img{
  width: 50px;
  height: 50px;
  margin:auto;
  margin-top:10px;
  padding:10px,0;
}
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
      rate: 0,
      comment: "",
      dataList: [],
      langFlag: localStorage.LANGUAGE
    };
  },
  created: function() {
    this.categoryId = this.$route.query.categoryId;
    let params = {
      category_id: this.categoryId,
      // hotelid: localStorage.HOTELID,
      hotelid: 6
    };
    this.$store.dispatch("getTaskList", params).then(res => {
      let data = res.data;
      if (data.code == 0) {
        data = data.data.list;
        console.log(data);
        for (var item in data) {
          data[item].title_lang1 =
            this.langFlag == "en"
              ? data[item].title_lang2
              : data[item].title_lang1;
          this.dataList.push(data[item]);
          console.log(JSON.stringify(this.dataList));
        }
      } else {
        this.$dialog.toast({ mes: res.msg, timeout: 1000 });
      }
    });
  },
  methods: {
    submit: function(item) {
      let params = {
        token: localStorage.TOKEN,
        task_id: item.id,
        memo: "评分：" + this.rate + "颗星。" + "评论：" + this.comment
      };
      this.$store.dispatch("addTask", params).then(res => {
        let data = res.data;
        if (data.code == 0) {
          this.$dialog.toast({ mes: this.language.msg.success, timeout: 1000 }); 
          this.$router.go(-1);
        } else {
          this.$dialog.toast({ mes: res.msg, timeout: 1000 });
        }
      });
    }
  },
  computed: {
    ...mapState({
      language: state => state.language.language
    })
  }
};
</script>
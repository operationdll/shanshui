<template>
    <div class="serviceSubmit">
        <div class="nav_mark"></div>
        <yd-navbar :title="title" fixed> 
            		<span class="back" slot="left" @click="goBack"></span>
        </yd-navbar> 
        
          <section class="community-box">
               <div class="community-list">  
                <yd-cell-group  :title="language.interactiveService.hint">
                    <yd-cell-item  v-if="dataList.length>0" arrow type="label" class="">
                        <select slot="right"  v-model="selected">
                            <option   v-for="option in dataList" v-bind:value="option.id">
                            {{ option.title_lang1  }}
                            </option> 
                        </select>
                    </yd-cell-item>
            <yd-cell-item arrow>
                <span slot="left">{{language.order.time}}</span>
                <input type="time"  slot="right"></input>
            </yd-cell-item>
                </yd-cell-group>
                  <br><br>
                <yd-cell-group :title="language.common.details" class="textarea">
                    <yd-cell-item >
                        <yd-textarea  slot="right" :placeholder="language.msg.input" :value="memo" maxlength="200"></yd-textarea>
                    </yd-cell-item>
                </yd-cell-group>


            <br><br> 
                <yd-button size="large" @click.native="submit()" type="primary" shape="circle" class="button">{{language.common.submit}}</yd-button>
            </div>
          </section> 
          

    </div>
</template>
<style>
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
  padding: 2rem 0.3rem 0 0.3rem;
  background: #fff;
  box-sizing: border-box;
  padding-bottom: 0.7rem;
  text-align: center;
}
.community-list {
  overflow: hidden;
}
.button {
  bottom: 10%;
}
</style>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  data() {
    return {
      tokenSrc: "",
      title: "",
      flag: 0,
      selected: "",
      options: [],
      memo: "",
      datetime1: "",
      langFlag : localStorage.LANGUAGE,
      categoryId : 0,
      dataList:[],
    };
  },
  created: function() { 
    let myDate = new Date();
    this.datetime1 = myDate.getHours() + " : " + myDate.getMinutes();
    this.title = (localStorage.LANGUAGE=="en")?this.$route.params.titleen:this.$route.params.titlezn;
    
    let params = {
      category_id:this.$route.params.categoryId,
      status :1,
      hotelid: 6,
      //  hotelid: localStorage.HOTELID,
    }
    this.$store.dispatch("getTaskList", params).then(res => {
      let data = res.data; 
      if (data.code == 0) {   
        data = data.data.list;  
        for(var item in data){
            data[item].title_lang1 = (this.langFlag=="en")?data[item].title_lang2:data[item].title_lang1; 
            this.dataList.push(data[item]); 
        } 
      } else {
        this.$dialog.toast({ mes: res.msg, timeout: 1000 });
      }
    }); 
  },
  methods: {
    submit: function() {
       let time = "预约时间："+this.datetime1;
       let params = {
         memo : this.memo +" "+ time,
         token : localStorage.TOKEN, 
         task_id : this.selected,
       };
    this.$store.dispatch("addTask", params).then(res => {
      let data = res.data; 
      if (data.code == 0) {  
        this.$dialog.toast({ mes: "已成功提交！", timeout: 1000 });
      } else {
        this.$dialog.toast({ mes: res.msg, timeout: 1000 });
      }
    }); 

    },
    goBack: function() {
      this.$router.go(-1);
    }
  },
  mounted: function() {
    //一级页面falg
    isHomePage(0);
  },
  computed: {
    ...mapState({
      language: state => state.language.language
    })
  }
};
</script>

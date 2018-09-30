<template>
  
  <yd-layout> 
            <yd-navbar slot="navbar" :title="language.interactiveService.shopping" fixed >
            <!-- <yd-navbar slot="navbar" title="language.community.shopping" fixed > -->
            <router-link to="/interactiveService" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
        </yd-navbar>
    <section class="promotiom_list top_nav resetPro">
      <scroller :on-infinite="infinite">
        <ul class="type-buy">
          <li v-for="data in dataList" >
              <div class="col-4">
                  <img  :src="data.pic"  alt="" >
              </div>
              <div class="col-6">
                  <h4  v-if="langFlag == 'en'">{{data.title_lang2}}</h4>
                   <h4  v-else>{{data.title_lang1}}</h4>
                  <!-- <p>{{data.introduct}}</p> -->
                  <ul class="s-price">
                    <li class="col-5">RMB {{data.price}}</li>
                    <li class="col-5"><button type="button" @click="addToCart(data)">{{language.community.buy}}</button></li>
                  </ul>
              </div>
          </li>
        </ul>
        <p class="no_data" v-show="noData">{{language.common.noMoreData}}</p>
      </scroller>
    </section>
        <div class="action-bar" > 
            <div class="action-btn buy-btn" @click="checkOut()">{{language.common.shoppingCart}}({{ selectedNum }})</div> 
            <div class="total">{{language.common.total}}：<span>¥<b>{{ totalPrice }}</b></span></div>
        </div>
  </yd-layout>
</template>

<style>

</style>
<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import chartFoot from "../chartFoot.vue";
export default {
  data() {
    return {
      dataList: [],
      nextPage: 1,
      noData: false,
      selectedNum: 0,
      itemQuantity: 1,
      totalPrice: 0,
      cart: [],
      langFlag: localStorage.LANGUAGE
    };
  },
  created: function() {
    localStorage.HOTELID = 3;
    if (localStorage.Quantity) {
      this.cart = JSON.parse(localStorage.getItem("cart"));
      this.selectedNum = parseInt(localStorage.Quantity);
      this.totalPrice = parseInt(localStorage.totalPrice);
    }
  },
  methods: {
    getData: function() {
      // let _this = this;
      // let params = {
      //   hotelid: localStorage.HOTELID,
      //   lang: localStorage.LANGUAGE,
      //   limit: 4,
      //   page: _this.nextPage
      // };
      let params = {
        category_id: this.$route.query.categoryId,
        status: 1,
        hotelid: 6
        //  hotelid: localStorage.HOTELID,
      };
      this.$store.dispatch("getTaskList", params).then(res => {
        let data = res.data;
        if (data.code == 0) {
          data = data.data.list;
          for (var item in data) {
            this.dataList.push(data[item]);
          }
        } else {
          this.$dialog.toast({ mes: res.msg, timeout: 1000 });
        }
      });
    },
    infinite: function(done) {
      let _this = this;
      done(true);
      if (this.nextPage != "-1") {
        _this.getData();
      } else {
        done(false);
        _this.noData = true;
      }
    },
    // goDetail: function(id) {
    //   let data = {};
    //   for (var key in this.dataList) {
    //     if (this.dataList[key].id == id) {
    //       data = this.dataList[key];
    //       break;
    //     }
    //   }
    //   this.$router.push({ path: "/buy", query: { info: data } });
    // },
    saveCart: function() {
      localStorage.setItem("cart", JSON.stringify(this.cart)); 
      localStorage.setItem("Quantity", parseInt(this.selectedNum));
      localStorage.setItem("totalPrice", parseInt(this.totalPrice));
    },
    checkOut: function() {
      this.$router.push({ path: "/shoppingCart" });
    },
    addToCart: function(data) {
      let _this = this;
      _this.selectedNum++;
      _this.totalPrice += parseInt(data.price);
      var existIndex = _this.cart.findIndex(function(item, index) {
        return item.id === data.id;
      });
      if (existIndex == -1) {
        var cartIndex = _this.cart.length;
        _this.cart.push(data);
        _this.$set(_this.cart[cartIndex], "quantity", 1);
        _this.saveCart();
        return;
      } else {
        _this.cart[existIndex].quantity += 1;
        _this.saveCart();
        return;
      }
    }
  },
  mounted: function() {
    //一级页面falg
    isHomePage(0);
  },
  components: {
    "v-foot": chartFoot
  },
  computed: {
    ...mapState({
      language: state => state.language.language
    })
  }
};
</script>

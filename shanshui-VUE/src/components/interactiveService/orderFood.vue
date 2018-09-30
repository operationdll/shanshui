<template> 
    <yd-layout>
        <yd-navbar slot="navbar"  :title="language.interactiveService.roomservice" fixed>
            <router-link to="/interactiveService" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
        </yd-navbar>

        <yd-scrolltab style="bottom:8%;top:9%">
          <yd-scrolltab-panel   v-for="item in dataList" :label="item.title_lang1"> 
          <ul class="type-buy" v-if="dataList.length>0">
          <li v-for="itm in item.subList">
              <div class="col-6">
                  <img  :src="itm.pic" alt="">
              </div>
              <div class="col-4">
                  <h4 v-if="langFlag=='en'" >{{itm.title_lang2}}</h4> 
                  <h4 v-else >{{itm.title_lang1}}</h4> 
                  <ul class="s-price">
                    <li class="col-6">￥{{itm.price}}</li>
                    <li class="col-6" style="margin-top:40%"><button type="button" @click="addToCart(itm)">{{language.common.addToCart}}</button></li>
                  </ul>
              </div>
          </li>
        </ul>
        <ul class="type-buy" v-else>
          <p class="no_data">{{language.common.noMoreData}}</p>
        </ul>
        </yd-scrolltab-panel>
        </yd-scrolltab> 
             <!-- 购物车foot -->
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
// import chartfoot from "../chartFoot.vue";
export default {
  data() {
    return { 
      selectedNum: 0,
      itemQuantity: 1,
      totalPrice: 0,
      cart: [],
      dataList: [],
      langFlag: localStorage.LANGUAGE
    };
  },
  created: function() {
    if (localStorage.Quantity > 0) {
      this.cart = JSON.parse(localStorage.getItem("cart"));
      this.selectedNum = parseInt(localStorage.Quantity);
      this.totalPrice = parseInt(localStorage.totalPrice);
    }
    this.categoryId = this.$route.query.categoryId;
    let params = {
      // hotelid: localStorage.HOTELID,
      hotelid: 6
    };
    this.$store.dispatch("getServiceList", params).then(res => {
      let data = res.data;
      if (data.code == 0) {
        data = data.data.list;
        for (var item in data) {
          if (data[item].parentid == this.categoryId) { 
            data[item].title_lang1 = (this.langFlag =="en")?data[item].title_lang2:data[item].title_lang1;  
            let newIndex = this.dataList.push(data[item]); 
            let params1 = {
              category_id: data[item].id,
              status: 1,
              hotelid: 6
            }; 
            this.$store.dispatch("getTaskList", params1).then(res => { 
              let data = res.data;
              if (data.code == 0) {
                this.$set(this.dataList[newIndex-1],"subList",data.data.list);
              }
              else{
                this.$dialog.toast({ mes: res.msg, timeout: 1000 });
              }
            });
          }
        }
      } else {
        this.$dialog.toast({ mes: res.msg, timeout: 1000 });
      }
    });
  },
  mounted: function() {},
  methods: {
    change: function() {},

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
    },
    checkOut: function() {
      this.$router.push({ path: "/shoppingCart" });
    },
    saveCart: function() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
      localStorage.setItem("Quantity", parseInt(this.selectedNum));
      localStorage.setItem("totalPrice", parseInt(this.totalPrice));
    }
  },
  components: {
    // "v-foot": chartfoot
  },
  computed: {
    ...mapState({
      language: state => state.language.language
    })
  }
};
</script>
<template> 
        <div class="action-bar" > 
            <div class="action-btn buy-btn" @click="apply()">{{language.common.submit}}({{ selectedNum }})</div> 
            <div class="total">{{language.common.total}}：<span>¥<b>{{ totalPrice }}</b></span></div>
        </div> 
</template>
<style>
.action-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 52px;
    font-size: 15px;
    background-color: #fff;
    border-top: .1px solid #ddd;
}

.buy-btn {
    background-color: #7A45E5;
    border-top: .1px solid #ddd;
}  
 
.action-btn {
    float: right;
    width: 120px;
    height: 100%;
    color: #fff;
    text-align: center;
    font-weight: 300;
    line-height: 52px;
    cursor: pointer;
}
.total {
    float: right;
    color: #363636;
    font-size: 14px;
    line-height: 50px;
    margin-right: 20px;
}

.total span {
    color: #000;
}

.total b {
    font-size: 17px;
    margin-left: 4px;
}
</style>
<script type="text/babel">
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
        created:function () {
 


        },
		methods: {

		},
		computed: {
     	...mapState({
            language: state => state.language.language
        })
		},
	};
</script>

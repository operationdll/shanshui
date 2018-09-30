<template>
    <div class="judge-box" style="background: #f8f8f8;">
        <div class="nav_mark"></div>
        <yd-navbar :title="language.judge.title" fixed>
            <router-link to="/raiders" slot="left">
                <span class="back"></span>
            </router-link>
            <router-link to="#" slot="right">
                <yd-icon name="compose" size="20px" color="#f0c366"></yd-icon>
            </router-link>
        </yd-navbar>
        <ul class="judge-list">
            <li v-for="item in judgeList">
                <p>{{item.value}}</p>
                <div class="jd-foot">
                    <div class="col-5">{{item.fullname}}</div>
                    <div class="col-5">{{new Date(item.createtime*1000).getFullYear()+'-'+(new Date(item.createtime*1000).getMonth() + 1)+'-'+new Date(item.createtime*1000).getDate()}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style>
    .judge-box{height: 100%;}
    .judge-list{padding: 1.3rem .2rem;}
    .judge-list>li{background: #fff;border-radius: 4px;padding: .2rem;margin-top: .2rem;font-size: .28rem;}
    .judge-list>li p{padding-bottom: .2rem;}
    .jd-foot{overflow: hidden;border-top: 1px solid #eee;font-size: .24rem;color: #999;padding-top: .2rem;}
    .jd-foot>div:last-child{text-align: right;}

</style>

<script type="text/babel">
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                judgeList:[]
            };
        },
        created: function () {
            let _this = this
            let params = {
                id:1,
                limit:10,
                page:1
            }
            this.$store.dispatch('JudgeList', params).then(function (res) {
                _this.judgeList =  res.data.data.list
                console.log(res.data.data.list)
            })
        },
        methods: {},
        mounted() {
        },
        computed: {
            ...mapState({
                language: state => state.language.language
            })
        }
    }
</script>
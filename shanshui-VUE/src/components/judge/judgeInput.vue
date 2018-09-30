<template>
    <div class="judge-box" style="background: #f8f8f8;">
        <div class="nav_mark"></div>
        <yd-navbar :title="language.judge.title" fixed>
            <router-link to="/judge" slot="left">
                <span class="back"></span>
            </router-link>
        </yd-navbar>
        <section class="judge-input" style="padding-top: 1.4rem;">
            <textarea placeholder="请写下您的评论"></textarea>
        </section>
        <section class="judge-btn">
            <yd-button size="large" type="primary">保存</yd-button>
        </section>
    </div>
</template>

<style>
    .judge-input{padding: .3rem;background: #fff;}
    .judge-input textarea{width: 100%;height: 3rem;border: none;font-size: .28rem;}
    .judge-btn{padding: .2rem;}
</style>

<script type="text/babel">
    import { mapState } from 'vuex'
    export default {
        data() {
            return {};
        },
        created: function () {
            let params = {
                id:1,
                userid:1,
                value:'test',
                ip:'127.0.0.1',
                hotelid:1
            }
            this.$store.dispatch('commitJudge', params)
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
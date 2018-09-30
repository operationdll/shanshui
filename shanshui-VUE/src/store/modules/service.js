/**
 * 中英文翻译
 */
 import * as types from '../mutation-types'
 import API from '../../config/Resource'

 const state = {
     // translateLanguageList:[],
 }
 const actions = { 
     getServiceList: function ({commit}, data) { 
         return new Promise((resolve, reject) => { 
             API.getServiceList(data).then((data) => {
                 resolve(data)
             }, (error) => {
                 reject(error)
             })
         })
     },
     getTaskList: function ({commit}, data) {
         return new Promise((resolve, reject) => {
             API.getTaskList(data).then((data) => {
                 resolve(data)
             }, (error) => {
                 reject(error)
             })
         })
     },
     getServiceOrderList: function ({commit}, data) {
         return new Promise((resolve, reject) => {
             API.getServiceOrderList(data).then((data) => {
                 resolve(data)
             }, (error) => {
                 reject(error)
             })
         })
     },
     addTask: function ({commit}, data) {
         return new Promise((resolve, reject) => {
             API.addTask(data).then((data) => {
                 resolve(data)
             }, (error) => {
                 reject(error)
             })
         })
     },
 };
 const mutations = {
     // [types.TRANSLATELANGUAGELIST] (state,data) {
     //     state.translateLanguageList=data;
     // },
 
 
 };
 const getters = {
     // language: state => state.language
 };
 
 export default {
     state,
     actions,
     mutations,
     getters
 };
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AdTemplate from '@/components/Adtemplate'
import Taobao from '@/components/Taobao'
import Document from '@/components/Document'
import Detail from '@/components/Detail'
import Me from '@/components/me/index'
import MyDownload from '@/components/me/download'
import MyCollcet from '@/components/me/collect'
import MyRecord from '@/components/me/record'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ad-template',
      name: 'ad-template',
      component: AdTemplate
    },
    {
      path: '/taobao',
      name: 'taobao',
      component: Taobao
    },
    {
      path: '/document',
      name: 'document',
      component: Document
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/me',
      component: Me,
      children: [
        {path: '', component: MyDownload},
        {path: 'download', component: MyDownload},
        {path: 'collect', component: MyCollcet},
        {path: 'record', component: MyRecord}
      ]
    }
  ]
})

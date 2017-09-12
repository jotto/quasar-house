<template>
  <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">

    <!-- Top toolbar -->
    <Toolbar />

    <!-- Main left sidebar -->
    <div slot="left">
      <Sidebar />
    </div>

    <!-- Main content -->
    <div class="padding-15">
      <router-view></router-view>
    </div>

  </q-layout>
</template>

<script>
  import Sidebar from '@/Sidebar';
  import Toolbar from '@/Toolbar';
  import {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    Events,
    BackToTop,
    Ripple
  } from 'quasar';

  export default {
    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
      QList,
      QListHeader,
      QItem,
      QItemSide,
      QItemMain,
      Sidebar,
      Toolbar
    },

    directives: {
      BackToTop,
      Ripple
    },

    mounted() {
      const vm = this;
      Events.$on('toggleLeft', () => {
        vm.$refs.layout.toggleLeft();
      });
    },

    beforeDestroy() {
      Events.$off('toggleLeft');
    }

  }
</script>

<style></style>

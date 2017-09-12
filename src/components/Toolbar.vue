<template>
    <q-toolbar slot="header" class="glossy">
        <q-btn flat @click="toggle">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          {{ $route.meta.title }}
          <div slot="subtitle">
            {{ $route.meta.subtitle }}
          </div>
        </q-toolbar-title>

        <router-view name="rightMenu"></router-view>

      </q-toolbar>
</template>

<script>
import {
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  Events
} from 'quasar';

export default {
  components: {
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
  },
  methods: {
    toggle() {
      Events.$emit('toggleLeft');
    }
  }
}
</script>


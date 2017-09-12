<template>
  <div>
    <q-btn flat icon="add_circle" @click="$store.dispatch('locations/addLocation')">Thêm khu trọ</q-btn>
  </div>
</template>

<script>
import {
  QBtn,
} from 'quasar';

export default {
  components: {
    QBtn,
  }
}
</script>


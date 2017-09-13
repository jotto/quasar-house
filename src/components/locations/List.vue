<template>
  <div>
    <Card v-for="item in $store.state.locations.list" :key="item._id" :item="item" />
  </div>
</template>

<script>
  import Card from './ListItem.vue';

  export default {
    components: {
      Card,
    },
    mounted() {
      this.$store.dispatch('locations/loadLocations');
    }
  }
</script>

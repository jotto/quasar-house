<template>
  <q-card inline style="width: 300px">
    <q-card-media>
      <img src="#">
    </q-card-media>
    <q-card-title>
      {{ item.name }}
      <q-rating slot="subtitle" v-model="item.rating" :max="5" />
    </q-card-title>
    <q-card-main>
      <p class="text-faded">{{ item.address }}</p>
      <p>
        <q-btn icon="ion-social-usd" flat color="positive">Giá phòng: {{ item.price }}</q-btn>
      </p>
      <q-btn flat icon="ion-flash" color="warning">{{ item.power }}</q-btn>
      <q-btn flat icon="ion-waterdrop" color="primary">{{ item.water }}</q-btn>
    </q-card-main>
    <q-card-separator />
    <q-card-actions>


       <q-btn flat color="primary" icon="ion-edit">Sửa</q-btn>
       <q-btn flat color="negative" icon="ion-close-round">Xóa</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
  import {
    QCard,
    QCardTitle,
    QCardMedia,
    QCardMain,
    QCardActions,
    QCardSeparator,
    QBtn,
    QIcon,
    QRating,
  } from 'quasar';

  export default {
    components: {
      QCard,
      QCardTitle,
      QCardMedia,
      QCardMain,
      QCardActions,
      QCardSeparator,
      QBtn,
      QIcon,
      QRating,
    },
    props: {
      item: {
        type: Object,
        default: () => ({}),
      }
    }
  }
</script>

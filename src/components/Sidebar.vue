<script src="../../../../house.v2/src/store/index.js"></script>
<template>
  <q-list highlight inset-separator no-border link inset-delimiter>
    <q-list-header>Chức năng</q-list-header>

    <q-side-link item :to="{ name: 'rooms-list' }" exact>
      <q-item-side icon="ion-ios-home"/>
      <q-item-main label="Phòng trọ" sublabel="Quản lý thông tin phòng trọ"/>
    </q-side-link>

    <q-side-link item :to="{ name: 'locations-list' }" exact>
      <q-item-side icon="ion-map"/>
      <q-item-main label="Khu trọ" sublabel="Quản lý thông tin khu trọ"/>
    </q-side-link>

    <q-side-link item :to="{ name: 'services-list' }" exact>
      <q-item-side icon="directions_bike"/>
      <q-item-main label="Dịch vụ" sublabel="Quản lý thông tin dịch vụ liên quan."/>
    </q-side-link>

    <q-side-link item :to="{ name: 'customers-list' }" exact>
      <q-item-side icon="ion-person-stalker"/>
      <q-item-main label="Khách thuê" sublabel="Quản lý thông tin khách thuê."/>
    </q-side-link>

    <q-side-link item :to="{ name: 'invoices-list' }" exact>
      <q-item-side icon="ion-ios-calculator"/>
      <q-item-main label="Hóa đơn" sublabel="Quản lý thông tin hóa đơn."/>
    </q-side-link>

    <q-side-link item :to="{ name: 'contracts-list' }" exact>
      <q-item-side icon="ion-clipboard"/>
      <q-item-main label="Hợp đồng" sublabel="Quản lý thông tin hợp đồng."/>
    </q-side-link>

    <q-side-link item :to="{ name: 'reciepts-list' }" exact>
      <q-item-side icon="ion-cash"/>
      <q-item-main label="Phiếu thu" sublabel="Quản lý thông tin phiếu thu"/>
    </q-side-link>

    <q-side-link item :to="{ name: 'payments-list' }" exact>
      <q-item-side icon="ion-bag"/>
      <q-item-main label="Phiếu chi" sublabel="Quản lý thông tin phiếu chi"/>
    </q-side-link>

    <q-side-link item :to="{ name: 'revenues-list' }" exact>
      <q-item-side icon="ion-podium"/>
      <q-item-main label="Doanh thu" sublabel="Thống kê doanh thu"/>
    </q-side-link>

  </q-list>
</template>

<script>
  import {
    QList,
    QListHeader,
    QItem,
    QSideLink,
    QItemSide,
    QItemMain,
  } from 'quasar';

  export default {
    components: {
      QList,
      QListHeader,
      QItem,
      QSideLink,
      QItemSide,
      QItemMain,
    }
  }
</script>

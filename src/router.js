import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function load (component) {
  return () => import(`@/${component}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'rooms-list',
    meta: { title: 'Phòng', subtitle: 'Quản lý thông tin phòng trọ' },
    components: {
      default: load('rooms/List'),
      rightMenu: load('rooms/Menu')
    }
  },
  {
    path: '/khu-tro',
    name: 'locations-list',
    meta: { title: 'Khu trọ', subtitle: 'Quản lý thông tin khu trọ' },
    components: {
      default: load('locations/List'),
      rightMenu: load('locations/Menu')
    }
  },
  {
    path: '/khu-tro',
    name: 'services-list',
    meta: { title: 'Khu trọ', subtitle: 'Quản lý thông tin khu trọ' },
    components: {
      default: load('locations/List'),
      rightMenu: load('locations/Menu')
    }
  },
  {
    path: '/khu-tro',
    name: 'customers-list',
    meta: { title: 'Khu trọ', subtitle: 'Quản lý thông tin khu trọ' },
    components: {
      default: load('locations/List'),
      rightMenu: load('locations/Menu')
    }
  },
  {
    path: '/khu-tro',
    name: 'invoices-list',
    meta: { title: 'Khu trọ', subtitle: 'Quản lý thông tin khu trọ' },
    components: {
      default: load('locations/List'),
      rightMenu: load('locations/Menu')
    }
  },
  {
    path: '/khu-tro',
    name: 'contracts-list',
    meta: { title: 'Khu trọ', subtitle: 'Quản lý thông tin khu trọ' },
    components: {
      default: load('locations/List'),
      rightMenu: load('locations/Menu')
    }
  },
  {
    path: '/khu-tro',
    name: 'reciepts-list',
    meta: { title: 'Khu trọ', subtitle: 'Quản lý thông tin khu trọ' },
    components: {
      default: load('locations/List'),
      rightMenu: load('locations/Menu')
    }
  },
  {
    path: '/khu-tro',
    name: 'payments-list',
    meta: { title: 'Khu trọ', subtitle: 'Quản lý thông tin khu trọ' },
    components: {
      default: load('locations/List'),
      rightMenu: load('locations/Menu')
    }
  },
  {
    path: '/khu-tro',
    name: 'revenues-list',
    meta: { title: 'Khu trọ', subtitle: 'Quản lý thông tin khu trọ' },
    components: {
      default: load('locations/List'),
      rightMenu: load('locations/Menu')
    }
  },
  // Always leave this last one
  { path: '*', component: load('Error404') } // Not found
];

export default new VueRouter({
  mode: "history",
  routes,
})

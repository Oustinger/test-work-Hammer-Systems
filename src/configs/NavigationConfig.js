import {
  DashboardOutlined,
  MailOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  ShoppingOutlined,
  ShopOutlined,
  PictureOutlined,
  GiftOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const commonNavTree = [
  {
    key: 'commons',
    path: `${APP_PREFIX_PATH}/commons`,
    title: 'sidenav.commons',
    breadcrumb: false,
    submenu: [
      {
        key: 'dashboard',
        path: `${APP_PREFIX_PATH}/commons/dashboard`,
        title: 'sidenav.commons.dashboard',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'catalog',
        path: `${APP_PREFIX_PATH}/commons/catalog`,
        title: 'sidenav.commons.catalog',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'goods',
            path: `${APP_PREFIX_PATH}/commons/catalog/goods`,
            title: 'sidenav.commons.catalog.goods',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'categories',
            path: `${APP_PREFIX_PATH}/commons/catalog/categories`,
            title: 'sidenav.commons.catalog.categories',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'collections',
            path: `${APP_PREFIX_PATH}/commons/catalog/collections`,
            title: 'sidenav.commons.catalog.collections',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'combo',
            path: `${APP_PREFIX_PATH}/commons/catalog/combo`,
            title: 'sidenav.commons.catalog.combo',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'orders',
        path: `${APP_PREFIX_PATH}/commons/orders`,
        title: 'sidenav.commons.orders',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'clients',
        path: `${APP_PREFIX_PATH}/commons/clients`,
        title: 'sidenav.commons.clients',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'list',
            path: `${APP_PREFIX_PATH}/commons/clients/list`,
            title: 'sidenav.commons.clients.list',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'groups',
            path: `${APP_PREFIX_PATH}/commons/clients/clients`,
            title: 'sidenav.commons.clients.groups',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'banners',
        path: `${APP_PREFIX_PATH}/commons/banners`,
        title: 'sidenav.commons.banners',
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'promoCodes',
        path: `${APP_PREFIX_PATH}/commons/promoCodes`,
        title: 'sidenav.commons.promoCodes',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'offlinePoints',
        path: `${APP_PREFIX_PATH}/commons/offlinePoints`,
        title: 'sidenav.commons.offlinePoints',
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'addresses',
            path: `${APP_PREFIX_PATH}/commons/offlinePoints/addresses`,
            title: 'sidenav.commons.offlinePoints.addresses',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'geoZones',
            path: `${APP_PREFIX_PATH}/commons/offlinePoints/geoZones`,
            title: 'sidenav.commons.offlinePoints.geoZones',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'employees',
        path: `${APP_PREFIX_PATH}/commons/employees`,
        title: 'sidenav.commons.employees',
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'mailings',
        path: `${APP_PREFIX_PATH}/commons/mailings`,
        title: 'sidenav.commons.mailings',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];
const systemNavTree = [
  {
    key: 'systems',
    path: `${APP_PREFIX_PATH}/systems`,
    title: 'sidenav.systems',
    breadcrumb: false,
    submenu: [
      {
        key: 'systems',
        path: `${APP_PREFIX_PATH}/systems`,
        title: 'sidenav.systems',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...commonNavTree, ...systemNavTree];

export default navigationConfig;

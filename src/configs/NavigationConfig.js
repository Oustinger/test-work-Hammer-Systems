import {
  DashboardOutlined,
  FileTextOutlined,
  GiftOutlined,
  MailOutlined,
  MobileOutlined,
  PictureOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UsergroupAddOutlined,
  UserOutlined,
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
        breadcrumb: true,
        submenu: [],
      },
      {
        key: 'catalog',
        path: `${APP_PREFIX_PATH}/commons/catalog`,
        title: 'sidenav.commons.catalog',
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'goods',
            path: `${APP_PREFIX_PATH}/commons/catalog/goods`,
            title: 'sidenav.commons.catalog.goods',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'categories',
            path: `${APP_PREFIX_PATH}/commons/catalog/categories`,
            title: 'sidenav.commons.catalog.categories',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'collections',
            path: `${APP_PREFIX_PATH}/commons/catalog/collections`,
            title: 'sidenav.commons.catalog.collections',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'combo',
            path: `${APP_PREFIX_PATH}/commons/catalog/combo`,
            title: 'sidenav.commons.catalog.combo',
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: 'orders',
        path: `${APP_PREFIX_PATH}/commons/orders`,
        title: 'sidenav.commons.orders',
        icon: ShoppingOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: 'clients',
        path: `${APP_PREFIX_PATH}/commons/clients`,
        title: 'sidenav.commons.clients',
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'list',
            path: `${APP_PREFIX_PATH}/commons/clients/list`,
            title: 'sidenav.commons.clients.list',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'groups',
            path: `${APP_PREFIX_PATH}/commons/clients/clients`,
            title: 'sidenav.commons.clients.groups',
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: 'banners',
        path: `${APP_PREFIX_PATH}/commons/banners`,
        title: 'sidenav.commons.banners',
        icon: PictureOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: 'promoCodes',
        path: `${APP_PREFIX_PATH}/commons/promoCodes`,
        title: 'sidenav.commons.promoCodes',
        icon: GiftOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: 'offlinePoints',
        path: `${APP_PREFIX_PATH}/commons/offlinePoints`,
        title: 'sidenav.commons.offlinePoints',
        icon: ShopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'addresses',
            path: `${APP_PREFIX_PATH}/commons/offlinePoints/addresses`,
            title: 'sidenav.commons.offlinePoints.addresses',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'geoZones',
            path: `${APP_PREFIX_PATH}/commons/offlinePoints/geoZones`,
            title: 'sidenav.commons.offlinePoints.geoZones',
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: 'employees',
        path: `${APP_PREFIX_PATH}/commons/employees`,
        title: 'sidenav.commons.employees',
        icon: UsergroupAddOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: 'mailings',
        path: `${APP_PREFIX_PATH}/commons/mailings`,
        title: 'sidenav.commons.mailings',
        icon: MailOutlined,
        breadcrumb: true,
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
        key: 'settings',
        path: `${APP_PREFIX_PATH}/systems/settings`,
        title: 'sidenav.systems.settings',
        icon: SettingOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: 'mobileApp',
        path: `${APP_PREFIX_PATH}/systems/mobileApp`,
        title: 'sidenav.systems.mobileApp',
        icon: MobileOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/systems/logs`,
        title: 'sidenav.systems.logs',
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...commonNavTree, ...systemNavTree];

export default navigationConfig;

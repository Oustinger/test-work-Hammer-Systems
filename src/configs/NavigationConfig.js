import { DashboardOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const commonNavTree = [
  {
    key: 'commons',
    path: `${APP_PREFIX_PATH}/commons`,
    title: 'sidenav.commons',
    icon: DashboardOutlined,
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
const systemNavTree = [
  {
    key: 'systems',
    path: `${APP_PREFIX_PATH}/systems`,
    title: 'sidenav.systems',
    icon: DashboardOutlined,
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

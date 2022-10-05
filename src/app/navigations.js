export const navigations = [
  { name: 'Trang chủ', path: '/dashboard', icon: 'dashboard' },

  {
    name: 'Quản lý tài khoản',
    path: '/quan-ly-tai-khoan',
    icon: 'event',
  },

  // { label: 'PAGES', type: 'label' },
  {
    name: 'Session/Auth',
    icon: 'security',
    children: [
      { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
      { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
      {
        name: 'Forgot Password',
        iconText: 'FP',
        path: '/session/forgot-password',
      },
      { name: 'Error', iconText: '404', path: '/session/404' },
    ],
  },
]

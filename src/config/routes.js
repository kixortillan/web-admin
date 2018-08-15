export default {

  dashboard: {
    text: 'Dashboard',
    link: '/dashboard',
    icon: 'dashboard',
  },

  users: {
    module: 'System',
    icon: 'computer',
    submodules: [{
      text: 'Users',
      link: '/users',
      icon: 'account_circle'
    }, {
      text: 'Admin',
      link: '/admins',
      icon: 'supervisor_account'
    }]
  },

}
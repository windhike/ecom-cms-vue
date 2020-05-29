const operationRouter = {
  route: null,
  name: null,
  title: '运营管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli', // 菜单图标
  filePath: 'views/operation/', // 文件路径
  order: 2,
  inNav: true,
  children: [
    {
      title: '轮播图管理',
      type: 'folder',
      route: '/operation/banner',
      filePath: 'view/operation/banner/',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
      children: [
        {
          title: '轮播图列表',
          type: 'view',
          route: '/operation/banner/list',
          filePath: 'view/operation/banner/List.vue',
          inNav: true,
          icon: 'iconfont icon-tushuguanli',
        },
      ],
    },
    {
      title: '精选主题管理',
      type: 'folder',
      route: '/operation/theme',
      filePath: 'view/operation/theme/',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
      children: [
        {
          title: '主题列表',
          type: 'view',
          route: '/operation/theme/list',
          filePath: 'view/operation/theme/List.vue',
          inNav: true,
          icon: 'iconfont icon-tushuguanli',
        },
      ],
    },
  ],
}

export default operationRouter

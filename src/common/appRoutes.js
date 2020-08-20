const appRoutes = [
  { name: 'Home', path: '/', topLevelId: 0 },
  {
    name: 'Services',
    path: '/services',
    topLevelId: 1,
    subRoutes: [
      { name: 'Services', path: '/services', topLevelId: 1, secondLevelId: 0 },
      { name: 'Custom Software Development', path: '/customsoftware', topLevelId: 1, secondLevelId: 1 },
      { name: 'Mobile App Development', path: '/mobileapps', topLevelId: 1, secondLevelId: 2 },
      { name: 'Website Development', path: '/websites', topLevelId: 1, secondLevelId: 3 },
    ],
  },
  { name: 'The Revolution', path: '/revolution', topLevelId: 2 },
  { name: 'About Us', path: '/about', topLevelId: 3 },
  { name: 'Contact Us', path: '/contact', topLevelId: 4 },
];

export default appRoutes;

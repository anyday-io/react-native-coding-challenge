jest.mock('@react-navigation/native', () => ({
  NavigationContainer: jest.fn().mockReturnValue(function NavigationContainer() {
    return null
  }),
  createSwitchNavigator: jest.fn(),
  createDrawerNavigator: jest.fn(),
  StackActions: {
    push: jest.fn().mockImplementation((x) => ({ ...x, type: 'Navigation/PUSH' })),
    replace: jest.fn().mockImplementation((x) => ({ ...x, type: 'Navigation/REPLACE' })),
    reset: jest.fn(),
  },
  NavigationActions: {
    navigate: jest.fn().mockImplementation((x) => x),
  },
  DrawerItems: () => 'DrawerItems',
}))

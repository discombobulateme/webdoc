module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['/node_modules/'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue']
}

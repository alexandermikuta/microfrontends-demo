module.exports = {
  name: 'app-shell',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

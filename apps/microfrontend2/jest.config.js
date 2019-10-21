module.exports = {
  name: 'microfrontend2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/microfrontend2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

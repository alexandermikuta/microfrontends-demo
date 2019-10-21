module.exports = {
  name: 'microfrontend1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/microfrontend1',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

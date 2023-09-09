module.exports = {
  extends: ['eslint-config-packlify'],
  parserOptions: {
    project: './packages/start-app/tsconfig.json',
  },
  include: ['src'],
};

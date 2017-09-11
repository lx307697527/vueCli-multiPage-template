// http://eslint.org/docs/user-guide/configuring

const isProd = (process.env.NODE_ENV === 'production');

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': isProd ? 2 : 0, //禁用 debugger
    'no-console': isProd ? 2 : 0, //禁用 console
    'vars-on-top': isProd ? 2 : 0, //要求所有的 var 声明出现在它们所在的作用域顶部
    'quote-props': 0, //要求对象字面量属性名称用引号括起来
    'no-new': 0, //禁止在非赋值或条件语句中使用 new 操作符
    'no-param-reassign': 2, //禁止对函数参数再赋值
    'prefer-template': 0, //建议使用模板而非字符串连接
    "no-extra-semi": 1, //禁止多余的冒号
    "object-shorthand": 0,
    "semi": 0,
    "no-underscore-dangle": 0,
    "array-callback-return": 0,
    "no-param-reassign": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/no-duplicates": 0,
    "import/no-named-as-default-member": 0,
    "import/no-named-as-default": 0,
    "max-len": 0,
    "operator-assignment": 0,
  }
}

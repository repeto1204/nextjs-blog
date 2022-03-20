module.exports = {
  // https://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    // https://eslint.org/docs/rules/
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    'plugin:@typescript-eslint/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // 기본값은 괄호로 감싸여진 구문은 허용하지만, 항상 금지하도록 변경
    'no-cond-assign': ['error', 'always'],
    // 개발 편의를 위해 에러가 아닌 경고를 반환하도록 변경
    'no-debugger': 'warn',
    'no-await-in-loop': 'error',
    // 개발 편의를 위해 에러가 아닌 경고를 반환하도록 변경
    // TODO 리팩토링 편의를 위해 잠시 off, 추후 warn으로 전환해야함
    'no-console': 'off',
    'no-template-curly-in-string': 'error',
    // null 비교를 제외하고 모든 비교에 일치 비교 사용
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // 배열 양끝 간격이 없도록 변경
    'array-bracket-spacing': 'error',
    // 블록 양끝 간격이 항상 존재하도록 변경
    'block-spacing': 'error',
    // 중괄호 들여쓰기, 한 줄쓰기 허용
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // 콤마 앞뒤 간격 설정, { before: false, after: true }
    'comma-spacing': 'error',
    // 계산된 프로퍼티의 괄호 여백 없도록
    'computed-property-spacing': 'error',
    // 함수 호출 시 이름과 괄호 사이 간격이 없도록
    'func-call-spacing': 'error',
    // 객체의 콜론 앞뒤 간격, { before: false, after: true }
    'key-spacing': 'error',
    // 예약어 앞뒤 간격, { before: true, after: true }
    'keyword-spacing': 'error',
    // new 생성자는 항상 대문자로 시작하도록
    'new-cap': 'error',
    // 블록 내부 불필요 여백 허용하지않음
    'padded-blocks': ['error', 'never'],
    // 블록 시작 전 공백 여부, default: always
    'space-before-blocks': 'error',
    // 함수 괄호 이전 공백 여부
    'space-before-function-paren': [
      'error',
      {
        asyncArrow: 'always',
        anonymous: 'always',
        named: 'never'
      }
    ],
    // 괄호 내부 여백, default: never
    'space-in-parens': 'error',
    // swtich문 조건의 콜론 앞뒤 공백, { before: false, after: true }
    'switch-colon-spacing': 'error',
    // 화살표 함수의 파라미터 괄호여부, 비교 연산자와 혼동을 방지하기위해 추가
    'arrow-parens': ['error', 'always'],
    // 화살표 함수의 화살표 앞뒤 간격
    'arrow-spacing': ['error', { before: true, after: true }],
    // 제네레이터 *의 앞뒤 간격
    'generator-star-spacing': ['error', { before: false, after: true }],
    // var 키워드 금지
    'no-var': 'error',
    // const로 대체 가능한지 여부 판단, 구조분해할당 시 모든 요소가 대체 가능하면 error 발생
    'prefer-const': ['error', { destructuring: 'all' }],
    // yield *의 앞뒤 공백 여부, { before: false, after: true }
    'yield-star-spacing': ['error', 'after'],
    // 보안 이슈로 새 창 열기 시 rel='norefferrer'를 선언하도록 되어있지만
    // 사용자 추적을 원활하게 하기 위해 noopnner를 선언함, 허용 옵션 { allowReferrer: true }
    'react/jsx-no-target-blank': ['error', { allowReferrer: true }]
  },
  ignorePatterns: ['node_modules/', '.idea/', '.next', '.yarn']
};

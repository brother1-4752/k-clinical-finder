## [📋 협업 컨벤션](https://www.notion.so/brotherone/5-fd85a49386724f34abe49a309e9b9e3e)

### 1. 추가한 라이브러리

| 목적        | 이름                   | 버전    | 링크                                                                                                         |
| ----------- | ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| HTTP Client | axios                  | ^1.4.0  | [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)                                   |
| 라우터 설정 | react-router-dom       | ^6.15.0 | [https://www.npmjs.com/package/react-router-dom](https://www.npmjs.com/package/react-router-dom)             |
| 스타일      | styled-components      | ^6.0.7  | [https://www.npmjs.com/package/styled-components](https://www.npmjs.com/package/styled-components)           |
| 환경 설정   | eslint                 | ^8.47.0 | [https://www.npmjs.com/package/eslint](https://www.npmjs.com/package/eslint)                                 |
| 환경 설정   | prettier               | ^3.0.2  | [https://www.npmjs.com/package/prettier](https://www.npmjs.com/package/prettier)                             |
| 환경 설정   | husky                  | ^8.0.3  | [https://www.npmjs.com/package/husky](https://www.npmjs.com/package/husky)                                   |
| 환경 설정   | lint-staged            | ^14.0.1 | [https://www.npmjs.com/package/lint-staged](https://www.npmjs.com/package/lint-staged)                       |
| 환경 설정   | eslint-plugin-prettier | ^5.0.0  | [https://www.npmjs.com/package/eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) |

### 2. Husky && lint-staged (commitlint 적용)

### 3. Commit message

| Tag Name | Explanation                                                            |
| -------- | ---------------------------------------------------------------------- |
| build    | 시스템 또는 외부 종속성에 영향을 미치는 변경사항 (npm, yarn 레벨)      |
| chore    | 코드나 기능 변경 없는 단순 수정                                        |
| docs     | documentation 변경                                                     |
| feat     | 새로운 기능                                                            |
| fix      | 버그 수정                                                              |
| refactor | 버그를 수정하거나 기능을 추가하지 않는 코드 변경, 리팩토링             |
| style    | 코드 의미에 영향을 주지 않는 변경사항(formatting, colons, white space) |

### 4. Issue && PR 템플릿 통일

### 5. Git-flow branch전략(feat-#이슈번호 -> dev -> main)

## 개발자 대나무숲

## 팀구성

|   송현섭    |   양현서    |   유준호    |
| :---------: | :---------: | :---------: |
|    팀장     |    팀원     |    팀원     |
| `Front-end` | `Front-end` | `Front-end` |

## 커밋 컨벤션

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 변경
- style : 코드 포맷팅 등 스타일 관련 변경
- refactor : 코드 리팩토링
- chore : 설정 변경 등의 기타 변경사항

## 코드 컨벤션

### 함수

함수명은 카멜 케이스(camelCase)를 원칙으로 한다.

```javascript
function nameOfFunction() {
  // ...some logic
}
```

### 변수명

상수는 모두 대문자로 쓰며 띄어쓰기는 \_로 처리하며, 객체타입의 경우 카멜 케이스를 적용한다.

```javascript
const SOME_VALUE = 1;

const people = {
  name: "김자바",
  age: "26"
};
```

### 스타일 코드 순서

스타일 코드의 순서는 아래와 같이 작성한다.

```css
.sample {
  /* position 관련 */
  position: absolute;
  top: 0;
  left: 0;

  /* display 관련 */
  display: flex;
  justify-content: center;
  align-items: center;

  /* size 관련 */
  width: auto;
  height: auto;

  /* margin, padding */
  margin: 0 auto;
  padding: 12px;

  /* background 관련 */
  background-color: #ffffff;

  /* border 관련 */
  border: 1px solid #ffffff;
  border-radius: 12px;

  /* font 관련 */
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  /* animation 관련 */
  transform: translate(10px, 100%);
  transition: 300ms;
}
```

### 라이브러리

```bash
yarn add react-router-dom

yarn add react-redux
yarn add redux

yarn add styled-reset
yarn add styled-comonents

yarn add redux-devtools-extension

yarn add firebase
```

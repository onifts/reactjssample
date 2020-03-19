# reactjs sample code 

> dev
- npm install -g create-react-app
- create-react-app react-sample

> user
- yarn install
- yarn start

# +redux 
> 정의 : 가장 사용률이 높은 상태관리 라이브러리 
- (추가적으로 미들웨어 기능 포함?)
- https://velog.io/@velopert/Redux-1-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EA%B0%9C%EB%85%90%EC%A0%95%EB%A6%AC-zxjlta8ywt

> react의 단점 
- status 관리를 각 component에서 하는데... 
- 할머니 component -> 엄마 component -> 딸 component, 아들 component 
  - (일은 결국 전달,전달해서 할머니가 다 한다. 가독성 떨어짐, 관리 어려움)
  - (하위 자식이 각각 본인의 일을 따로 한다고 하면... 더 관리가 어려움)
- 불필요한 rerendering 

> react + redux
- component 밖에서 store라는 객체 내부에 status를 담고 관리한다.
- status에 어떤 변화를 일으켜야 하면, action을 store에 전달한다. 

> 개념 : 
- Action 액션 
- Action Creator 액션 생성함수 
- Reducer 리듀서 => store에 전달된 action으로 status를 어떻게 변경할지 결정, 변경된 status는 store에 저장 
- Store 스토어 => status 담는다. 
- dispatch 디스패치 => store에 action을 전달하는 과정 (component -> store) 
- subscribe 구독 => status가 바뀌면, store를 구독하고 있는 component에 바로 전달한다. (store -> component)
- (추가) status 상태 
- https://kbennycc.blogspot.com/2019/02/0113-react-redux.html

> ※ redux는 react에서 사용하려고 만든 상태 관리 라이브러리지만, react에 의존하지는 않는다.

> 상세 : 
- https://medium.com/@ca3rot/%EC%95%84%EB%A7%88-%EC%9D%B4%EA%B2%8C-%EC%A0%9C%EC%9D%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%AC%EC%9A%B8%EA%B1%B8%EC%9A%94-react-redux-%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%9D%98-%EC%9D%B4%ED%95%B4-1585e911a0a6

- Action 액션 
```js
{
    type: "액션의 종류를 한번에 식별할 수 있는 문자열 혹은 심볼",
    payload: "액션의 실행에 필요한 임의의 데이터",
}
{
    type: "@@myapp/ADD_VALUE",
    payload: 2,
}
```
- Action Creator 액션 생성함수 
  - zip : action + status
- Reducer 리듀서
  - action + status => Reducer => status(new)
 

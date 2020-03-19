import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//import App from './App';
import Routes from './Routes';
import App2 from './App2';

// createStore 와 루트 리듀서 불러오기
import { createStore } from 'redux';
import rootReducer from './store/modules';
import { Provider } from 'react-redux' ;

// **** 리덕스 개발자 도구 적용
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Routes />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
      <App2 />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

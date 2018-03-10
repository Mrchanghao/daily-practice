import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
// action 작성 
const INCREMENT = 'INCREMENT';

function increase(diff) {
    return {
        type: INCREMENT,
        addBy: diff
    }
}

// 어떤 변화가 일어날지를 알려주는 객체, 함수가 액션
// 첫번째 필드는 타입 필수적인 요소이며 액션의 형태를 정의 두번째 요소부터는 생략 가능 

// reducer 작성
const initialSate = {
    value: 0
};
const countReducer = (state = initialSate, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        default: 
            return state;
    }
}
// store 작성 
const store = createStore(countReducer);  // --> reducer가 인수로 사용 되고 createStore(reducer)형식사용



class App extends React.Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    render() {
      let center = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        cursor: 'pointer',
        background: 'green'
      };
  
      return (
        <div style={center}
              onClick={this.onClick}  >
            <h1> {this.props.store.getState().value} </h1>
        </div>
      );
    }
    onClick() {
        this.props.store.dispatch(increase(1));
    }
  }

  const render = () => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
  }
  
  store.subscribe(render);
  render();
  registerServiceWorker();
import { configureStore, createSlice } from "@reduxjs/toolkit";

//사용하려는 state 생성-creatSlice({})
let user = createSlice({
    name: 'user', //state 이름
    //initialState: '허쌤'
    initialState: {name: '허쌤', likeCount: 20},

    //state 변경 => Redux state 변경
    //1. 수정하는 함수 생성
    //2. 원할 때 store에 요청
    reducers: {
        changeName(state) {
           state.name = "리액트"
        },

        increase(state, a) {
            state.likeCount += a.payload; //사용자가 어떤 값 인자값으로 선언했을 때 이 값은 액션 개체의 payoad에 담겨서 전달 
        }
    }
})

//이름이 변경되는 state 변경함수를 내보냄
export let {changeName, increase} = user.actions

//cart 새로운 state 생성
let cart = createSlice({
    name: 'cart',
    initialState: [
        {
            id: 0,
            name: "날개_Wings",
            count: 1
        },
        {
            id: 1,
            name: "땅따먹기",
            count: 10
        },
        {
            id: 2,
            name: "제주 산유도",
            count: 5
        },
    ],
    reducers : {
        addCount(state, action) {
            //배열 자료에서 원하는 자료를 찾고 싶을 때 findIndex
            //action은 배열 안에 있는 데이터 각각을 의미
            let num = state.findIndex((item)=> {
                return item.id === action.payload
            })
            state[num].count++
        },
        removeItem(state, action) {
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.splice(index,1)
            }
        },
        addItem(state, action) {
            state.push(action.payload)
        }
    }
})

export const {addCount, removeItem, addItem } = cart.actions;


//작품명/가격이 담긴 state 생성
let bookInfo = createSlice({
    name: 'bookInfo',
    initialState: {title: '광화문연가', price: 20000}
})


export default configureStore({    
    reducer: {
        //store에 등록할 리듀서를지정
        user: user.reducer,
        cart: cart.reducer,
        bookInfo: bookInfo.reducer
    }
})
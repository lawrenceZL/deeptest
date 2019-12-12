import {
    FILE_CHANGE,
    FRAMWORK_CHANGE,
    GENERATE_CHANGE,
    OPERATOR_CHANGE,
    PRECISION_SHOW,
    RUN_CLICK,
    STORE_LINEDATA,
    TYPE_CHANGE
} from '../actions/deeptest.action'
const initialState={
    index:0,
    framwork:[],
    operator:'',
    generate:'',
    lineData:[],
    lineYData:[],
    lineYData2:[],
    precision_show: false,
    fileList:[
        {
            uid: '-1',
            name: '0.1.png',
            status: 'done',
            thumbUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAAcABwBAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APn+vSfDXwT8UeJNBk1UCGxBBMEF1uV5sDqBj5QTwCfr0rB8V/DnxN4MRZtWsQLViALmFw8eSOhI6H64rlK9K+Cng2LxX4xa4v7VbjTNOTzJ0f7rOwIjUjOeoJ/4Dg9a7v4p/GPVfD3jEaT4dkjVbJNt350QZXkODgd+Bjn1J9K7Xw54os/i58P9VgWyEM7RNbTwzHKCQrlWDDnbnB9RivkWvWPgh480TwZfatb63LJbxX4hKXAQuiGPzOGAyed4xgH3xXol78Pfhd4j1mfX5NfVzeTmeSNNSjWNyTlhjG4AnPfvxiquufEfwZ8NNEk0XwZBb3N6wYbrdgyRtyN0khzvIPbnj0FfNtFFFFf/2Q==',
        },
        {
            uid: '-2',
            name: '0.32.png',
            status: 'done',
            thumbUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAAcABwBAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APn+u+8MfC+41jw9L4i1rVYNB0VDhLm5jLNL7quRkZIGc8npWX4p8C3fhu0h1K3v7PVtHnkMcV/ZSbk39djj+Fsc4/WuVrqvh14ah8VeM7TT7wsLBA1xduGxtiQZOT2BOB+NR+N/F934t1ppGcppttmGwtVyEhhHC4HqQBk9fwAA2vAbjUPBfjfQ5lLxjThqUQZvljeFhkgf3iGA/DBrz+u1+FniOy8N+NY5dTIXT7yB7K4c9ER8fN9MgZ9s1tXnwR1t5ZJdC1TSNW08EkXEV2q7VyeXB4HTsTTriLSPh34I1zSv7YtNS8S6uiW7pYsXjtYQcsC+MEnkEfSvLqKKKK//2Q=="},
        {
            uid: '-3',
            name: '0.102.png',
            status: 'done',
            thumbUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAAcABwBAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APn+ruj6f/a2t2Gm+ekH2u5jg81/ux72C7j7DOa0/GPhK68H639hnmjuYJYxNa3UQ+SeI9GHp7jsfXrXP0V23iJI/CPh+28ORQWz32oWsV3qVw6bpIyxV44kJAKYUAn1Ln0FT206658G9QguXzc+H76KW2dz/wAsZztaMf8AAhurgqK9b8deCb/xXr3/AAknh+60+60W8giMcsl7FF9nCRqhVw7A8Y9643Vriw0Tw83h7Tb1L24uZkm1G6hOYSUB2RxnjcBuYluhOMcDJ5aiiiiv/9k="
        },
        {
            uid: '-4',
            name: '0.119.png',
            status: 'done',
            thumbUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAAcABwBAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APn+r+i6NfeINYttK02EzXdw+1Ezge5J7ADJJrpfHHwx1zwDbWlxqk1jPFdOyK1rIzbWAzg7lXqPTPSuLor37wvHF8IPhi3iG+sgfEmsHy7SBwC6g8qDjkDADEeu0HBqD493lyvhXwfY3r/6c0TTXSNywkCICfzZq8Iq1piQyatZpc48hp0EmTj5dwz+lfUPi7wrb3XjWLxd4o1C1g8MaNAhtLcMcyP1yf8AgWMAZztArwH4j+MpPHHi+41Nd6WaAQ2kT9UjH9Sct+OO1clRVu41TULu1gtbm+uZreAbYYpJmZIx6KCcD8KqUV//2Q=="
        },
        {
            uid: '-5',
            name: '1_airplane.png',
            status: 'done',
            thumbUrl: "data:image/png;base64,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"
        },
        {
            uid: '-6',
            name: '2_cat.png',
            status: 'done',
            thumbUrl: "data:image/png;base64,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"
        },
        {
            uid: '-7',
            name: '3_ship.png',
            status: 'done',
            thumbUrl: "data:image/png;base64,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"
        }
    ]
}
const deeptest_reducer = (state = initialState , action )=>{
    // console.log(action)
    switch(action.type){
        case FRAMWORK_CHANGE:{
            return Object.assign({},state,{
                framwork: action.framwork,
            })
        }
        case OPERATOR_CHANGE:{
            return Object.assign({},state,{
                operator:action.operator,
            })
        }
        case GENERATE_CHANGE:{
            return Object.assign({},state,{
                generate:action.generate,
            })
        }
        case RUN_CLICK:{
            return Object.assign({},state,{})
        }
        case STORE_LINEDATA:{
            return Object.assign({},state,{
                lineData:action.lineData,
                lineDataY:action.lineDataY,
                lineDataY2:action.lineDataY2,
            })
        }
        case TYPE_CHANGE:{
            return Object.assign({},state,{
                index:action.index
            })
        }
        case PRECISION_SHOW:{
            return Object.assign({},state,{
                precision_show: action.precision_show
            })
        }
        case FILE_CHANGE:{
            return Object.assign({},state,{
                fileList:action.fileList
            })
        }
        default:
            return state;
    }
}

export default deeptest_reducer;

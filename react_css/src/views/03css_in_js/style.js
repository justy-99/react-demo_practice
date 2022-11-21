import styled from "styled-components";
import { largeSize,primaryColor } from "./style/variables";


export const AppWrapper = styled.div`
  .lan {
    font-size: 36px;
  }

  .mei {
    padding: 10px;
    margin: 20px 0;
    border: #ff7788 1px solid;
  }
`

export const SectionWrapper = styled.div.attrs(props => ({
  tColor: props.color || "blue"
}))`
  border: 1px solid red;

  .title {
    font-size: ${props => props.size}px;
    color: ${props => props.tColor};

    &:hover {
      background-color: purple;
    }
  }

  .content {
    font-size: ${largeSize}px;
    color: ${primaryColor};
  }
`

// ES6: 标签模板字符串
// const name = "why"
// const age = 18

// 1.模板字符串的基本使用
// const str = `my name is ${name}, age is ${age}`
// console.log(str)

// 2.标签模板字符串的使用
// function foo(...args) {
//   console.log(args)
// }

// foo("why", 18, 1.88)
// foo`my name is ${name}, age is ${age}`
// 0: Array(3)
// 0: "my name is "
// 1: ", age is "
// 2: ""
// length: 3
// raw: (3) ["my name is ", ", age is ", ""]
// __proto__: Array(0)
// 1: "why"
// 2: 18
// length: 3
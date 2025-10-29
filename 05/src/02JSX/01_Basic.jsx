//01 기본 JSX 요소 생성
//요새는 거의 대부분 함수형 component로 만듭니다.
//외부에서도 함수를 사용하고 싶으면 "export"를 붙여주면 됩니다.
export const Element1=()=>{return <h2>Hello World!!! The first React Task!!</h2>} 


//02 function 예약어
export function Element2(){

    return <h2>Hello World - The Second React Task!!!</h2>
}

//03 인자값을 받는 요소 생성(props)
export function Element3(props){
    console.log("Elemenet3's props:", props);
    if(props.auth === "ROLE_ADMIN"){
        return <h2> 관리자 {props.name}님 환영합니다.</h2>
    }
    else if(props.auth==="ROLE_USER"){
        return <h2> 유저 {props.name}님 환영합니다.</h2>
    }
}

//04 인자값 받는 요소 생성(props) + 구조분해할당
//{auth, name} = props
export function Element4({auth,name}){
    console.log("Elemenet3's attribute:", auth, name);
    if(auth === "ROLE_ADMIN"){
        return <h2> 관리자 {name}님 환영합니다.</h2>
    }
    else if(auth==="ROLE_USER"){
        return <h2> 유저 {name}님 환영합니다.</h2>
    }
}

//05 반복문 사용하기
//&& -> react 조건부 렌더링
//삼항연산자 -> react 조건부 렌더링
//forEach, filter, reduce, map ... 
export const Element5 = (props)=>{
    console.log("Element5's props:", props);
    const list = props.list; // ["손보금","손보동","손금동","박규동"]
    return (
        <ul>
            {list.map((item,idx)=>{
                return <li key={idx}>{item}</li>
            })}

        </ul>
    )


}

//06 기본 컴포넌트 export
const DefaultComponent1 = ()=>{return <h2>DefaultComponent1</h2>};
const DefaultComponent2 = ()=>{return <h2>DefaultComponent2</h2>};
export default{
    DefaultComponent1,DefaultComponent2
}

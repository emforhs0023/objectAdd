import React,{ useState, useEffect } from "react"

function App() {

	useEffect(() => {
		// 객체에 객체 추가
		const aa = [
			{
				title:"aa",
				cc:[
					{id:"1"},
					{id:"2"},
					{id:"3"},
					{id:"4"},
				]
			}
		]

		let bb = {id:"dsfdsf", title:"dsjklfjsdklf"}
		const obj = [ ...aa[0].cc, {...bb}]
		aa[0].cc = obj
	}, [])

	// 특정값 찾기
	useEffect(() => {
		const aa = [{id:"n11"}, {id:"n12"}, {id:"n21"}]

		// 첫번째 방법
		const bb = aa.filter((v) => v.id.indexOf("n1") !== -1)
		
		// 두번째 방법
		const cc = aa.filter(item => item.id.includes("n1"))
		
		// 세번째 방법

		const dd = ["n11"]
		const ff = aa.filter(item => dd.includes(item.id))
	}, [])

	// state 객체 state 추가
	const [ Data, setData ] = useState({title:"kim"})
	useEffect(() => {
		setData((prevstate) => ({
			...prevstate,
			name: "byung"
		}))
	}, [])

	useEffect(() => {
		console.log(Data)
	}, [Data])

	//ArrayList배열에 객체 추가
	const [ Data1, setData1 ] = useState([{title:"kim"}])
	useEffect(() => {
		const data = {title:"Jini"}
		setData1(prevstate => [
			...prevstate,
			data
		])
	}, [])

	useEffect(() => {
		console.log("Data1 ==>", Data1)
	}, [Data1])

  	return (
		<div>
			fdsajkljdsal
		</div>
  	);
}

export default App;

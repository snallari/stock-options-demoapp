import { useEffect, useState, useReducer } from "react"
function reducer(state, action) {

    switch (action.type) {
        case "change":
            return {
                ...state,
                name:state.name+"sai",
                age:state.age+1.5
            }
        case "age":
            return {
                ...state,
                name:state.name+"sairam",
                age:state.age+120
            }

    }
}


function AdderForm() {
        const [obj, setObj] = useState({})
        const [state, dispatch] = useReducer(reducer, {...obj,name:obj.name,age:10})
        const setVal = (e) => {
            const { name, value } = e.target
            if (name) {
                setObj({ ...obj, [name]: value })
            }
        }
        const submit = (e) => {
            dispatch({ type: "age", value: obj })
            console.log("obj", obj)
        }
        return (<form>
            <label for="name">

            </label>
            <input type="text" value={obj.name} onChange={setVal} id="name" name="name" />
            <label for="age">

            </label>
            <input type="number" value={obj.age} onChange={setVal} id="age" name="age" />
            <button type="button" onClick={submit}>Click </button>
        </form>)
    }

export default AdderForm
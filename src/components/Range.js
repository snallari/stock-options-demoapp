function Range(props){
    const {min,max,val}=props
    return <div>
        <input name="number" value="number" type="range" min={min} max={max}></input>
        <label for="number"> {val} </label>
    </div>
       

}

export default Range
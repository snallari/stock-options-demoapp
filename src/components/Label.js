
function Label(props) {
    console.log("label",props)
    return <div>
        <label className="title">{props.val}</label>
    </div>
}


export default Label
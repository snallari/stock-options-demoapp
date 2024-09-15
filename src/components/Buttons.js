function Button(props) {

    const submit = () => {
        console.log("this is submitted")
    }

    return <div>
        <button onClick={submit}> Click me</button>
    </div>
}

export default Button
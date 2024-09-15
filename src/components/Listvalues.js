import Cards from "./Cards";


function Listvalues(props){
    console.log(props)
    return <div className="gridLay">
       <Cards vals={props}/>
    </div>
}
export default Listvalues
import { useEffect, useState, useReducer} from "react"
import Listvalues from "./Listvalues"
import { useStockListCont } from "../providers/StockProvider"
import AdderForm from "./AdderForm"

function Dashboard() {
    const { stock, isLoading, error } = useStockListCont()
    return (
        <div>
            <AdderForm/>
            <div>
                <h1 className="heading">Stock Market</h1>
                {isLoading ?
                    <div>Is Loading</div> :
                    (!isLoading && stock.length > 0) ? stock.map((items, index) => <Listvalues key={index} items={items}></Listvalues>) : "No Data"}
            </div>
        </div>
    )
}
export default Dashboard
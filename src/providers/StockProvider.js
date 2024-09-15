import { useContext,createContext, useState, useEffect } from "react";
const StockContext=createContext();
const today=["a","b", "c"]

const StockProvider=({children})=>{

    const [val, setVal]=useState("abc")
    const [stock,setStockData]=useState([])
    var [isLoading, setLoading] = useState(true)
    var [error, setError] = useState("")
    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
            const url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo';
            fetch(url).then((res) => res.json()).then((result) => {
                setStockData(result.feed); setLoading(false)
            })
            console.log("its in use effect")
        }, 1000)
    }, [!stock])
    return(
        <StockContext.Provider value={{'stock':stock, 'isLoading':isLoading, 'error':error}}>
            {children}
        </StockContext.Provider>
    )

}
export const useStockListCont=()=>useContext(StockContext)

export default StockProvider
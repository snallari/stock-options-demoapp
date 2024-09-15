import Label from "./Label";

function Cards(props){
    console.log(props)
    const {title, banner, ticker_sentiment, overall_sentiment_score, ...vals}=props.vals.items
    const percentage=overall_sentiment_score*100

    return percentage>20?
    (<div className="card">
        <Label val={title}/>
        <img src={banner} height={250} width={250}/>
    </div>): (<div className="card">
        <Label val={title}/>
        <img src={banner} height={150} width={150}/>
    </div>)
}
export default Cards
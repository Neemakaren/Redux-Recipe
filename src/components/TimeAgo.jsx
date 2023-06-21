import { parseISO, formatDistanceToNow } from "date-fns";



const TimeAgo = ({timeStamp}) => {
    let timeAgo = ''
    if (timeStamp){
        const date = parseISO(timeStamp)
        const timeperiod = formatDistanceToNow(date)
        timeAgo = `${timeperiod} ago`
    } 
  return (
    <span title={timeStamp}>
        &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo
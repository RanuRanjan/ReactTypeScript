type PersonListProps={
    name: {
        first:string
        last:string
    }[]
    
}

export default function PersonList(props:PersonListProps) {
  return (
    <div>
        {props.name.map((value)=>{
            return(
                <h2>{value.first}{value.last}</h2>
            )
        })}
    </div>
  )
}

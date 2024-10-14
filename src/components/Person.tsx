type PersonProps ={
    name:{
        firstname:string
        lastname:string
    }
}

export default function Person(props:PersonProps) {
  return (
    <div>
        <h1>
        {props.name.firstname}{props.name.lastname}
            </h1>
        </div>
  )
}

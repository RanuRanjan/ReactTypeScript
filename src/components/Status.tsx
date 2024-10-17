type StatusProps={
    status: 'loding' | 'error'| 'success'
}

export default function Status(props:StatusProps) {
 let message

 if(props.status==='loding'){
    message='loding'
 }else if(props.status==='success'){
    message='success'
 }else if(props.status==='error'){
    message='error'
 }
  return (
    <div>
        <h2>{message}</h2>
    </div>
  )
}

type GreetProps = {
    name: string
    messageNumber: number
    isloggedIn: boolean
}

export default function Greet(props: GreetProps) {


    return (
        <div>
            {props.isloggedIn ? <> <h2>{props.name}</h2>
                <h3>{props.messageNumber} our website</h3> </> : <h2>Welcom Guest</h2>}
        </div>
    )
}

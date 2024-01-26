function PropsComponent(props){
    const styleAttr={
        "color":"red"
    }
    return(
        <div>
             <h1>Hey {props.name}</h1><br></br>
             <h1 style={styleAttr}>Let us start our {props.course} class</h1>
        </div>
    )
}
export default PropsComponent
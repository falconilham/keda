function Box({children, ...props}){
    return(
        <div {...props}>{children}</div>
    )
}

export default Box
import {Typography} from 'antd'

const {Text, Title} = Typography

function RawText({children, ...props}){
    return(
        <Text {...props}>{children}</Text>
    )
}

function TextTitle({children, ...props}){
    const {style} = props
    return(
        <Title {...props} style={{margin: 0, ...style}}>{children}</Title>
    )
}

export {TextTitle, RawText}

export default RawText
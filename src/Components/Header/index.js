import { Box, TextTitle, Text } from '../Base'
import AllDataImage from '../../assets/alldata.svg'

function HeaderContent() {
    return (
        <Box style={styles.container}>
            <Box style={styles.mainText}>
                <img src={AllDataImage} style={styles.image} alt="logo" />
                <TextTitle style={styles.textTitle} level={5}>Streamline Your Business with Our All-in-One ERP Solution.</TextTitle>
            </Box>
            <Box style={styles.quotes}>
                <Text>
                    "The ability to simplify means to eliminate the unnecessary so that the necessary may speak"
                </Text>
                <Text>
                    Hans Hofmann
                </Text>
            </Box>
            {/* <TextTitle style={styles.textTitle}>ERP Solution</TextTitle>
            <TextTitle>
                Our ERP can make it easier for entrepreneurs to record every item
                that goes in and out and keeps track of every profit they generate
                get every day.
            </TextTitle> */}
        </Box>
    )
}

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'space-evenly',
        textAlign: 'left'
    },
    mainText:{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    quotes: {
        display: 'flex',
        alignSelf: 'end',
        fontStyle: 'italic',
        flexDirection: 'column'
    },
    textTitle: {
        marginTop: 10
    },
    image: {
        width: 200
    }
}

export default HeaderContent
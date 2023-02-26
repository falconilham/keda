import { Divider } from 'antd'
import { TextTitle, Box, Text } from '../Base';

function About() {
    return (
        <Box style={styles.container}>
            <Divider plain={false}>
                <TextTitle level={3}>About</TextTitle>
            </Divider>
            <Box style={styles.mainText}>
                <Text style={styles.text}>We specialize in providing comprehensive and customizable ERP solutions to help businesses streamline their operations, increase productivity, and make informed decisions. Our team of experts has extensive experience in ERP software development, implementation, and support, and is dedicated to helping businesses achieve their goals.</Text>
                <Text style={styles.text}>Our ERP solution integrates multiple business functions, including accounting, finance, human resources, inventory management, supply chain management, and customer relationship management (CRM), into a single platform. With real-time data access across departments and functions, our ERP software enables faster and more informed decision-making.</Text>
                <Text style={styles.text}>we are committed to providing exceptional customer service and support, from initial consultation to post-implementation. Our team works closely with each client to understand their unique needs and goals, and to develop a customized ERP solution that meets those needs.</Text>
                <Text style={styles.text}>We believe in building long-term relationships with our clients, and are proud of our reputation for excellence and customer satisfaction. Contact us today to learn how we can help your business achieve its full potential.</Text>
            </Box>
        </Box>
    )
}

const styles = {
    container: {
        height: '100vh'
    },
    mainText:{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    text:{
        marginBottom: 5,
        fontSize: 18
    }
}

export default About
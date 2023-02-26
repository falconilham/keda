import { Divider, Form, Input, Button } from 'antd'
import { PhoneOutlined, PushpinOutlined, MailOutlined, IeOutlined } from '@ant-design/icons';
import { TextTitle, Box, Text } from '../Base';
const { TextArea } = Input;
function Contact() {
    return (
        <Box style={styles.container}>
            <Divider>
                <TextTitle level={3}>Contact Us</TextTitle>
            </Divider>
            <Box style={styles.mainContent}>
                <Form
                    name='contact'
                    title='Send us a message'
                    style={styles.formContact}
                >
                    <Input style={styles.inputStyle} type='text' placeholder='Your Name' />
                    <Input style={styles.inputStyle} type='email' placeholder='Your Email' />
                    <Input style={styles.inputStyle} type='email' placeholder='Subject' />
                    <TextArea style={styles.inputTextArea} placeholder='Your Message' />
                    <Button type='primary' >Send</Button>
                </Form>
                <Box>
                    <Box style={styles.listInformation}>
                        <PushpinOutlined style={styles.iconInformation} />
                        <TextTitle level={4}>Address</TextTitle>
                        <Text>8, Jl. Ratu Kemuning Bl. Bl No.1, RT.12/RW.14, Duri Kepa, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11510</Text>
                    </Box>
                    <Box style={styles.listInformation}>
                        <PhoneOutlined style={styles.iconInformation} />
                        <TextTitle level={4}>Phone</TextTitle>
                        <Text>+62-881-3987-16212</Text>
                    </Box>
                    <Box style={styles.listInformation}>
                        <MailOutlined style={styles.iconInformation} />
                        <TextTitle level={4}>Email</TextTitle>
                        <Text>cs@keda-tech.com</Text>
                    </Box>
                    <Box style={styles.listInformation}>
                        <IeOutlined style={styles.iconInformation} />
                        <TextTitle level={4}>Website</TextTitle>
                        <Text>www.erpsolutions.com</Text>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

const styles = {
    container: {
        height: '70vh',
    },
    mainContent: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 10
    },
    formContact: {
        display: 'grid',
        gridColumnGap: 10
    },
    inputStyle: {
        marginBottom: 10,
        height: 50
    },
    inputTextArea: {
        height: 100,
        marginBottom: 10,
    },
    information: {
        display: 'flex'
    },
    listInformation: {
        display: 'grid',
        gridTemplateColumns: 'auto 100px 1fr',
        gap: 20,
        alignItems: 'center',
        height: 50,
        marginBottom: 10,
    },
    iconInformation: {
        fontSize: 20
    }
}

export default Contact
import {useState} from 'react'
import { Button, Modal, Input } from 'antd'
import { TextTitle, Box } from '../Base'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Box justify="center" align="middle" style={styles.container}>
            <Box style={styles.logo}>
                <TextTitle >ERP Solution</TextTitle>
            </Box>
            <Box style={styles.menu}>
                <TextTitle level={3}>About</TextTitle>
                <TextTitle level={3}>Pricing</TextTitle>
                <TextTitle level={3}>Contact</TextTitle>
                <Button type="primary" ghost onClick={() => setIsOpen(true)}>
                    Login
                </Button>
            </Box>
            <Modal bodyStyle={styles.modal} okText="Login" open={isOpen} onCancel={() => setIsOpen(false)}>
                <Input style={styles.inputModal} type='email' placeholder='Your Email' />
                <Input style={styles.inputModal} type='password' placeholder='Password'/>
            </Modal>
        </Box>
    )
}

const styles = {
    container: {
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    },
    logo:{
        display: 'flex',
        justifyContent: 'start'
    },
    menu: {
        justifyContent: 'space-between',
        display: 'flex'
    },
    modal:{
        padding: '2rem'
    },
    inputModal: {
        marginBottom: 10
    }
}

export default Navigation
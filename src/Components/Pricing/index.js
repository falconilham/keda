import { Divider, List } from 'antd'
import { TextTitle, Box } from '../Base';

const listPrice = [
    {
        title: 'Basic',
        feature: ["Mencatat barang masuk", "Mencatat barang keluar", "Mencatat hasil keuntungan"]
    },
    {
        title: 'Business',
        feature: ["Mencatat barang masuk dan keluar", "Mencatat Keuntungan", "Dapat menganalisa hasil penjualan dengan CHART", "Support 7x24 Jam"]
    },
    {
        title: 'Entrepreneur',
        feature: ["Mencatat barang masuk dan keluar", "Mencatat Keuntungan", "Dapat menganalisa hasil penjualan dengan CHART", "Support 7x24 Jam", "Export data ke Excel", "AI Prediksi penghasilan"]
    }
]

function Pricing() {
    return (
        <Box style={styles.container}>
            <Divider plain={false}>
                <TextTitle level={3}>Our Pricing</TextTitle>
            </Divider>
            <Box style={styles.mainContent}>
                {listPrice.map(({ title, feature }) => (
                    <List
                        style={styles.card}
                        size="large"
                        header={<TextTitle level={3}>{title}</TextTitle>}
                        bordered
                        dataSource={feature}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                ))}
            </Box>
        </Box>
    )
}

const styles = {
    container: {
        padding: '1rem',
        height: '100vh'
    },
    mainContent: {
        display: 'grid',
        gridTemplateColumns: '300px 300px 300px',
        justifyContent: 'center',
        gridGap: '1rem',
    },
    card:{
        background: 'white'
    }
}

export default Pricing
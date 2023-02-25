import React from 'react'

import { SimpleGrid, Card, CardHeader, CardBody, Center, Stack, Text } from '@chakra-ui/react'

function Services() {
    const services = [
        { label: " 1.บริการรับเช่าเว็บ", desc: 'ไม่ว่าจะเป็นเว็บซ้อปที่ขายไอดีเกม, ขายไฟล์, ขายสคริป อื่นๆต่างๆอีกมามาย มีให้พร้อมมั้งโดเมน และซัพพอร์ต 24/7 ในราคาย่อมเยา', id: 1 },
    ]

    const service = services.map(service =>
        <Card my={'5'} mx={'15%'} rounded={'lg'}>
            <CardHeader>
                <Text textAlign={'center'} fontWeight={'bold'} fontSize={'xl'}>{service.label}</Text>
            </CardHeader>
            <CardBody>
                <Text textAlign={'center'} >{service.desc}</Text>
            </CardBody>
        </Card>
    )
    return (
        <>
            <Center mt={'25%'}>
                <Stack>
                    <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' textAlign={'center'} fontWeight={'bold'} fontSize={['30', '40', '40', '40']}>Services / บริการของเรา</Text>
                    <SimpleGrid spacing={4}>
                        {service}
                    </SimpleGrid>
                </Stack>
            </Center>
        </>
    )
}

export default Services
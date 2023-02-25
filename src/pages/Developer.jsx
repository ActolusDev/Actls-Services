import React from 'react'

import { Center, SimpleGrid, Card, CardHeader, CardBody, Text, Image, Stack } from '@chakra-ui/react'

function Developer() {
  const devs = [
    { name: "Suphakrit Boonlar", job: 'Full Stack Web Developer', desc: '💻🔥', id: 1 },
  ]

  const dev = devs.map(dev =>
    <Card my={'5'} mx={'10%'} rounded={'lg'}>
      <CardHeader>
        <Text textAlign={'center'} fontWeight={'bold'} fontSize={'xl'}>{dev.name}</Text>
        <Text textAlign={'center'} >{dev.job}</Text>
      </CardHeader>
      <CardBody>
        <Text textAlign={'center'} >{dev.desc}</Text>
      </CardBody>
    </Card>
  )
  return (
    <>
      <Center mt={'20%'}>
        <Stack>
          <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' textAlign={'center'} fontWeight={'bold'} fontSize={['30', '40', '40', '40']}>Developer / ผู้พัฒนา</Text>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
            {dev}
          </SimpleGrid>
        </Stack>
      </Center>
    </>
  )
}

export default Developer
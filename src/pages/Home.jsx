import React from 'react'

import { Center, Box, Stack, Text, Button } from '@chakra-ui/react'

function Home() {
    return (
        <>
            <Center my={'10'}>
                <Box>
                    <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' textAlign={'center'} fontWeight={'bold'} fontSize={['80', '100', '100', '100']}>Actolus <Text textAlign={'center'} fontWeight={'light'} fontSize={['20', '30', '30', '30']}>Website Services / บริการดีเยี่ยม</Text></Text>
                    <Stack>
                        <Button>เกี่ยวกับเรา ?</Button>
                        <Button colorScheme='purple' variant='outline'>ติดต่อเพื่อใช้บริการ</Button>
                    </Stack>
                </Box>
            </Center>
        </>
    )
}

export default Home
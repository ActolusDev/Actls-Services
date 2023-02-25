import React from 'react'

import { Center, Box, Flex, Stack, Text, Link, Divider } from '@chakra-ui/react'

function Menubar() {
  const MenuItems = [
    { label: 'หน้าแรก', id: 1 },
    { label: 'บริการของเรา', id: 2 },
    { label: 'ผู้พัฒนา', id: 3 },
  ]

  const MenuItem = MenuItems.map(MenuItem =>
    <Link
      mx={'1'}
      fontWeight={'extrabold'}
      _hover={{
        color: '#7928CA'
      }}
      key={MenuItem.id}>
      {MenuItem.label}
    </Link>
  )
  return (
    <>
      <Center py={'5'}>
        <Box>
          <Stack>
            <Text textAlign={'center'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={'4xl'} fontWeight={'bold'}>Actls</Text>
            {/* <Text textAlign={'center'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={'mm'} fontWeight={'md'}>Service / บริการรับเช่าเว็บ</Text> */}
          </Stack>
        </Box>

        <Box>
          <Flex ms={'10'} display={['none', 'none', 'flex', 'flex']}>
            {MenuItem}
          </Flex>
        </Box>
      </Center>

      <Divider />
    </>
  )
}

export default Menubar
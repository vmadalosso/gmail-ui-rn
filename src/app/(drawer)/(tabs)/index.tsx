import { View, FlatList, Text } from 'react-native'

import { Input } from '@/components/Input'
import { MenuButton } from '@/components/MenuButton'
import { Avatar } from '@/components/Avatar'
import { Email } from '@/components/Email'
import { FloatButton } from '@/components/FloatButton'

import { EMAILS } from '@/utils/emails'

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-24 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar
          source={{ uri: 'https://github.com/vmadalosso.png' }}
          size="small"
        />
      </Input>

      <FlatList
        data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
            Entrada
          </Text>
        )}
      />

      <FloatButton icon="edit" />
    </View>
  )
}

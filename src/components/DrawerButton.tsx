import { Pressable, PressableProps, View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import clsx from 'clsx'

import { colors } from '@/styles/colors'

export type IconNameType = keyof typeof MaterialIcons.glyphMap

interface TabBarButtonProps extends PressableProps {
  title: string
  isFocused?: boolean
  isDivider?: boolean
  iconName: IconNameType
  notifications?: number
}

export function DrawerButton({
  title,
  isFocused,
  isDivider,
  iconName,
  notifications,
  ...rest
}: TabBarButtonProps) {
  return (
    <Pressable
      className={clsx('py-2 w-full', {
        'border-b ml-14 border-gray-500': isDivider,
      })}
      {...rest}
    >
      <View
        className={clsx(
          'flex-row items-center justify-center gap-4 h-14 px-6 w-full',
          {
            '-ml-14': isDivider,
            'bg-orange-800 rounded-full': isFocused,
          },
        )}
      >
        <MaterialIcons
          name={iconName}
          size={20}
          color={isFocused ? colors.orange[300] : colors.gray[400]}
        />
        <Text
          className={clsx('text-white font-subtitle text-base flex-1', {
            'text-orange-300': isFocused,
          })}
        >
          {title}
        </Text>
        <Text
          className={clsx('text-gray-400 text-sm font-body', {
            'text-orange-300': isFocused,
          })}
        >
          {notifications}
        </Text>
      </View>
    </Pressable>
  )
}

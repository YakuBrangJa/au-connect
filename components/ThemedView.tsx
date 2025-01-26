import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import {cva} from 'class-variance-authority';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

const themedViewVariants = cva('', {
  variants: {
    variant: {
      default: '',
      muted: '',
    }
  },
  defaultVariants: {
    variant: 'default',
  }
})

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{backgroundColor}, style]} {...otherProps} />;
}

import 'styled-components'

interface ThemeColorInterface {
  primary: string
  secondary: string
  tertiary: string
  quarternary: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: ThemeColorInterface
    text: ThemeColorInterface
    mediaQueries: {
      small: string
      medium: string
      large: string
    }
  }
}

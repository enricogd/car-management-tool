import 'styled-components'

import { ThemeType } from 'App'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

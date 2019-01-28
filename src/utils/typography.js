import Typography from "typography"
import fairyTheme from "typography-theme-fairy-gates"
fairyTheme.baseLineHeight = 2
const typography = new Typography(
    fairyTheme, 
    )

export default typography
export const rhythm = typography.rhythm


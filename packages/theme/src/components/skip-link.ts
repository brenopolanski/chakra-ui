import type { SystemStyleFunction } from "@chakra-ui/styled-system"
import { mode } from "@chakra-ui/theme-tools"

const baseStyle: SystemStyleFunction = (props) => ({
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "1rem",
    position: "fixed",
    top: "1.5rem",
    insetStart: "1.5rem",
    bg: mode("white", "gray.700")(props),
  },
})

export default {
  baseStyle,
}

// import { useState, useEffect } from "react"

// export function useDarkMode() {
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     const storedTheme = localStorage.getItem("theme")

//     if (storedTheme === "dark") {
//       return true
//     } else if (
//       !storedTheme &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches
//     ) {
//       return true
//     } else {
//       return false
//     }
//   })

//   useEffect(() => {
//     const handleSystemThemeChange = () => {
//       setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches)
//     }

//     window
//       .matchMedia("(prefers-color-scheme: dark)")
//       .addEventListener("change", handleSystemThemeChange)

//     return () =>
//       window
//         .matchMedia("(prefers-color-scheme: dark)")
//         .removeEventListener("change", handleSystemThemeChange)
//   }, [isDarkMode])

//   const toggleDarkMode = () => {
//     const newIsDarkMode = !isDarkMode
//     setIsDarkMode(newIsDarkMode)

//     localStorage.setItem("theme", newIsDarkMode ? "dark" : "light")
//     document.documentElement.classList.toggle("dark", newIsDarkMode)
//   }

//   return [isDarkMode, toggleDarkMode]
// }

import { useState, useEffect } from "react"

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      // Check localStorage first, then system preference
      const storedTheme = localStorage.getItem("theme")
      const isSystemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches
      if (storedTheme === "dark" || isSystemDark) {
        document.documentElement.classList.toggle("dark", true)
        return true
      }
    } catch (error) {
      console.error("Error reading theme from localStorage:", error)
      return false
    }
  })

  useEffect(() => {
    const handleSystemThemeChange = () => {
      console.log(
        `Setting theme -> ${
          window.matchMedia("(prefers-color-scheme: dark)").matches
        }`,
      )
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleSystemThemeChange)

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleSystemThemeChange)
  }, [])

  const toggleDarkMode = () => {
    const newIsDarkMode = !isDarkMode
    setIsDarkMode(newIsDarkMode)

    try {
      localStorage.setItem("theme", newIsDarkMode ? "dark" : "light")
    } catch (error) {
      console.error("Error writing theme to localStorage:", error)
      // Handle localStorage errors gracefully (e.g., display a message)
    }

    document.documentElement.classList.toggle("dark", newIsDarkMode)
  }

  return [isDarkMode, toggleDarkMode]
}

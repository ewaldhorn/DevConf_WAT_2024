package main

/*
	Custom theme to allow for larger fonts for the demo.

	Only changes the font sizes a bit.
*/

import (
	"image/color"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/theme"
)

type devConfTheme struct{}

func (m devConfTheme) Color(name fyne.ThemeColorName, variant fyne.ThemeVariant) color.Color {
	return theme.DefaultTheme().Color(name, variant)
}

func (m devConfTheme) Icon(name fyne.ThemeIconName) fyne.Resource {
	return theme.DefaultTheme().Icon(name)
}

func (m devConfTheme) Font(style fyne.TextStyle) fyne.Resource {
	return theme.DefaultTheme().Font(style)
}

func (m devConfTheme) Size(name fyne.ThemeSizeName) float32 {
	return theme.DefaultTheme().Size(name) + 15.0
}

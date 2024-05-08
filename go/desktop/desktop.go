package main

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
)

const mainWindowTitle = "DevConf 2024 Main"

// -------------------------------------------------------------------- Desktop
type Desktop struct {
	title       string
	application fyne.App
	mainWindow  fyne.Window
}

func (d *Desktop) setMainWindow(w fyne.Window) {
	d.mainWindow = w
}

// -------------------------------------------------------------- NewDesktopApp
func NewDesktopApp(title string) *Desktop {
	desktop := &Desktop{}

	desktop.title = title
	desktop.application = app.New()
	desktop.application.Settings().SetTheme(&devConfTheme{})

	return desktop
}

// ----------------------------------------------------------------- MainWindow
func (d Desktop) createMainWindow() fyne.Window {
	newWindow := d.application.NewWindow(mainWindowTitle)

	newWindow.SetMaster()
	newWindow.Resize(fyne.Size{Width: 1000.0, Height: 600.0})
	newWindow.CenterOnScreen()

	return newWindow
}

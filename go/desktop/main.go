package main

import (
	"context"
	"fmt"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/widget"
)

var rustFeedbackLabel, tinyGoFeedbackLabel *widget.Label

// ---------------------------------------------------------------- buildLayout
func buildLayout() []fyne.CanvasObject {
	objects := []fyne.CanvasObject{}

	rustFeedbackLabel = widget.NewLabel("Rust awaits your command.")
	tinyGoFeedbackLabel = widget.NewLabel("TinyGo strong!")

	// Rust interaction
	objects = append(objects, widget.NewLabel("Runtime Rumble"))
	objects = append(objects, container.NewHBox(
		widget.NewButton("Rust away", func() {
			var val1 uint64 = 57
			var val2 uint64 = 50
			rustFeedbackLabel.SetText(fmt.Sprintf("%d + %d = %d",
				val1,
				val2,
				execRustWasm(context.Background(), val1, val2)))
		}),
		rustFeedbackLabel))

	// TinyGo interaction
	objects = append(objects, container.NewHBox(
		widget.NewButton("TinyGo mad, TinyGo SMASH", func() {
			var val1 uint64 = 12
			tinyGoFeedbackLabel.SetText(fmt.Sprintf("Double of %d is %d",
				val1,
				execTinyGoWasm(context.Background(), val1)))
		}),
		tinyGoFeedbackLabel))

	return objects
}

// ----------------------------------------------------------------------- main
func main() {
	app := NewDesktopApp("DevConf 2024")
	app.setMainWindow(app.createMainWindow())
	w := app.mainWindow

	w.SetContent(container.NewVBox(buildLayout()...))

	w.ShowAndRun()
}

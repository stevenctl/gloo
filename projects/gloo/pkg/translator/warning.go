package translator

type Warning struct {
	Message error
}

func (w *Warning) Error() string {
	return w.Message.Error()
}
func (w *Warning) Is(err error) bool {
	_, ok := err.(*Warning)
	return ok
}
func (w *Warning) As(err any) bool {
	_, ok := err.(*Warning)
	return ok
}
func (w *Warning) Unwrap() error {
	return w.Message
}

var _ error = new(Warning)

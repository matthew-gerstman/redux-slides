async function renderWidget() {
  const container = document.getElementById('widget');
  const widget = await import('./widget');
  widget.render(container);
}

renderWidget();

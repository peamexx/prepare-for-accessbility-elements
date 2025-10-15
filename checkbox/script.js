class A11yCheckbox {
  ARIA_CHECKED_STR = 'aria-checked';

  constructor(el) {
    this.el = el;

    if (!el.getAttribute(this.ARIA_CHECKED_STR)) {
      this.el.setAttribute(this.ARIA_CHECKED_STR, 'false');
    }

    this.el.addEventListener('click', this.click.bind(this));
  }

  toggle() {
    const isChecked = this.el.getAttribute(this.ARIA_CHECKED_STR) === 'true';
    this.el.setAttribute(this.ARIA_CHECKED_STR, String(!isChecked));
    this.el.checked = !isChecked;
  }

  click() {
    this.toggle();
  }
}

document.querySelectorAll('.a11y-checkboxs [type="checkbox"]').forEach((el) => {
  new A11yCheckbox(el);
})
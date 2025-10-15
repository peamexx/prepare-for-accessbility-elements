class A11yCheckbox {
  ARIA_TAG_STR = 'aria-checked';

  constructor(el) {
    this.el = el;

    if (!el.getAttribute(this.ARIA_TAG_STR)) {
      this.el.setAttribute(this.ARIA_TAG_STR, 'false');
    }

    this.el.addEventListener('keydown', this.keyDown.bind(this));
    this.el.addEventListener('keyup', this.keyUp.bind(this));
  }

  toggle() {
    const isChecked = this.el.getAttribute(this.ARIA_TAG_STR) === 'true';
    this.el.setAttribute(this.ARIA_TAG_STR, String(!isChecked));
    this.el.checked = !isChecked;
  }

  keyDown(event) {
    if (event.key === ' ' || event.code.toLowerCase() === 'space') {
      event.preventDefault();
    }
  }

  keyUp(event) {
    if (event.key === ' ' || event.code.toLowerCase() === 'space') {
      this.toggle();
    }
  }

  click() {
    this.toggle();
  }
}

document.querySelectorAll('.a11y-checkboxs [type="checkbox"]').forEach((el) => {
  new A11yCheckbox(el);
})
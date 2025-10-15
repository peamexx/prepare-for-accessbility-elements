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

class DetectMobile {
  constructor() {
    this.isAndroid = false;
    this.isIOS = false;

    if (/android/i.test(navigator.userAgent)) {
      this.isAndroid = true;
      this.isIOS = false;
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      this.isIOS = true;
      this.isAndroid = false;
    }
  }

  get agent() {
    return navigator.userAgent;
  }

  get mode() {
    return `isAndroid: ${this.isAndroid}, isIOS: ${this.isIOS}`;
  }
}

window.addEventListener('load', () => {
  const dd = new DetectMobile();

  const span = document.createElement('span');
  span.textContent = dd.agent + ' 😀 ' + dd.mode;
  document.body.append(span);
})

document.querySelectorAll('.a11y-checkboxs [type="checkbox"]').forEach((el) => {
  new A11yCheckbox(el);
})
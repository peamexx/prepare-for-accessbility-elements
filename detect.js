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

  get string() {
    if (this.isAndroid) {
      return 'aos'
    }
    if (this.isIOS) {
      return 'ios'
    }
    return 'false';
  }
}

window.addEventListener('load', () => {
  const dd = new DetectMobile();

  const span = document.createElement('span');
  span.textContent = dd.agent + ' 😀 ' + dd.mode;
  document.body.append(span);

  document.body.setAttribute('data-mobile', dd.string);
})
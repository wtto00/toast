export default class Toast {
  private element: HTMLDivElement

  constructor(content: string, options = {} as Options) {
    const div = document.createElement('div')

    div.classList.add('wt-toast')
    if (options.position) div.classList.add(options.position)
    if (options.theme) div.classList.add(options.theme)

    const contentDiv = document.createElement('div')
    contentDiv.classList.add('wt-content')
    if (options.style) Object.assign(contentDiv.style, options.style)

    if (options.allowHtml) {
      contentDiv.innerHTML = `${content ?? ''}`
    } else {
      contentDiv.innerText = `${content ?? ''}`
    }

    div.appendChild(contentDiv)
    document.body.appendChild(div)
    this.element = div

    const timeout = options.timeout ?? 3000
    if (timeout) {
      setTimeout(() => {
        this.hide()
      }, timeout)
    }
  }

  hide() {
    this.element.remove()
  }

  /**
   * remove all loading
   */
  static clearAll() {
    // biome-ignore lint/complexity/noForEach: cannot use for in NodeListOf
    document.querySelectorAll('.wt-toast.center').forEach((item) => item.remove())
  }

  /**
   * 更改loading文本
   * @param text loading文本
   */
  setText(text: string) {
    const contentDiv = this.element.firstElementChild as HTMLDivElement
    contentDiv.innerText = text
  }

  /**
   * 返回该loading实例是否已隐藏
   */
  get isHided() {
    return !document.body.contains(this.element)
  }
}

export interface Options {
  position?: 'top' | 'center' | 'bottom'
  theme?: 'light' | 'dark'
  timeout?: number
  allowHtml?: boolean
  style?: Partial<CSSStyleDeclaration>
}

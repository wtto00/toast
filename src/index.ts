import Toast, { type Options } from './Toast'
import './index.css'

export type { Options } from './Toast'

export function showToast(msg: string, options?: Options) {
  return new Toast(msg, options)
}

export function showLoading(msg = 'Loading...') {
  return new Toast(`<i class="wt-spining"></i>${msg}`, {
    position: 'center',
    allowHtml: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px 36px',
    },
    timeout: 0,
  })
}

export function clearAll() {
  Toast.clearAll()
}

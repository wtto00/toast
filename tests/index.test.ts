import { page } from '@vitest/browser/context'
import { expect, test } from 'vitest'
import { showLoading, showToast } from '../src/index'

test('showToast', async () => {
  const toast = showToast('Hello World')
  expect(document.querySelector('.wt-toast')).toBeDefined()
  await expect.element(page.getByText('Hello World')).toBeDefined()
  await new Promise((resolve) => setTimeout(resolve, 3000))
  expect(toast.isHided).toBe(true)
  expect(document.querySelector('.wt-toast')).toBeNull()
})

test('showLoading', async () => {
  const loading = showLoading()
  expect(document.querySelector('.wt-toast')).toBeDefined()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  loading.hide()
  expect(loading.isHided).toBe(true)
  expect(document.querySelector('.wt-toast')).toBeNull()
})

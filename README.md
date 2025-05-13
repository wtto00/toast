# Toast for browser

## Install

```bash
pnpm add @wtto00/toast
```

## Usage

```js
import { showLoading, showToast, clearAll } from "@wtto00/toast";

const toast = showToast("Hello World!");
// close toast
toast.hide();
// get isHided of toast
console.log(toast.isHided);

const loading = showLoading("Loading...");
// close loading
loading.hide();
// set text of loading
loading.setText("uploading...");
// close all instances of loading
clearAll();
```

## Options

| Name      | Type                                                                                        | Default                                  | Description                    |
| --------- | ------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------ |
| position  | 'top'\|'center'\|'bottom'                                                                   | 'bottom' for toast, 'center' for loading | Location of toast              |
| theme     | 'light'\|'dark'                                                                             | dark                                     | Theme of toast                 |
| timeout   | number                                                                                      | 3s for toast, 0s for loading             | The time of automatic shutdown |
| allowHtml | boolean                                                                                     | false                                    | Whether msg uses HTML strings  |
| style     | [CSSStyleDeclaration](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleDeclaration) | undefined                                | style of content               |

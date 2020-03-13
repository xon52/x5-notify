# x5 Notify ([Live Demo](https://codesandbox.io/s/x5-notify-example-xozh8?hidenavigation=1&view=preview))

This is a lightweight notice plugin. It does require a [Vuex store](https://vuex.vuejs.org/)

:warning: This plugin is in development, so please let me know if you find any errors.

## Installation

```bash
# npm
npm install x5-notify --save
```

## Deployment

```js
// Entry point (e.g. main.js)
Vue.use(Vuex)
const store = new Vuex.Store()

import x5Notify from 'x5-notify'
Vue.use(x5Notify, store)
```

This plugin uses a component to house all the magic, so it's recommended to put this near the end of your Vue app (e.g.
bottom of your App.vue template)

```html
<!-- Somewhere for the component (e.g. App.vue) -->
<div id="app">
  ...
  <x5-notify></x5-notify>
</div>
```

## Usage

```js
this.$notify('success', 'You made a success!')
this.$notify({
  type: 'error',
  text: 'There was an error',
  wait: 10,
})
```

## Options

### **plugin** _(Vue.use(x5Notify, **options**))_

| Attribute |  Type  |   Default    | Description                                                              |
| :-------- | :----: | :----------: | :----------------------------------------------------------------------- |
| position  | String | bottom-right | Origin of notices: `top-right`, `bottom-right`,`top-left`, `bottom-left` |
| zIndex    | Number |    `200`     | `z-index` style for plugin                                               |
| max     | Number |     `5`      | Limit number of open notices (`0` to remove limit)                       |

:warning: `onClose()` callbacks won't be called on notices closed due to exceeding the maximum number.

### **`$notice` (options)** _(returns Promise)_

![Notices](./example/img/messages.png)

| Attribute |   Type   | Default | Description                                                        |
| :-------- | :------: | :-----: | :----------------------------------------------------------------- |
| text      |  String  |   --    | Notice text (required) - **can be HTML**                           |
| type      |  String  | default | One of `success`, `warning`, `error`, `info`, `special`, `default` |
| onClose   | Function |   --    | Callback for when the notice is closed                             |
| onClick   | Function |   --    | Callback for clicking on the notice                                |
| wait      |  Number  |   `5`   | Time in seconds before notice is destroyed                         |

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for the process for submitting pull requests.

## Authors

- **Keagan Chisnall** - [xon52](https://github.com/xon52)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

**Inspired by:**

- The look and feel of [alertifyJS](https://alertifyjs.com/)
- The size and code of [vue-toast-notification](https://github.com/ankurk91/vue-toast-notification) by @ankurk91

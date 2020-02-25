# x5 Notify

This is a lightweight notice plugin.

:warning: This plugin is in development, so please let me know if you find any errors.

## Installation

```bash
# npm
npm install x5-notify --save
```

## Deployment

```js
import x5Notify from 'x5-notify'
Vue.use(x5Notify)
```

## Usage

```js
this.$notify('success', 'You made a success!')
this.$notify({
  type: 'error',
  text: 'There was an error',
  wait: 10
})
```

## Options

### **plugin** _(Vue.use(x5Notify, **options**))_

| Attribute |  Type  |   Default    | Description                                                               |
| :-------- | :----: | :----------: | :------------------------------------------------------------------------ |
| position  | String | bottom-right | Origin of notices: `top-right`, `bottom-right`,`top-left`, `bottom-left` |
| zIndex    | Number |    `200`     | `z-index` style for plugin                                                |

### **`$notice` (options)** _(returns Promise)_

![Notices](./example/img/messages.png)

| Attribute |   Type   | Default | Description                                                        |
| :-------- | :------: | :-----: | :----------------------------------------------------------------- |
| text      |  String  |   --    | Notice text (required)                                            |
| type      |  String  | default | One of `success`, `warning`, `error`, `info`, `special`, `default` |
| onClose   | Function |   --    | Callback for when the notice is closed                            |
| onClick   | Function |   --    | Callback for clicking on the notice                               |
| wait      |  Number  |   `5`   | Time in seconds before notice is destroyed                        |

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

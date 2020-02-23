# x5 Notify

This is a lightweight message, dialog, and modal Vue plugin.

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
this.$message({
  type: 'success',
  title: 'This is my title',
  text: 'This is some text',
})
this.$alert({
  text: 'This is an alert dialog.',
})
```

## Options

### **plugin** _(Vue.use(x5Notify, **options**))_

| Attribute |  Type  |   Default    | Description                                                               |
| :-------- | :----: | :----------: | :------------------------------------------------------------------------ |
| position  | String | bottom-right | Origin of messages: `top-right`, `bottom-right`,`top-left`, `bottom-left` |
| zIndex    | Number |    `200`     | `z-index` style for plugin                                                |

      width: this.options.width || 500,
      overlay: this.options.overlay || true,
      permanent: this.options.permanent || false,
      xStyle: this.options.style || '',
      xClass: this.options.class || ''
      input: null,
      permanent: this.options.permanent,
      rules: this.options.rules,

### **`$message` (options)** _(returns Promise)_
![Messages]('./example/img/messages.png')


| Attribute |   Type   | Default | Description                                                        |
| :-------- | :------: | :-----: | :----------------------------------------------------------------- |
| text      |  String  |   --    | Message text (required)                                            |
| type      |  String  | default | One of `success`, `warning`, `error`, `info`, `special`, `default` |
| onClose   | Function |   --    | Callback for when the message is closed                            |
| onClick   | Function |   --    | Callback for clicking on the message                               |
| wait      |  Number  |   `5`   | Time in seconds before message is destroyed                        |

### **`$modal` (options)** _(returns Promise)_
![Modal]('./example/img/modal.png')

| Attribute |   Type   | Default | Description                                        |
| :-------- | :------: | :-----: | :------------------------------------------------- |
| onClose   | Function |   --    | Callback for when the message is closed            |
| overlay   | Boolean  | `true`  | Darken page behind background                      |
| permanent | Boolean  | `false` | Only allow closing the window via provided buttons |
| width     |  Number  |  `500`  | Maximum window width                               |
| xClass    |  String  |   --    | Extra classes for the window                       |
| xStyle    |  String  |   --    | Extra styles for the window                        |

### **`$alert`, `$confirm`, `$prompt` (options)** _(returns Promise)_
![Alert]('./example/img/alert.png')
![Confirm]('./example/img/confirm.png')
![Prompt]('./example/img/prompt.png')

:information_source: These attributes and options extend \$modal's (above)
| Attribute | Type | Default | Description |
| :--- | :---: | :---: | :--- |
| text | String | -- | Message text (required) |
| title | String | -- | Dialog header bar title |
| onClose | Function | -- | Callback for when the message is closed |
| onCancel | Function | -- | Callback for cancelling the Dialog |
| onOK | Function | -- | Callback for confirming the Dialog |
| labelOK | String | OK | OK button label |
| labelCancel | String | Cancel | Cancel button label |
| rules | Array | `[]` | Array of functions to test prompt input against |

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for the process for submitting pull requests.

## Authors

- **Keagan Chisnall** - [xon52](https://github.com/xon52)
  <!-- See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->
  &nbsp;&nbsp;

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Inspired by:

- The look and feel of [alertifyJS](https://alertifyjs.com/)
- The size and code of [vue-toast-notification](https://github.com/ankurk91/vue-toast-notification) by @ankurk91
  &nbsp;&nbsp;

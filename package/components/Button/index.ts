import type { App } from 'vue';
const _Button = {}

const Button = Object.assign( // 枚举对象的属性，然后进行覆盖；
    _Button, {
        install:(app: App)=>{ // vue的api，app.use的时候会自动执行Button.install
            app.component('button', _Button);
        }
    }
)

export default Button;
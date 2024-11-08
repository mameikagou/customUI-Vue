import { defineComponent,ComponentOptions } from "vue";

// Todo: 对 defineComponent 的封装，用于定义组件

export function genericComponent(option: ComponentOptions){
    return defineComponent(option);
}
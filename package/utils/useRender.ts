import { getCurrentInstance } from "vue";

import type { VNode } from 'vue'
export function useRender(render:()=>VNode) {
    const instance = getCurrentInstance() as any;
    instance.render = render;
}
import { ref } from "vue";
import { useEventListener,ConfigurableWindow,Position } from "@vueuse/core";
import type { ConfigurableEventFilter, MaybeRefOrGetter } from '@vueuse/shared';


// 这些是搬运过来的, 后续要替换掉
export interface UseMouseOptions extends ConfigurableWindow, ConfigurableEventFilter {
    /**
     * Mouse position based by page, client, screen, or relative to previous position
     *
     * @default 'page'
     */
    type?: UseMouseCoordType | UseMouseEventExtractor
  
    /**
     * Listen events on `target` element
     *
     * @default 'Window'
     */
    target?: MaybeRefOrGetter<Window | EventTarget | null | undefined>
  
    /**
     * Listen to `touchmove` events
     *
     * @default true
     */
    touch?: boolean
  
    /**
     * Listen to `scroll` events on window, only effective on type `page`
     *
     * @default true
     */
    scroll?: boolean
  
    /**
     * Reset to initial value when `touchend` event fired
     *
     * @default false
     */
    resetOnTouchEnds?: boolean
  
    /**
     * Initial values
     */
    initialValue?: Position
  }

export type UseMouseCoordType = 'page' | 'client' | 'screen' | 'movement';
export type UseMouseSourceType = 'mouse' | 'touch' | null;
export type UseMouseEventExtractor = (event: MouseEvent | Touch) => [x: number, y: number] | null | undefined;

const UseMouseBuiltinExtractors: Record<UseMouseCoordType, UseMouseEventExtractor> = {
    page: (event) => [event.pageX, event.pageY],
    client: (event) => [event.clientX, event.clientY],
    screen: (event) => [event.screenX, event.screenY],
    movement: (event) => (event instanceof Touch ? null : [event.movementX, event.movementY]), // Touch没有movementX和movementY
} as const; // 只读

export const useMouse = (options:UseMouseOptions) => {
    const { type = 'page', touch = true, initialValue = { x: 0, y: 0 }, target = window, } = options;

    const x = ref(initialValue.x)
    const y = ref(initialValue.y)
    const sourceType = ref<UseMouseSourceType>(null)

    // 如果指定了, 就用自己的, 否则用内置的
    const extractor = typeof type === 'function' ? type : UseMouseBuiltinExtractors[type]

    const mouseHandler = (event: MouseEvent | Touch) => {
        const result = extractor(event)

        if(result){
            [x.value, y.value] = result
            sourceType.value = 'mouse'
        }
    }
    if (target) {
        // 这个是内置属性, 用于阻止浏览器的默认行为 event.preventDefault()
        let listenerOption = { passive: true }
        useEventListener(target, 'mousemove', (event: MouseEvent) => mouseHandler(event), listenerOption)
    }

    return {
        x, y, sourceType
    }
}

// VResponsive 是 Vuetify 组件库中的一个组件，用于创建响应式容器。它可以帮助你在不同的屏幕尺寸下保持内容的宽高比。通常用于图像、视频或其他需要保持特定比例的内容

import { computed } from "vue";
import { genericComponent } from "@/utils/defineComponent";
import type { DefineComponent } from "vue";
import { useRender } from "@/utils/useRender";

// 宽高比
export function useAspectStyles(props: { aspectRatio?: string | number }) {
    return {
        aspectStyles: computed(() => {
            const radio = Number(props.aspectRatio);
            return radio ? { paddingBottom: String(1 / radio * 100) + '%' } : undefined;
        })
    }
}

export const VResponsive = genericComponent({
    name: 'VResponsive',
    props: "", // Todo: 定义 props
    setup(props, { slots }) {
        const { aspectStyles } = useAspectStyles(props)
        // const { dimensionStyles } = useDimension(props)
        useRender(() => (
            <div class={[
                "v-responsive",
                { 'v-responsive--inline': props.inline },
                props.class,
            ]}
                style={[
                    // dimensionStyles.value,
                    props.style,
                ]}
            >
                <div class="v-responsive__sizer">

                    {/* 渲染这些插槽 */}
                    {slots.additional?.()}

                    {slots.default && (
                        <div class={['v-responsive__content', props.contentClass]}>{slots.default()}</div>
                    )}
                </div>
            </div>
        ))
    }
})
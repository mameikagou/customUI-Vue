<template>
    <button :class="[
        'button',
        // size
        SIZE_CLASS[size],
        // type
        TYPE_CLASS[type],
        // status
        STATUS_CLASS[status],
        // shape
        SHAPE_CLASS[shape],
    ]" 
    @click="handleEvent('click', $event)" 
    @dblclick="handleEvent('dblclick', $event)"
    @contextmenu="handleEvent('contextmenu', $event)">
    </button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import type { ButtonProps } from './types';
import { SIZE_MAP } from '../../constants';
import { SIZE_CLASS, TYPE_CLASS, STATUS_CLASS, SHAPE_CLASS } from './constants';

// vue 3.3之后引入是宏，可以配置一个组件的一些属性；比如名字，是否可继承等等；
defineOptions({
  name: 'Button', // 比如这里设置为Button，它的标签名在vue devtool中就是Button；
});
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'secondary',
  status: 'normal',
  size: 'medium',
  shape: 'square',
  disabled: false,
  loading: false,
  long: false,
  htmlType: 'button',
});

type EmitsTypes = (e: ClickTypes, event: MouseEvent) => void;
type ClickTypes = 'click' | 'dblclick' | 'contextmenu';
const emits = defineEmits<EmitsTypes>();

const { size, disabled, loading } = toRefs(props);

const sizeToPx = computed(() => `${SIZE_MAP[size.value]} + 'px'`);
const roundBorderRadius = computed(() => `${SIZE_MAP[size.value] / 2} + 'px'`);

const handleEvent = (type: ClickTypes, e: MouseEvent) => {
  if (disabled.value || loading.value) return;
  emits(type, e);
};
</script>

<style lang="less" scoped>
@import './index.less';

// 是否只有icon
.yc-button-only-icon {
  width: v-bind(sizeToPx);
  padding: 0;
  .yc-button-icon {
    margin: 0 !important;
  }
}
// shape
.yc-button-shape-square {
  border-radius: 2px;
}
.yc-button-shape-circle {
  width: v-bind(sizeToPx);
  padding: 0;
  border-radius: 50%;
}
.yc-button-shape-round {
  border-radius: v-bind(roundBorderRadius);
}
</style>
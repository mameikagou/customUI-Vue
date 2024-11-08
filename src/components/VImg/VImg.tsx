import { genericComponent } from '@/utils/defineComponent';
import { useRender } from '@/utils/useRender';
import { VResponsive } from '@/components/VResponsive/VResponsive';

export const VImg = genericComponent({
    setup() {
        const __image = () => {
            return (
                <img />
            )
        }
        useRender(() => {
            return (
                <VResponsive>
                    {{
                        additional: () => {
                            return (
                                <>
                                    <__image />
                                </>
                            )
                        }
                    }}
                </VResponsive>
            )
        })
    }



})
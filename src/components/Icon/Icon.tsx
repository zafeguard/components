import FontAwesome from '@expo/vector-icons/FontAwesome';
import { memo, useMemo } from 'react';
import { IconProps } from './constants';
import { useThemeColor } from '../../hooks/useThemeColor';
import { TEXT_SIZES } from '../Text';
import { Wrapper } from './Wrapper';

function BaseIcon(props: IconProps) {
    const {
        name,
        size = "md",
        color: overriddenColor,
        withCard = false,
        padding = 8,
    } = props;
    const { default: textColor } = useThemeColor("text");
    const sizeValue = useMemo(() => typeof size === "string" ? TEXT_SIZES[size].fontSize : size, [size]);

    return (
        <Wrapper
            enabled={withCard}
            size={sizeValue}
            padding={padding / 2}
        >
            <FontAwesome
                name={name}
                color={overriddenColor ?? textColor}
                size={sizeValue - (padding / 2)}
            />
        </Wrapper>
    )
}
const Icon = memo(BaseIcon);
Icon.displayName = "Icon";
export default Icon;

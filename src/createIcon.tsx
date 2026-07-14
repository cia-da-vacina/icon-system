import styled from "styled-components";
import {
  color,
  layout,
  space,
  shouldForwardProp,
  type ColorProps,
  type LayoutProps,
  type SpaceProps,
} from "@cia-da-vacina/styled-system";
import type { ReactNode, SVGProps } from "react";

export type IconProps = SpaceProps &
  ColorProps &
  LayoutProps &
  SVGProps<SVGSVGElement> & {
    size?: number | string;
  };

const Svg = styled.svg.withConfig({ shouldForwardProp })<IconProps>`
  display: inline-block;
  flex-shrink: 0;
  vertical-align: middle;
  ${space}
  ${color}
  ${layout}
`;

export function createIcon(displayName: string, path: ReactNode) {
  function Icon({ size = 20, fill = "currentColor", width, height, ...rest }: IconProps) {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={fill}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={width ?? size}
        height={height ?? size}
        aria-hidden
        {...rest}
      >
        {path}
      </Svg>
    );
  }
  Icon.displayName = displayName;
  return Icon;
}

import { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import colors from "@/src/pages/styles/themes/colors";

type Props = {
    children?: ReactNode;
    selected: boolean;
} & HTMLAttributes<HTMLButtonElement>;

function Button({ children, selected, onClick }: Props) {
    return (
        <Btn selected={selected} onClick={onClick}>
            {children}
        </Btn>
    );
}

const Btn = styled.button<{ selected: boolean }>`
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 1rem;
    background-color: ${(props) =>
        props.selected ? colors.black70 : colors.black30};
    padding: 1.2rem 1.6rem;
    font-size: 1.4rem;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    color: white;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            transition-duration: 200ms;
            transition-property: background-color, color;
            transition-timing-function: ease;
            background-color: ${colors.black70};
            color: white;
        }
    }

    @media (max-width: 300px) {
        font-size: 1.2rem;
    }
`;
export default Button;

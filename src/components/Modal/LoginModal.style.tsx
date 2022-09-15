import colors from "@/src/pages/styles/themes/colors";
import styled from "@emotion/styled";

const StyledModal = styled.div<{ open: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 76px);
    padding: 16px 16px 20px 16px;
    border-radius: 12px;
    background-color: ${(p) => colors.white};

    ${(p) => !p.open && `display:none;`}
`;

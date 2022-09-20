import styled from "@emotion/styled";
import colors from "@/src/pages/styles/themes/colors";

export const StyledTabContainer = styled.div`
    height: 80vh;
    width: 23vw;
    background-color: ${colors.white};
    opacity: 0.75;
    border-radius: 1.3rem;
`;

export const StyledTabWrapper = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem;
`;

export const StyledTab = styled.li<{ isSelected: boolean | undefined }>`
    width: 80%;
    text-align: center;
    padding: 0.3rem;
    border-bottom: ${(p) => (p.isSelected ? "1px solid black" : "none'")};
    button {
        font-size: 1.5rem;
        line-height: 2rem;
    }
`;

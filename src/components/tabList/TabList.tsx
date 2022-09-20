import { useState, useEffect, ReactNode, useRef, useCallback } from "react";
import {
    StyledTabContainer,
    StyledTabWrapper,
    StyledTab,
} from "./TabList.style";

interface TabProps {
    tabItems: string[];
    children?: ReactNode;
    outerActivatedIndex?: number;
    className?: string;
    onChange?: (activatedIndex: number) => void;
}

const TabList = ({
    tabItems = [],
    children,
    outerActivatedIndex = 0,
    onChange = () => null,
}: TabProps) => {
    const [activatedIndex, setActivatedIndex] = useState(outerActivatedIndex);

    const tabItemRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        setActivatedIndex(outerActivatedIndex);
    }, [outerActivatedIndex]);

    useEffect(() => {
        onChange(activatedIndex);
        tabItemRefs.current[activatedIndex];
    }, [activatedIndex, onChange]);

    return (
        <>
            <StyledTabContainer>
                <StyledTabWrapper>
                    {tabItems.map((tabItem, index) => {
                        const isSelected = activatedIndex === index;
                        return (
                            <StyledTab
                                ref={(element) =>
                                    (tabItemRefs.current[index] = element)
                                }
                                key={tabItem}
                                isSelected={isSelected}
                                onClick={() => setActivatedIndex(index)}
                            >
                                <button>{tabItem}</button>
                            </StyledTab>
                        );
                    })}
                </StyledTabWrapper>
                {/**
                 * 배열인 경우 activatedIndex번째의 children을 렌더링하고,
                 * 배열이 아닌 경우 children을 그대로 랜더링한다. */}
                {Array.isArray(children) ? children[activatedIndex] : children}
            </StyledTabContainer>
        </>
    );
};

export default TabList;

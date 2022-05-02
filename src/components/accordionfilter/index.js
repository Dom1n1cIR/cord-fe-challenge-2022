import React, { useState } from "react";
import styled from 'styled-components';
import Checkbox from '../checkbox/index';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ExpandableFiltersWrapper = styled.div`
  padding-bottom: 15px;
`;

const ExpandableFiltersTitleCont = styled.div`
  display: flex;
  font-weight: 700;
  cursor: pointer;
`;

const ExpandableFiltersTitle = styled.span`
  padding-left: 10px;
`;

const ExpandableFiltersOptions = styled.div`
  ${(props) => (props.isOpen ? "" : "display:none")};
  padding-top: 20px;
`;

const OptionsChecboxWrapper = styled.div`
  padding-bottom: 10px;
`;

export default function AccordionFilter ({ options, title }) {
    const [filtersShown, setFilterShown] = useState(false);

    const handleOnClickChange = () => {
      setFilterShown(!filtersShown);
    };

    const isOptionsDefined = (options) => {
      if (options === undefined || options === []) return false;
      return true;
    };
    return (
        <>
            {isOptionsDefined(options) && (
              <ExpandableFiltersWrapper title="expandable-filters">
                <ExpandableFiltersTitleCont onClick={handleOnClickChange}>
                  {filtersShown ? (
                    <AiOutlineMinus onClick={handleOnClickChange} size={"1.3em"} />
                  ) : (
                    <AiOutlinePlus onClick={handleOnClickChange} size={"1.3em"} />
                  )}
                  <ExpandableFiltersTitle> Select {title}</ExpandableFiltersTitle>
                </ExpandableFiltersTitleCont>
                <ExpandableFiltersOptions isOpen={filtersShown}>
                  {options.map((element) => {
                    return (
                      <OptionsChecboxWrapper key={element.id}>
                        <Checkbox label={element.name} id={element.id} />
                      </OptionsChecboxWrapper>
                    );
                  })}
                </ExpandableFiltersOptions>
              </ExpandableFiltersWrapper>
            )}
        </>
    )
}
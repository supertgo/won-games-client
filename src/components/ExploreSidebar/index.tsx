import { useState } from 'react';
import xor from 'lodash.xor';
import Radio from 'components/Radio';
import Button from 'components/Button';
import Heading from 'components/Heading';
import Checkbox from 'components/Checkbox';
import {
  FilterList as FilterListIcon,
  Close as CloseIcon
} from '@styled-icons/material-outlined/';

import * as S from './styles';
import { ParsedUrlQueryInput } from 'querystring';

export type ItemProps = {
  title: string;
  name: string;
  type: string;
  fields: Field[];
};

type Field = {
  label: string;
  name: string;
};

type Values = ParsedUrlQueryInput;

export type ExploreSidebarProps = {
  items: ItemProps[];
  initialValues?: Values;
  onFilter: (values: Values) => void;
};

const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {}
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues);
  const [isOpen, setIsOpen] = useState(false);

  function handleRadio(name: string, value: string | boolean) {
    setValues((s) => ({ ...s, [name]: value }));
  }

  function handleCheckbox(name: string, value: string) {
    const currentList = (values[name] as []) || [];
    setValues((s) => ({ ...s, [name]: xor(currentList, [value]) }));
  }

  function handleFilter() {
    onFilter(values);
    setIsOpen(false);
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconsWrapper>
        <FilterListIcon
          aria-label="open filters"
          onClick={() => setIsOpen(true)}
        />
        <CloseIcon
          aria-label="close filters"
          onClick={() => setIsOpen(false)}
        />
      </S.IconsWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading
              color="white"
              size="small"
              lineBottom
              lineColor="secondary"
            >
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isChecked={(values[item.name] as string[])?.includes(
                    field.name
                  )}
                  onCheck={() => handleCheckbox(item.name, field.name)}
                />
              ))}

            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  id={field.name}
                  key={field.name}
                  name={item.name}
                  value={field.name}
                  label={field.label}
                  labelFor={field.name}
                  defaultChecked={
                    String(field.name) === String(values[item.name])
                  }
                  onChange={() => handleRadio(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default ExploreSidebar;

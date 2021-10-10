import { useState } from 'react';
import Radio from 'components/Radio';
import Button from 'components/Button';
import Heading from 'components/Heading';
import Checkbox from 'components/Checkbox';
import {
  FilterList as FilterListIcon,
  Close as CloseIcon
} from '@styled-icons/material-outlined/';

import * as S from './styles';

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

type Values = {
  [field: string]: boolean | string;
};

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

  function handleChange(name: string, value: string | boolean) {
    setValues((s) => ({ ...s, [name]: value }));
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
                  isChecked={!!values[field.name]}
                  onCheck={(v) => handleChange(field.name, v)}
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
                  defaultChecked={field.name === values[item.name]}
                  onChange={() => handleChange(item.name, field.name)}
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

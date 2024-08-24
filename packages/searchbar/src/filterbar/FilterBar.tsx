/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { Chip, CoreIcons, Dropdown } from "@react-fabric/core";
import { isNil } from "@react-fabric/utilities";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { type FilterBarProps, type FilterObject } from "../types";
import { FilterEdit } from "./FilterEdit";
import { FilterTag } from "./FilterTag";

export const FilterBar = ({
  filters = [],
  fields,
  includedColor,
  excludedColor,
  onFilterChanged,
}: FilterBarProps) => {
  const { t } = useTranslation("searchbar");

  const handleRemove = useCallback(
    (index: number) => {
      const list = [...filters];
      list.splice(index, 1);
      onFilterChanged?.(list);
    },
    [filters],
  );
  const handleChange = useCallback(
    (filter: FilterObject, index?: number) => {
      const list = [...filters];
      isNil(index) ? list.push(filter) : list.splice(index, 1, filter);
      onFilterChanged?.(list);
    },
    [filters],
  );

  return (
    <div className="flex flex-wrap gap-1 items-center">
      {filters?.map((filter, idx) => (
        <FilterTag
          key={idx}
          filter={filter}
          fields={fields}
          includedColor={includedColor}
          excludedColor={excludedColor}
          onRemove={() => handleRemove(idx)}
          onChange={(filter) => handleChange(filter, idx)}
        />
      ))}
      {fields && (
        <Dropdown showArrow>
          <Chip
            size="sm"
            className="!outline-dashed !outline-tint-400"
            icon={CoreIcons.insert}
          >
            {t("label.add")}
          </Chip>
          <FilterEdit fields={fields} onChange={handleChange} />
        </Dropdown>
      )}
    </div>
  );
};

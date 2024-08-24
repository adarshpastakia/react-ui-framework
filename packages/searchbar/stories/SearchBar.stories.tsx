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

import {
  Button,
  CoreIcons,
  Divider,
  Dropdown,
  Menu,
  MenuItem,
} from "@react-fabric/core";
import { SuperDate } from "@react-fabric/date";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { FIELD_TYPE, OPERATOR, SearchBar } from "../src";

const meta: Meta = {
  component: SearchBar,
  title: "@searchbar/SearchBar",
  parameters: {
    layout: "padded",
    jest: ["searchbar/tests/SearchBar.test.tsx"],
  },
};

export default meta;
type SearchBarStory = StoryObj<typeof SearchBar>;

export const _SearchBar: SearchBarStory = {
  render: (args) => {
    return (
      <SearchBar
        {...args}
        onSearch={action("onSearch")}
        append={<SuperDate variant="link" value="$year-5|$now" />}
        actions={
          <Dropdown placement="bottom-end">
            <Button icon={CoreIcons.menu} aria-label="menu" variant="link" />
            <Menu className="text-sm">
              <MenuItem label="Open" />
              <MenuItem label="Save" />
              <Divider />
              <MenuItem label="Share" />
            </Menu>
          </Dropdown>
        }
      />
    );
  },
  args: {
    excludedColor: "#f00",
    query: "test AND query",
    fields: [
      {
        field: "id",
        label: "ID",
        type: FIELD_TYPE.STRING,
      },
      {
        field: "name",
        label: "Name",
        type: FIELD_TYPE.STRING,
      },
      {
        field: "age",
        label: "Age",
        type: FIELD_TYPE.NUMBER,
      },
      {
        field: "extras",
        label: "Extras",
        type: FIELD_TYPE.NONE,
      },
    ],
    filters: [
      {
        field: "name",
        operator: OPERATOR.IS,
        value: "Smeghead",
        pinned: true,
        canPin: false,
        canDisable: false,
        required: true,
        canEdit: false,
        icon: "mdi mdi-tray-full",
      },
      {
        field: "name",
        operator: OPERATOR.IS,
        value: "Smeghead",
      },
      {
        field: "name",
        negate: true,
        operator: OPERATOR.IS,
        value: "Smeghead",
        label: "New filter",
      },
      {
        query: JSON.stringify({ query: "test" }),
        label: "Query filter",
      },
    ],
  },
};

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

import { faker } from "@faker-js/faker";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Content, Menu, MenuItem, Tab, TabPanel, Viewport } from "../../../src";

const meta: Meta = {
  component: TabPanel,
  subcomponents: { Tab } as AnyObject,
  title: "@core/components/TabPanel",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/TabPanel.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="min-h-[600px]">
        <Viewport>
          <Story />
        </Viewport>
      </div>
    ),
  ],
};

export default meta;
type TabPanelStory = StoryObj<typeof TabPanel>;

export const _TabPanel: TabPanelStory = {
  render: (args) => {
    return (
      <TabPanel {...args}>
        <div />
        <Tab
          id="1"
          label={faker.commerce.product()}
          onClose={action("onClose")}
          className="w-32"
          actions={
            <Menu>
              <MenuItem label="Action..." />
              <MenuItem label="Action..." />
              <MenuItem label="Action..." />
            </Menu>
          }
        >
          <Content>{faker.lorem.paragraphs(9)}</Content>
        </Tab>
        <Tab id="2" label={faker.commerce.product()}>
          <Content>{faker.lorem.paragraphs(9)}</Content>
        </Tab>
        <Tab id="3" label={faker.commerce.product()}>
          <Content>{faker.lorem.paragraphs(9)}</Content>
        </Tab>
      </TabPanel>
    );
  },
  args: {
    onBeforeChange: fn(),
    onChange: fn(),
  },
};

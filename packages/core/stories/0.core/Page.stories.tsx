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

import type { Meta, StoryObj } from "@storybook/react";
import { Page, Viewport } from "../../src";

const meta: Meta = {
  component: Page,
  title: "@core/Application",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Page.test.tsx"],
  },
};

export default meta;
type PageStory = StoryObj<typeof Page>;

export const _Page: PageStory = {
  render: (args) => {
    return (
      <div className="min-h-[600px]">
        <Viewport>
          <Page {...args}>
            <h1 className="area-head border-b text-center p-4">Page Header</h1>
            <h6 className="area-foot border-t text-center p-4">Page Footer</h6>
            <h4 className="area-side-s border-e bg-dimmed p-4">
              Page Aside start
            </h4>
            <h4 className="area-side-e border-s bg-dimmed p-4">
              Page Aside end
            </h4>
            <h4 className="area-content bg-base text-center p-4">
              Page Content
            </h4>
          </Page>
        </Viewport>
      </div>
    );
  },
  args: {
    paper: true,
    title: "Page title",
    icon: "mdi mdi-react",
  },
};

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

import { Button, Callout } from "@react-fabric/core";
import { Controller, Form, Input } from "@react-fabric/form";
import { CodeEditor } from "@react-fabric/monaco";
import { yup } from "@react-fabric/utilities";
import classNames from "classnames";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { type FilterObject } from "../types";
import { useFloatingTree } from "@floating-ui/react";

const QuerySchema = new yup.ObjectSchema({
  label: yup.string().required(),
  query: yup
    .string()
    .required()
    .test((value) => {
      try {
        JSON.parse(value);
        return true;
      } catch {
        return false;
      }
    }),
});

type QuerySchemaType = yup.InferType<typeof QuerySchema>;

export const QueryForm = ({
  filter,
  onChange,
  onRemove,
}: {
  filter?: FilterObject;
  onRemove?: () => void;
  onChange?: (filter: FilterObject) => void;
}) => {
  const { t } = useTranslation("searchbar");
  const tree = useFloatingTree();
  const inputRef = useRef<HTMLInputElement>(null);

  const filterValue = useMemo(() => {
    if (filter && "query" in filter && filter.query)
      return {
        query: filter.query,
        label: filter.label,
      };
    return {
      label: "",
      query: "",
    };
  }, [filter]);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, []);

  const handleSubmit = useCallback(
    (model: QuerySchemaType) => {
      const filter: FilterObject = {
        query: model.query,
        label: model.label,
      };
      onChange?.(filter);
      tree?.events.emit("close");
    },
    [onChange],
  );

  return (
    <Form<QuerySchemaType>
      schema={QuerySchema}
      defaultValues={filterValue}
      onSubmit={handleSubmit}
    >
      <Callout color="warning">For advanced users only!</Callout>
      <Controller name="label">
        <Input
          required
          ref={inputRef}
          label={t("label.label")}
          placeholder={t("label.label")}
        />
      </Controller>
      <Controller name="query">
        {({ checked, error, invalid, ...field }) => (
          <div className="my-2">
            <label
              className={classNames("block px-2", invalid && "text-danger-600")}
            >
              {t("label.query")}
            </label>
            <div className="h-[380px] w-[600px] grid outline">
              <CodeEditor minimal {...field} />
            </div>
          </div>
        )}
      </Controller>
      <div className="flex justify-end gap-1">
        {onRemove && (
          <div className="flex-1">
            <Button
              data-dropdown-dismiss="true"
              variant="link"
              size="sm"
              color="danger"
              onClick={onRemove}
            >
              {t("label.remove")}
            </Button>
          </div>
        )}
        <Button data-dropdown-dismiss="true" variant="link" size="sm">
          {t("label.cancel")}
        </Button>
        <Button type="submit" variant="solid" size="sm">
          {t("label.apply")}
        </Button>
      </div>
    </Form>
  );
};

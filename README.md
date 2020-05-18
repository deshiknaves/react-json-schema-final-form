# React JSON Schema Final Form

This is a React component to render a Final Form using JSON Schema.

This is highly inspired by
[react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form).

Forms are the basis of most web applications and yet, we tend to hand craft them
every time. The reason for that is that we need the flexibility of a custom
form. There is always something that we want to do differently. The idea of this
library is to leverage the performance and state management of
[https://final-form.org/react](React Final Form) but provide an abstraction in
JSON Schema.

Another goal of this library is to allow the consumer to be able to customize
their form on every level. You can have custom controls, adapters, fields, and
how decisions are made to generate the form. This library will allow you to
create your own form paradigm with a lot of the heavy lifting done for you.

# Usage

Design your form in JSON Schema and pass it into the `SchemaForm` component.

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "number"
    }
  }
}
```

```javascript
import { SchemaForm } from 'react-json-schema-final-form'
import schema from './schema.json'

export const Component = () => (
  <SchemaForm onSubmit={handleSubmit} schema={schema} />
)
```

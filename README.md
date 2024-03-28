# DATA-TABLE-BY-LORT

## DESCRIPTION

A simple solution to create and organize an interactive data table. This package has been developed by me, Lort, during my training "App developer - JavaScript React" at OpenClassrooms.
It's barely a react converted version of the well known jQuery plugin DataTables.

## INSTALLATION

As it has been developed using React 18.0.2, it's recommended to use this version of React if you want to use it.
In aim to installation, please use the following command into your terminal :

```
npm i data-table-by-lort
```

## USING

In aim to use it, please insert this code into your react component :

```javascript
import { DataTableWrapper } from "data-table-by-lort";

const MyComponent = () => {
  // ...your code here

  const columns = [
    { title: "Displayed title 1", valueName: "valueKey1" },
    { title: "Displayed title 2", valueName: "valueKey2" },
    { title: "Displayed title 3", valueName: "valueKey3" },
    // add as much columns as you need
  ];
  const data = [
    {
      id: "idnbr1",
      velueKey1: "my value",
      velueKey2: "my value",
      velueKey3: "my value",
    },
  ];

  return (
    <DataTableWrapper
      data={data} // required
      id="myId" // required
      columns={columns} // required
      customClassNames="employees-table-wrapper" // optional
      defaultDataLength="10" //optional
    />
  );
};

export default MyComponent;
```

## API

### PROPS

Component `<DataTableWrapper>` accepts 3 required props and 2 optional props.

#### Required props

- `data`: a table variable which contains a list of identically structured objects. The keys of these objects will be used to display the corresponding value.
- `id`: ID is used in aim to allow multiple data tables on the same page.
- `columns`: a table variable which contains a list of objects with keys:
  - `title`: the displayed name of your column.
  - `valueName`: the corresponding key which is found in data.

#### Optional props

- `customClassNames`: one or several classNames that will allow personalized css.
- `defaultDataLength`: the preset number of lines visible per page. Without precision, the default value is 10.

### CSS

This package comes with neutral css style. Add your own colors, font, layout... by using the `customClassNames` props.

## CONTRIBUTE

As this package has been developed as part of my training, there is no contribution expected.
However, you can contact me at lort@lort.dev.

## LICENCE

This package is under ISC licence.

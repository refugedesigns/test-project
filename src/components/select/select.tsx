import Select, { components } from "react-select";

const renderNestedOption = (props, label, nestedOptions) => {
  const { innerProps, selectOption } = props;

  return (
    <div className="nested-optgroup">
      <div
        style={{
          color: "grey",
          paddingLeft: "10px",
        }}
      >
        {label}
      </div>
      {nestedOptions.map((nestedOption, i) => {
        if (nestedOption.options && nestedOption.options.length > 0) {
          return renderNestedOption(
            props,
            nestedOption.label,
            nestedOption.options
          );
        }
        const nestedInnerProps = {
          ...innerProps,
          onClick: () => selectOption(nestedOption),
        };
        return (
          <components.Option {...props} key={i} innerProps={nestedInnerProps}>
            {nestedOption.label}
          </components.Option>
        );
      })}
    </div>
  );
};

const Option = (props) => {
  const { children, data } = props;
  const nestedOptions = data.options;
  if (nestedOptions) {
    const label = data.label;
    return renderNestedOption(props, label, nestedOptions);
  }
  return <components.Option {...props}>{children}</components.Option>;
};

export default Option

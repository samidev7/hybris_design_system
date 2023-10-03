// Styles
import Theme from "../assets/css/theme.module.css";

const theme = {
  container: {
    containerClassName: Theme.container,
  },
  button: {
    buttonClassName: Theme.buttonStyle,
    buttonDisabledClassName: Theme.buttonStyleDisabled,
  },
  inputField: {
    baseClassName: Theme.inputFieldStyle,
    errorClassName: Theme.inputFieldErrorStyle,
    successClassName: Theme.inputFieldSuccessStyle,
    errorMessageClassName: Theme.inputFieldErrorMessageStyle,
    labelClassName: Theme.inputFieldLabelStyle,
  },
  magicModal: {
    // contentClassName: Theme.magicModalContent,
    modalClassName: Theme.magicModal,
  },
  select: {
    selectClassName: Theme.selectClass,
    selectPlaceholderClassName: Theme.selectPlaceholderClass,
    selectOpenedClassName: Theme.selectOpenedClass,
    selectOptionClassName: Theme.selectOptionClass,
  },
};

export default theme;

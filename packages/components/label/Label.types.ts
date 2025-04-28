import type { JSX } from "solid-js";
import type { BaseComponentProps } from "~/types";

export interface LabelProps
  extends Omit<BaseComponentProps<HTMLLabelElement>, "required"> {
  /**
   * Renders the label as disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Displays an indicator that the label is for a required field. The required prop can be set to true to display
   * an asterisk (*). Or it can be set to a string or jsx content to display a different indicator.
   * @default false
   */
  required?: boolean | JSX.Element;

  /**
   * A label supports different sizes.
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";

  /**
   * A label supports regular and semibold fontweight.
   * @default regular
   */
  weight?: "regular" | "semibold";
}

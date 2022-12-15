import { Button } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

interface IProps {
  label: string;
}

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>;

const Template = (args: IProps) => <Button {...args} />;

export const Default: ComponentStory<typeof Button> = Template.bind({});
Default.args = {
  label: "Hello",
};

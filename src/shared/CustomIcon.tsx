import Icon from "@mdi/react";

interface Props {
  path: string;
  className?: string;
  title?: string;
  size?: number;
}

const CustomIcon = ({ path, className, title, size }: Props) => {
  return (
    <Icon
      path={path}
      className={className}
      title={title}
      size={size || 1}
      horizontal
      vertical
      rotate={180}
    />
  )
}

export default CustomIcon
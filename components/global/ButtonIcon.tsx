type ButtonIconProps = {
  iconClass: string;
  color: string;
  sizeText: string;
  className: string;
  onAction: () => void | any;
};

const ButtonIcon = ({ color, iconClass, sizeText, className, onAction }: ButtonIconProps) => {
  return (
    <button onClick={onAction} className={`flex items-center gap-x-2 ${sizeText} font-medium ${color}`}>
      <i className={`${iconClass} text-lg`}></i>
      {/* {title} */}
    </button>
  );
};

export default ButtonIcon;

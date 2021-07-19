type Props = {
  icon: any;
  active?: boolean;
};

export default function HeaderIcon(props: Props) {
  const Icon = props.icon;

  return (
    <div className="flex items-center rounded-xl cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 group">
      <Icon
        className={`h-5 group-hover:text-blue-500 text-gray-500 text-center sm:h-7 mx-auto ${
          props.active && "text-blue-500"
        }`}
      />
    </div>
  );
}

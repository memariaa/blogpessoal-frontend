interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return (
    <h1 className="text-2xl md:text-[2.5rem] font-semibold">
      {title}
    </h1>
  )
}

export default Title
interface TagProps {
  name: string;
}

function Tag({ name }: TagProps) {
  return (
    <span className="w-fit bg-blue px-3 py-2 text-[1rem] md:text-2xl font-bold md:font-normal border border-black rounded-full">
        {name}
    </span>
  )
}

export default Tag
interface HighlightedTitleProps {
  title: string;
}

function HighlightedTitle({ title }: HighlightedTitleProps) {
  return (
    <h2 className="font-highlight text-center md:text-left text-4xl md:text-5xl text-blue [-webkit-text-stroke:1px_var(--color-black)]">
        {title}
    </h2>
  )
}

export default HighlightedTitle
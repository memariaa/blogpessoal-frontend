interface ParagraphProps {
  text: string;
  center?: boolean;
}

function Paragraph({ text, center }: ParagraphProps) {
  return (
    <p className={`text-[1rem] md:text-[1.75rem] ${center ? 'text-center' : 'text-left'}`}>
      {text}
    </p>
  )
}

export default Paragraph
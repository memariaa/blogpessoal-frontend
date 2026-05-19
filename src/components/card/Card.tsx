import Tag from '../tag/Tag'
import Tape from '../tape/Tape'
import Paragraph from '../ui/paragraph/Paragraph'
import Title from '../ui/title/Title'

interface CardProps {
  tapeColor: 'beige' | 'blue';
}

function Card({ tapeColor }: CardProps) {
  return (
    <div className='relative flex flex-col gap-6 w-85 h-fit md:w-120 bg-darkbeige border border-black rounded-[50px] p-6 shadow-sm'>
        <Tape color={tapeColor} position='left-20 md:left-50' rotate={5} />

        <Tag name="Blog Pessoal" />
        <div className='flex flex-col gap-1'>
          <Title title="Entre código, design e café" />
          <Paragraph text="Um espaço para compartilhar aprendizados, projetos e tudo que venho construindo na tecnologia." />
        </div>
    </div>
  )
}

export default Card
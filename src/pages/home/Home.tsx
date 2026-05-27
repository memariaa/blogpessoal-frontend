import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"
import HighlightedTitle from "../../components/ui/highlightedtitle/HighlightedTitle"
import Paragraph from "../../components/ui/paragraph/Paragraph"

function Home() {
  return (
    <div className='flex justfy-between border-l border-r border-b border-black rounded-b-[50px] px-24 py-18'>

        <HighlightedTitle title='Entre código, design e café' />
        
        <div className='flex flex-col gap-6 items-end'>
            <Paragraph text='Um espaço para compartilhar aprendizados, projetos e tudo que venho construindo na tecnologia.'/>
            <ModalPostagem />
        </div>
    </div>
  )
}

export default Home
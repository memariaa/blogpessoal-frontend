import BeigeTape from '../../assets/images/beige-tape.png'
import BlueTape from '../../assets/images/blue-tape.png'

interface TapeProps {
  color: 'beige' | 'blue';
  position?: string;
  rotate?: number;
}

function Tape({ color, position='', rotate }: TapeProps) {
    const tapeSrc = color === 'beige' ? BeigeTape : BlueTape;
  return (
    <>
       <img src={tapeSrc}  
        alt={`${color} tape`}
        className={`absolute -top-5 opacity-90 ${position}`}
        style={{ transform: `rotate(${rotate}deg)` }}
        />
    </>
  )
}

export default Tape
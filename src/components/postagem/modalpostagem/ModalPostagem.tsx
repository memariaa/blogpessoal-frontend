import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FormPostagem from '../formpostagem/FormPostagem';
import Button from '../../ui/button/Button';
import AddMore from '../../../assets/icons/addmore.svg';

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <Button buttonType='link' variant='blue' icon={AddMore} fitWidth>
            Nova Postagem
          </Button>
        }
        modal
        contentStyle={{
          borderRadius: '1rem',
          paddingBottom: '2rem'
        }}
      >
        <FormPostagem />
      </Popup>
    </>
  );
}

export default ModalPostagem;